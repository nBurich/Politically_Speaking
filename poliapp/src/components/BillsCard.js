import { NavLink } from 'react-router-dom'
import React, { List, Button, Divider, Container, Loader } from 'react'

const BillsCard = (props) => {
  let displayList = props.bills.map(bill => (
    <List.Item key={bill.number}><NavLink to={`/bills/${bill.bill_id.substr(0, bill.bill_id.indexOf('-'))}`}>
      {bill.number} - {bill.title}
    </NavLink></List.Item>))
  let loader = (<Loader active inline='centered'/>)
  if (props.bills) {
    loader = ''
  }
  return (
    <Container>
      {'Chamber '}
    <Button.Group onClick={props.handleClick}>
      <Button value='both'>Both</Button>
      <Button value='house'>House</Button>
      <Button value='senate'>Senate</Button>
    </Button.Group>
    <Divider/>
    {loader}
    <List>
      {displayList}
    </List>
</Container>
  )
}

export default BillsCard