import React, { Component } from 'react'

class GiphySearchResults extends Component {
  constructor(props) {
    super(props)
    
    this.ResultsList = this.ResultsList.bind(this)
  }

  
  ResultsList(props) {
    const children = props.gifSearchResults.data;
    const listItems = children.map((child) =>
      <ul key={child.id} className="gif-tile-result">
        <li><img src={child.images.downsized_large.url} /></li>
      </ul>
    )
    return (
      <div>{listItems}</div>
    )
  }
  
  
  render() {
    return (
      <div className="giphy-search-results">
        {this.ResultsList(this.props)}
      </div>
    )
  }
}

export default GiphySearchResults
