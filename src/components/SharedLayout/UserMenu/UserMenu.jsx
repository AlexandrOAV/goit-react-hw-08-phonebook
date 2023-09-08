import React from 'react'
import css from './UserMenu.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { selectUserData } from 'redux/selectors';
import { logOutUser } from 'redux/auth/operation';


const UserMenu = () => {
    const userData = useSelector(selectUserData);
    const dispatch =useDispatch()
    const handleLogOut = () => {
        dispatch(logOutUser());
    }
    

  return (
    <div className={css.menuUser}>
                         <span>Hello, {userData.name}</span>
                         <button className={css.button} type='button' onClick={handleLogOut}>Log Out</button>
                         </div> 
  )
}

export default UserMenu