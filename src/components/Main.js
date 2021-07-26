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
    tarefas:[
        'fazer café',
        'beber água',
        'Estudar'
    ]
  };
  HandleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  render() {
    const { novaTarefa, tarefas } = this.state;
    return (
      <div className="main">
        <h1> Lista de Tarefas</h1>

        <form action="#" className="form">
          <input
            onChange={this.HandleChange}
            type="text"
            value={novaTarefa} />
          <button type="submit">
            <FaPlus />
          </button>
        </form>
        <ul className="tarefas">
            {tarefas.map(tarefa=>(
                <li key={tarefa}>
                    {tarefa}
                    <div>
                        <FaEdit className="edit" />
                        <FaWindowClose className="delete"/>
                    </div>
                    
                </li>
            ))}
        </ul>

      </div>
    );
  }
}
