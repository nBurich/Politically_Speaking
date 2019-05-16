import React, { Component } from 'react'
import Nav from '../components/Nav'
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { unstable_Box as Box } from '@material-ui/core/Box';

class Topics extends Component {

    render() {
        return (
            <Nav />
            <Container>
                <Row>
                    <Col>
                    <Box>
                        <h1>Senate</h1>
                        <p>Find out information about the Current Senators.</p>
                        <Button type='button' exact path='/senate'>Senate</Button>
                    </Box>
                    </Col>
                    <Col>
                    <Box>
                    <h1>House Representatives</h1>
                        <p>Find out information about the Current House Representatives.</p>
                        <Button type='button' exact path= '/house'>House</Button>
                    </Box>
                    </Col>
                    <Col>
                    <Box>
                    <h1>Bills</h1>
                        <p>Find out information about the Current Bills.</p>
                        <Button type='button' exact path='/bill'>Bills</Button>
                    </Box>
                    </Col>
                    <Col>
                    <Box>
                    <h1>Committees</h1>
                        <p>Find out information about the Current Committees.</p>
                        <Button type='button' exact path= '/committees'>Committees</Button>
                    </Box>
                    </Col>
                </Row>
            </Container>
        )
    }
}
