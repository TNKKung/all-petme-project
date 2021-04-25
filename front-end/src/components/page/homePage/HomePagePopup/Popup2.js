import './Popup2.scoped.css'

import React from 'react'

function Popup2({ popup1, popup2 }) {
  return (
    <div>
      <div className='popup2-top-box'>
        <div className='popup2-left-box'>
          <div className='popup-text-head'>ลงทะเบียนขายสุนัข</div>
          <div className='popup-text-special'>เลือกรูปแบบการการันตี</div>
          <div className='popup-line2' />
          <div>สุนัขพันธุ์</div>
          <div className='popup-input' />
        </div>
        <div className='popup2-right-box'>right</div>
      </div>
      <div className='popup2-bottom-box'>
        <div className='popup-text-head'>
          สร้างแบบสอบถามสำหรับคัดเลือกผู้ซื้อ
        </div>
        <div className='popup-line2' />
      </div>
      <div className='popup2-footter'>
        <div>หมายเหตุ : สามารถตั้งคำถามได้มากสุด 5 ข้อ</div>
        <div className='popup2-footer-button'>ลงทะเบียนสุนัข</div>
      </div>
    </div>
  )
}

export default Popup2
