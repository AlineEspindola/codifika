import React, { Component } from 'react';
import Select from '../Select';
import './Form.css';
class Form extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }

    this.changeText = this.changeText.bind(this);
  }

  changeText(e) {
    let enteredValue = e.target.value;
    this.setState({text: enteredValue});
  }

  render() {
    const { labelText, placeholderText, typeable } = this.props;

    return(
      <div>
        <div className='top-text'>
          <label>{labelText}</label>
          <Select/>
        </div>
        <textarea rows="4" cols="50" readOnly={typeable} value={this.state.textarea} onChange={this.changeText} placeholder={placeholderText}></textarea>
      </div>
    )
  }
}

export default Form;