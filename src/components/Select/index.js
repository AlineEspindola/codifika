import React, { Component } from 'react';
import './Select.css';
class Select extends Component {

  constructor(props) {
    super(props);
    this.state = {
      select: 'normal'
    }

    this.getLanguage = this.getLanguage.bind(this);
  }

  getLanguage(e) {
    const selectedLanguage = e.target.value;
    this.setState({ select: selectedLanguage });
  }

  render() {
    return(
      <div>
        <select onChange={this.getLanguage} value={this.state.select} name="select">
          <option value="normal">Normal</option>
          <option value="inverted">Invertido</option>
        </select>
      </div>
    )
  }
}

export default Select;