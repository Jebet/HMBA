import React from "react";
import MediaQuery from "react-responsive";
import "./VideoDetail.css";

const VideoDetail = ({ selectedVideo }) => {
  if (!selectedVideo) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId} `;

  const { description, title } = selectedVideo.snippet;

  return (
    <MediaQuery query="(min-device-width: 1224px)">
      <div className="video-Wrapper ">
        <div className="video-box">
        <MediaQuery minDeviceWidth={1224} values={{ deviceWidth: 1600 }}>
          <iframe
            src={videoSrc}
            frameBorder="0"
            className="iframe-2"
            autoplay="1"
          />
          </MediaQuery>
        </div>
        <div className="ui segment">
          <h5 className="SampleVideos">Sample Videos - Click here to Watch</h5>

          <div className="image_Container">
            <div className="image-1">
              <i class="fas fa-play-circle fa-1px" />
              <h6 className="video_content-1">
                01 - Kusign Up ni easy, checki tour
              </h6>
            </div>
          </div>

          <br />
          <div className="image_Container">
            <div className="image-1">
              <i class="fas fa-play-circle fa-1px" />
              <h6 className="video_content-1">02 - Cheki hustlers wetu</h6>
            </div>
          </div>

          <br />

          <div className="image_Container">
            <div className="image-1">
              <i class="fas fa-play-circle fa-1px" />
              <h6 className="video_content-1">03 - Take course yet</h6>
            </div>
          </div>
        </div>
      </div>
    </MediaQuery>
  );
};

export default VideoDetail;
