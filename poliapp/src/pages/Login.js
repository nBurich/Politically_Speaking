import React, {Component, Redirect} from 'react'
import { Jumbotron, Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import API from "../utils/API";

class Home extends Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: ""
      };
      handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.fullname && this.state.email && this.state.username && this.state.password) {
          API.saveUser({
              firstName: this.state.firstName,
              lastName: this.state.lastName,
              email: this.state.email,
              username: (this.state.username).toLowerCase(),
              password: this.state.password
          });
        } 
      }   

render() {
    if (this.state.handleFormSubmit) return <Redirect to={{ pathname: '/selection/'}} />
    
    return (
    <Container>
    <Jumbotron>
        <div>
        <h3>Welcome to </h3><h1>Politcally Speaking!</h1>
        </div>
    </Jumbotron>
         <Row className="justify-content-md-center">
          <Col lg="6" md="8" sm="12">
            <h1 className="text-center">Signup</h1>
            <Form onSubmit={this.handleFormSubmit} action="/api/users">
              <FormGroup>
                <Label for="lastname">Full Name</Label>
                <Input onChange={this.handleInputChange} value={this.state.fullName} type="text" name="fullname" id="fullname" placeholder="full name" />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input onChange={this.handleInputChange} value={this.state.email} type="email" name="email" id="email" placeholder="your@email.com" />
              </FormGroup>
              <FormGroup>
                <Label for="username">Username</Label>
                <Input onChange={this.handleInputChange} value={this.state.username} type="text" name="username" id="username" placeholder="username" />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input onChange={this.handleInputChange} value={this.state.password} type="password" name="password" id="password" placeholder="password" />
              </FormGroup>
              <FormGroup className="text-center">
                <Button type="submit">Login</Button>
              </FormGroup>
            </Form>
          </Col>
        </Row>
    </Container>
    )
    }

};

export default Home;
