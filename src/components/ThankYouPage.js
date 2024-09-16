// src/components/ThankYouPage.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ThankYouPage = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Row>
        <Col className="text-center">
          <h1>Thank You for Your Feedback!</h1>
          <p>Your responses have been recorded. We appreciate your time and effort.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ThankYouPage;
