import React, { Component } from "react";
import VideoDetail from "./VideoDetail";
import VideosList from "./VideosList";
import About from "../About/about";
import Video from "./Video";


class VideoModule extends Component {
  render() {
    return (
      <div className="grid">
        <div className="row">
          <div className="wide-column">
            <Video selectedVideo={this.props.appState.selectedVideo} />
          </div>
          <About />
          <div className="">
            <VideosList
              videos={this.props.appState.videos}
              onVideoSelect={this.props.onVideoSelect}
            />
          </div>
          <div className="wide-column">
            <VideoDetail selectedVideo={this.props.appState.selectedVideo} />
          </div>
        </div>
      </div>
    );
  }
}

export default VideoModule;
