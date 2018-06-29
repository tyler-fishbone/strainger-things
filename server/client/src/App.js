import React, { Component } from 'react'
import MainHeader from './MainHeader/MainHeader'
import AppIntro from './AppIntro/AppIntro'
import StrainSelector from './StrainSelector/StrainSelector'
import StrainDetail from './StrainDetail/StrainDetail'
import TaggedGifDisplay from './TaggedGifDisplay/TaggedGifDisplay'
import GiphySearch from './GiphySearch/GiphySearch'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedStrainId: undefined,
      taggedGifs: []
      // gifToAdd: ''
    }

    // this.setStateGifToAdd = this.setStateGifToAdd.bind(this)
    this.updateTaggedGifs = this.updateTaggedGifs.bind(this)
  }

  componentDidMount() {
    this.updateTaggedGifs()
  }

  updateTaggedGifs() {
    fetch(`http://localhost:3001/taggedGifs/${this.state.selectedStrainId}`)
    .then(response => response.json())
    .then(response => this.setState({ taggedGifs: response.data }))
  }

  render() {
    return (
      <div className="App">
        <MainHeader />
        <AppIntro />
        <StrainSelector onStrainSelect={selectedStrainId => this.setState({selectedStrainId})}/>
        {
          this.state.selectedStrainId ?
          <div className="detail-view">
            <StrainDetail selectedStrainId={this.state.selectedStrainId}/>
            <TaggedGifDisplay 
            selectedStrainId={this.state.selectedStrainId}
            gifToAdd={this.state.gifToAdd}
            taggedGifs={this.state.taggedGifs}
            updateTaggedGifs={this.updateTaggedGifs}
            />
            <GiphySearch 
            selectedStrainId={this.state.selectedStrainId}
            setStateGifToAdd={this.setStateGifToAdd}
            updateTaggedGifs={this.updateTaggedGifs}
            />
          </div>
          :
          undefined
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