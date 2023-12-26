import { ChangeEvent, FormEvent, useState, useEffect  } from "react"
import { Video } from "../../utils/video"
import * as videoService from "../../utils/videoService"
import {toast} from "react-toastify"
import { useNavigate, useParams } from 'react-router-dom';
import "./VideoForm.css"


type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement >;  // en vez de hacer todo dentro del () lo hace aca

type Params = {
  [K in string]: string | undefined;
};


const VideoForm = () => {

  const navigate = useNavigate();
  const params = useParams<Params>();

  const initialState={
    title:"", 
    description:"",   
    url:""
  }


  const [video, setVideo] = useState<Video>(initialState)

  const handleInputChange = (e:InputChange)=>{
    setVideo({...video, [e.target.name]:e.target.value})
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
        if (!params.id) {
            await videoService.createVideo(video);
            toast.success("Video added successfully");
            setVideo(initialState);
        } else {
            await videoService.updateVideo(params.id, video);
            toast.success("Video updated successfully");
        }
        navigate('/');
    } catch (error) {
        console.error("Error:", error);
        toast.error("Error occurred. Please try again.");
    }
}

    // const getVideo = async (id: string) => {
    //   const res = await videoService.getVideo(id)
    //   const { title, description, url} = res.data;
    //   setVideo({title,description,url})
    // }

    useEffect(() => {
      if (params.id && Object.keys(video).every(key => video[key as keyof Video])) {
        // Si hay un ID y ya se cargó el video, no es necesario volver a cargarlo
        return;
      }
      const fetchVideo = async () => {
          if (params.id) {
              try {
                  const res = await videoService.getVideo(params.id);
                  const { title, description, url } = res.data;
                  setVideo({ title, description, url });
              } catch (error) {
                  console.error("Error fetching video:", error);
              }
          }
      };
  
      fetchVideo();
  }, [params.id]);

  return (
    <div className="row">
    <div className="col-md-4 offset-md-4">
      <div className="card">
        <div className="card-body">
          <h3>{params.id ? "Edit video" : "New video"}</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="title"
                placeholder="Video title"
                className="form-control"
                autoFocus
                onChange={handleInputChange}
                value={video.title}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="url"
                placeholder="https://www.youtube.com"
                className="form-control"
                onChange={handleInputChange}
                value={video.url}
              />
            </div>
            <div className="form-group">
              <textarea
                name="description"
                rows={3}
                className="form-control"
                placeholder="Write a description"
                onChange={handleInputChange}
                value={video.description}
              />
            </div>
            {params.id ? (
              <button className="btn btn-info">Update video</button>
            ) : (
              <button className="btn btn-primary">Create video</button>
            )}
          </form>
        </div>
      </div>
    </div>
  </div>
);
};

export default VideoForm;
