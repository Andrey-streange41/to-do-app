import React, { Component } from 'react';
import ms from './Cloud.module.scss';
import './Cloud.module.scss';

export default class CloudMessage extends Component {
  render() {
    return (
      <div className={ms.cloud} style={ this.props.cloudStatement?{display:`table`} : {display:`none`}}>
          <h2 className={`${ms.cloudH2} ${this.props.cloudColor}` } style={{color:this.props.cloudColor}}>
              <em style={{color:this.props.cloudColor}}>  Hello !</em>
                {this.props.message}  <span style={{color:this.props.cloudColor}}>✔️</span> 
          </h2>
      </div>
    )
  }
}
