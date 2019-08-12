import React from 'react';
import { NavLink } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
  return (
    <div className='c-navbar'>
      <ul className='c-navbar_list'>
        <li className='c-navbar_list-item'>
          <NavLink to='/reports-list'
                   className="c-navbar_link"
                   activeClassName="active">
            Raporty
          </NavLink>
        </li>
        <li className='c-navbar_list-item'>
          <NavLink to='/users'
                   className="c-navbar_link"
                   activeClassName="active">
            Użytkownicy
          </NavLink>
        </li>
        <li className='c-navbar_list-item'>
          <NavLink to='/add-user'
                   className="c-navbar_link"
                   activeClassName="active">
            Dodaj użytkownika
          </NavLink>
        </li>
        <li className='c-navbar_list-item'>
          <NavLink to='/login'
                   className="c-navbar_link"
                   activeClassName="active">
            Zaloguj
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;