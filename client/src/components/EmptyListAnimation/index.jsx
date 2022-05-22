import anim from './anim.module.scss';
import React, { Component } from 'react'

export default class LoadAnim extends Component {
  render() {
    return (
      <div>
          <section className={anim.loader}>
          <span ></span>
          <span ></span>
          <span ></span>
          <span ></span>
         </section>
      </div>
    )
  }
}
