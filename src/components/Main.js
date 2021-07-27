import React, { Component } from "react";
//Form
import { FaPlus } from "react-icons/fa";

// tarefas
import { FaEdit, FaWindowClose } from "react-icons/fa";

import "./Main.css";
export default class Main extends Component {
  // constructor(props){
  //     super(props);

  //     this.state={

  //         novaTarefa: '',
  //     }
  //     this.inputMudou = this.inputMudou.bind(this);
  // }
  // inputMudou(e){
  //     this.setState({
  //         novaTarefa: e.target.value,
  //     });
  // }

  state = {
    novaTarefa: "",
    tarefas: [],
  };

  HandleSubmit = (e) => {
    e.preventDefault();
    const { tarefas } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();

    if (tarefas.indexOf(novaTarefa) !== -1) return;
    const novaTarefas = [...tarefas];
    this.setState({
      tarefas: [...novaTarefas, novaTarefa],
    });
  };

  HandleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };
  HandleEdit = (e, index) => {
    console.log("edit", index)
  };

  HandleDelete = (e, index) => {
    const { tarefas} = this.state;
    const novaTarefas = [...tarefas];
    novaTarefas.splice(index,1)
    this.setState({
      tarefas: [...novaTarefas],
    });
  };

  render() {
    const { novaTarefa, tarefas } = this.state;
    return (
      <div className="main">
        <h1> Lista de Tarefas</h1>

        <form onSubmit={this.HandleSubmit} action="#" className="form">
          <input onChange={this.HandleChange} type="text" value={novaTarefa} />
          <button type="submit">
            <FaPlus />
          </button>
        </form>
        <ul className="tarefas">
          {tarefas.map((tarefa,index) => (
            <li key={tarefa}>
              {tarefa}
              <span>
                <FaEdit onClick={(e) => this.HandleEdit(e,index)} className="edit" />
                <FaWindowClose onClick={(e)=>this.HandleDelete(e,index)} className="delete" />
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
