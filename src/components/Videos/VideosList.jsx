import React from "react";
import VideoItem from "./VideoItem";
import "./VideoItem.css";

const VideosList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video, idx) => {
    return (
      <VideoItem
        key={idx}
        video={video}
        onVideoSelect={onVideoSelect}
        className="video-item"
      />
    );
  });

  return <div />;
  // <div className="ui-relaxed-divided-list">{renderedList}</div>
};

export default VideosList;
