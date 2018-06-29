import React, { Component } from 'react'

class StrainDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedStrain: {}
    }
  }

  componentDidMount() {
    this.fetchSelectedStrain()
  }
  
  // componentDidUpdate() {
  //   this.fetchSelectedStrain()
  // }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.selectedStrainId !== prevProps.selectedStrainId) {
      this.fetchSelectedStrain();
    }
  }



  fetchSelectedStrain() {
    fetch(`http://localhost:3001/strainDetail/${this.props.selectedStrainId}`)
    .then(response => response.json())
    .then(response => this.setState({ selectedStrain: response.data }))
  }

  render() {
    return(
      <div className="strain-detail-container">
        <div className="strain-detail">
          <div className="strain-image">
            <img src={this.state.selectedStrain.image_url} alt=""/>
          </div>
          <div className="strain-detail-textual">
            <h2>{this.state.selectedStrain.name}</h2>
            <p className="strain-detail-type">{this.state.selectedStrain.type}</p>
            <p className="strain-detail-description">{this.state.selectedStrain.description}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default StrainDetail


// Strain Detail: 
// {this.state.selectedStrain.name}