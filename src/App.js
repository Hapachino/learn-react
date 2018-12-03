import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './addNinja';

class App extends Component {
  state = {
    ninjas: [
      { name: 'Ryu', age: 30, belt: 'black', id: 1 },
      { name: 'Crystal', age: 25, belt: 'red', id: 2 },
      { name: 'Yoshi', age: 40, belt: 'green', id: 3 },
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    const ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas,
    })
  }
  deleteNinja = (id) => {
    const ninjas = this.state.ninjas.filter(ninja => ninja.id !== id);
    this.setState({
      ninjas: ninjas,
    })
  }
  componentDidMount() {
    console.log('component mounted');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('component updated');
    console.log(prevProps, prevState);
  }
  render() {
    return (
      <div className="App">
        <h1>My first react app!</h1>
        <p>Welcome :)</p>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>
        <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }
}

export default App;
