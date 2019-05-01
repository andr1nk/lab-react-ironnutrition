import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foodsJSON from './foods.json';
import FoodBox from "./components/FoodBox";
import FoodForm from "./components/FoodForm";


class App extends Component {

  state = {
    foods: foodsJSON
  }

  addFood = food => {
    const foodsCopy = this.state.foods.slice()
    foodsCopy.unshift(food)

    this.setState ({
      foods: foodsCopy
    })
  }

  render() {
    return (
      <div className="App">
      <div>
        <FoodForm addFood={this.addFood}/>
      </div>
        <div className="foodList">
          {this.state.foods.map((food, index) => (
            <FoodBox key={index} food={food} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
