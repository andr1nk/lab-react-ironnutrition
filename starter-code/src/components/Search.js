import React, { Component } from 'react'

export default class Search extends Component {

  state = {
    input: ""
  }

  handleChange = event => {
    let {value} = event.target

    this.props.searchFood(value)
    
    this.setState ({
      input: value
    })
  }

  render() {
    return (
      <div>
        <div>
        <form onSubmit={this.handleSubmit}>

          <label>Search</label>
          <input type="text" name="input" onChange={this.handleChange} value={this.state.input}>
          </input>

        </form>
        
      </div>
      </div>
    )
  }
}
