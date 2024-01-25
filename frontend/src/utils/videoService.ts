import axios from "axios"
import { Video } from "./video"

const urlBase = "https://videos-beige-alpha.vercel.app/"

export const getVideos = async () =>{
    return await axios.get<Video[]>(`${urlBase}/videos`)
    
}

export const createVideo = async (video: Video) =>{
    return await axios.post(`${urlBase}/videos`, video)
    
}

export const getVideo = async (id:string) =>{
    return await axios.get<Video>(`${urlBase}/videos/${id}`)
    
}

export const updateVideo = async (id:string , video: Video) =>{
    return await axios.put<Video>(`${urlBase}/videos/${id}`, video)
    
}

export const deleteVideo = async (id:string ) =>{
    return await axios.delete<Video>(`${urlBase}/videos/${id}`)
    
}