import React, { Component } from 'react';
import logo from './logo.svg';
import './main-page.css';
import Header from './header';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header subtitle="Providing houses all over the world"/>
      </div>
    )
  }
}

export default App;
