import { CONTACTS_ROUTE, HOME_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from 'constans/constans'
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import css from './SharedLayout.module.css'
const SharedLayout = () => {
    return (
        <section className={ css.wrapper}>
      <header className={css.header}> 
                <nav className={css.container}>
                    <ul className={css.list_menu}>       
                        <div className={css.list_menu}>
          <li className={css.menu_item}>
            <NavLink className={({ isActive }) => isActive ? css.activeLink : css.menu_item}
             to={HOME_ROUTE}>Home</NavLink>
          </li>
         <li className={css.menu_item}>
            <NavLink  className={({ isActive }) =>isActive ? css.activeLink : css.menu_item}
         to={CONTACTS_ROUTE}>Contacts</NavLink>
         </li>
                        </div>        
                        <div className={css.list_menu}>
        <li className={css.menu_item}>
            <NavLink  className={({ isActive }) =>isActive ? css.activeLink : css.menu_item}
         to={LOGIN_ROUTE}>Login</NavLink>
         </li>
         <li className={css.menu_item}>
            <NavLink  className={({ isActive }) =>isActive ? css.activeLink : css.menu_item}
         to={REGISTER_ROUTE}>Registration</NavLink>
         </li>
         </div>               
         </ul>
      </nav>
            </header>
            <Outlet/>
    </section>
  )
}

export default SharedLayout