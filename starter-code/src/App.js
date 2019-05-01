import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foodsJSON from './foods.json';
import FoodBox from "./components/FoodBox";
import FoodForm from "./components/FoodForm";
import Search from "./components/Search";


class App extends Component {

  state = {
    foods: foodsJSON
  }

  addFood = food => {
    const foodsCopy = this.state.foods.slice()
    foodsCopy.unshift(food)

    this.setState({
      foods: foodsCopy
    })
  }

  searchFood = search => {
    console.log("search is :" + search)
    const foodsCopy = this.state.foods.slice()
    
    foodsCopy.filter(el => {
      console.log(el.name.includes(search))      
      el.name.includes(search)
    })
    console.log(foodsCopy)

    this.setState({
      foods: foodsCopy
    })

  }

  render() {
    return (
      <div className="App">
        <div>
          <FoodForm addFood={this.addFood} />
        </div>
        <div>
          <Search searchFood={this.searchFood} />
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
