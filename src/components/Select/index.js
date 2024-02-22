import React, { Component } from 'react';
import './Select.css';
class Select extends Component {
  render() {
    return(
      <div>
        <select>
          <option className='teste'>Normal</option>
          <option>Pig Latim</option>
          <option>Invertido</option>
          <option>Númerico</option>
        </select>
      </div>
    )
  }
}

export default Select;