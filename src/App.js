import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  
  render() {
    return (
      <div className="container">
        <textarea rows="3" name="content" value={this.state.value} onChange={this.handleChange} > </textarea>
        <div className="counter">{this.state.value.length}</div>
      </div>
    );
  
}



}
export default App;
