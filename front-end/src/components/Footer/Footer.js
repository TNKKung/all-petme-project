import React from 'react'
import './Footer.scoped.css'

import Bottom_logo_icon from './img/bottom-icon.png'
import Address_icon_src from './img/address_icon.png'
import Tel_icon_src from './img/tel_icon.png'
import Mail_icon_src from './img/mail_icon.png'

function Footer() {
  return (
    <div className='contact-section'>
      <div class='bottom-icon-pad'>
        <img class='bottom-icon' src={Bottom_logo_icon} />
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
  )
}

export default Footer
