// src/components/WelcomeScreen.js
import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const WelcomeScreen = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleStart = () => {
    navigate('/survey'); // Navigate to the survey page
  };

  return (
    <Container className="text-center py-5">
      <h1>Welcome to Our Survey</h1>
      <p>
        We appreciate your feedback. Please take a moment to answer the following questions.
      </p>
      <Button variant="primary" onClick={handleStart}>Start Survey</Button>
    </Container>
  );
};

export default WelcomeScreen;
