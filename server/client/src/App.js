import React, { Component } from 'react';
import MainHeader from './MainHeader/MainHeader'
import './App.css';

class App extends Component {
  state = {strains: []}

  componentDidMount() {
    fetch('http://localhost:3001/')  
    .then(response => response.json())
    .then(response => this.setState({ strains: response.data }))
    // .then(({ data }) => {
    //   console.log(data)
    // })
  }

  render() {
    return (
      <div className="App">
        <MainHeader />
        <h1>strains</h1>
        {this.state.strains.map(strain =>
          <div key={strain.strain_id}>{strain.name}</div>
        )}
      </div>
    );
  }
}

export default App;
