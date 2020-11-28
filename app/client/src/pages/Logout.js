import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { useEffect, useState, useLayoutEffect } from 'react';

export const Logout = () => {
  let history = useHistory();
  const [count, setCount] = useState(3);

  useLayoutEffect(() => {
    window.localStorage.removeItem('USER');
  }, []);

  useEffect(() => {
    if (count === 0) history.push('/');
    setTimeout(() => setCount((prev) => prev - 1), 1000);
  }, [count]);

  return (
    <Container fluid>
      <Row>
        <Col>Redirecting to Home in {count}...</Col>
      </Row>
    </Container>
  );
};

export default Logout;
