import './Popup2.scoped.css'

import React from 'react'

function Popup2({ popup1, popup2 }) {
  return (
    <div className='box-large'>
      <div className='popup-closeButton' onClick={popup2.close}>
        X
      </div>
      <div className='top-box'>
        <div className='left-box'>
          <div className='header'>
            <div className='text-head'>ลงทะเบียนขายสุนัข</div>
            <div className='text-special'>เลือกรูปแบบการการันตี</div>
          </div>

          <div className='line' />
          <div className='text-input-box'>
            <div className='text-box'>
              <div className='text-origin'>สุนัขพันธุ์</div>
              <div className='text-origin'>เพศ</div>
              <div className='text-origin'>อายุ</div>
              <div className='text-origin'>ราคา</div>
            </div>
            <div className='input-box'>
              <div className='text-special'>กรุณาเลือกสายพันธุ์</div>
              <div className='text-special'>เลือกเพศ</div>
              <div className='input' />
              <div className='input' />
            </div>
          </div>
          <div className='detail'>รายละเอียด :</div>
          <div className='input-detail' />
        </div>
        <div className='right-box'>
          <div className='addPicture'>เพิ่มรูปภาพ</div>
          <div className='line2' />
          <div className='show-picture-cover'>
            <div className='show-picture' />
            <div className='show-picture' />
            <div className='show-picture' />
            <div className='show-picture' />
          </div>
          <div className='text-input-box'>
            <div className='text-box-2'>
              <div className='text-origin-2'>ชื่อบัญชี</div>
              <div className='text-origin-2'>รายละเอียด</div>
            </div>
            <div className='input-box-2'>
              <div className='input-account' />
              <div className='input-detail-2' />
            </div>
          </div>
        </div>
      </div>
      <div className='bottom-box'>
        <div className='text-head'>สร้างแบบสอบถามสำหรับคัดเลือกผู้ซื้อ</div>
        <div className='line-bottom' />
        <div className='text-input-bottom'>
          <div className='text-box-bottom'>
            <div className='text-bottom'>คำถามข้อที่ 1</div>
            <div className='text-bottom'>คำถามข้อที่ 2</div>
            <div className='text-bottom'>คำถามข้อที่ 3</div>
            <div className='text-bottom'>คำถามข้อที่ 4</div>
            <div className='text-bottom'>คำถามข้อที่ 5</div>
          </div>
          <div className='input-box-bottom'>
            <div className='input-bottom' />
            <div className='input-bottom' />
            <div className='input-bottom' />
            <div className='input-bottom' />
            <div className='input-bottom' />
          </div>
        </div>
      </div>
      <div className='footer'>
        <div className='text-footer'>
          *หมายเหตุ : สามารถตั้งคำถามได้มากสุด 5 ข้อ
        </div>
        <div className='footer-button'>ลงทะเบียนสุนัข</div>
      </div>
    </div>
  )
}

export default Popup2
