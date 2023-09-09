import PrivateRoute from "components/PrivateRoute/PrivateRoute";
import RestrictedRoute from "components/RestrictedRoute/RestrictedRoute";
import { lazy } from "react";

export const HOME_ROUTE = '/';
export const CONTACTS_ROUTE = '/contact';
export const LOGIN_ROUTE = '/login';
export const REGISTER_ROUTE = '/register';
export const NOTFOUND_ROUTE = '*';

const Login = lazy(() => import("pages/Login"));
const Registration = lazy(() => import("pages/Registration"));
const Contacts = lazy(() => import("pages/Contacts"));
const NotFaund = lazy(() => import("pages/NotFaund"));

export const addRoute = [
    {
        path: CONTACTS_ROUTE,
      element: <PrivateRoute>
                  <Contacts />,
               </PrivateRoute>
    },
    {
        path: LOGIN_ROUTE,
       element:   <RestrictedRoute redirectTo={CONTACTS_ROUTE}>
                     <Login />
                  </RestrictedRoute>,
    },
     {
        path: REGISTER_ROUTE,
       element: <RestrictedRoute redirectTo={CONTACTS_ROUTE}>
                  <Registration/>
               </RestrictedRoute>,
    },
      {
        path: NOTFOUND_ROUTE,
       element: <NotFaund/>,
    },
]