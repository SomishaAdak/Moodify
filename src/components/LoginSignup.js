import React, { useState } from 'react';
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

const LoginForm = ({ onBack }) => {
  const handleSubmit = e => {
    e.preventDefault();
    alert('Login submitted!');
  };
  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" required />
        <PasswordInput placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <button className="back-btn" onClick={onBack}>Back</button>
    </div>
  );
};

const SignupForm = ({ onBack }) => {
  const handleSubmit = e => {
    e.preventDefault();
    alert('Signup submitted!');
  };
  return (
    <div className="form-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" required />
        <input type="email" placeholder="Email" required />
        <PasswordInput placeholder="Password" required />
        <button type="submit">Sign Up</button>
      </form>
      <button className="back-btn" onClick={onBack}>Back</button>
    </div>
  );
};

const LoginSignup = () => {
  const [view, setView] = useState('buttons'); // 'buttons', 'login', 'signup'

  return (
    <div className="container">
      <h1>Moodify</h1>
      {view === 'buttons' && (
        <div className="auth">
          <button onClick={() => setView('login')}>Login</button>
          <button onClick={() => setView('signup')}>Sign Up</button>
        </div>
      )}
      {view === 'login' && <LoginForm onBack={() => setView('buttons')} />}
      {view === 'signup' && <SignupForm onBack={() => setView('buttons')} />}
    </div>
  );
};

export default LoginSignup;
