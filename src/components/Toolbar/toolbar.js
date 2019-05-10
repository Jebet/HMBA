import React, { Component } from "react";
import MediaQuery from "react-responsive";
import logo from "../../assets/Logo/logo.png";
import "./Toolbar.css";

export class toolbar extends Component {
  render() {
    return (
      <MediaQuery query="(min-device-width: 1224px)">
        <header className="Toolbar">
          <div className="toolbar-logo">
            <a href="/home">
              <img src={logo} className="logoImage" alt="shujaaz" />
            </a>
          </div>
          <div
            style={{
              padding: "10px"
            }}
          >
            <button
              style={{
                backgroundColor: "white",
                padding: "8px",
                color: "#ca233a",
                fontWeight: "bold",
                border: "solid white 1px",
                marginRight: "30px",
                width: "80px"
              }}
            >
              SignUp
            </button>
            <button
              style={{
                backgroundColor: "white",
                padding: "8px",
                color: "#ca233a",
                fontWeight: "bold",
                border: "solid white 1px",
                marginRight: "75px",
                width: "80px",
                bottom: "1px",
                position: "relative"
              }}
            >
              SignIn
            </button>
            <i class="far fa-user-circle fa-2x" id="toolbar-icon" />
          </div>
        </header>
      </MediaQuery>
    );
  }
}

export default toolbar;
