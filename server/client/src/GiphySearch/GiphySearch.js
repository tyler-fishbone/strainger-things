import React, { Component } from 'react'
import GiphySearchForm from '../GiphySearchForm/GiphySearchForm'

class GiphySearch extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div className="giphy-search">
        <h2 className="giphy-search-heading">Tried This Strain? How did it make you feel?</h2>
        <GiphySearchForm />
      </div>
    );
  }
}

export default GiphySearch