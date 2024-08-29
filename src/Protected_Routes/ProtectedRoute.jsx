import { Navigate } from 'react-router-dom';
import getUserDetails from '../service/getUserDetails';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const isAuthenticated = localStorage.getItem('authToken'); // Example: Replace with your auth logic
  const userData = getUserDetails(isAuthenticated)
  const userRole = userData && userData.role; // Assuming you store user role in localStorage

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" />; // Redirect to an unauthorized page
  }

  return children;
};

export default ProtectedRoute;
