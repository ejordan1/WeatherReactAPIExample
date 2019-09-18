import React from 'react';
import './App.css';
import Form from './components/Form';
import Title from './components/Title';
class App extends React.Component {
  getWeather = async (e) => {
    e.preventDefault();

    const API_KEY = 'f7c5ea17c630e570c8b7fea4b66e2675';
    const API_CALL = await fetch(`https://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=${API_KEY}2`);
    const data = await API_CALL.json();
  }
  render() {
    return (

      <div className="App">
        <Title />
        <Form getWeather={this.getWeather} />
      </div>
    );
  }
}

export default App;
