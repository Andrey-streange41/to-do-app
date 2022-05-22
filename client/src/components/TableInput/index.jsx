import React, { Component } from "react";
import ms from '../TableInput/styleInput.module.scss';

export default class TableInput extends Component {
  render() {
    return (
      <div className={ms.inputContainer}>
        <label className={ms.myLabel} >
          {this.props.textContent}
          <input
            className={ms.myInput}
            onChange={this.props.handleChange}
            name={this.props.name}
            type="text"
            placeholder={this.props.placeholder}
          />
        </label>
      </div>
    );
  }
}
