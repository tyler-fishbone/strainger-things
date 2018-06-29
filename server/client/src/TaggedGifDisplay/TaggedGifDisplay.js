import React, { Component } from 'react'

class TaggedGifDisplay extends Component {
  constructor(props){
    super(props)

    this.state = {
      // taggedGifs: []
    }
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.selectedStrainId !== prevProps.selectedStrainId) {
  //     this.fetchSelectedStrain();
  //   }
  // }

  componentDidMount() {
    this.props.updateTaggedGifs()
    // this.setState(this.state)
  }

  TaggedGifResultsList(props) {
    const listItemsSlice = this.props.taggedGifs.reverse().slice(0,4)
    const listItems = listItemsSlice.map(gif => 
      <ul className="tagged-gif-tile-result">
        <li>
          <img src={gif.downsized_large_url} alt={gif.search_tag}/>
        </li>
          <li>
        <p>Search Tag: {gif.search_tag}</p>
        </li>
      </ul>
    )
    return (
      <div>{listItems}</div>
    )
  }

  render() {
    return (
      <div className="tagged-gif-display-container">
        <h2 className="tagged-gif-display-heading">This strain makes Giffy Jane users feel...</h2>
        <div className="tagged-gif-results-container">
          {this.TaggedGifResultsList()}
        </div>
        {/* <button onClick={this.componentDidMount}>Click to refresh this stream once you add gifs</button> */}
      </div>
    )
  }
}

export default TaggedGifDisplay