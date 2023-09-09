import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList ';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContacts } from 'redux/operation';
import { selectIsLoading } from 'redux/selectors';


const Contacts = () => {
  const dispatch = useDispatch();
const isLoading = useSelector(selectIsLoading)
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <> 
      <ContactForm />
      <Filter />
      { isLoading&&<Loader/>}
       <ContactList />
    </>
    
  )
}

export default Contacts