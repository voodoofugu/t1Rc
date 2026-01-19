import React, { Component } from "react";

export default class LoadingProgress extends Component {
  render() {
    return (
      <div className="preloader">
        <div className="blend-55" />
        <div className="cssloader">
          <div className="cssload-stain">
            <div className="cssload-circle" />
            <div className="cssload-circle" />
            <div className="cssload-circle" />
            <div className="cssload-circle" />
            <div className="cssload-circle" />
          </div>
          <div className="cssload-text">Loading...</div>
        </div>
      </div>
    );
  }
}
