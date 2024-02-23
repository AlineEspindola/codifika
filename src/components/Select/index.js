import React, { Component } from 'react';
import './Select.css';
class Select extends Component {
  render() {
    return(
      <div>
        <select>
          <option>Normal</option>
          <option>Invertido</option>
        </select>
      </div>
    )
  }
}

export default Select;