import './home2.css'
import Slider from './slider'
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from 'react-router-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import Dealing_dog_src from './img/dealing_dog.jpeg'
import Office_dog_src from './img/office_dog.png'
import Danated_dog_src from './img/donated_dog.jpg'
import Welcome_background_src from './img/welcome_dog.png'

import Bottom_logo_icon from './img/bottom-icon.png'
import Address_icon_src from './img/address_icon.png'
import Tel_icon_src from './img/tel_icon.png'
import Mail_icon_src from './img/mail_icon.png'

library.add(fas, fab, far)

const Home2 = () => {
  // const [classStyle, setClassStyle] = useState('menu-header')
  // const [newsStyle, setNewsStyle] = useState('news')
  // const [astStyle, setAstStyle] = useState('ast')

  const [currentPage, setCurrentPage] = useState('home')

  // const setToggle = () => {
  //   classStyle == 'menu-header'
  //     ? setClassStyle('menu-header active')
  //     : setClassStyle('menu-header')
  //   classStyle == 'menu-header active'
  //     ? setNewsStyle('news')
  //     : setNewsStyle('hide')
  //   classStyle == 'menu-header active'
  //     ? setAstStyle('ast-fullbg')
  //     : setAstStyle('ast')
  //   console.log({ astStyle })
  // }

  return (
    <div>
      <div className='sizePane'>
        <div className='news-section'>
          <div className={'news'}>
            <Slider />
          </div>
        </div>
        <div class='welcome-section'>
          <div class='welcome-pad'>
            <img class='welcome-bg' src={Welcome_background_src} />
            <div class='welcome-font-pad'>
              <div className='welcome-Header-Pad'>
                <div class='welcome-Header'>ยินดีต้อนรับสู่ PetME</div>
              </div>
              <div className='welcome-sec2'>
                <div className='welcome-sec2-inside'>
                  <p class='welcome-text'>
                    &emsp;&emsp;เว็บไซต์สำหรับการบริจาคและการรับเลี้ยงสุนัขเพื่อช่วยลดจำนวนสุนัขไร้บ้าน
                    และสำหรับการซื้อขายสุนัขที่มีความน่าเชื่อถือมาให้ผู้ซื้อโดยตรงคุณจึงมั่นใจได้
                    100% ว่าซื้อน้องหมาจาก PetMe
                    ได้รับสุนัขแน่นอนและมีใบรับประกันจากผู้ขายส่งให้ลูกค้าทุกคน
                  </p>
                  <div class='login-button-pad'>
                    <button class='welcome-login-button'>
                      <Link to='/login'>
                        <div className='login-text'>
                          <div className='ok'>เข้าสู่ระบบ</div>
                        </div>
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='activity-section'>
          <div className='activity-section-inside'>
            <div class='activity-pad'>
              <div class='activity-header'>รับเลี้ยงสุนัข</div>
              <div class='activity-center-pad'>
                <img class='activity-img' src={Danated_dog_src} />
              </div>
              <div class='activity-details'>สำหรับบุคลที่มีใจเมตตา</div>
              <div class='activity-details'> ที่อยากรับเลี้ยงสุนัข</div>
              <div class='activity-details'>ที่ไม่มีเจ้าของดูแล</div>
              <div class='activity-center-pad'>
                <button class='adopt-button'>รับเลี้ยง</button>
              </div>
            </div>
            <div class='activity-pad'>
              <div class='activity-header'>ตลาดซื้อขายสุนัข</div>
              <div class='activity-center-pad'>
                <img class='activity-img' src={Dealing_dog_src} />
              </div>
              <div class='activity-details'>สำหรับบุคคลที่อยากหาซื้อสุนัข</div>
              <div class='activity-details'>สายพันธ์ุที่ต้องการ</div>
              <div class='activity-center-pad'>
                <button class='dealing-button'>ไปตลาดซื้อขาย</button>
              </div>
            </div>
            <div class='activity-pad'>
              <div class='activity-header'>ลงขายและบริจาคสุนัข</div>
              <div class='activity-center-pad'>
                <img class='activity-img' src={Office_dog_src} />
              </div>
              <div class='activity-details'>สำหรับบุคคลที่อยากลงขาย</div>
              <div class='activity-details'>หรือลงหาบ้านใหม่ให้สุนัข</div>
              <div class='activity-center-pad'>
                <button class='office-button'>ลงขาย/บริจาค</button>
              </div>
            </div>
          </div>
        </div>
        <div className='contact-section'>
          <div class='bottom-icon-pad'>
            <img class='bottom-icon' src={Bottom_logo_icon}></img>
            <div class='bottom-icon-text'>PetMe</div>
          </div>

          <div class='contact-pad'>
            <div class='contact-pad-roll-1'>
              <img class='tel-icon' src={Tel_icon_src} />
              <div class='contact-text'>Phone:</div>
            </div>
            <div class='contact-pad-roll-2'>
              <div class='contact-text'>xxx-xxx-xxxx</div>
            </div>
          </div>
          <div class='contact-pad'>
            <div class='contact-pad-roll-1'>
              <img class='mail-icon' src={Mail_icon_src} />
              <div class='contact-text'>Email:</div>
            </div>
            <div class='contact-pad-roll-2'>
              <div class='contact-text'>petme@gmail.com</div>
            </div>
          </div>
          <div class='contact-pad'>
            <div class='contact-pad-roll-1'>
              <img class='address-icon' src={Address_icon_src} />
              <div class='contact-text'>ที่อยู่:</div>
            </div>
            <div class='contact-pad-roll-2'>
              <div class='contact-text'>เลขที่ 1 ซอยฉลองกรุง 1</div>
              <div class='contact-text'>เขตลาดกระบัง กรุงเทพมหานคร</div>
              <div class='contact-text'>ประเทศไทย 10520</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home2

// const Home2 = ()=> {
//     return (
//         <div>
//         <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet" />
//         <section id="Bnavbar-bg">
//             <div class="container">
//                 <div class="row">
//                     <div class="col-md-3">
//                         <h1>Hello World</h1>
//                     </div>
//                     <div class="col-md-6">
//                         <h1>Hello World</h1>
//                     </div>
//                 </div>
//             </div>
//         </section>

//         </div>
//     )
// }

// export default Home2
