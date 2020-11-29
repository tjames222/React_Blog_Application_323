import { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

// Helpers
import { registerUser } from '../helpers/db/registerUser';

export const Login = () => {
  const history = useHistory();
  const [values, setValues] = useState({ email: '', password: '' });
  const [loginResult, setLoginResult] = useState(null);

  // This effect will see changes after a successful login attempt,
  //  and handle the redirect for us
  useEffect(() => {
    if (loginResult) setTimeout(() => history.push('/'), 2000);
  }, [loginResult]);

  // General form handler
  const handleChange = (event) => {
    // Set all new values, including prior untouched ones
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    registerUser({ ...values })
      .then((_) => {
        setLoginResult(true);
      })
      .catch((e) => {
        console.log('error in registration: ', e.message);
        setLoginResult(false);
        alert('There was an error with the registration: ' + e.message);
      });
  };

  return (
    <Container fluid className='p-0 m-0' style={{ width: '100%', height: '100%' }}>
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
        <h1>LOGIN</h1>
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
        <Form onSubmit={handleSubmit} validated={!!setLoginResult}>
          <Row>
            <Col>
              <Form.Group controlId='formGroupEmail'>
                <Form.Label className='text-light'>EMAIL</Form.Label>
                <Form.Control
                  type='email'
                  name='email'
                  value={values.email}
                  onChange={handleChange}
                  placeholder='name@gmail.com'
                  required={true}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId='formGroupPassword'>
                <Form.Label className='text-light'>PASSWORD</Form.Label>
                <Form.Control
                  type='password'
                  name='password'
                  value={values.password}
                  onChange={handleChange}
                  required={true}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className='justify-content-center d-flex'>
            <Col className='justify-content-center d-flex'>
              <Button variant='warning' type='submit' value='Submit' className='text-light'>
                LOGIN
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </Container>
  );
};

export default Login;
