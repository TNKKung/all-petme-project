import './Popup1.scoped.css'

import popupImg1 from './img/popup1.png'
import popupImg2 from './img/popup2.png'
import React, { useState, useEffect ,} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useHistory
} from 'react-router-dom'

function Popup1({ popup1, popup2, setType}) {
  const dataUser = JSON.parse(localStorage.getItem("user"))
  const history = useHistory();
  return (
    <div className='popup-box-large'>
      <div className='popup-closeButton' onClick={popup1.close}>
        X
      </div>
      <p className='popup-text1'>ข้อตกลงการซื้อขายและการบริจาค</p>
      <div className='popup-line' />
      <p className='popup-text2'>
        - การเลือกรูปแบบลงบริจาคสุนัข ผู้ลงจะไม่สามารถสร้างกำไรใดๆได้ และจำเป็น
        ต้องสร้างคำถามสำหรับคัดเลือกผู้ซื้ออย่างน้อย 2 ข้อเป็นอย่างต่ำ
      </p>
      <p className='popup-text3'>
        - การเลือกรูปแบบลงขาย ผู้ลงสามารถสร้างกำไรจากตัวสุนัขได้ และสามารถ
        เลือกได้ว่าจะเอาระบบการันตีจากผู้ขายหรือไม่ หากไม่เลือกทาง PetMe
        จะไม่รับผิดชอบ ผลกระทบที่เกิดขึ้นใดๆทั้งสิ้นจากการซื้อขายในครั้งนี้
      </p>
      <div className='popup-img-cover'>
        <img src={popupImg1} className='popup-img' />
        <img src={popupImg2} className='popup-img' />
      </div>
      <div className='popup-button-cover'>
        <div
          className='popup-button'
          onClick={() => {
            if(dataUser == null){
              let path = `/login`;
              history.push(path);
            }else{
              popup1.close()
              popup2.open()
              setType('ขาย')
            }
          }}
        >
          ลงขายสุนัข
        </div>
        <div
          className='popup-button'
          onClick={() => {
            if(dataUser == null){
              let path = `/login`;
              history.push(path);
            }else{
              popup1.close()
              popup2.open()
              setType('บริจาค')
            }
          }}
        >
          ลงบริจาค
        </div>
      </div>
    </div>
  )
}

export default Popup1
