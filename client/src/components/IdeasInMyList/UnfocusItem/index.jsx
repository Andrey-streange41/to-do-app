import React, { Component } from 'react';
import cs from '../UnfocusItem/style.module.scss';

export default class UnfocusItem extends Component {
    constructor(props){
        super(props);

                    
    }
  
    render() {
            return (
                <section  className={cs.cardContainer}>
                    <p className={cs.describe}>{this.props.activity}</p>
                </section>
            )
  }
}