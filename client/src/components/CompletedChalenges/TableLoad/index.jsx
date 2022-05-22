import React, { Component } from 'react';
import ms from './style.module.css'; 

export default class TableLoad extends Component {
  render() {
    return (
      <div className={ms.content}>
          <div class = {ms.centered}>
                <div class = {ms.blob_1}></div>
                <div class = {ms.blob_2}></div>
            </div>
      </div>
    )
  }
}
