import { Video } from "../../utils/video"
import ReactPlayer from "react-player"
//import "./videoItemCss.css"
import { useNavigate } from "react-router-dom"
import * as videoService from "../../utils/videoService"


interface Props{
  video: Video ;
  loadVideos: ()=> void,

}

const VideoItem = ({ video, loadVideos }: Props) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    const confirmDelete = window.confirm("¿Estás seguro de que quieres eliminar este video?");
    if (confirmDelete) {
      try {
        await videoService.deleteVideo(video._id!);
        loadVideos();
      } catch (error) {
        console.error("Error al eliminar el video:", error);
      }
    }
  };

  return (
    <div className="col-md-4">
      <div className="card card-body video-card">
        <div className="d-flex justify-content-between">
        <div className="delete-container" onClick={handleDelete}>
          <span className="text-danger delete-icon">
            x
          </span>
          </div>
        </div>
        
        <div className="embed-responsive embed-responsive-16by9">
          <ReactPlayer url={video.url} width="100%" height="100%" className="react-player" />
        </div>
        <h1 className="video-title"  onClick={() => navigate(`/update/${video._id}`)}>{video.title}</h1>
        <p>{video.description}</p>
      </div>
    </div>
  );
};

export default VideoItem;