// import ContactForm from "./ContactForm/ContactForm";
// import ContactList from "./ContactList/ContactList ";
// import { Filter } from "./Filter/Filter";
// import css from "./App.module.css"

import { HOME_ROUTE,  addRoute } from "constans/constans";

import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Loader } from "./Loader/Loader";

// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { fetchContacts } from "redux/operation";
// import { selectError, selectIsLoading } from "redux/selectors";
const Home = lazy(() => import("pages/Home"));
const SharedLayout = lazy(()=>import ('./SharedLayout/SharedLayout'))


export const App = () => {
  
//   const dispatch = useDispatch();
//   const isLoading  = useSelector(selectIsLoading);
//  const error = useSelector(selectError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

  return ( 
  <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path={HOME_ROUTE} element={<SharedLayout/>}>
          <Route index element={<Home />} />
          {addRoute.map(({ path, element }) => <Route key={path} path={path} element={element} />)}
        </Route>
      </Routes>
  </Suspense>
    // <div className={css.container}>
    //   <h1 className={css.title}> Phonebook</h1>
    //   <ContactForm />
    //   <h2 className={css.title_contacts}>Contacts</h2>
    //   <Filter />
    //    {isLoading && !error && <><h2>Loading contacts...</h2><Loader/></>}
    //     <ContactList />
      
    // </div>
  );
}

