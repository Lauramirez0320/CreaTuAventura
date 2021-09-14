import React, { Component } from "react";

class Button extends Component {

    render() {
        const button = <button id = "a" onClick={(this.props.handlerClick)} />


        return <div className="buttons">{button}</div>
    }
}

export default Button
