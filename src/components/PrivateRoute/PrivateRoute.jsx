import {LOGIN_ROUTE } from 'constans/constans'
import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectUserAuthentication } from 'redux/selectors';

const PrivateRoute = ({ children, redirectTo = LOGIN_ROUTE }) => {
    const authenticated = useSelector(selectUserAuthentication);
  return (authenticated ? children:<Navigate to={redirectTo} replace /> )
}

export default PrivateRoute