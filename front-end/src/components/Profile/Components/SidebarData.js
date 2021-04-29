import './profile.css';
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {SidebarData} from './SidebarData';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


import Wall_dog from './img/wallpaper.jpg'
import Profile_Dog from './img/profile3.jpg'
import Profile_Dog2 from './img/profile1.jpg'

import Profile_leftside_pic_src from './img/cat.jpg'
import Profile_item1_src from './img/item1.jpg'
import Profile_item2_src from './img/item2.jpg'
import Profile_icon_src from './img/profile.jpg'
import Profile_wallpaper_src from './img/wall.jpg'

import PopUp from './popUp'
import {
    BrowserRouter as Router,
    useHistory ,                              
    Switch,
    Route,                   
    Link,
    useRouteMatch
} from "react-router-dom";
// import validator from 'validator'

import CardItem_Accept from './CardItem_Accept';
import CardItem_Wait from './CardItem_Wait';
import CardStore from './CardStoreSell';
import CardStoreSold from './CardStoreSold';
import CardStoreSell from './CardStoreSell';
// import PetCard from '.PetCard'


library.add(fas, fab, far);

const Profile = () => {
    const [profileTab, setprofileTab] = useState([true, false, false, false, false])

    const profileSwitch = (selectedTab) => {
        if (selectedTab === 1) {
            setprofileTab([true, false, false, false, false])
        }
        else if (selectedTab === 2) {
            setprofileTab([false, true, false, false, false])
        }
        else if (selectedTab === 3) {
            setprofileTab([false, false, true, false, false])
        }
        else if (selectedTab === 4) {
            setprofileTab([false, false, false, true, false])
        }
        else {
            setprofileTab([false, false, false, false, true])
        }
    }

    const showPopUpsell = (type) => {
        if (type === 'Sell') {
            setPopUp(true)
            // getTotalPaid()
        }
    }
    // --------------------------------------------Account Page----------------------------------------------------------
    const Account = () =>{
        console.log("Hello in sayHello")
    }

    const showPopUpEdit = (type) => {
        if (type === 'Edit') {
            setPopUp(true)
            // getTotalPaid()
        }
    }

    // ******************Edit****************
    
    // var Username,Password,Name,Email,Tell,Birth,Address,Road,Sub_district,District,Province,Postal_code;

    // const Register = () => {

    // const inputRefs = React.useRef([
    //     React.createRef(), React.createRef(),
    //     React.createRef(), React.createRef(),
    //     React.createRef(), React.createRef(),
    //     React.createRef(), React.createRef(),
    //     React.createRef(), React.createRef(),
    //     React.createRef(), React.createRef(),

    // ]);

    // var maxID = '15'
    // var maxName = '20'
    // var maxPass = '15'
    // var maxEmail = '20'
    // var maxMobile = '10'
    // var maxAddress = '40'
    // var maxRoad = '20'

    // const [emailErrorSign, setEmailErrorSign] = useState(' ')
    // const [mobileErrorSign, setMobileErrorSign] = useState(' ')
    // const [passErrorSign, setPassErrorSign] = useState(' ')
    // const [nameErrorSign, setNameErrorSign] = useState(' ')
    // const [IDErrorSign, setIDErrorSign] = useState(' ')
    // const [roadErrorSign, setRoadErrorSign] = useState(' ')
    // const [addressErrorSign, setAddressErrorSign] = useState(' ')
    // const [dateErrorSign, setDateErrorSign] = useState(' ')
    // const [district,setDistrict] = useState(' ')
    // const [subDistrict,setSubDistrict] = useState(' ')
    // const [province,setProvince] = useState(' ')
    // const [postalCode,setPostalCode] = useState(' ')
    
    
    // const history = useHistory();

    // const [selectedDate, setSelectedDate] = useState()

    // const validateID = (e) => {
    //     var idInput = e
    //     var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    //     if(idInput.length < 6 && idInput.length != 0){ setIDErrorSign('ชื่อผู้ใช้งานต้องมีความยาวอย่างน้อย 6 ตัวอักษร') }
    //     else if(format.test(idInput)){setIDErrorSign('ชื่อผู้ใช้งานห้ามมีอักขระพิเศษ ')}
    //     else if(idInput.length == 0) {
    //     setIDErrorSign('กรุณากรอกชื่อผู้ใช้งาน')
    //     } else{
    //     setIDErrorSign('✔')
    //     }
    // }

    // const validateAddress = (e) => {
    //     var addresesInput = e.target.value
    //     var format = /[`!@#$%^&*_+\-=\[\]{};':"\\|<>\?~]/;
    //     if(format.test(addresesInput)){setAddressErrorSign('ที่อยู่ห้ามมีอักขระพิเศษ')}
    //     else if(addresesInput.length == 0) {
    //     setAddressErrorSign('กรุณากรอกที่อยู่ให้ครบถ้วน')
    //     } else{
    //     setAddressErrorSign('✔')
    //     }
    // }
    // const validateRoad = (e) => {
    //     var roadInput = e.target.value
    //     var format = /[`!@#$%^&*()_+\=\[\]{};':"\\|,.<>\/?~]/;
    //     if(format.test(roadInput)){setRoadErrorSign('ชื่อผู้ใช้งานห้ามมีอักขระพิเศษ ')}
    //     else{
    //     setRoadErrorSign('✔')
    //     }
    // }
    // const validatePassword = (passInput) => {
    //     var format = /[ `!@#$%^&()+\-=\[\]{};':"\\|,.<>\/?~]/;
    //     if(passInput.length < 6 && passInput.length != 0){ setPassErrorSign('รหัสผ่านต้องมีความยาวอย่างน้อย 6 ตัวอักษร') }
    //     else if(format.test(passInput)){setPassErrorSign('รหัสผ่านห้ามมีอักขระพิเศษ ยกเว้น *_ ')}
    //     else if(passInput.length == 0) {
    //     setPassErrorSign('กรุณากรอกรหัสผ่าน')
    //     } else{
    //     setPassErrorSign('✔')
    //     }
    // }
    // const validateDate = (start) => {
    //     setSelectedDate(start)

    //     var month = Number(start[0]+start[1])
    //     var day = Number(start[3]+start[4])
    //     var year = Number(start[6]+start[7]+start[8]+start[9])
    //     //console.log(month+' '+day+' '+year)

    //     var end = JSON.stringify(new Date())
    //     var curDay= ''
    //     for (let i = 1; i < 11; i++) {
    //     curDay = curDay+end[i]
    //     }
    //     var cur_month = Number(curDay[5]+curDay[6])
    //     var cur_day = Number(curDay[8]+curDay[9])
    //     var cur_year = Number(curDay[0]+curDay[1]+curDay[2]+curDay[3])
    //     //console.log(cur_month+' '+cur_day+' '+cur_year)
    //     //console.log('gap : '+ age)
    //     if(cur_year-year>20 && cur_year-year<100){
    //     setDateErrorSign('✔')}
    //     else if(cur_year-year === 20){
    //     if(cur_month-month>0){
    //         setDateErrorSign('✔')}
    //     else if(cur_month-month === 0){
    //         if(cur_day-day>=0){
    //         setDateErrorSign('✔')}
    //         else setDateErrorSign('ผู้ใช้งานต้องมีอายุระหว่าง 20 ถึง 100 ปีบริบูรณ์')
    //     }
    //     else setDateErrorSign('ผู้ใช้งานต้องมีอายุระหว่าง 20 ถึง 100 ปีบริบูรณ์')
    //     }
    //     else{
    //     setDateErrorSign('ผู้ใช้งานต้องมีอายุระหว่าง 20 ถึง 100 ปีบริบูรณ์')
    //     }

    // }
    // const validateName = (e) => {
    //     var nameInput = e.target.value
    //     var format = /[`!@#$%^&()+*_\-=\[\]{};':"\\|,.<>\/?~]/;
    //     if(format.test(nameInput)){setNameErrorSign('ชื่อจริงห้ามมีอักขระพิเศษ')}
    //     else if(nameInput.length === 0) {
    //     setNameErrorSign('กรุณากรอกชื่อและนามสกุล')
    //     } else{
    //     setNameErrorSign('✔')
    //     }
    // }

    // // const validateEmail = (e) => {
    // //     var email = e.target.value
        
    // //     if (validator.isEmail(email)) {
    // //     setEmailErrorSign('✔')
    // //     } else if(e.target.value){
    // //     setEmailErrorSign('✘')
    // //     }else{
    // //     setEmailErrorSign('กรุณากรอกอีเมลล์')
    // //     }
    // // }
    // const validMobile = (mobilePhone) =>{
    //     if(mobilePhone.length === 10 && mobilePhone[0] === '0' && (mobilePhone[1]==='9' || mobilePhone[1]==='6' || mobilePhone[1]==='8' )){
    //     for (var i = 0; i < 10; i++) {
    //         if(mobilePhone[i]<'0' || mobilePhone[i]>'9'){
    //         return false
    //         } 
    //     }
    //     return true
    //     }
    //     else return false
    // }

    // const validateMobilePhone = (e) => {
    //     var mobilePhone = e.target.value
        
    //     if (validMobile(mobilePhone)) {
    //     setMobileErrorSign('✔')
    //     } else if(e.target.value){
    //     setMobileErrorSign('✘')
    //     }else{
    //     setMobileErrorSign('กรุณากรอกเบอร์')
    //     }
    // }

    // const submitRegisterForm = (next) => {
        
    //     console.log('submit')
    //     if(
    //     emailErrorSign === '✔' &&
    //     mobileErrorSign === '✔' &&
    //     passErrorSign === '✔' &&
    //     nameErrorSign === '✔' &&
    //     IDErrorSign === '✔' &&
    //     roadErrorSign === '✔' &&
    //     addressErrorSign === '✔' &&
    //     dateErrorSign === '✔'
    //     ){
    //     let configObj = {
    //         method: "POST",
    //         headers :{
    //         "Content-Type":"application/json",
    //         "Accept":"application/json"
    //         },
    //         body:JSON.stringify({
    //         Username : Username,
    //         Password:Password,
    //         Name:Name,
    //         Email:Email,
    //         Tell:Tell,
    //         Birth:Birth,
    //         Address:Address,
    //         Road:Road,
    //         District:district,
    //         Sub_District:subDistrict,
    //         Province:province,
    //         Postal_code:postalCode
    //         })
    //     };
    //     console.log(configObj);

    //     fetch('http://localhost:4000/api/add',configObj)
    //     .then(function(response){
    //         return response.json();
    //     })
    //     .then(toy => {
    //         console.log(toy);
    //     })

    //     }else{
    //     alert("กรุณากรอกข้อมูลให้ถูกต้อง");
    //     }
    // }
    // useEffect(()=>{
    //     console.table(district,subDistrict,province,postalCode);
    // },[district,subDistrict,province,postalCode])
    // }


    // --------------------------------------------like Page----------------------------------------------------------
    
    const [likeTab, setlikeTab] = useState([true, false, false]);


    const likeSwitch = (selectedTab) => {
        if (selectedTab === 1) {
            setlikeTab([true, false, false])
        }
        else if (selectedTab === 2) {
            setlikeTab([false, true, false])
        }
        else {
            setlikeTab([false, false, true])
        }
    }

    const showPopUpDog = (type) => {
        if (type === 'Dog') {
            // setPopUpDog(true)
            // getTotalPaid()
        }
    }

    // --------------------------------------------Store Page----------------------------------------------------------
    
    const [storeTab, setstoreTab] = useState([true, false]);

    const storeSwitch = (selectedTab) => {
        if (selectedTab === 1) {
            setstoreTab([true, false])
        }
        else{
            setstoreTab([false, true])
        }
    }

    // --------------------------------------------Payment Page----------------------------------------------------------
    const [classStyle, setClassStyle] = useState('menu-header')
    const [astStyle, setAstStyle] = useState('ast')
    const [notPaidDogData, setNotPaidDogData] = useState([{ name: 'หมาชนิดแรก', picture: Profile_item1_src, price: 7000, amount: 1 },
    { name: 'หมาชนิดสอง', picture: Profile_item2_src, price: 12000, amount: 1 }])

    const [paidDogData, setPaidDogData] = useState([{ name: 'หมาชนิดแรกจ่ายและ', picture: Profile_item1_src, price: 8000, amount: 1 },
    { name: 'หมาชนิดสองจ่ายและ', picture: Profile_item2_src, price: 15000, amount: 1 }])

    const [totalPaid, setTotalPaid] = useState(12000 + 7000)
    const [popUp, setPopUp] = useState(false)
    const [canceledPaidDog, setCanceledPaidDog] = useState([])

    const [moneyTab, setMoneyTab] = useState([true, false, false])

    const setToggle = () => {
        classStyle == 'menu-header' ? setClassStyle('menu-header active') : setClassStyle('menu-header')
        classStyle == 'menu-header active' ? setAstStyle('ast-fullbg') : setAstStyle('ast')
        console.log({ astStyle })
    }
 
    const cancelPaidDog = (selectedItem) => {
        let tempNotPaidDogData = []
        let shallowCanceledPaidDog = canceledPaidDog
        for (let i = 0; i < notPaidDogData.length; i++) {
            if (notPaidDogData[i] !== selectedItem) {
                tempNotPaidDogData.push(notPaidDogData[i])
            }
            else shallowCanceledPaidDog.push(selectedItem)
        }
        setNotPaidDogData(tempNotPaidDogData)
        setCanceledPaidDog(shallowCanceledPaidDog)

        let curTotalPaid = 0
        if (tempNotPaidDogData.length > 0) {
            tempNotPaidDogData.map(each => {
                let curTotal = curTotalPaid + (each.price * each.amount)
                setTotalPaid(curTotal)
            })
        }
        else setTotalPaid(0)
    }

    const showPopUp = (type) => {
        if (type === 'Buy') {
            setPopUp(true)
            getTotalPaid()
        }
    }

    const getTotalPaid = () => {
        return totalPaid
    }

    const moneySwitch = (selectedTab) => {
        if (selectedTab === 1) {
            setMoneyTab([true, false, false])
        }
        else if (selectedTab === 2) {
            setMoneyTab([false, true, false])
        }
        else {
            setMoneyTab([false, false, true])
        }
    }

    const delCanceledPaidDog = (item) => {
        let tempCanceledPaidDogData = []
        let tempNotPaidDogData = notPaidDogData
        for (let i = 0; i < canceledPaidDog.length; i++) {
            if (canceledPaidDog[i] !== item) {
                tempCanceledPaidDogData.push(canceledPaidDog[i])
            }
            else tempNotPaidDogData.push(canceledPaidDog[i])
        }
        setCanceledPaidDog(tempCanceledPaidDogData)
        setNotPaidDogData(tempNotPaidDogData)

        let curTotalPaid = 0
        tempNotPaidDogData.map(each => {
            curTotalPaid = curTotalPaid + (each.price * each.amount) 
        })
        setTotalPaid(curTotalPaid)
        console.log(curTotalPaid)
    }

    return (
        <div>
            <div className = 'container'></div>
            <div class ='content'>
                <h1>บัญชีของฉัน</h1>
            </div>
            {profileTab[0] && 
            <div className = "content2">
                {popUp && <PopUp setPopUp={setPopUp} getTotalPaid={totalPaid} />}
                <div className="tab_one">
                    <label>
                        <div className='img_border'>
                            <img className='img-wrap' src={Profile_Dog}/>
                        </div>  
                        {/* <input id="photo-upload" type="file" onChange={this.handleInputChange}/>  */}
                    </label>
                    <div className="profile_bar"> 
                            <div className="SidebarList">
                                    <li className ="row">
                                            <div id="icon"><ArrowForwardIosIcon style={{ fontSize: 18 }}/></div> 
                                            <div id="title" style={{color: "#ED8E82" }}>บัญชีของฉัน</div>                                                                 
                                    </li>
                                    <li onClick={() => profileSwitch(2)} className ="row">
                                            <div id="icon"><ArrowForwardIosIcon style={{ fontSize: 18 }}/></div> 
                                            <div id="title">สนใจ</div>                          
                                    </li>
                                    <li onClick={() => profileSwitch(3)} className ="row">
                                            <div id="icon"><ArrowForwardIosIcon style={{ fontSize: 18 }}/></div> 
                                            <div id="title">ร้านค้าของฉัน</div>                          
                                    </li>
                                    <li onClick={() => profileSwitch(4)} className ="row">
                                            <div id="icon"><ArrowForwardIosIcon style={{ fontSize: 18 }}/></div> 
                                            <div id="title">สถานะการชำระเงิน</div>                          
                                    </li>
                                    <li className ="row">
                                            <div id="icon"><ArrowForwardIosIcon style={{ fontSize: 18 }}/></div> 
                                            <div id="title">ออกจากระบบ</div>                          
                                    </li>
                            </div>
                            <div className='sell-pane'>
                                <button class="sell-button" onClick={() => showPopUp('Sell')}>
                                    + ลงขาย
                                </button>
                            </div>
                    </div>
                </div>
                <div className='account_details'>
                    <div className = "head_topic">
                        <p>รายละเอียดบัญชี</p>
                    </div>
                        <div className ="Account_Text">
                            <div id="name">
                                <p>ชื่อผู้ใช้งาน</p>           
                            </div> 
                            <input type="text" value="" placeholder={Account} id="text"></input>
                        </div>
                        <div className ="Account_Text">
                            <div  id="name">
                                <p>ชื่อ-นามสกุล</p>           
                            </div> 
                            <input type="text" value="" placeholder={Account} id="text"></input>
                        </div>
                        <div className ="Account_Text">
                            <div  id="name">
                                <p>อีเมล</p>           
                            </div> 
                            <input type="text" value="" placeholder={Account} id="text"></input>
                        </div>
                        <div className ="Account_Text">
                            <div  id="name">
                                <p>เบอร์โทรศัพท์</p>           
                            </div> 
                            <input type="text" value="" placeholder={Account} id="text"></input>
                        </div>
                        <div className ="Account_Text">
                            <div  id="name">
                                <p>วันเกิด</p>           
                            </div> 
                            <input type="text" value="" placeholder={Account} id="text"></input>
                        </div>
                        <div className ="Account_Text">
                            <div  id="name">
                                <p>เพศ</p>           
                            </div> 
                            <input type="text" value="" placeholder={Account} id="text"></input>
                        </div>
                    <div className = "head_topic">
                        <p>รายละเอียดที่อยู่</p>
                    </div>
                        <div className ="Account_Text">
                            <div id="name">
                                <p>ที่อยู่</p>           
                            </div> 
                            <input type="text" value="" placeholder={Account} id="text"></input>
                        </div>
                        <div className ="Account_Text">
                            <div  id="name">
                                <p>ถนน</p>           
                            </div> 
                            <input type="text" value="" placeholder={Account} id="text"></input>
                        </div>
                        <div className ="Account_Text">
                            <div  id="name">
                                <p>ตำบล</p>           
                            </div> 
                            <input type="text" value="" placeholder={Account} id="text"></input>
                        </div>
                        <div className ="Account_Text">
                            <div  id="name">
                                <p>อำเภอ</p>           
                            </div> 
                            <input type="text" value="" placeholder={Account} id="text"></input>
                        </div>
                        <div className ="Account_Text">
                            <div  id="name">
                                <p>จังหวัด</p>           
                            </div> 
                            <input type="text" value="" placeholder={Account} id="text"></input>
                        </div>
                        <div className ="Account_Text">
                            <div  id="name">
                                <p>รหัสไปรษณีย์</p>           
                            </div> 
                            <input type="text" value="" placeholder={Account} id="text"></input>
                        </div>
                        <div className='Edit-pane'>
                            <button class="Edit-button" onClick={() => profileSwitch(5)}>
                                แก้ไขข้อมูล
                            </button>
                        </div>
                </div>
                    
            </div>}

{/* -----------------------------------------------LIKE PAGE---------------------------------------------------------------- */}
            {profileTab[1] && 
            <div className = "content2">
                {popUp && <PopUp setPopUp={setPopUp} getTotalPaid={totalPaid} />}
                <div className="tab_one">
                    <label>
                        <div className='img_border'>
                            <img className='img-wrap' src={Profile_Dog}/>
                        </div>  
                        {/* <input id="photo-upload" type="file" onChange={this.handleInputChange}/>  */}
                    </label>
                    <div className="profile_bar"> 
                            <div className="SidebarList">
                                    <li onClick={() => profileSwitch(1)} className ="row">
                                            <div id="icon"><ArrowForwardIosIcon style={{ fontSize: 18 }}/></div> 
                                            <div id="title">บัญชีของฉัน</div>                                                                 
                                    </li>
                                    <li className ="row">
                                            <div id="icon"><ArrowForwardIosIcon style={{ fontSize: 18 }}/></div> 
                                            <div id="title" style={{color: "#ED8E82" }}>สนใจ</div>                          
                                    </li>
                                    <li onClick={() => profileSwitch(3)} className ="row">
                                            <div id="icon"><ArrowForwardIosIcon style={{ fontSize: 18 }}/></div> 
                                            <div id="title">ร้านค้าของฉัน</div>                          
                                    </li>
                                    <li onClick={() => profileSwitch(4)} className ="row">
                                            <div id="icon"><ArrowForwardIosIcon style={{ fontSize: 18 }}/></div> 
                                            <div id="title">สถานะการชำระเงิน</div>                          
                                    </li>
                                    <li className ="row">
                                            <div id="icon"><ArrowForwardIosIcon style={{ fontSize: 18 }}/></div> 
                                            <div id="title">ออกจากระบบ</div>                          
                                    </li>
                            </div>
                            <div className='sell-pane'>
                                <button class="sell-button" onClick={() => showPopUp('Sell')}>
                                    + ลงขาย
                                </button>
                            </div>
                    </div>
                </div>
                <div className='like_page'>
                    {likeTab[0] &&
                        <div className='temp-money-pane'>
                            <div className='money-tab'>
                                <text className='money-header-selected'>ทั้งหมด</text>
                                <text className='money-header' onClick={() => likeSwitch(2)}>รอการตอบรับ</text>
                                <text className='money-header' onClick={() => likeSwitch(3)}>ตอบรับแล้ว</text>
                            </div>
                            <div className='cards_all'>                              
                                {CardItem_Accept.map((val,key)=> {
                                    return(
                                        <div className='cards__container'>
                                            <div className='cards__wrapper' key={key}>
                                                <div className="img_wrapper" onClick={() => showPopUpDog('Dog')}>
                                                    <div className="img_list">{val.imgName}</div> 
                                                    <div className="img_text_bottom">
                                                        <text>{val.breed}</text>
                                                        <text>{'ราคา :' + ' ' + val.cost}</text>
                                                        <text>{'สถานะ :' + ' ' + val.status}</text>
                                                        <div className='icon_details'>{val.icon}</div>
                                                    </div> 
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                                {CardItem_Wait.map((val,key)=> {
                                    return(
                                        <div className='cards__container'>
                                            <div className='cards__wrapper' key={key}>
                                                <div className="img_wrapper" onClick={() => showPopUpDog('Dog')} >
                                                    <div className="img_list">{val.imgName}</div> 
                                                    <div className="img_text_bottom">
                                                        <text>{val.breed}</text>
                                                        <text>{'ราคา :' + ' ' + val.cost}</text>
                                                        <text>{'สถานะ :' + ' ' + val.status}</text>
                                                        <div className='icon_details'>{val.icon}</div>
                                                    </div> 
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div> 
                    }
                    {likeTab[1] &&
                        <div className='temp-money-pane'>
                            <div className='money-tab'>
                                <text className='money-header' onClick={() => likeSwitch(1)} >ทั้งหมด</text>
                                <text className='money-header-selected'>รอการตอบรับ</text>
                                <text className='money-header' onClick={() => likeSwitch(3)}>ตอบรับแล้ว</text>
                            </div>
                            <div className='cards_all'>
                                <div className='cards__container'>
                                    {CardItem_Wait.map((val,key)=> {
                                        return( 
                                            <div className='cards__wrapper' key={key}>
                                                <div className="img_wrapper" onClick={() => showPopUpDog('Dog')}>
                                                    <div className="img_list">{val.imgName}</div> 
                                                    <div className="img_text_bottom">
                                                        <text>{val.breed}</text>
                                                        <text>{'ราคา :' + ' ' + val.cost}</text>
                                                        <text>{'สถานะ :' + ' ' + val.status}</text>
                                                        <div className='icon_details'>{val.icon}</div>
                                                    </div> 
                                                </div>
                                            </div>        
                                        );
                                    })} 
                                </div>
                            </div>
                        </div> 
                    }
                    {likeTab[2] &&
                        <div className='temp-money-pane'>
                            <div className='money-tab'>
                                <text className='money-header' onClick={() => likeSwitch(1)} >ทั้งหมด</text>
                                <text className='money-header' onClick={() => likeSwitch(2)}>รอการตอบรับ</text>
                                <text className='money-header-selected'>ตอบรับแล้ว</text>
                            </div>
                            <div className="row_img">   
                                {CardItem_Accept.map((val,key)=> {
                                    return(
                                        <div className='cards__container'>
                                            <div className='cards__wrapper' key={key}>
                                                <div className="img_wrapper">
                                                    <div className="img_list">{val.imgName}</div> 
                                                    <div className="img_text_bottom">
                                                        <text>{val.breed}</text>
                                                        <text>{'ราคา :' + ' ' + val.cost}</text>
                                                        <text>{'สถานะ :' + ' ' + val.status}</text>
                                                        <div className='icon_details'>{val.icon}</div>
                                                    </div> 
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    }
                </div>

            </div>}

{/* -----------------------------------------------STORE PAGE----------------------------------------------------------------  */}
            {profileTab[2] && 
            <div className = "content2">
                {popUp && <PopUp setPopUp={setPopUp} getTotalPaid={totalPaid} />}
                <div className="tab_one">
                    <label>
                        <div className='img_border'>
                            <img className='img-wrap' src={Profile_Dog}/>
                        </div>  
                        {/* <input id="photo-upload" type="file" onChange={this.handleInputChange}/>  */}
                    </label>
                    <div className="profile_bar"> 
                            <div className="SidebarList">
                                    <li onClick={() => profileSwitch(1)} className ="row">
                                            <div id="icon"><ArrowForwardIosIcon style={{ fontSize: 18 }}/></div> 
                                            <div id="title">บัญชีของฉัน</div>                                                                 
                                    </li>
                                    <li onClick={() => profileSwitch(2)} className ="row">
                                            <div id="icon"><ArrowForwardIosIcon style={{ fontSize: 18 }}/></div> 
                                            <div id="title">สนใจ</div>                          
                                    </li>
                                    <li className ="row">
                                            <div id="icon"><ArrowForwardIosIcon style={{ fontSize: 18 }}/></div> 
                                            <div id="title" style={{color: "#ED8E82" }}>ร้านค้าของฉัน</div>                          
                                    </li>
                                    <li onClick={() => profileSwitch(4)} className ="row">
                                            <div id="icon"><ArrowForwardIosIcon style={{ fontSize: 18 }}/></div> 
                                            <div id="title">สถานะการชำระเงิน</div>                          
                                    </li>
                                    <li className ="row">
                                            <div id="icon"><ArrowForwardIosIcon style={{ fontSize: 18 }}/></div> 
                                            <div id="title">ออกจากระบบ</div>                          
                                    </li>
                            </div>
                            <div className='sell-pane'>
                                <button class="sell-button" onClick={() => showPopUp('Sell')}>
                                    + ลงขาย
                                </button>
                            </div>
                    </div>
                </div>
                <div className='store_page'>
                    {storeTab[0] &&
                        <div className='temp-money-pane'>
                            <div className='money-tab'>
                                <text className='money-header-selected'>กำลังขาย</text>
                                <text className='money-header' onClick={() => storeSwitch(2)}>ขายแล้ว</text>
                            </div>
                            <div className='cards_all'>
                                <div className='cards__container'>
                                    <div className="row_img">
                                        {CardItem_Accept.map((val,key)=> {
                                            return( 
                                                <div className='cards__wrapper' key={key}>
                                                    <div className="img_wrapper" onClick={() => showPopUpDog('Dog')}>
                                                        <div className="img_list">{val.imgName}</div>                                                                                                                                 
                                                        <div className="img_text_bottom">
                                                            <text>{val.breed}</text>
                                                            <text>{'ราคา :' + ' ' + val.cost}</text>
                                                            <text>{'จำนวนคนสนใจ :' + ' ' + val.like}</text>
                                                        </div> 
                                                    </div>
                                                </div>        
                                            );
                                        })} 
                        
                                    {CardItem_Wait.map((val,key)=> {
                                        return( 
                                            <div className='cards__wrapper' key={key}>
                                                <div className="img_wrapper" onClick={() => showPopUpDog('Dog')}>
                                                    <div className="img_list">{val.imgName}</div> 
                                                    <div className="img_text_bottom">
                                                        <text>{val.breed}</text>
                                                        <text>{'ราคา :' + ' ' + val.cost}</text>
                                                        <text>{'จำนวนคนสนใจ :' + ' ' + val.like}</text>
                                                    </div> 
                                                </div>
                                            </div>        
                                        );
                                    })} 
                                    </div>
                                </div>
                            </div>
                    </div>
                    }
                    {storeTab[1] &&
                        <div className='temp-money-pane'>
                            <div className='money-tab'>
                                <text className='money-header' onClick={() => storeSwitch(1)} >กำลังขาย</text>
                                <text className='money-header-selected'>ขายแล้ว</text>
                            </div>
                            <div className='cards_all'>
                                <div className='cards__container'>
                                    <div className="row_img">
                                        {CardItem_Accept.map((val,key)=> {
                                            return( 
                                                <div className='cards__wrapper' key={key}>
                                                    <div className="img_wrapper" onClick={() => showPopUpDog('Dog')}>
                                                        <div className="img_list">{val.imgName}</div> 
                                                        <div className="img_text_bottom">
                                                            <text>{val.breed}</text>
                                                            <text>{'ราคา :' + ' ' + val.cost}</text>
                                                            <text>{'จำนวนคนสนใจ :' + ' ' + val.like}</text>
                                                        </div> 
                                                    </div>
                                                </div>        
                                            );
                                        })} 
                                        {CardItem_Wait.map((val,key)=> {
                                            return( 
                                                <div className='cards__wrapper' key={key}>
                                                    <div className="img_wrapper" onClick={() => showPopUpDog('Dog')}>
                                                        <div className="img_list">{val.imgName}</div> 
                                                        <div className="img_text_bottom">
                                                            <text>{val.breed}</text>
                                                            <text>{'ราคา :' + ' ' + val.cost}</text>
                                                            <text>{'จำนวนคนสนใจ :' + ' ' + val.like}</text>
                                                        </div> 
                                                    </div>
                                                </div>        
                                            );
                                        })} 
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        }

{/* -----------------------------------------------PAYMENT PAGE---------------------------------------------------------------- */}
            {profileTab[3] && 
            <div className = "content2">
                {popUp && <PopUp setPopUp={setPopUp} getTotalPaid={totalPaid} />}
                <div className="tab_one">
                    <label>
                        <div className='img_border'>
                            <img className='img-wrap' src={Profile_Dog}/>
                        </div>  
                        {/* <input id="photo-upload" type="file" onChange={this.handleInputChange}/>  */}
                    </label>
                    <div className="profile_bar"> 
                            <div className="SidebarList">
                                    <li onClick={() => profileSwitch(1)} className ="row">
                                            <div id="icon"><ArrowForwardIosIcon style={{ fontSize: 18 }}/></div> 
                                            <div id="title">บัญชีของฉัน</div>                                                                 
                                    </li>
                                    <li onClick={() => profileSwitch(2)} className ="row">
                                            <div id="icon"><ArrowForwardIosIcon style={{ fontSize: 18 }}/></div> 
                                            <div id="title">สนใจ</div>                          
                                    </li>
                                    <li onClick={() => profileSwitch(3)} className ="row">
                                            <div id="icon"><ArrowForwardIosIcon style={{ fontSize: 18 }}/></div> 
                                            <div id="title">ร้านค้าของฉัน</div>                          
                                    </li>
                                    <li className ="row">
                                            <div id="icon"><ArrowForwardIosIcon style={{ fontSize: 18 }}/></div> 
                                            <div id="title" style={{color: "#ED8E82" }}>สถานะการชำระเงิน</div>                          
                                    </li>
                                    <li className ="row">
                                            <div id="icon"><ArrowForwardIosIcon style={{ fontSize: 18 }}/></div> 
                                            <div id="title">ออกจากระบบ</div>                          
                                    </li>
                            </div>
                            <div className='sell-pane'>
                                <button class="sell-button" onClick={() => showPopUp('Sell')}>
                                    + ลงขาย
                                </button>
                            </div>
                    </div>
                </div>
                <div className='payment'>
                            {moneyTab[0] &&
                                <div className='temp-money-pane'>
                                    <div className='money-tab'>
                                        <text className='money-header-selected'>ที่ต้องชำระ</text>
                                        <text className='money-header' onClick={() => moneySwitch(2)}>ชำระแล้ว</text>
                                        <text className='money-header' onClick={() => moneySwitch(3)}>ยกเลิก</text>
                                    </div>
                                    <div className='money-info-pane'>
                                        <div className='money-table-row'>
                                            <div class='col1-tools-header' />
                                            <div class='col2-pic-header' />
                                            <div className='col3-name-header'><div class='.center-div-black'>สุนัข</div></div>
                                            <div className='col4-price-header'><div class='.center-div-black'>ราคา</div></div>
                                            <div className='col5-amount-header'><div class='.center-div-black'>จำนวน</div></div>
                                            <div className='col6-total-header'><div class='.center-div-black'>ทั้งหมด</div></div>
                                        </div>
                                        {notPaidDogData.map(each => {
                                            return (
                                                <div className='money-table-row'>
                                                    <div class='col1-tools' onClick={() => cancelPaidDog(each)}>X</div>
                                                    <div class='col2-pic'><img className='money-table-pic' src={each.picture} /></div>
                                                    <div className='col3-name'><div className='.center-div-black'>{each.name}</div></div>
                                                    <div className='col4-price'><div className='.center-div-pink'>{each.price}</div></div>
                                                    <div className='col5-amount'><div className='.center-div-black'>{each.amount}</div></div>
                                                    <div className='col6-total'><div className='.center-div-pink'>{each.amount * each.price}</div></div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className='money-info-pane-bottom'>
                                        <div className='money-table-row'>
                                            <div class='money-bottom-blog'>ยอดชำระ</div><div className='money-bottom-value'>{totalPaid}</div>
                                        </div>
                                        <div className='money-table-row'>
                                            <div class='money-bottom-blog'>ยอดชำระทั้งหมด</div><div className='money-bottom-value'>{totalPaid}</div>
                                        </div>

                                    </div>
                                    <div className='money-pane'>
                                        <button class="money-button" onClick={() => showPopUpsell('Sell')}>
                                            ซื้อสุนัข
                                        </button>
                                    </div>
                                </div>}

                            {moneyTab[1] && <div className='temp-money-pane'>
                                <div className='money-tab'>
                                    <text className='money-header' onClick={() => moneySwitch(1)}>ที่ต้องชำระ</text>
                                    <text className='money-header-selected'>ชำระแล้ว</text>
                                    <text className='money-header' onClick={() => moneySwitch(3)}>ยกเลิก</text>
                                </div>
                                <div className='money-info-pane'>
                                    <div className='money-table-row'>
                                        <div class='col1-tools-header' />
                                        <div class='col2-pic-header' />
                                        <div className='col3-name-header'><div class='.center-div-black'>สุนัข</div></div>
                                        <div className='col4-price-header'><div class='.center-div-black'>ราคา</div></div>
                                        <div className='col5-amount-header'><div class='.center-div-black'>จำนวน</div></div>
                                        <div className='col6-total-header'><div class='.center-div-black'>ทั้งหมด</div></div>
                                    </div>
                                    {paidDogData && paidDogData.map(each => {
                                        return (
                                            <div className='money-table-row'>
                                                <div class='col1-tools' />
                                                <div class='col2-pic'><img className='money-table-pic' src={each.picture} /></div>
                                                <div className='col3-name'><div className='.center-div-black'>{each.name}</div></div>
                                                <div className='col4-price'><div className='.center-div-pink'>{each.price}</div></div>
                                                <div className='col5-amount'><div className='.center-div-black'>{each.amount}</div></div>
                                                <div className='col6-total'><div className='.center-div-pink'>{each.amount * each.price}</div></div>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className='money-pane'/>
                            </div>}

                            {moneyTab[2] && <div className='temp-money-pane'>
                                <div className='money-tab'>
                                    <text className='money-header' onClick={() => moneySwitch(1)}>ที่ต้องชำระ</text>
                                    <text className='money-header' onClick={() => moneySwitch(2)}>ชำระแล้ว</text>
                                    <text className='money-header-selected' >ยกเลิก</text>
                                </div>
                                <div className='money-info-pane'>
                                    <div className='money-table-row'>
                                        <div class='col1-tools-header' />
                                        <div class='col2-pic-header' />
                                        <div className='col3-name-header'><div class='.center-div-black'>สุนัข</div></div>
                                        <div className='col4-price-header'><div class='.center-div-black'>ราคา</div></div>
                                        <div className='col5-amount-header'><div class='.center-div-black'>จำนวน</div></div>
                                        <div className='col6-total-header'><div class='.center-div-black'>ทั้งหมด</div></div>
                                    </div>
                                    {(canceledPaidDog.length>0) && canceledPaidDog.map(each => {
                                        return (
                                            <div className='money-table-row'>
                                                <div class='col1-tools' onClick={() => delCanceledPaidDog(each)}>X</div>
                                                <div class='col2-pic'><img className='money-table-pic' src={each.picture} /></div>
                                                <div className='col3-name'><div className='.center-div-black'>{each.name}</div></div>
                                                <div className='col4-price'><div className='.center-div-pink'>{each.price}</div></div>
                                                <div className='col5-amount'><div className='.center-div-black'>{each.amount}</div></div>
                                                <div className='col6-total'><div className='.center-div-pink'>{each.amount * each.price}</div></div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>}
                </div> 
            </div>}
            
{/* -----------------------------------------------EDIT ACCOUNT PROFILE PAGE---------------------------------------------------------------- */}
            {profileTab[4] && 
            <div className = "content2">
                {popUp && <PopUp setPopUp={setPopUp} getTotalPaid={totalPaid} />}
                <div className="tab_one">
                    <label>
                        <div className='img_border'>
                            <img className='img-wrap' src={Profile_Dog}/>
                        </div>  
                        {/* <input id="photo-upload" type="file" onChange={this.handleInputChange}/>  */}
                    </label>
                    <div className="profile_bar"> 
                            <div className="SidebarList">
                                    <li onClick={() => profileSwitch(1)} className ="row">
                                            <div id="icon"><ArrowForwardIosIcon style={{ fontSize: 18 }}/></div> 
                                            <div id="title" style={{color: "#ED8E82" }}>บัญชีของฉัน</div>                                                                 
                                    </li>
                                    <li onClick={() => profileSwitch(2)} className ="row">
                                            <div id="icon"><ArrowForwardIosIcon style={{ fontSize: 18 }}/></div> 
                                            <div id="title">สนใจ</div>                          
                                    </li>
                                    <li onClick={() => profileSwitch(3)} className ="row">
                                            <div id="icon"><ArrowForwardIosIcon style={{ fontSize: 18 }}/></div> 
                                            <div id="title">ร้านค้าของฉัน</div>                          
                                    </li>
                                    <li onClick={() => profileSwitch(4)} className ="row">
                                            <div id="icon"><ArrowForwardIosIcon style={{ fontSize: 18 }}/></div> 
                                            <div id="title">สถานะการชำระเงิน</div>                          
                                    </li>
                                    <li className ="row">
                                            <div id="icon"><ArrowForwardIosIcon style={{ fontSize: 18 }}/></div> 
                                            <div id="title">ออกจากระบบ</div>                          
                                    </li>
                            </div>
                            {/* <div className='sell-pane'>
                                <button class="sell-button" onClick={() => showPopUp('Sell')}>
                                    + ลงขาย
                                </button>
                            </div> */}
                    </div>
                </div>
                <div className='account_details_edit'>

                    <div className = "head_topic">
                        <p>รายละเอียดบัญชี</p>
                    </div>

                        <div className ="Account_Text">
                            <div id="name">
                                <p>ชื่อผู้ใช้งาน</p>           
                            </div> 
                            <input type="text" value="" placeholder={Account} id="text"></input>
                        </div>
                        <div className ="Account_Text">
                            <div  id="name">
                                <p>ชื่อ-นามสกุล</p>           
                            </div> 
                            <input type="text" value="" placeholder={Account} id="text_edit"></input>
                        </div>
                        <div className ="Account_Text">
                            <div  id="name">
                                <p>อีเมล</p>           
                            </div> 
                            <input type="text" value="" placeholder={Account} id="text"></input>
                        </div>
                        <div className ="Account_Text">
                            <div  id="name">
                                <p>เบอร์โทรศัพท์</p>           
                            </div> 
                            <input type="text" value="" placeholder={Account} id="text_edit"></input>
                        </div>
                        <div className ="Account_Text">
                            <div  id="name">
                                <p>วันเกิด</p>           
                            </div> 
                            <input type="text" value="" placeholder={Account} id="text"></input>
                        </div>
                        <div className ="Account_Text">
                            <div  id="name">
                                <p>เพศ</p>           
                            </div> 
                            <input type="text" value="" placeholder={Account} id="text"></input>
                        </div>

                    <div className = "head_topic">
                        <p>รายละเอียดที่อยู่</p>
                    </div>

                        <div className ="Account_Text">
                            <div id="name">
                                <p>ที่อยู่</p>           
                            </div> 
                            <input type="text" value="" placeholder={Account} id="text_edit"></input>
                        </div>
                        <div className ="Account_Text">
                            <div  id="name">
                                <p>ถนน</p>           
                            </div> 
                            <input type="text" value="" placeholder={Account} id="text_edit"></input>
                        </div>
                        <div className ="Account_Text">
                            <div  id="name">
                                <p>ตำบล</p>           
                            </div> 
                            <input type="text" value="" placeholder={Account} id="text_edit"></input>
                        </div>
                        <div className ="Account_Text">
                            <div  id="name">
                                <p>อำเภอ</p>           
                            </div> 
                            <input type="text" value="" placeholder={Account} id="text_edit"></input>
                        </div>
                        <div className ="Account_Text">
                            <div  id="name">
                                <p>จังหวัด</p>           
                            </div> 
                            <input type="text" value="" placeholder={Account} id="text_edit"></input>
                        </div>
                        <div className ="Account_Text">
                            <div  id="name">
                                <p>รหัสไปรษณีย์</p>           
                            </div> 
                            <input type="text" value="" placeholder={Account} id="text_edit"></input>
                        </div>

                    <div className = "head_topic">
                        <p>เปลี่ยนรหัสผ่าน</p>
                    </div>

                        <div className ="Account_Text">
                            <div id="name">
                                <p>รหัสเดิม</p>           
                            </div> 
                            <input type="text" value="" placeholder={Account} id="text_edit"></input>
                        </div>
                        <div className ="Account_Text">
                            <div  id="name">
                                <p>รหัสผ่านใหม่</p>           
                            </div> 
                            <input type="text" value="" placeholder={Account} id="text_edit"></input>
                        </div>
                        <div className ="Account_Text">
                            <div  id="name">
                                <p>ยืนยันรหัสผ่าน</p>           
                            </div> 
                            <input type="text" value="" placeholder={Account} id="text_edit"></input>
                        </div>
                    
                    <div className='Edit2-pane'>
                        <button class="Edit2-button" onClick={() => profileSwitch(1)}>
                            บันทึก
                        </button>
                        <button class="Edit2-button" onClick={() => profileSwitch(1)}>
                            ยกเลิก
                        </button>
                    </div>


                </div>                
            </div>}


        </div>
    );
}

export default Profile

