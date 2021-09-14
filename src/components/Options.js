import React, { Component } from "react";
//import Button from "./Button";

class Options extends Component {

  render() {
    return (
      <>
        <div className="options">
          <div className="option">
            <button className="buttons" id = "a" onClick={(this.props.onSelectButton)}> {this.props.textLine[this.props.index].opciones.a} </button>
            
          </div>
        </div>

        <div className="options">
          <div className="option">
            <button className="buttons" id="b" onClick={(this.props.onSelectButton)}>{this.props.textLine[this.props.index].opciones.b}</button>

          </div>
        </div>

        {/* <div className="options">
          <div className="option">
            <button className="buttons" id = "b" onClick={(this.props.onSelectButton)}> B </button>
            <h2>{this.props.textLine[this.props.index].opciones.b}</h2>
          </div>
        </div> */}
        {/* <div className="options">
          <div className="option">
            <Button handlerClick={this.handlerClick} />
            <h1>{this.props.opciones.b}</h1>
          </div>
        </div> */}
      </>
    );
  }
}

export default Options;
