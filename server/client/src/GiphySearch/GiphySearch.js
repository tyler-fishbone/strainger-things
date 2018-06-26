import React, { Component } from 'react'
import GiphySearchForm from '../GiphySearchForm/GiphySearchForm'
import GiphySearchResults from '../GiphySearchResults/GiphySearchResults'

class GiphySearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gifSearchResults: undefined
    }

  }

  render() {
    return (
      <div className="giphy-search">
        <h2 className="giphy-search-heading">Tried This Strain? How did it make you feel?</h2>
        <GiphySearchForm setAppState={this.setState.bind(this)}/>
        {
          this.state.gifSearchResults ?
          <GiphySearchResults gifSearchResults={this.state.gifSearchResults} />
          : undefined
        }

      </div>
    );
  }
}

export default GiphySearch