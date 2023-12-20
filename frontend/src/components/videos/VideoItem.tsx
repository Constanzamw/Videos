import { Video } from "../../utils/video"
import ReactPlayer from "react-player"
import "./videoItem.css"
import { useNavigate } from "react-router-dom"

interface Props{
  video: Video
}


const VideoItem = ({video}: Props) => {

  const navigate = useNavigate()
  
  return (
    <div className="col-md-4">   
     <div 
        className="card card-body video-card" 
        onClick={()=> navigate(`/update/${video._id}`) }
     >
       <div className="d-flex justify-content-between">
         <h1> {video.title} </h1>
          <span className="text-danger">
              x
          </span>
        </div>
          <p> {video.description}</p>
            <div className="embed-responsive embed-responsive-16by9">
             <ReactPlayer  
                url={video.url}
                width="100%" 
                height="100%" 
                className="react-player" />
            </div>
      </div>
    </div>
  )
}

export default VideoItem
