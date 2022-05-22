import React, { Component } from 'react';
import ms from './style.module.scss';
const css =
					`	@-webkit-keyframes bounce {
							0% {
								-webkit-box-shadow: 0px 2px 5px 0px rgba(0,0,0,.5);
							}
							100% {
								-webkit-box-shadow: 0px 65px 20px -35px rgba(0,0,0,.3);
								top: -50px;
							}
						}
						.bouncer {
							-webkit-animation-name: bounce;
							-webkit-animation-duration: .5s;
							-webkit-animation-iteration-count: infinite;
							-webkit-animation-direction: alternate;
							-webkit-animation-timing-function: ease-out;
						}`;

export default class AchivItem extends Component {
  constructor(props){
    super(props);
      this.type = this.props.type;
      
     
  }
  render() {
    

    return (

      <section className={ms.show}>
      <li className={"bouncer"} >
        <h2>
          <em>{this.props.amount}</em>
          {this.props.type}
        </h2>
        <style type='text/css' media='screen'>
        {css}
        </style>
      </li>
  </section>


      // <section className={ms.container}>
      //   <div className={ms.ball}>
      //       <span className={ms.amount}>{this.props.amount}</span>
      //   </div> 
      //   <h5 className={ms.myH2}>{this.props.type}</h5>
      // </section>
      
    )
  }
}
