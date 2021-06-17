// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ''
  }

  handleOnSubmit(event) {
    event.preventDefault()
    console.log(this.state)
    this.props.addBand(this.state)
    this.setState({
      name: '',
    })
  }

  handleChange(event){
    this.setState({
      name: event.target.value
    }, () => console.log(this.state))
  }

  render() {
    return(
      <div>
        <form onSubmit={ event => this.handleOnSubmit(event) }>
          <input type='text' value={this.state.name} onChange={ event => this.handleChange(event)} />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default BandInput
