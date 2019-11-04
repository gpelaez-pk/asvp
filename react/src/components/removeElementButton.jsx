import React, { Component } from "react";

class RemoveElementButton extends Component {
  render() {
    const { label, elementId, onRemoveElement } = this.props;

    return (
      <button
        className="btn btn-danger m-2"
        onClick={() => onRemoveElement(elementId)}
      >
        -{label}
      </button>
    );
  }
}

export default RemoveElementButton;
