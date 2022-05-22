import React, { Component } from "react";
import ms from "./MyList.module.scss";
import FocusItem from "./FocusItem";
import UnfocusItem from "./UnfocusItem";
import EmtyListAnimation from '../EmptyListAnimation/index';

export default class IdeasInMyList extends Component {
  constructor(props) {
    super(props);
    this.buffer = [];
    this.showTrio = [];
    this.state = {
      focusItem: this.props.focusItem,
      currentSlide: this.props.currentSlide,
    };
  }

  changeFocus = (e) => {
    if (this.buffer.length > 1) {
      const maxItem = this.buffer.length - 2;
      this.setState((state) => {
        const newState =
          e.target.id === "next"
            ? Math.min(this.state.focusItem + 1, maxItem)
            : Math.max(this.state.focusItem - 1, -1);
        this.props.notifyParent(newState);
        return {
          ...state,
          focusItem: newState,
          currentSlide:
            e.target.id === "next"
              ? Math.min(this.state.currentSlide + 1, this.buffer.length)
              : Math.max(this.state.currentSlide - 1, 1),
        };
      });
    }
  };

  render() {
    this.buffer = [];
    if (this.props.ideasList.length > 0) {
      
      for (let i = 0; i < this.props.ideasList.length; i++) {
        const element = (
          <UnfocusItem
            removeFromMyList={this.props.removeFromMyList}
            id={this.props.ideasList[i].data.key }
            key={Math.random().toString(36).substring(4,9)}
            activity={this.props.ideasList[i].data.activity}
            type={this.props.ideasList[i].data.type}
          />
        );
        this.buffer.push(element);
      }

      this.showTrio = [];
      const len = this.buffer.length < 3 ? this.buffer.length : 3;
      for (let i = this.state.focusItem; i - this.state.focusItem < len; i++) {
        if (i - this.state.focusItem === 1) {
          const element = (
            <FocusItem
              list={this.props.ideasList}
              removeFromMyList={this.props.removeFromMyList}
              id={this.props.ideasList[i].data.key}
              key={Math.random().toString(36).substring(4,9)}
              type={this.props.ideasList[i].data.type}
              activity={this.props.ideasList[i].data.activity}
            />
          );
          this.showTrio.push(element);
          continue;
        }
        if (this.buffer.length === 1) {
          const element = (
            <FocusItem
              removeFromMyList={this.props.removeFromMyList}
              id={this.props.ideasList[i].data.key}
              key={Math.random().toString(36).substring(4,9)}
              type={this.props.ideasList[i].data.type}
              activity={this.props.ideasList[i].data.activity}
            />
          );
          this.showTrio.push(element);
          continue;
        }
        const element = this.buffer[i];
        this.showTrio.push(element);
      }

      this.currentSlide = this.state.focusItem;

      return (
        <div className={ms.container}>
          <h2 className={ms.myH2}>Ideas in my list</h2>
          <section className={ms.content}>
            <svg
              id="empty"
              onClick={this.changeFocus}
              className={ms.arrowLeft}
              viewBox="0 0 24 24"
            >
              <path fill="currentColor" d="M14,7L9,12L14,17V7Z" />
            </svg>
            <section className={ms.listItemContainer}>
              {this.showTrio ? this.showTrio : null}
            </section>

            <svg
              id="next"
              onClick={this.changeFocus}
              className={ms.arrowRight}
              viewBox="0 0 24 24"
            >
              <path id="next" fill="currentColor" d="M10,17L15,12L10,7V17Z" />
            </svg>
          </section>
          <section>
            <span>{this.state.currentSlide}/</span>
            <span>{this.buffer.length}</span>
          </section>
        </div>
      );
    } else {
      return (
        <div>
        <div className={ms.container}>
          <h2 className={ms.myH2}>Ideas in my list</h2>
          <section>
            <EmtyListAnimation />
          </section>
        </div>
        </div>
      );
    }
  }
}
