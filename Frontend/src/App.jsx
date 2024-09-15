import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "./Components/Container";

import "./App.css";
import { ProtectedRoute } from "./Components/ProtectedRouter";
import Dashboard from "./Components/Dashboard";
import { AuthProvider, useAuth } from "./AuthContext.jsx";

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="container">
      <h3>Authentication System</h3>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Container />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          {/* Catch all route for undefined paths */}
          <Route path="*" element={<Container/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}
