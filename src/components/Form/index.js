import React from "react";

import PropTypes from 'prop-types'
//
import { FaPlus } from "react-icons/fa";
import "./Form.css";

export default function Form({HandleChange, HandleSubmit, novaTarefa}) {
  return (
    <form onSubmit={HandleSubmit} action="#" className="form">
      <input 
        onChange={HandleChange}
        type="text"
        value={novaTarefa} />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}
// Form.defaultProps = {
//     novaTarefa:'Valor padrão',
// }

Form.propTypes = {
    HandleChange: PropTypes.func.isRequired,
    HandleSubmit: PropTypes.func.isRequired,
    novaTarefa: PropTypes.string.isRequired,
};