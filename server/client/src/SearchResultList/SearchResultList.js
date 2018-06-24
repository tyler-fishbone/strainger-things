import React, { Component } from 'react'

class SearchResultList extends Component {
  constructor(props) {
    super(props)
    
    this.ResultsList = this.ResultsList.bind(this)
  }
  
  ResultsList(props) {
    // console.log('props', props)
    const children = props.results.data;
    const listItems = children.map((child) =>
      <ul className="gif-tile-result">
        {/* <li><h2>{child.title}</h2></li> */}
        {/* <li><p>Posted by:{child.data.author}</p></li> */}
        <li><img src={child.images.downsized_large.url} /></li>
        {/* <li><a href={`http://reddit.com${child.data.permalink}`}>Link to post</a></li> */}
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

export default SearchResultList

// createResultsList = () => {
//   let resultsList = []

//   console.log(this.state)
//   // Outer loop to create parent
//   for (let i = 0; i < 5; i++) {
//     let children = []
//     children.push(<li><h2>{this.props.results.data.children[i].data.title}</h2></li>)
//     children.push(<li><p>Posted by:{this.props.results.data.children[i].data.author}</p></li>)
//     children.push(<li><img src={this.props.results.data.children[i].data.url} /></li>)
//     //Create the parent and add the children
//     resultsList.push(<ul>{children}</ul>)
//   }
//   return resultsList
// }