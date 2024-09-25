import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { SiMicrosoft } from 'react-icons/si';

const LoginScreen = () => {
  const { loginWithRedirect, user, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  const handleMicrosoftLogin = () => {
    alert('Microsoft login is not implemented yet.');
  };

  // Effect to redirect after successful login
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="login-container">
      <h1>Welcome to the Student Application System!</h1>
      <button className="login-button" onClick={() => loginWithRedirect()}>
        <FaGoogle className="icon" />
            Login with Google
      </button>
      <button className="login-button" onClick={handleMicrosoftLogin}>
        <SiMicrosoft className="icon" />
            Login with Microsoft
      </button>
    </div>
  );
};

export default LoginScreen;
