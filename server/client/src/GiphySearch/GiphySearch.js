import React, { Component } from 'react'
import GiphySearchForm from '../GiphySearchForm/GiphySearchForm'
import GiphySearchResults from '../GiphySearchResults/GiphySearchResults'

class GiphySearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gifSearchResults: undefined,
      currentSearchTerm: undefined,
      searchTag: undefined,
    }
  }

  render() {
    return (
      <div className="giphy-search">
        <h2 className="giphy-search-heading">Tried This Strain? How did it make you feel?</h2>
        <GiphySearchForm setAppState={this.setState.bind(this)}/>
        {
          this.state.gifSearchResults ?
          <GiphySearchResults 
            gifSearchResults={this.state.gifSearchResults} 
            selectedStrainId={this.props.selectedStrainId}
            searchTag={this.state.searchTag} />
          : undefined
        }
      </div>
    );
  }
}

export default GiphySearch