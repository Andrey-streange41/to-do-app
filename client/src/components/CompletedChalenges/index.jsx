import React, { Component } from "react";
import TableRow from "./TableRow";
import ms from "./style.module.scss";
import TableLoad from "./TableLoad/index";
import TableUI from "../TableUI/index";

export default class CompletedChalenges extends Component {
  render() {
    const formatBuffer = [];
    if (this.props.table) {
      for (let i = 0; i < this.props.table.length; i++) {
        formatBuffer.push(
          <TableRow
            id={i}
            key={i}
            title={this.props.table[i].Title}
            type={this.props.table[i].Type}
            when={this.props.table[i].When}
          />
        );
      }
    } else {
      formatBuffer.push(
        <TableRow
          id={0}
          key={0}
          title={"server error ..."}
          type={"server error ..."}
          when={"server error ..."}
        />
      );

      formatBuffer.push(<TableLoad />);
    }

    return (
      <div className={ms.container}>
        <h2 className={ms.myH2}>Completed chalanges</h2>

        <div className={ms.myTable}>
          <section className={ms.tableHad}>
            <h3 className={ms.headerItem}>Amount</h3>
            <h3 className={ms.headerItem}>Title</h3>
            <h3 className={ms.headerItem}>Type</h3>
            <h3 className={ms.headerItem}>When</h3>
          </section>
          <section>{formatBuffer ? formatBuffer : null}</section>
        </div>

        <h2>
          table Interface
        </h2>

        <TableUI
          notify={this.props.notify}
          cloudActive={this.props.cloudActive}
        />
      </div>
    );
  }
}
