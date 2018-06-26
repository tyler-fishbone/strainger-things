import React, { Component } from 'react'

class StrainDetail extends Component {
  constructor(props) {
    super(props)
    this.state= {

    }
  }

  // componentDidMount() {
  //   fetch('http://localhost:3001/strainDetail')  
  //   .then(response => response.json())
  //   .then(response => this.setState({ strains: response.data }))
  //   // .then(({ data }) => {
  //   //   console.log(data)
  //   // })
  // }

  render() {
    return(
      <div>Strain Detail {this.props.selectedStrainId}</div>
    )
  }
}

export default StrainDetail