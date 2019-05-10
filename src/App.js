import React, { Component } from "react";
import Toolbar from "./components/Toolbar/toolbar";
import SubHeading from "./components/Title/Title";
import Youtube from "./api/youtube";
import VideoModule from "./components/Videos/VideoModule";
// import SearchBar from './components/Videos/SearchBar'
import DetailedItem from "./components/Videos/DetailedItem";
import "./App.css";

class App extends Component {
  //* App state
  state = {
    videos: [],
    selectedVideo: null
  };

  //* Set default search term
  componentDidMount() {
    this.onTermSubmit("cats");
  }

  //* User enters a search term
  onTermSubmit = async term => {
    const response = await Youtube.get("/search", {
      params: {
        q: term
      }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  //[(Callback)] User selected video
  onVideoSelect = video => {
    this.setState({
      selectedVideo: video
    });
  };

  render() {
    return (
      <div className="container">
        <div>
          <Toolbar />
          {/* <SearchBar onTermSubmit={this.onTermSubmit} /> */}

          <VideoModule
            appState={this.state}
            onVideoSelect={this.onVideoSelect}
          />
          <SubHeading />
          <DetailedItem />
        </div>
      </div>
    );
  }
}

export default App;
