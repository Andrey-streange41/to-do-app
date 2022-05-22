import React, { Component } from "react";
import cs from "../FocusItem/style.module.scss";

export default class FocusItem extends Component {
  render() {
    return (
      <section
        className={
          `${cs.cardContainer} ${cs.educationBack}` 
        }
      >
        <p className={cs.describe}>{this.props.activity}</p>
        <section className={cs.myBorder}></section>
        <p className={cs.type}>
          {this.props.type}{" "}
          {this.props.type === "recreational"
            ? "🎭"
            : this.props.type === "relaxation"
            ? "🪁"
            : this.props.type === "education"
            ? "👨‍🎓"
            : this.props.type === "social"
            ? "🧶"
            : "🎲"}
        </p>
      </section>
    );
  }
}
