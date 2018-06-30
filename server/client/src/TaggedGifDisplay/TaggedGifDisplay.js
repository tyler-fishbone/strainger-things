import React, { Component } from 'react'

class TaggedGifDisplay extends Component {
  constructor(props){
    super(props)

    this.state = {
      taggedGifs: []
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.gifToAdd !== prevProps.gifToAdd 
      || this.props.selectedStrainId !== prevProps.selectedStrainId) {
      for (let i = 0; i < 10; i++){
        this.fetchTaggedGifs();
      }
      this.refs.taggedgifdisplay.scrollIntoView({behavior:"smooth", block:"start"})
    }

  }

  componentDidMount() {
    this.fetchTaggedGifs()
  }

  fetchTaggedGifs() {
    fetch(`http://localhost:3001/taggedGifs/${this.props.selectedStrainId}`)
    .then(response => response.json())
    .then(response => this.setState({ taggedGifs: response.data }))
  }


  TaggedGifResultsList(props) {
    const listItemsSlice = this.state.taggedGifs.reverse().slice(0,8)
    const listItems = listItemsSlice.map(gif => 
      <ul className="tagged-gif-tile-result">
        <li>
          <img src={gif.downsized_large_url} alt={gif.search_tag}/>
        </li>
          <li>
        <p>Feeling: {gif.search_tag}</p>
        </li>
      </ul>
    )
    return (
      <div>{listItems}</div>
    )
  }

  render() {
    return (
      <div ref="taggedgifdisplay" className="tagged-gif-display-container">
        <h2 className="tagged-gif-display-heading">This strain recently made Giffy Jane users feel...</h2>
        <div className="tagged-gif-results-container">
          {this.TaggedGifResultsList()}
        </div>
        {/* <button onClick={this.componentDidMount}>Click to refresh this stream once you add gifs</button> */}
      </div>
    )
  }
}

export default TaggedGifDisplay