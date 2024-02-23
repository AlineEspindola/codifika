import React, { Component } from 'react';
import './Select.css';
class Select extends Component {

  constructor(props) {
    super(props);
    this.state = {
      select: {
        language: ''
      }
    }

    this.getLanguage = this.getLanguage.bind(this);
  }

  getLanguage(e) {
    const select = { ...this.state.select };
    select.language = e.target.value;
    this.setState({ select });
  }

  render() {
    return(
      <div>
        <select onChange={this.getLanguage} value={this.state.language} name="select">
          <option value="normal">Normal</option>
          <option value="inverted">Invertido</option>
        </select>
      </div>
    )
  }
}

export default Select;