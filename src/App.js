import React, { Component } from 'react';
import './reset.css';
import './vars.css';
import './App.css';
import Form from './components/Form';
import Button from './components/Button';
import logo from './assets/logo.png';
class App extends Component {

  render() {
    const formProps = {
      yourText: "Seu texto",
      yourTranslatedText: "Seu texto traduzido",
      textWriteText: "Escreva seu texto...",
      textTranslation: "Tradução"
    }

    return(
      <div className="container">
        <div className='container__content'>
          <figure>
            <img src={logo} alt="Logo da Codifika" />
          </figure>
          <div className='forms'>
            <form>
              <Form labelText={formProps.yourText} placeholderText={formProps.textWriteText}/>
              <Button/>
            </form>
            <form>
              <Form labelText={formProps.yourTranslatedText} placeholderText={formProps.textTranslation}/>
            </form>
          </div>
        </div>
      </div>
    );
  }
}


export default App;