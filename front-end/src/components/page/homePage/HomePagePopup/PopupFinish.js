import './PopupFinish.scoped.css'

import React from 'react'
import { Link } from 'react-router-dom'

function PopupFinish({ popupFinish }) {
  return (
    <div>
      <div className='big-box'>
        <div className='text'>การลงทะเบียนสมบูรณ์</div>
        {/* <Link to='/'> */}
        <div className='button' onClick={popupFinish.close}>
          กลับสู่หน้าหลัก
        </div>
        {/* </Link> */}
      </div>
    </div>
  )
}

export default PopupFinish
