import React, { Component } from 'react'
import MainHeader from './MainHeader/MainHeader'
import AppIntro from './AppIntro/AppIntro'
import StrainSelector from './StrainSelector/StrainSelector'
import './App.css'

class App extends Component {
  // state = {strains: []}

  // componentDidMount() {
  //   fetch('http://localhost:3001/')  
  //   .then(response => response.json())
  //   .then(response => this.setState({ strains: response.data }))
  //   // .then(({ data }) => {
  //   //   console.log(data)
  //   // })
  // }

  render() {
    return (
      <div className="App">
        <MainHeader />
        <AppIntro />
        
        <StrainSelector />
      </div>
    );
  }
}

export default App;
