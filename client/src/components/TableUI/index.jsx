import React, { Component } from "react";
import TableInput from "../TableInput";
import ms from "./tableUIStyle.module.scss";
import {
  addNewRowInTable,
  removeRowFromTable,
  updateRowInTable
} from "../../actions/sendDataOnRemoteServer";

export default class TableUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      type: "",
      when: "",
      recordId: "",
    };
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState((s) => {
      return { ...s, [name]: value };
    });
  };

  onAdd = async (e) => {
    if (
      this.state.title === "" ||
      this.state.type === "" ||
      this.state.when === ""
    ) {
      this.props.cloudActive("Fields can't be empty !", "yellow");
    } else {
      await addNewRowInTable(
        this.state.title,
        this.state.type,
        this.state.when
      );
      this.props.cloudActive("Task was added in database !", "greenyellow");
      this.props.notify();
    }
  };

  onUpdate = async() =>{
    if (
      this.state.title === "" ||
      this.state.type === "" ||
      this.state.when === "" ||
      this.state.recordId === ""
    ) {
      this.props.cloudActive("Fields can't be empty !", "yellow");
    } else {
      await updateRowInTable(
        this.state.title,
        this.state.type,
        this.state.when,
        this.state.recordId
      );
      this.props.cloudActive("Task was added in database !", "greenyellow");
      this.props.notify();
    }
  }

  deleteRow = async () => {
    const responce = await removeRowFromTable(this.state.recordId);
    if (responce === 500) {
      this.props.cloudActive("Task id not found !", "red");
    } else {
      this.props.notify();
      this.props.cloudActive("Task was deleted !", "greenyellow");
    }
  };
  render() {
    return (
      <form className={ms.tableUI}>
        <div className={ms.buttonsUISection}>
          <section className={ms.addSection}>
            <input
              onClick={this.onAdd}
              className={`${ms.formButton} ${ms.addButton}`}
              type="button"
              value="upload"
            />
            <section className={ms.tableInputs}>
              <TableInput
                textContent={"Title"}
                handleChange={this.handleChange}
                name={"title"}
                placeholder={"Title"}
              />
              <TableInput
                textContent={"Type"}
                handleChange={this.handleChange}
                name={"type"}
                placeholder={"Type"}
              />
              <TableInput
                textContent={"When"}
                handleChange={this.handleChange}
                name={"when"}
                placeholder={"When"}
              />
            </section>
          </section>
          <section className={ms.deleteSection}>
            <input
              type="button"
              value={"delete"}
              onClick={this.deleteRow}
              className={`${ms.formButton} ${ms.removeButton}`}
            />
            <section className={ms.tableInputs}>
              <TableInput
                textContent={"ID"}
                handleChange={this.handleChange}
                name={"recordId"}
                placeholder={"Id"}
              />
            </section>
          </section>
          <section className={ms.uppdateSection}>
            <input
              value={"update"}
              type="button"
              onClick={this.onUpdate}
              className={`${ms.formButton} ${ms.updateButton}`}
            />
            <section className={ms.tableInputs}>
              <TableInput
                textContent={"ID"}
                handleChange={this.handleChange}
                name={"recordId"}
                placeholder={"Id"}
              />
              <TableInput
                textContent={"Title"}
                handleChange={this.handleChange}
                name={"title"}
                placeholder={"New title"}
              />
              <TableInput
                textContent={"Type"}
                handleChange={this.handleChange}
                name={"type"}
                placeholder={"New type"}
              />
              <TableInput
                textContent={"When"}
                handleChange={this.handleChange}
                name={"when"}
                placeholder={"New time"}
              />
            </section>
          </section>
        </div>
      </form>
    );
  }
}
