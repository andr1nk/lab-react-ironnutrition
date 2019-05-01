import React, { Component } from 'react'

export default class FoodForm extends Component {

  state = {
    name: "",
    calories: 0,
    image: ""
  }

  handleChange = event => {
    let {name, value} = event.target
    this.setState ({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    const {name, calories, image} = this.state;

    const food = {name, calories, image}

    this.props.addFood(food);

    this.setState ({
      name: "",
      calories: 0,
      image: ""
    })

  }

  render() {
    return (
      <div>
        <h1>Add Food</h1>
        <form onSubmit={this.handleSubmit}>

          <label>Food name</label>
          <input type="text" name="name" onChange={this.handleChange} value={this.state.name}>
          </input>

          <label>Number of Cals</label>
          <input type="number" name="calories" onChange={this.handleChange} value={this.state.calories}>
          </input>

          <label>Food image</label>
          <input type="text" name="image" onChange={this.handleChange} value={this.state.image}>
          </input>

          <input type="submit" value="add"/>
        </form>
        
      </div>
    )
  }
}
