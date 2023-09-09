// import ContactForm from "./ContactForm/ContactForm";
// import ContactList from "./ContactList/ContactList ";
// import { Filter } from "./Filter/Filter";
// import css from "./App.module.css"

import { HOME_ROUTE,  addRoute } from "constans/constans";

import { Route, Routes } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import { Loader } from "./Loader/Loader";
import { useDispatch } from "react-redux";
import { refreshUser } from "redux/auth/operation";

// import { fetchContacts } from "redux/operation";
// import { selectError, selectIsLoading } from "redux/selectors";
const Home = lazy(() => import("pages/Home"));
const SharedLayout = lazy(()=>import ('./SharedLayout/SharedLayout'))


export const App = () => {
  

//   const isLoading  = useSelector(selectIsLoading);
//  const error = useSelector(selectError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);
  
const dispatch = useDispatch();
  
useEffect(() => {
    dispatch(refreshUser());
}, [dispatch]);
  
  return ( 
  <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path={HOME_ROUTE} element={<SharedLayout/>}>
          <Route index element={<Home />} />
          {addRoute.map(({ path, element }) => <Route key={path} path={path} element={element} />)}
        </Route>
      </Routes>
  </Suspense>
  );
}

