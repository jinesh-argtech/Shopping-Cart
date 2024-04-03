import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ element, ...rest }) => {
  const token = localStorage.getItem('token');
//   const isLoggedIn = !!token;

  // If user is logged in and tries to access /login or /signup, redirect them
  if (token && (window.location.pathname === '/login' || window.location.pathname === '/signup')) {
    return <Navigate to="/" replace />;
  }else if(!token && (window.location.pathname === '/login' || window.location.pathname === '/signup')){
    return <Outlet></Outlet>
  }

  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
