import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {strains: []}

  componentDidMount() {
    fetch('http://localhost:3001/')
      // .then(console.log)  
    .then(response => response.json())
    .then(response => this.setState({ strains: response.data}))
    // .then(({ data }) => {
    //   console.log(data)
    // })
      // .then(strains => this.setState({ strains }));
  }

  render() {
    return (
      <div className="App">
        <h1>strains</h1>
        {this.state.strains.map(strain =>
          <div key={strain.strain_id}>{strain.name}</div>
        )}
      </div>
    );
  }
}

export default App;
