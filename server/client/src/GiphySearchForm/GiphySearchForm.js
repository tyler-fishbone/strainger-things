import React, { Component } from 'react'
import superagent from 'superagent'

class GiphySearchForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchFormGif: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    superagent.get(`http://api.giphy.com/v1/gifs/search?api_key=QS60zQhegjVYItnkZH9TNeR131o1rj9m&q=${this.state.searchFormGif}`)
    .then(res => this.props.setAppState({gifSearchResults: res.body}))
    .catch(console.error)
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <div className="giphy-search-form">
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text"
            placeholder="Search for Gifs by keyword or phrase"
            name="searchFormGif"
            value={this.state.searchFormGif}
            onChange={this.handleChange}
            />
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}

export default GiphySearchForm