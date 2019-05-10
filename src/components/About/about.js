import React, { Component } from "react";
import MediaQuery from "react-responsive";
import "./about.css";

export class about extends Component {
  render() {
    return (
      <MediaQuery query="(min-device-width: 1224px)">
        <div className="item-list ">
          <div className="item-card">
            <div className="details">
              <h1 className="title">
                <u>About HMBA</u>
              </h1>
              <p className="tagline">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.{" "}
              </p>
            </div>
          </div>
        </div>
      </MediaQuery>
    );
  }
}

export default about;
