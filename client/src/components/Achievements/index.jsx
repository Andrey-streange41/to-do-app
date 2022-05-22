import React, { Component } from "react";
import AchivItem from "./AchivItem";
import ms from "./style.module.scss";


export default class Achivements extends Component {
  constructor(props) {
    super(props);
    this.listData = this.props.ideasList;
  }

  render() {
    return (
      <div className={ms.container}>
        
        
        <section className={ms.achivesContainer}>
          <h2 className={ms.myH2}>Achivements</h2>
            <AchivItem
            amount={this.props.recreational}
            typesUpdate={this.props.typesUpdate}
            data={this.props.ideasList}
            type={"recreational"}
            /> 
           <AchivItem
            amount={this.props.athers}
            typesUpdate={this.props.typesUpdate}
            data={this.props.ideasList}
            type={"athers"}
          />
          <AchivItem
            amount={this.props.social}
            typesUpdate={this.props.typesUpdate}
            data={this.props.ideasList}
            type={"social"}
          />
          <AchivItem
            amount={this.props.education}
            typesUpdate={this.props.typesUpdate}
            data={this.props.ideasList}
            type={"education"}
          />
          <AchivItem
            amount={this.props.relaxation}
            typesUpdate={this.props.typesUpdate}
            data={this.props.ideasList}
            type={"relaxation"}
          />
        </section>
      </div>
    );
  }
}
