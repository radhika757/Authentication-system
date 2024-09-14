// Wrapper that checks whether a user is authenticated. If user is authenticated then it renders the protected route.

import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const ProtectedRoute = ({ isAuthenticated, children }) => {  
  return isAuthenticated ? children : <Navigate to="/login" />;
};

