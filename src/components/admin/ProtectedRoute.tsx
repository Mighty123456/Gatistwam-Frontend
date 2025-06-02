import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const location = useLocation();
  const adminToken = localStorage.getItem('adminToken');
  const adminData = localStorage.getItem('adminData');
  
  // Debug authentication state
  useEffect(() => {
    console.log('ProtectedRoute - Auth state:', {
      hasToken: !!adminToken,
      hasAdminData: !!adminData,
      currentPath: location.pathname
    });
  }, [adminToken, adminData, location.pathname]);

  const isAuthenticated = adminToken !== null && adminData !== null;

  if (!isAuthenticated) {
    console.log('ProtectedRoute - Not authenticated, redirecting to login');
    // Redirect to login page with the current path as a redirect parameter
    return <Navigate to={`/admin/login?redirect=${encodeURIComponent(location.pathname)}`} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute; 