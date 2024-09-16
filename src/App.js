// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SurveyForm from './components/SurveyForm';
import WelcomeScreen from './components/WelcomeScreen';
import ThankYouPage from './components/ThankYouPage';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/survey" element={<SurveyForm />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
