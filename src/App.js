import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Weather from './Weather';

class App extends Component {
  state = {
    weatherInfo: {}
  };
  componentDidMount() {
      axios.get('http://api.openweathermap.org/data/2.5/weather?q=voorhees&appid=223e03a760ffca273e3cb7835e79689c')
      .then(res => {
          this.setState({weatherInfo: res.data});
          console.log(res.data);
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Riyansh and Ishu</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Weather data={this.state.weatherInfo}></Weather>
      </div>
    );
  }
}

export default App;
