import Personal from './Personal'
// import { Loader, Card } from 'semantic-ui-react'
import React, { Component, Loader, Card } from 'react'

class RepsCard extends Component {

  render() {
    const members = this.props.members
    const districtState = this.props.districtState
    let displayList = null
    let loader = (<Loader active inline='centered'/>)
    if (members && districtState) {
      loader = ''
      if (members && Array.isArray(members)) {
        displayList = members.map(member => (
          <Personal member={member} key={member.id} districtState={districtState}/>
        ))
      } else if (members.id) {
        displayList = <Personal member={members} key={members.id} districtState={districtState}/>
      }
    } else if (members.length > 0) {
      loader = ''
      displayList = members.map(member => (
        <Personal member={member} key={member.id} districtState={member.state}/>
      ))

    }

    return (
      <div>
        <br></br>
      <h3>U.S. House of Represenatives</h3>
      {loader}
        <Card.Group itemsPerRow={4}>
          {displayList}
        </Card.Group>
      </div>
    )
  }
}

export default RepsCard