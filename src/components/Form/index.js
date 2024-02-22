import React, { Component } from 'react';
import Select from '../Select';
import './Form.css';
class Form extends Component {
  render() {
    const { labelText } = this.props;

    return(
      <div>
        <div className='top-text'>
          <label>{labelText}</label>
          <Select/>
        </div>
        <textarea rows="7" cols="50"></textarea>
      </div>
    )
  }
}

export default Form;