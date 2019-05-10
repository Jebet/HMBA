import React from "react";
import MediaQuery from "react-responsive";
import "./Title.css";

class SubHeading extends React.Component {
  render() {
    return (
      <MediaQuery query="(min-device-width: 1224px)">
        <div className="title-wrapper">
          <h5 className="What">What Our Students have to Say ...</h5>
        </div>
      </MediaQuery>
    );
  }
}

export default SubHeading;
