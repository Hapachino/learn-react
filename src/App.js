import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  state = {
    ninjas: [
      { name: 'Ryu', age: 30, belt: 'black', id: 1 },
      { name: 'Crystal', age: 25, belt: 'red', id: 2 },
      { name: 'Yoshi', age: 40, belt: 'green', id: 3 },
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>My first react app!</h1>
        <p>Welcome :)</p>
        <Ninjas ninjas={ this.state.ninjas }/>
      </div>
    );
  }
}

export default App;
