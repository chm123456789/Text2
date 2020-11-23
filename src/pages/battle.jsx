import React from 'react';
import {
  Container, InputGroup, FormControl, Row, Col, Button,
} from 'react-bootstrap';

 import p1 from '../../images/p1.jpg';
import p2 from '../../images/p2.jpg';
import p3 from '../../images/p3.jpg';

export default class Battle extends React.Component {
  render() {
    return (
      <Container className="text-center">
        <br /> <h3>Instructions</h3> <br />
        <Row>
          <Col>
            <p>Enter two Github users</p>
            <img src={p1} style={{ boxShadow: '0 0 5px 3px #00000042 ' , width:"200px",height:"200px"}} alt=" " />
          </Col>
          <Col>
            <p>Battle</p>
            <img src={p2} style={{ boxShadow: '0 0 5px 3px #00000042', width:"200px",height:"200px"}} alt=" " />
          </Col>
          <Col>
            <p>See the winner</p>
            <img src={p3} style={{ boxShadow: '0 0 5px 3px #00000042',width:"200px",height:"200px" }} alt=" " />
          </Col>
        </Row><br />
        <h3>Players</h3> <br />
        <Row>
          <Col>
            <p>Player One</p>
            <InputGroup>
              <FormControl
                placeholder="github username"
                aria-label="github username"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button variant="outline-secondary">SUBMIT</Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
          <Col>
            <p>Player Two</p>
            <InputGroup>
              <FormControl
                placeholder="github username"
                aria-label="github username"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button variant="outline-secondary">SUBMIT</Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}
