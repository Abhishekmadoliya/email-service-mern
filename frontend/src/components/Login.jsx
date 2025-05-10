import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Make sure this file contains the updated modern dark style

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', { email, password });
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');
    } catch (error) {
      setError(error.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-left">
        <div className="auth-header">
          <p className="subheading">Welcome Back</p>
          <h1>
            Log into your <span className="account-text">account</span><span className="highlight">.</span>
          </h1>
          <p className="login-prompt">
            Don't have an account? <a href="/register" className="link">Sign up</a>
          </p>
        </div>

        <form onSubmit={handleLogin} className="auth-form">
          {error && (
            <div className="error-message">
              <span className="error-icon">⚠️</span>
              {error}
            </div>
          )}

          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={error ? 'input-error' : ''}
            />
            <span className="input-icon">📧</span>
          </div>

          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={error ? 'input-error' : ''}
            />
            <span 
              className="input-icon password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? '👁️' : '🔒'}
            </span>
          </div>

          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <a href="/forgot-password" className="forgot-password">Forgot password?</a>
          </div>

          <div className="form-buttons">
            <button 
              type="submit" 
              className={`btn-primary ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="loading-spinner"></span>
              ) : (
                'Login'
              )}
            </button>
          </div>

          <div className="social-login">
            <p className="divider">Or continue with</p>
            <div className="social-buttons">
              <button type="button" className="social-btn google">
                <span className="social-icon">G</span>
                Google
              </button>
              <button type="button" className="social-btn github">
                <span className="social-icon">G</span>
                GitHub
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="auth-right">
        <div className="auth-right-content">
          <h2>Welcome to Our Platform</h2>
          <p>Join thousands of users who trust our services</p>
          <div className="features">
            <div className="feature">
              <span className="feature-icon">🚀</span>
              <span>Fast & Secure</span>
            </div>
            <div className="feature">
              <span className="feature-icon">💡</span>
              <span>Easy to Use</span>
            </div>
            <div className="feature">
              <span className="feature-icon">🔒</span>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
