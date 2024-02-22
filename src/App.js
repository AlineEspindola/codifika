import React, { Component } from 'react';
import './reset.css';
import './App.css';
import Form from './components/Form';
import Button from './components/Button';
import logo from './assets/logo.png';
class App extends Component {

  render() {
    return(
      <div className="container">
        <div className='container__content'>
          <figure>
            <img src={logo} alt="Logo da Codifika" />
          </figure>
          <div className='forms'>
            <form>
              <Form/>
              <Button/>
            </form>
            <form>
              <Form/>
            </form>
          </div>
        </div>
      </div>
    );
  }
}


export default App;