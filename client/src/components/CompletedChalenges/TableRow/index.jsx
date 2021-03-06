import React, { Component } from "react";
import ms from "./style.module.scss";

export default class TableRow extends Component {
  render() {
    return (
      <div className={ms.row}>
        <span className={ms.tableData}>{this.props.id + 1}</span>
        <span className={ms.tableData}>{this.props.title }</span>
        <span className={ms.tableData}><span>{this.props.type}</span>{this.props.type === "recreational"
                ? "๐ญ"
                : this.props.type === "relaxation"
                ? "๐ช"
                : this.props.type === "education"
                ? "๐จโ๐"
                : this.props.type === "social"
                ? "๐งถ"
                : "๐ฒ"}</span>
        <span className={ms.tableData}> {this.props.when} </span>
      </div>
    );
  }
}
