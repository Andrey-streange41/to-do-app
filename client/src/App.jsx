import React from "react";
import ChoseIdeas from "./components/ChoseIdeas";
import IdeasInMyList from "./components/IdeasInMyList";
import "../src/Styles/reset.css";
import appStyles from "./Styles/App.module.scss";
import Achivements from "./components/Achievements";
import CompletedChalenges from "./components/CompletedChalenges";
import { sendDataOnRemoteServer } from "./actions/sendDataOnRemoteServer.js";
import CloudMessage from "./components/CloudMessage";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      focusItem: 0,
      cardList: [],
      amountIdeas: 8,
      ideasList: [],
      achivementsList: [],
      completedChalenges: [],
      currentSlide: 1,
      social: 0,
      education: 0,
      athers: 0,
      relaxation: 0,
      recreational: 0,
      table: [],
      cloudStatement: false,
      timerId: null,
      cloudMessage: "",
      cloudColor: "greenyellow"
    };
  }

  getData = async () => {
    const buffer = [];
    for (let i = 0; i < this.state.amountIdeas; i++) {
      const element = await (
        await fetch("https://www.boredapi.com/api/activity")
      ).json();
      buffer.push(element);
    }

    this.setState((state) => {
      return { ...state, cardList: buffer };
    });

    const dataFromDB = await sendDataOnRemoteServer();

    this.setState((state) => {
      return { ...state, table: dataFromDB ? dataFromDB : null };
    });
  };

  componentDidMount() {
    this.getData();

    this.setState((s) => {
      return {
        ...s,
        timerId: setInterval(() => {
          if (this.state.cloudStatement) {
            this.setState((s) => {
              return { ...s, cloudStatement: !this.state.cloudStatement };
            });
          }
        }, 4000),
      };
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.timerId);
  }

  addToMyList = (item) => {
    const buffer = this.state.ideasList;
    buffer.push(item);
    this.setState((state) => {
      return { ...state, ideasList: buffer };
    });
  };

  dataChanges = (data) => {
    this.setState((state) => {
      return { ...state, focusItem: data };
    });
  };

  typesUpdate = (data) => {
    this.setState((state) => {
      return { ...state, ...data };
    });
  };

  activeCloud = (message,color) => {
    this.setState((s) => {
      return { ...s, cloudStatement: !this.state.cloudStatement };
    });
    this.setState((s)=>{return{...s,cloudMessage:message,cloudColor:color}})
  };

  render() {
    if (this.state.cardList.length !== 0) {
      return (
        <div className={appStyles.app}>
          <h1> To Do Application </h1>
          <CloudMessage cloudColor={this.state.cloudColor} message={this.state.cloudMessage} cloudStatement={this.state.cloudStatement} />
          <ChoseIdeas
            activeCloud={this.activeCloud}
            social={this.state.social}
            education={this.state.education}
            athers={this.state.athers}
            relaxation={this.state.relaxation}
            recreational={this.state.recreational}
            updateStats={this.typesUpdate}
            removeFromMyList={this.removeFromMyList}
            addToMyList={this.addToMyList}
            cardList={this.state.cardList}
          />

          <IdeasInMyList
            currentSlide={this.state.currentSlide}
            focusItem={this.state.focusItem}
            notifyParent={this.dataChanges}
            ideasList={this.state.ideasList}
          />

          <Achivements
            social={this.state.social}
            education={this.state.education}
            athers={this.state.athers}
            relaxation={this.state.relaxation}
            recreational={this.state.recreational}
            typesUpdate={this.typesUpdate}
            ideasList={this.state.ideasList}
          />

          <CompletedChalenges cloudActive={this.activeCloud}  notify={this.getData} table={this.state.table} />
        </div>
      );
    }

    return <div className="App"></div>;
  }
}

export default App;
