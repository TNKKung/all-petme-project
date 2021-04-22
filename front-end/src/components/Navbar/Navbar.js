import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo_icon_src from './img/top-icon.png'
import Bell_icon_src from './img/bell-icon.png'
import Profile_icon_src from './img/profile.jpg'

function Navbar() {
  return (
    <nav className='navbar-wrapper'>
      <div className='navbar-logo'>
        <img src={Logo_icon_src} />
      </div>

      <ul className='navbar-links'>
        <li>
          <NavLink
            exact
            to='/'
            className='navbar-item'
            activeClassName='navbar-item-active'
          >
            หน้าหลัก
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/about'
            className='navbar-item'
            activeClassName='navbar-item-active'
          >
            เกี่ยวกับ
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/market'
            className='navbar-item'
            activeClassName='navbar-item-active'
          >
            ซื้อขาย
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/donate'
            className='navbar-item'
            activeClassName='navbar-item-active'
          >
            บริจาค
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/contact'
            className='navbar-item'
            activeClassName='navbar-item-active'
          >
            ติดต่อเรา
          </NavLink>
        </li>
      </ul>

      <button class='navbar-bell' href='#'>
        <img class='bell-icon' src={Bell_icon_src} />
      </button>
      <button class='navbar-profile'>
        <img class='profile-icon' src={Profile_icon_src} />
      </button>
    </nav>
  )
}

export default Navbar
