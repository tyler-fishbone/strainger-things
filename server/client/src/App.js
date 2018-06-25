import React, { Component } from 'react'
import MainHeader from './MainHeader/MainHeader'
import AppIntro from './AppIntro/AppIntro'
import StrainSelector from './StrainSelector/StrainSelector'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedStrain: undefined
    }
  }

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
        {
          !this.state.selectedStrain ?
          <div className="home-view">
            <AppIntro />
            <StrainSelector onStrainSelect={selectedStrain => this.setState({selectedStrain})}/>
          </div>
          :
          <p>Strain Selected</p>
        }
      </div>
    );
  }
}

export default App;
