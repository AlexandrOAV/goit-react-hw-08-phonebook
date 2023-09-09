import {HOME_ROUTE } from 'constans/constans'
import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectUserAuthentication } from 'redux/selectors';

const RestrictedRoute = ({ children, redirectTo = HOME_ROUTE }) => {
    const authenticated = useSelector(selectUserAuthentication);
  return (authenticated ? <Navigate to={redirectTo} replace /> : children)
}

export default RestrictedRoute