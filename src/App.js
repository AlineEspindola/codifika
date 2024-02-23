import React, { Component } from 'react';
import './reset.css';
import './vars.css';
import './App.css';
import Form from './components/Form';
import Button from './components/Button';
import logo from './assets/logo.png';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      translatedText: 'Tradução'
    }

    this.handleFormTextChange = this.handleFormTextChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleFormTextChange = (text) => {
    text = text.split("").reverse().join("");
    this.setState({translatedText: text});
  }

  handleButtonClick = () => {
    const translated = this.state.translatedText.split("").reverse().join("");
    this.setState({ translatedText: translated });
  }

  render() {
    const formProps = {
      yourText: "Seu texto",
      yourTranslatedText: "Seu texto traduzido",
      textWriteText: "Escreva seu texto...",
      textTranslation: "Tradução",
      void: "",
      readOnly: "readOnly",
    }

    return(
      <div className="container">
        <div className='container__content'>
          <figure>
            <img src={logo} alt="Logo da Codifika" />
          </figure>
          <div className='forms'>
            <form>
              <Form typeable={formProps.void} labelText={formProps.yourText} placeholderText={formProps.textWriteText}/>
              <Button onClick={this.handleButtonClick}/>
            </form>
            <form>
              <Form value={this.state.translatedText} typeable={formProps.readOnly} labelText={formProps.yourTranslatedText} placeholderText={formProps.textTranslation}/>
            </form>
          </div>
        </div>
      </div>
    );
  }
}


export default App;