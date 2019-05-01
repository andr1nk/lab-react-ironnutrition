import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foodsJSON from './foods.json';
import FoodBox from "./components/FoodBox";


class App extends Component {

  state = {
    foods: foodsJSON
  }

  render() {
    return (
      <div className="App">
        <div>
          {this.state.foods.map((food, index) => (
            <FoodBox key={index} food={food} />
          ))}

        </div>
      </div>
    );
  }
}

export default App;
