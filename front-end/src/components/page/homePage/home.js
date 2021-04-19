import React from 'react'
import './home.css';
import Slider from './slider'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
  

import Dealing_dog_src from './img/dealing_dog.jpeg'
import Office_dog_src from './img/office_dog.png'
import Danated_dog_src from './img/donated_dog.jpg'
import Welcome_background_src from './img/welcome_dog.png'
import Profile_icon_src from './img/profile.jpg'
import Bell_icon_src from './img/bell-icon.png'
import Logo_icon_src from './img/top-icon.png'
import Bottom_logo_icon from './img/bottom-icon.png'
import Address_icon_src from './img/address_icon.png'
import Tel_icon_src from './img/tel_icon.png'
import Mail_icon_src from './img/mail_icon.png'

const Home = () => {
    
    return (
        
        <div className = 'Home'>   
            <div class = "home-background"> 
                <div class='navBar'>
                    <div class = 'nav-leftside-pad'>
                        <img class= 'navbar-logo-icon' src = {Logo_icon_src}/>
                    </div>
                    <div class = 'nav-rightside-pad'>
                        <div class= 'current-navbar-header-button'>หน้าหลัก</div>
                        <button class= 'navbar-header-button'>เกี่ยวกับ</button>
                        <button class= 'navbar-header-button'>ซื้อขาย</button>
                        <button class= 'navbar-header-button'>บริจาค</button>
                        <button class= 'navbar-header-button'>ติดต่อเรา</button>
                        <img class= 'navbar-bell-icon' src={Bell_icon_src}/>
                        <img class= 'navbar-profile-icon' src={Profile_icon_src}/>
                    </div>
                    
                </div>
                
                {/* <div class = 'news-pad'> */}
                        {/* <img class='news-img' src={News_dog_src}/> */}
                        {/* <div class = 'news-img'>
                            <AwesomeSlider>
                                <div><img src={News_dog_src} className="news-img"/></div>
                                <div><img src={News_dog_src} className="news-img"/></div>
                                <div><img src={News_dog_src} className="news-img"/></div>
                            </AwesomeSlider>
                        </div> */}
                {/* </div> */}

                <div class = 'news-pad'>
                    <div class='news'><Slider/></div>
                </div>

                <div class ='welcome-pad-main'>
                <div class = 'welcome-pad'>
                    <img class= 'welcome-bg' src={Welcome_background_src}/>
                    <div class= 'welcome-font-pad'>
                        <div class = 'welcome-Header'>ยินดีต้อนรับสู่ PetME</div>
                        <p class = 'welcome-text'>&emsp;&emsp;เว็บไซต์สำหรับการบริจาคและการรับเลี้ยงสุนัขเพื่อช่วยลดจำนวนสุนัขไร้บ้าน และสำหรับการซื้อขายสุนัขที่มีความน่าเชื่อถือมาให้ผู้ซื้อโดยตรงคุณจึงมั่นใจได้ 100% ว่าซื้อน้องหมาจาก PetMe ได้รับสุนัขแน่นอนและมีใบรับประกันจากผู้ขายส่งให้ลูกค้าทุกคน</p>
                        <div class='login-button-pad'>
                        <Link to='/login'><button class='welcome-login-button'>เข้าสู่ระบบ</button></Link>
                        </div>
                    </div>
                </div>    
                </div>

                
                <div class = 'activities-pad'>
                <div class ='activities-pad-inside'>
                    <div class= 'activity-pad'>
                        <div class='activity-header'>รับเลี้ยงสุนัข</div>
                        <div class='activity-center-pad'><img class='activity-img' src={Danated_dog_src}/></div>
                        <div class='activity-details'>สำหรับบุคลที่มีใจเมตตา ที่อยากรับเลี้ยงสุนัขที่ไม่มีเจ้าของดูแล</div>
                        <div class='activity-center-pad'><button class='adopt-button'>รับเลี้ยง</button></div>
                    </div>
                    <div class= 'activity-pad'>
                        <div class='activity-header'>ตลาดซื้อขายสุนัข</div>
                        <div class='activity-center-pad'><img class='activity-img' src={Dealing_dog_src}/></div>
                        <div class='activity-details'>สำหรับบุคคลที่อยากหาซื้อสุนัขสายพันธ์ุที่ต้องการ</div>
                        <div class='activity-center-pad'><button class='dealing-button'>ไปตลาดซื้อขาย</button></div>
                    </div>
                    <div class= 'activity-pad'>
                        <div class='activity-header'>ลงขายและบริจาคสุนัข</div>
                        <div class='activity-center-pad'><img class='activity-img' src={Office_dog_src}/></div>
                        <div class='activity-details'>สำหรับบุคคลที่อยากลงขายหรือลงหาบ้านใหม่ให้สุนัข</div>
                        <div class='activity-center-pad'><button class='office-button'>ลงขาย/บริจาค</button></div>
                    </div>
                </div>
                </div>

                <div class = 'contacts-pad'>
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

export default Home 

