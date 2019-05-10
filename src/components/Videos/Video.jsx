import React from "react";
import "./Video.css";

const VideoDetail = ({ selectedVideo }) => {
  if (!selectedVideo) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;

  const { description } = selectedVideo.snippet;

  return (
    <div>
      <div className="video-container">
        <div className="video-box">
          <iframe
            title={description}
            src={videoSrc}
            frameBorder="0"
            className="iframe"
            style={{ float: "right", position: "relative" }}
          />
        </div>

        <div className="learn">
          <h1 className="title2">
            <u>Let's learn.</u>
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book.
          </p>

          <button className="photo">TAKE A PHOTO</button>
        </div>
      </div>
      <div className="border" />

      <div className="course">
        <div className="course-item-1">
          <i class="fas fa-user-graduate fa-2x" />
          <h5 className="courseName">Learning Hustling</h5>
          <h5 className="courseTip">Tips about succesful hustles</h5>
        </div>
        <div className="course-item-2">
          <i class="fas fa-user-graduate fa-2x" />
          <h5 className="courseName">Learning Hustling</h5>
          <h5 className="courseTip">Tips about succesful hustles</h5>
        </div>
        <div className="course-item-3">
          <i class="fas fa-user-graduate fa-2x" />
          <h5 className="courseName">Learning Hustling</h5>
          <h5 className="courseTip">Tips about succesful hustles</h5>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
