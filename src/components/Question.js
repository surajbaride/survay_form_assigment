// src/components/Question.js
import React from 'react';
import { Form } from 'react-bootstrap';

const Question = ({ question, onAnswerChange, currentAnswer }) => {
  const handleChange = (e) => {
    onAnswerChange(question.id, e.target.value);
  };

  return (
    <Form>
      <Form.Group>
        <Form.Label>{question.text}</Form.Label>
        {question.type === 'rating' && (
          <div>
            {[...Array(question.scale)].map((_, index) => (
              <Form.Check
                key={index}
                type="radio"
                label={index + 1}
                name={question.id}
                value={index + 1}
                checked={currentAnswer === (index + 1).toString()}
                onChange={handleChange}
                inline
              />
            ))}
          </div>
        )}
        {question.type === 'text' && (
          <Form.Control
            as="textarea"
            value={currentAnswer || ''}
            onChange={handleChange}
            rows={3}
          />
        )}
      </Form.Group>
    </Form>
  );
};

export default Question;
