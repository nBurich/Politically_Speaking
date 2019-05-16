import React, { Component } from 'react'
import config from '../config/config'
import Nav from '../components/Nav';
import RepsCard from '../components/RepsCard';

const myHeaders = {
  'X-API-Key': config.PP_KEY
}

const myInit = {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default'
}


class House extends Component {
  constructor() {
    super()
    this.state = ({
      house: '',
      districtState: '',
      districtCode: ''
    })
  }

  getHouseReps = () => {
    fetch('https://api.propublica.org/congress/v1/115/house/members.json', myInit)
      .then(resp => resp.json())
      .then(resp => this.setState({
        house: resp.results[0].members.filter(member => member.in_office === true)
      }))
      .catch(error => console.log(error))

  }

  getCustomHouseReps = (state, district) => {
    fetch(`https://api.propublica.org/congress/v1/members/house/${state}/${district}/current.json`, myInit)
      .then(resp => resp.json())
      .then(resp => this.setState({
        house: resp.results[0]
      }))
      .catch(error => console.log(error)) // investigate 'throw' - how to display error
  }

  componentDidMount = () => {
    this.getHouseReps()
  }

  render() {
    return (
      <div className="mainContent">
      <Nav />
        <RepsCard members={this.state.house} districtState={this.state.districtState}/>
      </div>
    )
  }
}

export default House;