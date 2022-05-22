import React, { Component } from "react";
import cs from "../IdeasCard/IdeasCard.module.scss";

export default class IdeasCard extends Component {
  constructor(props) {
    super(props);
    this.key = this.props.uniqKey;
    this.state = {
      recreational: this.props.recreational,
      social: this.props.social,
      education: this.props.education,
      athers: this.props.athers,
      relaxation: this.props.relaxation,
    };
    this.stat = {};
    this.type = this.props.data[this.key].type;
    this.title = this.props.data[this.key].activity;
  }

  handleClick = (e) => {
    e.currentTarget.className = `${cs.displayNone} `;
    const name = this.props.data[this.key].type;
    this.props.activeCloud("task was added !","greenyellow");
    this.stat[name] = this.props[name] + 1;
    this.setState((state) => {
      return { ...state, [name]: this.state.name + 1 };
    });

    if (
      name !== "recreational" &&
      name !== "relaxation" &&
      name !== "social" &&
      name !== "education"
    ) {
      this.stat["athers"] = this.props.athers + 1;
      this.setState((state) => {
        return { ...state, athers: this.state.athers + 1 };
      });
    }
    this.props.updateStats(this.stat);
    this.props.addToMyList({ data: this.props.data[this.key], unKey: this.key });
  };

  render() {
    if (this.props.data !== undefined) {
      return (
        <section
          onMouseDown={this.handleClick}
          className={`${cs.cardContainer} ${cs.educationBack}`}
        >
          <p className={cs.describe}>{this.props.data[this.key].activity}</p>
          <section className={cs.myBorder}></section>
          <p className={cs.type}>
            {this.props.data[this.key].type}
            <span>
              {" "}
              {this.type === "recreational"
                ? "🎭"
                : this.type === "relaxation"
                ? "🪁"
                : this.type === "education"
                ? "👨‍🎓"
                : this.type === "social"
                ? "🧶"
                : "🎲"}{" "}
            </span>
          </p>
        </section>
      );
    }
  }
}
