import React, { Component } from "react";
import cs from "../FocusItem/style.module.scss";

export default class FocusItem extends Component {
  constructor(props) {
    super(props);
    this.stat = {};
  }

  handleClick = (e) => {
    this.props.removeFromMyList(
      e.currentTarget.id,
      this.props.activity,
      this.props.type
    );
    const name = this.props.type;
    this.stat[name] = this.props[name] - 1;

    if (
      name !== "recreational" &&
      name !== "relaxation" &&
      name !== "social" &&
      name !== "education"
    ) {
      this.stat["athers"] = this.props.athers - 1;
    }
    this.props.updateStats(this.stat);
  };

  render() {
    return (
      <section
        id={this.props.id}
        onClick={this.handleClick}
        className={`${cs.cardContainer} ${cs.educationBack}`}
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
