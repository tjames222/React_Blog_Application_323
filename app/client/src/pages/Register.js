import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
/*
export const Register = () => {
    return (
        <div>
            <form>
                <label>
                    FIRST NAME
                    <input type="text" name="firstName" />
                </label>
                <label>
                    LAST NAME
                    <input type="text" name="lastName" />
                </label>
                <label>
                    EMAIL
                    <input type="text" name="email" />
                </label>
                <label>
                    PASSWORD
                    <input type="password" name="password" />
                </label>
                <input type="submit" value="SUBMIT" />
            </form>
        </div>
    )
};
*/

export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // General form handler
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(
      'Registration Complete: ' +
        this.state.firstName +
        ' ' +
        this.state.lastName +
        ' ' +
        this.state.email +
        ' ' +
        this.state.password
    );
  }

  render() {
    return (
      <Container fluid className='p-0 m-0' style={{width: '100%', height: '100%'}}>
        <div
          style={{
            width: '100%',
            // height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
          className='bg-dark-gray'
        >
          BreadCrumbs
        </div>
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            borderTop: '15px solid #A0A09F',
          }}
          className='bg-dark pt-4 pb-4'
        >
          <Form onSubmit={this.handleSubmit}>
            <Row>
              <Col>
                <Form.Group controlId='formGroupFirstName'>
                  <Form.Label className='text-light'>FIRST NAME</Form.Label>
                  <Form.Control
                    type='text'
                    name='firstName'
                    value={this.state.firstName}
                    onChange={this.handleChange}
                    placeholder='John'
                    required={true}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId='formGroupEmail'>
                  <Form.Label className='text-light'>EMAIL</Form.Label>
                  <Form.Control
                    type='email'
                    name='email'
                    value={this.state.email}
                    onChange={this.handleChange}
                    placeholder='name@gmail.com'
                    required={true}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId='formGroupLastName'>
                  <Form.Label className='text-light'>LAST NAME</Form.Label>
                  <Form.Control
                    type='text'
                    name='lastName'
                    value={this.state.lastName}
                    onChange={this.handleChange}
                    placeholder='Smith'
                    required={true}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId='formGroupPassword'>
                  <Form.Label className='text-light'>PASSWORD</Form.Label>
                  <Form.Control
                    type='password'
                    name='password'
                    value={this.state.password}
                    onChange={this.handleChange}
                    placeholder='Smith'
                    required={true}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="justify-content-center d-flex">
                <Col className="justify-content-center d-flex">
                <Button variant="warning" type='submit' value='Submit' className="text-light">
                    REGISTER
                </Button>
                </Col>
            </Row>
            </Form>
            {/* <div>
              <label>
                FIRST NAME
                <input
                  type='text'
                  name='firstName'
                  value={this.state.firstName}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                LAST NAME
                <input
                  type='text'
                  name='lastName'
                  value={this.state.lastName}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div>
              <label>
                EMAIL
                <input
                  type='text'
                  name='email'
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                PASSWORD
                <input
                  type='password'
                  name='password'
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </label>
              <input type='submit' value='Submit' />
            </div> */}
        </div>
      </Container>
    );
  }
}

export default Register;
