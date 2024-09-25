import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from './components/LoginScreen';
import Dashboard from './components/Dashboard';
import ApplicationForm from './components/ApplicationForm';
import ProtectedRoute from './protectedRoutes/ProtectedRoutes';

function App() {
  return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<LoginScreen />} />
            <Route path="/dashboard" element={<ProtectedRoute component={Dashboard} />} />
            <Route path="/application" element={<ProtectedRoute component={ApplicationForm} />} />
          </Routes>
        </div>
      </Router>
   
  );
}

export default App;
