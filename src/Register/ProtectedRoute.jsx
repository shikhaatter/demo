import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './Login';

const ProtectedRoute = (props) => {
  const { authToken } = useAuth();

  // Check if the user is logged in
  if (!authToken) {
    // User is not logged in, redirect to the login page
    return <Navigate to="/login" />;
  }

  // User is logged in, render the component
  return <Route {...props} />;
};

export default ProtectedRoute;
