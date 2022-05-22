import React, { Component } from "react";
import IdeasCard from "./IdeasCard";
import ChoseIdeasStyles from "../ChoseIdeas/ChoseIdeas.module.scss";

export default class ChoseIdeas extends Component {
  
  render() {
    const currentDate = new Date();
    const date = `${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`;
    if (this.props.cardList !== undefined) {
      const listIdeasCard = [];
      for (let i = 0; i < this.props.cardList.length; i++) {
        listIdeasCard.push(
          <IdeasCard
            activeCloud={this.props.activeCloud}
            relaxation={this.props.relaxation}
            athers={this.props.athers}
            education={this.props.education}
            social={this.props.social}
            recreational={this.props.recreational}
            updateStats={this.props.updateStats}
            addToMyList={this.props.addToMyList}
            data={this.props.cardList}
            key={i}
            uniqKey={i}
          />
        );
      }
      return (
        <div className={ChoseIdeasStyles.container}>
          
          <h1 className={ChoseIdeasStyles.freshDate}>Fresh tasks on {date} </h1>
          <section className={ChoseIdeasStyles.listIdeas}>
            <h2 className={ChoseIdeasStyles.myH2}>Chose fresh ideas to do </h2>
            {listIdeasCard}
          </section>
        </div>
      );
    }
  }
}
