import React, { Component } from 'react'
import MainHeader from './MainHeader/MainHeader'
import AppIntro from './AppIntro/AppIntro'
import StrainSelector from './StrainSelector/StrainSelector'
import StrainDetail from './StrainDetail/StrainDetail'
import GiphySearch from './GiphySearch/GiphySearch'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedStrainId: undefined
    }
  }

  render() {
    return (
      <div className="App">
        <MainHeader />
        {
          !this.state.selectedStrainId ?
          <div className="home-view">
            <AppIntro />
            <StrainSelector onStrainSelect={selectedStrainId => this.setState({selectedStrainId})}/>
          </div>
          :
          <div className="detail-view">
            <StrainDetail selectedStrainId={this.state.selectedStrainId}/>
            <GiphySearch />
          </div>

        }
      </div>
    );
  }
}

export default App;

// componentDidMount() {
//   fetch('http://localhost:3001/')  
//   .then(response => response.json())
//   .then(response => this.setState({ strains: response.data }))
//   // .then(({ data }) => {
//   //   console.log(data)
//   // })
// }