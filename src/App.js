import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    content: '',
    
  }

  


  
  render() {
    return (
      <div className="container">
        <textarea rows="3" name="content" value = {this.state.content} onChange = {this.handleOnChange} > </textarea>
        <div className="counter">{this.state.content.length}</div>
      </div>
    );
  
}

handleOnChange = (e) => {
  this.setState({[e.target.name]:e.target.value})
}

}
export default App;
