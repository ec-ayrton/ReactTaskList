import React from 'react'
import PropTypes from 'prop-types'

import { FaEdit, FaWindowClose } from "react-icons/fa";

import './Tarefas.css'

export default function Tarefas({tarefas, HandleEdit, HandleDelete}){
    return(
        <ul className="tarefas">
          {tarefas.map((tarefa, index) => (
            <li key={tarefa}>
              {tarefa}
              <span>
                <FaEdit
                  className="edit"
                  onClick={(e) => HandleEdit(e, index)}
                />

                <FaWindowClose
                  onClick={(e) =>HandleDelete(e, index)}
                  className="delete"
                />
              </span>
            </li>
          ))}
        </ul>
    );
}

Tarefas.propTypes = {
    tarefas: PropTypes.array.isRequired,
    HandleEdit:PropTypes.func.isRequired,
    HandleDelete:PropTypes.func.isRequired
}