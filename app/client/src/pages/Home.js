import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Button, Row, Col } from 'react-bootstrap';

export const Home = () => {
  return (
    <Jumbotron className='ml-0 mr-0 pr-0 pl-0' style={{ height: '100%' }}>
      <h1 className='d-block justify-content-center text-center'>
        Read interesting things,
        <br />
        even if you don't want to.
      </h1>
      <Row className='d-flex justify-content-center align-items-center pt-4'>
        <Col style={{ maxWidth: '350px' }}>
          <Link to='/register'>
            <Button block size='lg' variant='warning' type='button' className='text-light'>
              CREATE ACCOUNT
            </Button>
          </Link>
        </Col>
      </Row>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          borderTop: '15px solid #A0A09F',
        }}
        className='bg-dark mt-4 pt-4'
      >
        <Row className='d-flex justify-content-center align-items-center' style={{ width: '100%' }}>
          <Col style={{ maxWidth: '350px' }}>
            <Link to='/login'>
              <Button block size='lg' variant='warning' type='button' className='text-light'>
                LOGIN
              </Button>
            </Link>
          </Col>
        </Row>
      </div>
    </Jumbotron>
  );
};

export default Home;
