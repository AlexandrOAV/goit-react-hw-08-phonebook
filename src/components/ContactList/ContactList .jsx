import css from './ContactList.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'redux/operation';
import { useEffect, useState } from 'react';
import { selectContacts,  selectFilterContacts } from 'redux/selectors';

const ContactList = () => {
  const [totalContacts, setTotalContacts] = useState('');
const [sortedContacts, setSortedContacts] = useState([]);

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const visibleContact = useSelector(selectFilterContacts);
  const total = contacts.items.length;
 
  const handleDelete = (id) => dispatch(deleteContacts(id));
 useEffect(() => {
    setTotalContacts(total);
  }, [total]);
  useEffect(() => {
  // Коли visibleContact або її зміст змінюється, відсортовуємо контакти за іменем
  const sorted = [...visibleContact].sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  setSortedContacts(sorted);
}, [visibleContact]);
  
  return (
    visibleContact.length > 0 &&
    <>
      <div className={css.container}>

      <h2>List Contacts</h2>
        <p className={css.total}>Total contacts: {totalContacts}</p>
         <ul className={css.list}>
                {sortedContacts.map(contact => {
                  const tel=`tel:${contact.number}`
                  return (
                    <li className={css.item} key={contact.id}>
                 <span className={css.name}>{contact.name}:</span> 
                  <a href={tel} className={css.number}>{contact.number}</a> 
                    <button type="button" onClick={()=>handleDelete(contact.id)}>Delete</button>
              </li>
            )
          })}
      </ul> 
          </div>
             </>
    )
}

export default ContactList; 