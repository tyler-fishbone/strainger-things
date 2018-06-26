import React, { Component } from 'react'

class StrainDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedStrain: []
    }
  }

  componentDidMount() {
    fetch(`http://localhost:3001/strainDetail/${this.props.selectedStrainId}`)
    .then(response => response.json())
    .then(response => this.setState({ selectedStrain: response.data }))
    // .then(({ data }) => {
    //   console.log(data)
    // })
  }

  render() {
    return(
      <div>Strain Detail {this.state.selectedStrain[0]}</div>
    )
  }
}

export default StrainDetail