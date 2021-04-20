import './about.css'
import React,{useState, useEffect} from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";


import Profile_icon_src from './img/profile.jpg'
import Bell_icon_src from './img/bell-icon.png'
import Logo_icon_src from './img/top-icon.png'
import Bottom_logo_icon from './img/bottom-icon.png'
import Address_icon_src from './img/address_icon.png'
import Tel_icon_src from './img/tel_icon.png'
import Mail_icon_src from './img/mail_icon.png'

import about_background_src from './img/welcome_dog.png' //need to edit

import TTTPhoto from './img/TTT.jpg'
import MMMPhoto from './img/MMM.jpg'
import AAAPhoto from './img/AAA.jpg'
import BBBPhoto from './img/BBB.jpg'

library.add(fas, fab, far);



const About = ()=> {

    const [classStyle, setClassStyle] = useState('menu-header active')
    const [astStyle, setAstStyle] = useState('ast')

    const [currentPage,setCurrentPage] = useState('home')

    const setToggle = () => {
        classStyle == 'menu-header'?setClassStyle('menu-header active'):setClassStyle('menu-header')
        classStyle == 'menu-header active'?setAstStyle('ast-fullbg'):setAstStyle('ast')
        console.log({astStyle})
    }

    return (
        <div>
            
            <nav>
            
                <li class='menu'>               
                    <div class = 'menu-logo'><img src={Logo_icon_src} class='menu-logo-img'/></div>
                    <li class = {classStyle}><div className={astStyle}>หน้าหลัก</div></li>
                    <li class = {classStyle}><div className='current-ast'><div class = 'paddy'>เกี่ยวกับ</div></div></li>
                    <li class = {classStyle}><div className={astStyle}>ซื้อขาย</div></li>
                    <li class = {classStyle}><div className={astStyle}>บริจาค</div></li>
                    <li class = {classStyle}><div className={astStyle}>ติดต่อเรา</div></li>


                    <li class = 'menu-header logo button'><button class = 'a-center' href='#'><img class ='bell-icon' src={Bell_icon_src}/></button></li>
                    <li class = 'menu-header logo button profile'><botton class='profileBtt'><img class = 'profile-icon' src = {Profile_icon_src}/></botton></li>
                    <li class = 'toggle' onClick = {setToggle}><button class ='toggle-button'><FontAwesomeIcon icon={['fas', 'bars']}/></button></li>

                </li>
            </nav>
            <div className= 'sizePane'>
            
            {/* ------------------เกี่ยวกับ--------------- */}
            <div className = 'pageStyle'> 
                <div class='Topic'>
                    <img class='aboutTopic-bg' src={about_background_src}></img>
                    <div class='aboutTopic'>
                        <p class='aboutTopic-text'>เกี่ยวกับเรา</p>
                    </div>
                </div>
                <div className = 'aboutHeader'>
                    <h1 class='font-aboutHeader'>ทีมของเรา</h1>
                </div>
                
                <div className = 'TeamMemberGrid'>
                    <div className = 'memberBox'>
                        <div class='memberImageBox'>
                            <img class='memberImage' src = {Profile_icon_src}></img>
                        </div>
                        <div className = 'memberName-Box'>
                            <p className = 'memberName-Text'>พิพิธพงศ์ จิตภักดิ์ไทย(เดย์)</p>
                            <p className = 'memberName-Text'>61010750</p>
                        </div>
                    </div>
                    <div className = 'memberBox'>
                        <div class='memberImageBox'>
                            <img class='memberImage' src = {MMMPhoto}></img>
                        </div>
                        <div className = 'memberName-Box'>
                            <p className = 'memberName-Text'>วิภาดา มีสกุล(มุก)</p>
                            <p className = 'memberName-Text'>61010972</p>
                        </div>
                    </div>
                    <div className = 'memberBox'>
                        <div class='memberImageBox'>
                            <img class='memberImage' src = {AAAPhoto}></img>
                        </div>
                        <div className = 'memberName-Box'>
                            <p className = 'memberName-Text'>กฤติกามาส สุโนภักดิ์(เอริก้า)</p>
                            <p className = 'memberName-Text'>62010029</p>
                        </div>
                    </div>
                </div>
                <div className = 'TeamMemberGrid'>
                    <div className = 'memberBox'>
                        <div class='memberImageBox'>
                            <img class='memberImage' src = {BBBPhoto}></img>
                        </div>
                        <div className = 'memberName-Box'>
                            <p className = 'memberName-Text'>ชาติกุล รัตนฤทธิกุล(บริล)</p>
                            <p className = 'memberName-Text'>62010193</p>
                        </div>
                    </div>
                    <div className = 'memberBox'>
                        <div class='memberImageBox'>
                            <img class='memberImage' src = {Profile_icon_src}></img>
                        </div>
                        <div className = 'memberName-Box'>
                            <p className = 'memberName-Text'>ณัฐภูมิ เพ็ชรชนะ(ปอนด์)</p>
                            <p className = 'memberName-Text'>62010284</p>
                        </div>
                    </div>
                    <div className = 'memberBox'>
                        <div class='memberImageBox'>
                            <img class='memberImage' src = {TTTPhoto}></img>
                        </div>
                        <div className = 'memberName-Box'>
                            <p className = 'memberName-Text'>ณัฐวุฒิ ครองอารีธรรม(ต้อม)</p>
                            <p className = 'memberName-Text'>62010293</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* -----------the END-------------- */}

            <div className = 'contact-section'>
                <div class='bottom-icon-pad'>
                        <img class ='bottom-icon' src={Bottom_logo_icon}></img>
                        <div class = 'bottom-icon-text'>PetMe</div>
                    </div>

                    <div class='contact-pad'>
                        <div class='contact-pad-roll-1'>
                            <img class='tel-icon' src = {Tel_icon_src}/>
                            <div class='contact-text'>Phone:</div>
                        </div>
                        <div class='contact-pad-roll-2'>
                            <div class='contact-text'>xxx-xxx-xxxx</div>
                        </div>
                    </div>
                <div class='contact-pad'>
                        <div class='contact-pad-roll-1'>
                            <img class='mail-icon' src = {Mail_icon_src}/>
                            <div class='contact-text'>Email:</div>
                        </div>
                        <div class='contact-pad-roll-2'>
                            <div class='contact-text'>petme@gmail.com</div>
                        </div>
                    </div>
                <div class='contact-pad'>
                        <div class='contact-pad-roll-1'>
                            <img class='address-icon' src = {Address_icon_src}/>
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

export default About











