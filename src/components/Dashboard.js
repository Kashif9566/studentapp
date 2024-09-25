import React from 'react';
import ApplicationForm from './ApplicationForm';
import { useAuth0 } from '@auth0/auth0-react';

const Dashboard = () => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };

  return (
    <div className="dashboard">
        <div className='header'>
            <h1>Welcome to the Student Application Portal!</h1>
            <button className="logout-button" onClick={handleLogout}>
                Logout
            </button>
      </div>
      <ApplicationForm />
    </div>
  );
};

export default Dashboard;
