import React, { Component } from "react";
import Options from "./Options";
import Record from "./Record";

class Story extends Component {
  render() {
    return (
      <>
        <div className="stylesApp">
          <div className="layout">
            <div className="story">
              <h1 className="storyText">{this.props.text}</h1>
            </div>

            <div>
              <Options
                textLine={this.props.textLine}
                textButton={this.props.textButton}
              />
            </div>

            <div>
              <Record />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Story;
