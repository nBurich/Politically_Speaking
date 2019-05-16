import React, { Component } from 'react'
import SenatorsCard from '../components/SenatorsCard'
import config from '../config/config'
import Nav from '../components/Nav';


const myHeaders = {
  'X-API-Key': config.PP_KEY
}

const myInit = {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default'
}


class Senate extends Component {
  constructor() {
    super()
    this.state = ({
      senate: '',
      districtState: '',
      imageURL: ''
    })
  }

  getSenators = () => {
    fetch('https://api.propublica.org/congress/v1/115/senate/members.json', myInit)
      .then(resp => resp.json())
      .then(resp => this.setState({
        senate: resp.results[0].members.filter(member => member.in_office === true)
      }))
      .catch(error => console.log(error))
  }

  componentDidMount = () => {
    this.getSenators()
  }

  render() {
    return (
      <div className="mainContent">
      <Nav />
        <SenatorsCard members={this.state.senate} districtState={this.state.districtState}/>
    </div>
    )
  }
}

export default Senate;

// const  socket = openSocket('http://localhost:8000');
// function subscribeToTimer(cb) {
//   socket.on('timer', timestamp => cb(null, timestamp));
//   socket.emit('subscribeToTimer', 1000);
// }
// export { subscribeToTimer };


