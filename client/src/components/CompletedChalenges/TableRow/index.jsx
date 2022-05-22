import React, { Component } from "react";
import ms from "./style.module.scss";

export default class TableRow extends Component {
  render() {
    return (
      <div className={ms.row}>
        <span className={ms.tableData}>{this.props.id + 1}</span>
        <span className={ms.tableData}>{this.props.title }</span>
        <span className={ms.tableData}><span>{this.props.type}</span>{this.props.type === "recreational"
                ? "🎭"
                : this.props.type === "relaxation"
                ? "🪁"
                : this.props.type === "education"
                ? "👨‍🎓"
                : this.props.type === "social"
                ? "🧶"
                : "🎲"}</span>
        <span className={ms.tableData}> {this.props.when} </span>
      </div>
    );
  }
}
