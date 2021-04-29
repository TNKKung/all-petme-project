import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.scoped.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo_icon_src from './img/top-icon.png'
import Bell_icon_src from './img/bell-icon.png'
import Profile_icon_src from './img/profile.jpg'

function Navbar() {
  return (
    <nav className='Mnavbar-wrapper'>
      <div className='Mnavbar-logo'>
        <img src={Logo_icon_src} />
      </div>

      <ul className='Mnavbar-links'>
        <li>
          <NavLink
            exact
            to='/'
            className='Mnavbar-item'
            activeClassName='Mnavbar-item-active'
          >
            หน้าหลัก
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/about'
            className='Mnavbar-item'
            activeClassName='Mnavbar-item-active'
          >
            เกี่ยวกับ
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/market'
            className='Mnavbar-item'
            activeClassName='Mnavbar-item-active'
          >
            ซื้อขาย
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/donate'
            className='Mnavbar-item'
            activeClassName='Mnavbar-item-active'
          >
            บริจาค
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/contact'
            className='Mnavbar-item'
            activeClassName='Mnavbar-item-active'
          >
            ติดต่อเรา
          </NavLink>
        </li>
      </ul>
      {/* <div className='Mnavbar-links'>
        <button className='Mnavbar-item'>หน้าหลัก</button>
        <button className='Mnavbar-item'>หน้าหลัก</button>
        <button className='Mnavbar-item'>หน้าหลัก</button>
        <button className='Mnavbar-item'>หน้าหลัก</button>

      </div> */}

      <button class='Mnavbar-bell' href='#'>
        <img class='bell-icon' src={Bell_icon_src} />
      </button>
      <NavLink to='/profile' className='Mnavbar-profile'>
        <img class='profile-icon' src={Profile_icon_src} />
      </NavLink>
    </nav>
  )
}

export default Navbar
