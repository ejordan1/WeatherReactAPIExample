import React from 'react';
import './App.css';
import Form from './components/Form';
import Title from './components/Title';
import Weather from './components/Weather';
class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const API_KEY = 'f7c5ea17c630e570c8b7fea4b66e2675';
    const API_CALL = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=f7c5ea17c630e570c8b7fea4b66e2675`);
    const data = await API_CALL.json();
    console.log(data);
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ""
    });
  }
  render() {
    return (

      <div className="App">
        <Title />
        <Form getWeather={this.getWeather} />
        <Weather city={this.state.city} temp={this.state.temperature}
          description={this.state.description}
        />
      </div>
    );
  }
}

export default App;
