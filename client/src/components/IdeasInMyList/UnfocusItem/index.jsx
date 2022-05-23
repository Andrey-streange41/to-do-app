import React, { Component } from "react";
import cs from "../UnfocusItem/style.module.scss";

export default class UnfocusItem extends Component {
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
        onClick={this.handleClick}
        id={this.props.id}
        className={cs.cardContainer}
      >
        <p className={cs.describe}>{this.props.activity}</p>
      </section>
    );
  }
}
