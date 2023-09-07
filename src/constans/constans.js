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
       element: <Contacts />,
    },
    {
        path: LOGIN_ROUTE,
       element: <Login />,
    },
     {
        path: REGISTER_ROUTE,
       element: <Registration/>,
    },
      {
        path: NOTFOUND_ROUTE,
       element: <NotFaund/>,
    },
]