import { CONTACTS_ROUTE, HOME_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from 'constans/constans'
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import css from './SharedLayout.module.css'
import { useSelector } from 'react-redux'
import { selectUserAuthentication} from 'redux/selectors'
import UserMenu from './UserMenu/UserMenu'

const SharedLayout = () => {
   const authenticated = useSelector(selectUserAuthentication);

    return (
        <section className={ css.wrapper}>
      <header className={css.header}> 
                <nav className={css.container}>
                    <ul className={css.list_menu}>       
  
          <li className={css.menu_item}>
            <NavLink className={({ isActive }) => isActive ? css.activeLink : css.menu_item}
             to={HOME_ROUTE}>Home</NavLink>
          </li>
                   {authenticated ? (<>
                      <li className={css.menu_item}>
            <NavLink  className={({ isActive }) =>isActive ? css.activeLink : css.menu_item}
         to={CONTACTS_ROUTE}>Contacts</NavLink>
         </li>
                      <UserMenu />
                   </>) : ( <>
                            <li className={css.menu_item}>
            <NavLink  className={({ isActive }) =>isActive ? css.activeLink : css.menu_item}
         to={LOGIN_ROUTE}>Login</NavLink>
         </li>
         <li className={css.menu_item}>
            <NavLink  className={({ isActive }) =>isActive ? css.activeLink : css.menu_item}
         to={REGISTER_ROUTE}>Registration</NavLink>
                            </li>
                         </>)}
       
         </ul>
      </nav>
            </header>
            <Outlet/>
    </section>
  )
}

export default SharedLayout