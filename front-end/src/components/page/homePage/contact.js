import './contact.css'
import React,{useState, useEffect} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import GoogleMapReact from 'google-map-react';


import { library } from '@fortawesome/fontawesome-svg-core'
import { faAlignJustify, fas } from "@fortawesome/free-solid-svg-icons";
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
import Address_icon_black_src from './img/address_icon_black.png'
import Tel_icon_black_src from './img/tel_icon_black.png'
import Mail_icon_black_src from './img/mail_icon_black.png'


library.add(fas, fab, far);

const Contact = ()=> {
    const [classStyle, setClassStyle] = useState('menu-header')
    const [astStyle, setAstStyle] = useState('ast')

    const [currentPage,setCurrentPage] = useState('home')

    const setToggle = () => {
        classStyle == 'menu-header'?setClassStyle('menu-header active'):setClassStyle('menu-header')
        classStyle == 'menu-header active'?setAstStyle('ast-fullbg'):setAstStyle('ast')
        console.log({astStyle})
    }
    // ----------------------------------------------------------------condition contract--------------------------------------------
    const [Name,setName] = useState('')                       /////////////////Name-Surname
    const [alertBoxName,setAlertBoxName] = useState(false)  
    const [NameBorder,setNameBorder] = useState('contract-inputTextB')
    function CheckName(val){
        if(Name.length <= 0)
        {setAlertBoxName(true); setNameBorder('contract-inputTextB-alert'); return true}
        else{setAlertBoxName(false); setNameBorder('contract-inputTextB');return false}
    }
    function getName(val){setName(val.target.value)}

    const [Email,setEmail] = useState('')                     /////////////////Email
    const [alertBoxEmail,setAlertBoxEmail] = useState(false)   
    const [EmailBorder,setEmailBorder] = useState('contract-inputTextB')
    function CheckEmail(val){
        if(Email.length <= 0 || !Email.includes('@') || !(Email.includes('com')||val.target.value.includes('co.th')))
        {setAlertBoxEmail(true); setEmailBorder('contract-inputTextB-alert');return true}
        else{setAlertBoxEmail(false); setEmailBorder('contract-inputTextB');return false}
    }
    function getEmail(val){setEmail(val.target.value)}

    const [alertBoxPhone,setAlertBoxPhone] = useState(false)  /////////////////PhoneNumber
    const [PhoneBorder,setPhoneBorder] = useState('contract-inputTextB')
    const [PhoneNumber,setPhoneNumber] = useState('')
    function CheckPhone(val){
        if(PhoneNumber.length != 10)
        {setAlertBoxPhone(true); setPhoneBorder('contract-inputTextB-alert');return true}
        else{setAlertBoxPhone(false); setPhoneBorder('contract-inputTextB');return false}
    }
    function NumberOnly(val){
        const re = /^[0-9\b]+$/;
          if (val.target.value === '' || re.test(val.target.value)) {
            setPhoneNumber(val.target.value)
          }
    }

    const [Topic,setTopic] = useState('')                 /////////////////Topic
    const [alertBoxTopic,setAlertBoxTopic] = useState(false)  
    const [TopicBorder,setTopicBorder] = useState('contract-inputTextB')
    function CheckTopic(val){
        if(Topic.length <= 0)
        {setAlertBoxTopic(true); setTopicBorder('contract-inputTextB-alert');return true}
        else{setAlertBoxTopic(false); setTopicBorder('contract-inputTextB');return false}
    }
    function getTopic(val){setTopic(val.target.value)}

    const [Textbox,setTextbox] = useState('')                /////////////////Textbox
    const [alertBoxTextbox ,setAlertBoxTextbox ] = useState(false)  
    const [TextboxBorder,setTextboxBorder] = useState('contract-inputTextBLong')
    function CheckTextbox (val){
        if(Textbox.length <= 0)
        {setAlertBoxTextbox (true); setTextboxBorder('contract-inputTextBLong-alert');return true}
        else{setAlertBoxTextbox(false); setTextboxBorder('contract-inputTextBLong');return false}
    }
    function getTextbox(val){setTextbox(val.target.value)}

    const [sumitText,setSumitText] = useState('Not summit')
    function checkSumit(){
        var a = CheckName();
        var b = CheckEmail();
        var c = CheckPhone();
        var d = CheckTopic();
        var e = CheckTextbox();
        if(a||b||c||d||e){
            setSumitText('summit false!')
        }
        else{
            setSumitText('summit success!')
            setName('')
            setEmail('')
            setPhoneNumber('')
            setTopic('')
            setTextbox('')
        }
    }
    // ----------------------------------------------------------------condition contract End--------------------------------------------
    
    

    return (
        <div>
            <nav>
                <li class='menu'>               
                    <div class = 'menu-logo'><img src={Logo_icon_src} class='menu-logo-img'/></div>
                    <li class = {classStyle}><div className={astStyle}>หน้าหลัก</div></li>
                    <li class = {classStyle}><div className={astStyle}>เกี่ยวกับ</div></li>
                    <li class = {classStyle}><div className={astStyle}>ซื้อขาย</div></li>
                    <li class = {classStyle}><div className={astStyle}>บริจาค</div></li>
                    <li class = {classStyle}><div className='current-ast'><div class = 'paddy'>ติดต่อเรา</div></div></li>


                    <li class = 'menu-header logo button'><button class = 'a-center' href='#'><img class ='bell-icon' src={Bell_icon_src}/></button></li>
                    <li class = 'menu-header logo button profile'><botton class='profileBtt'><img class = 'profile-icon' src = {Profile_icon_src}/></botton></li>
                    <li class = 'toggle' onClick = {setToggle}><button class ='toggle-button'><FontAwesomeIcon icon={['fas', 'bars']}/></button></li>

                </li>
            </nav>
            <div className= 'sizePane'>
            
            {/* ------------------ติดต่อเรา--------------- */}
            <div className = 'pageStyle'> 
                <div class='contract-Topic'>
                    <img class='contract-aboutTopic-bg' src={about_background_src}></img>
                    <div class='contract-aboutTopic'>
                        <p class='contract-aboutTopic-text'>ติดต่อเรา</p>
                    </div>
                </div>
            {/* ---------------------address abd Contract------------------ */}
                <div className = 'contract-addressContractBox'>
                
                <div className = 'contract-addressContractWrap'>
                <div className = 'contract-addressBox'>
                    <h1 className = 'contract-headText'>ที่อยู่</h1>
                    <div className = 'contract-textBox'>
                        <img className='contract-logoAddress' src={Address_icon_black_src}></img>
                        <p className = 'contract-textAddress'>เลขที่ 1 ซอยฉลองกรุง 1 เขตลาดกระบัง กรุงเทพมหานคร ประเทศไทย 10520</p>
                    </div>
                    <div className = 'contract-textBox'>
                        <img className='contract-logoAddress' src={Tel_icon_black_src}></img>
                        <p className = 'contract-textAddress'>xxx-xxx-xxxx</p>
                    </div>
                    <div className = 'contract-textBox'>
                        <img className='contract-logoAddress' src={Mail_icon_black_src}></img>
                        <p className = 'contract-textAddress'>petMe@gmail.com</p>
                    </div>

                </div>

                <div className = 'contract-contractBox'>
                        <h1 className = 'contract-headText'>ติดต่อเรา</h1>
                        <div className = 'contract-inputLayer'>
                            <div>
                                <input name="Name" type="text" class ={NameBorder} placeholder="ชื่อจริง-นามสกุล" onInput={getName} maxlength="40" onBlur={CheckName} value={Name}></input>
                                {alertBoxName?<p className='contract-alert-text'>กรุณากรอกชื่อ</p>:null}
                            </div>
                            
                            <div>
                                <input type="text" class ={EmailBorder}placeholder="อีเมล" onInput={getEmail} onBlur={CheckEmail} maxlength="50" value={Email}></input>
                                {alertBoxEmail?<p className='contract-alert-text'>กรุณากรอกอีเมลให้ถูกต้อง</p>:null}
                            </div>
                            
                        </div>
                        <div className = 'contract-inputLayer'>
                            <div>
                                <input type="text" class ={PhoneBorder}placeholder="เบอร์โทรศัพท์" onInput={NumberOnly} onBlur={CheckPhone} maxlength="10" value={PhoneNumber}></input>
                                {alertBoxPhone?<p className='contract-alert-text'>กรุณากรอกเบอร์ให้ถูกต้อง 0xxxxxxxxx</p>:null}
                            </div>
                            
                            <div>
                                <input type="text" class ={TopicBorder}placeholder="หัวข้อ" onInput={getTopic} onBlur={CheckTopic} maxlength="60" value={Topic}></input>
                                {alertBoxTopic?<p className='contract-alert-text'>กรุณากรอกหัวข้อ</p>:null}
                            </div>
                        </div>
                        <textarea type="text" class = {TextboxBorder} placeholder="ข้อความ" onInput={getTextbox} onBlur={CheckTextbox} maxlength="1000" value={Textbox}></textarea>
                        {alertBoxTextbox?<p className='contract-alert-text'>กรุณาพิมพ์เนื้อหา</p>:null}
                        
                        
                        <button className='contract-buttonSumit' onMouseUp={checkSumit}>ส่ง</button>
                        <p className='contract-alert-text'>{sumitText}</p>    
                </div>
                </div>
                </div>
                {/* --------google map------- */}
                <div style={{height: '300px', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key:''}}
                        defaultCenter={{ lat: 13.727732292542216, lng: 100.77078854813402 }}
                        defaultZoom={18}
                    >
                    <div lat={13.727732292542216} lng={100.77078854813402}>
                        <div className = 'contract-pointPane'>
                            <img className='contract-logoAddress' src={Bottom_logo_icon}></img>
                            <div className = 'contract-pointText'>PetMe</div>
                        </div>
                        
                    </div>
                    </GoogleMapReact>
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

export default Contact











