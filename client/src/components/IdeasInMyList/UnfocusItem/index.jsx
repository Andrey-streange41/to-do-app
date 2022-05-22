import React, { Component } from 'react';
import cs from '../UnfocusItem/style.module.scss';

export default class UnfocusItem extends Component {
    
    handleClick=(e)=>{
            this.props.removeFromMyList(e.currentTarget.id, this.props.activity,this.props.type);
    }
  
    render() {
            return (
                <section onClick={this.handleClick} id={this.props.id}  className={cs.cardContainer}>
                    <p className={cs.describe}>{this.props.activity}</p>
                </section>
            )
  }
}