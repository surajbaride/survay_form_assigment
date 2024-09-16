// src/components/SurveyForm.js
import React, { useState } from 'react';
import { Button, Container, Row, Col, ProgressBar } from 'react-bootstrap';
import { questions } from '../questions'; // Ensure this path is correct
import Question from './Question';
import { useNavigate } from 'react-router-dom';

const SurveyForm = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate(); // Initialize navigate

  const handleAnswerChange = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSkip = () => {
    handleNext();
  };

  const handleSubmit = () => {
    // Save answers to local storage
    localStorage.setItem('surveyAnswers', JSON.stringify(answers));
    navigate('/thank-you'); // Navigate to the Thank You page
  };

  const currentQuestion = questions[currentQuestionIndex] || {};

  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <h2>Question {currentQuestionIndex + 1}/{questions.length}</h2>
          <ProgressBar now={(currentQuestionIndex + 1) * 100 / questions.length} />
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <Question 
            question={currentQuestion} 
            onAnswerChange={handleAnswerChange} 
            currentAnswer={answers[currentQuestion.id]} 
          />
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-between">
          <Button variant="secondary" onClick={handlePrev} disabled={currentQuestionIndex === 0}>Previous</Button>
          <Button variant="warning" onClick={handleSkip}>Skip</Button>
          {currentQuestionIndex < questions.length - 1 && (
            <Button variant="primary" onClick={handleNext}>Next</Button>
          )}
          {currentQuestionIndex === questions.length - 1 && (
            <Button variant="success" onClick={handleSubmit}>Submit</Button>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default SurveyForm;
