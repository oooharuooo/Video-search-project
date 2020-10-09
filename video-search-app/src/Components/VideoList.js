import React from "react";
import VideoItem from './VideoItem'

const VideoList = ({videos, onVideoSelect}) => {
    // map through the videos array to display every single video
    const renderedList = videos.map(video => {
        return <VideoItem 
                    video = {video}
                    onVideoSelect={onVideoSelect}
                    key =  {video.id.videoId}
                />
    })
    return (
        <div className = "ui relaxed divided list">
           {renderedList}
        </div>
    )
}

export default VideoList;