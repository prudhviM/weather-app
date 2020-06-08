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
      const city = 'voorhees';
      axios.get('https://nipsx96cfe.execute-api.us-east-2.amazonaws.com/default/weatherservcice?city='+ city)
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
