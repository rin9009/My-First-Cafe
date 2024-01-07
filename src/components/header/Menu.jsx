import React from 'react';

import { headerMenus } from '../../data/header';
import { Link, useLocation } from 'react-router-dom';

const Menu = () => {
  const location = useLocation();

  return (
    <nav className='header__menu'>
      <ul className='menu__container'>
        {headerMenus.map((menu, key) => (
          <li key={key} className={location.pathname === menu.src ? 'active' : ''}>
            <Link to={menu.src}>
              {menu.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu;
