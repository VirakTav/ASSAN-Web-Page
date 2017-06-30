import React, { Component } from 'react';
import './App.css';
import TopNavigation from './Components/TopNavigation'
import Navigation from './Components/Navigation'
import Footer from './Components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        {<TopNavigation/>}
        {<Navigation/>}
        {<Footer/>}
      </div>
    );
  }
}

export default App;
