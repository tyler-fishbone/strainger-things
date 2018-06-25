import React, { Component } from 'react'

class StrainSelector extends Component {
  constructor(props) {
    super(props)
    this.state = {
      strains: [],
    }

    // this.handleChange = this.handleChange.bind(this)
  }

  // handleChange(e) {
  //   this.setState({[e.target.name]: e.target.value})
  //   this.props.setAppState({[e.target.name]: e.target.value})
  // }

  componentDidMount() {
    fetch('http://localhost:3001/')  
    .then(response => response.json())
    .then(response => this.setState({ strains: response.data }))
    // .then(({ data }) => {
    //   console.log(data)
    // })
  }

  render() {
    return (
      <div className="strain-selector">
        <h2>Choose a Strain</h2>
        {this.state.strains.map(strain =>
          <div key={strain.strain_id}className='strain-selector-tile'>
            <p className='top-left'>{strain.type}</p>
            <p className='strain-abbrevtion'>{strain.name}</p>
            <p className='bottom-right'>{strain.abbreviation}</p>
            
          </div>
        )}
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

{/* <form>
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
</form> */}