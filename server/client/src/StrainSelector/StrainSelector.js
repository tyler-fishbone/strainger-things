import React, { Component } from 'react'

class StrainSelector extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedStrain: undefined
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e) {
    
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
    this.props.setAppState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <div className="strain-selector">
        <form>
          <select name="selectedStrain" onChange={this.handleChange} id="">
            <option>Select Your Strain</option>
            <option value="blue-dream">Blue Dream - Hybrid</option>
            <option value="sour-diesel">Sour Diesel - Sativa</option>
            <option value="gsc">GSC - Hybrid</option>
            <option value="green-crack">Green Crack - Sativa</option>
            <option value="og-kush">OG Kush - Hybrid</option>
            <option value="granddaddy-purple">Granddaddy Purple - Indica</option>
            <option value="jack-herer">Jack Herer - Sativa</option>
            <option value="white-widow">White Widow - hybrid</option>
            <option value="gg-4">GG4 - Hyrbid</option>
            <option value="bubba-kush">Bubba Kush - indica</option>
          </select>
        </form>
      </div>
    )
  }
}

export default StrainSelector


// Blue Dream - Hybrid
// Sour Diesel - Sativa
// GSC - Hybrid
// Green Crack - Sativa
// OG Kush - Hybrid
// Granddaddy Purple - Indica
// Jack Herer - Sativa
// White Widow - hybrid
// GG4 - Hyrbid
// Bubba Kush - indica