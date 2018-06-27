import React, { Component } from 'react'

class GiphySearchResults extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedGifId: undefined,
      selectedGif: {}
    }
    
    this.ResultsList = this.ResultsList.bind(this)
    this.postGifToStrain = this.postGifToStrain.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  returnGifObject(iter, target_id) {
    for (let i = 0; i < iter.length; i++) {
      if (iter[i].id == target_id) {
        return iter[i]
      }
    }
  }

  handleClick(event) {
    let gif_id = event.target.getAttribute('id')
    this.setState({selectedGifId: gif_id})
    this.setState({
      selectedGif: this.returnGifObject(this.props.gifSearchResults.data, gif_id)
    })
    console.log(this.state.selectedGifId)
    console.log(this.state.selectedGif)
    this.postGifToStrain()
  }

  postGifToStrain(e) {
    console.log('post attempt')
    fetch('http://localhost:3001/add', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        strain_id: this.props.selectedStrainId,
        // giphy_id: this.state.selectedGif.id,
        downsized_large_url: this.state.selectedGif.images.downsized_large.url,
        search_tag: ''
      })
    })
    // .then(res => res.json())
    // .then(res => console.log(res))
  }

  

  
  ResultsList(props, state) {
    const children = props.gifSearchResults.data;
    const listItems = children.map((child) =>
      <ul className="gif-tile-result" key={child.id}>
        <li><img src={child.images.downsized_large.url} /></li>
        <li><div id={child.id} onClick={this.handleClick} >Click to Select Gif</div></li>
        {/* <li><a key={child.id} onClick={event => this.setState({selectedGifId: event.target.key})}>Click to Select Gif</a></li> */}
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
