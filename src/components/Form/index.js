import React, { Component } from 'react';
import Select from '../Select';
import './Form.css';
class Form extends Component {
  render() {
    const { labelText } = this.props;
    const { placeholderText } = this.props;

    return(
      <div>
        <div className='top-text'>
          <label>{labelText}</label>
          <Select/>
        </div>
        <textarea rows="4" cols="50" placeholder={placeholderText}></textarea>
      </div>
    )
  }
}

export default Form;