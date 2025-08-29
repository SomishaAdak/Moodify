import React, { useState } from 'react';
import Questionnaire from './Questionnaire';
import '../style.css';

const PasswordInput = ({ placeholder, required }) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="password-input-wrapper">
      <input
        type={visible ? 'text' : 'password'}
        placeholder={placeholder}
        required={required}
        className="password-input"
      />
      <button
        type="button"
        className="toggle-password-btn"
        onClick={() => setVisible(!visible)}
        aria-label={visible ? 'Hide Password' : 'Show Password'}
      >
        {visible ? 'Hide' : 'Show'}
      </button>
    </div>
  );
};

const LoginForm = ({ onBack, onAuthSuccess }) => {
  const handleSubmit = e => {
    e.preventDefault();
    alert('Login successful!');
    onAuthSuccess();
  };
  return (
    <div className="form-container fade-in">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" required />
        <PasswordInput placeholder="Password" required />
        <button type="submit" className="main-btn">Login</button>
      </form>
      <button className="back-btn" onClick={onBack}>Back</button>
    </div>
  );
};

const SignupForm = ({ onBack, onAuthSuccess }) => {
  const handleSubmit = e => {
    e.preventDefault();
    alert('Signup successful!');
    onAuthSuccess();
  };
  return (
    <div className="form-container fade-in">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" required />
        <input type="email" placeholder="Email" required />
        <PasswordInput placeholder="Password" required />
        <button type="submit" className="main-btn">Sign Up</button>
      </form>
      <button className="back-btn" onClick={onBack}>Back</button>
    </div>
  );
};

const LoginSignup = () => {
  const [view, setView] = useState('buttons'); // 'buttons', 'login', 'signup', 'questionnaire'

  const handleAuthSuccess = () => {
    setView('questionnaire');
  };

  const handleQuestionnaireComplete = () => {
    alert('Thank you for completing the questionnaire!');
    setView('buttons');
  };

  return (
    <div className="background-animated-gradient">
      <div className="centered-container">
        <h1 className="main-title">Moodify</h1>

        {view === 'buttons' && (
          <div className="auth fade-in">
            <button className="main-btn" onClick={() => setView('login')}>Login</button>
            <button className="main-btn" onClick={() => setView('signup')}>Sign Up</button>
          </div>
        )}

        {view === 'login' &&
          <LoginForm onBack={() => setView('buttons')} onAuthSuccess={handleAuthSuccess} />
        }
        {view === 'signup' &&
          <SignupForm onBack={() => setView('buttons')} onAuthSuccess={handleAuthSuccess} />
        }
        {view === 'questionnaire' &&
          <Questionnaire onComplete={handleQuestionnaireComplete} />
        }
      </div>
    </div>
  );
};

export default LoginSignup;
