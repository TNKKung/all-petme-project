import './profile.css';
import './Components/editProvinceInput.css';
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EditProvinceInput from './Components/editProvinceInput.js'

import Popup from '../../components/Popup/Popup'
import Popup1 from '../../components/page/homePage/HomePagePopup/Popup1'
import Popup2 from '../../components/page/homePage/HomePagePopup/Popup2'
import PopupFinish from '../../components/page/homePage/HomePagePopup/PopupFinish'


import {
    BrowserRouter as Router,
    useHistory,
} from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import CancelIcon from '@material-ui/icons/Cancel';

import Wall_dog from './img/wallpaper.jpg'
import Profile_Dog from './img/profile3.jpg'
import Profile_Dog2 from './img/profile1.jpg'

import Profile_leftside_pic_src from './img/cat.jpg'
import Profile_item1_src from './img/item1.jpg'
import Profile_item2_src from './img/item2.jpg'
import Profile_icon_src from './img/profile.jpg'
import Profile_wallpaper_src from './img/wall.jpg'

import PopUppayment from './popUppayment'
import PopDetail from './popdogDetail'
import PopUpAnswer from './popUpAnswer'

import CardItem_Accept from './CardItem_Accept';
import CardItem_Wait from './CardItem_Wait';
import CardStore from './CardStoreSell';
import CardStoreSold from './CardStoreSold';
import CardStoreSell from './CardStoreSell';


library.add(fas, fab, far);
const errorFontSize = 10;

const Profile = () => {
    const [profileTab, setprofileTab] = useState([true, false, false, false, false, false])

    const history = useHistory();

    const popup1 = Popup.usePopup()
    const popup2 = Popup.usePopup()
    const popupFinish = Popup.usePopup()
    const [PopType,SetPopType] = useState(null)


    var maxName = '30'
    var maxPass = '15'
    var maxMobile = '10'
    var maxAddress = '40'
    var maxRoad = '20'

    const [mobileErrorSign, setMobileErrorSign] = useState('✔')
    const [passErrorSign, setPassErrorSign] = useState(' ')
    const [nameErrorSign, setNameErrorSign] = useState('✔')
    const [roadErrorSign, setRoadErrorSign] = useState('✔')
    const [addressErrorSign, setAddressErrorSign] = useState('✔')
    const [dateErrorSign, setDateErrorSign] = useState('✔')
    const setDistrict =(val) => { district = val}
    const setSubDistrict =(val) => { subDistrict = val}
    const setProvince =(val) => { province = val}   
    const setPostalCode =(val) => { postalCode = val}
    var data = {}
    const [password_storer,set_password_storer] = useState([])
    const [user, setUser] = useState({})
    
        var Password=['','',''], 
        name=user.name, email=user.email, mobilePhone=user.mobileNumber, 
        birth=user.birth, address=user.address, road=user.road, 
        subDistrict=user.subDistrict, district=user.district, 
        province=user.province, postalCode=user.postalCode;

    // useEffect(() => {
        
    const [choosePeopleForAccept,setChoosePeopleForAccept] = useState()
    // },[])
    React.useEffect(() => {
        const dataB = JSON.parse(localStorage.getItem("user"))
        data = dataB
        if (data==null){
            alert("กรุณาเข้าสู่ระบบ");
            let path = `/`;
            history.push(path);}
        if(data!=null){
        setUser(data);
        name=user.name;
        email=user.email
        mobilePhone=user.mobileNumber
        birth=user.birth
        address=user.address
        road=user.road
        subDistrict=user.subDistrict
        district=user.district
        province=user.province
        postalCode=user.postalCode;
        }
    },[],[]);
    
    useEffect(()=>{
        fetDataForLike();
        fetchDataMyMarket();
    });

    const validateName = (nameInput) => {
        var format = /[`!@#$%^&()+*_\-=\[\]{};':"\\|,.<>\/?~]/;
        if (format.test(nameInput)) { setNameErrorSign('ชื่อจริงห้ามมีอักขระพิเศษ') }
        else {
            setNameErrorSign('✔')
        }
    }

    const validMobile = (mobilePhone) => {
        if (mobilePhone[0] === '0' && (mobilePhone[1] === '9' || mobilePhone[1] === '6' || mobilePhone[1] === '8')) {
            for (var i = 0; i < 10; i++) {
                if (mobilePhone[i] < '0' || mobilePhone[i] > '9') {
                    return false
                }
            }
            return true
        }
        else return false
    }
    const validateMobilePhone = (e) => {
        var mobilePhone = e.target.value

        if (validMobile(mobilePhone)) {
            setMobileErrorSign('✔')
        } else if (e.target.value) {
            setMobileErrorSign('✘')
        } else {
            setMobileErrorSign('✔')
        }
    }
    const validateAddress = (e) => {
        var addresesInput = e.target.value
        var format = /[`!@#$%^&*_+\-=\[\]{};':"\\|<>\?~]/;
        if (format.test(addresesInput)) { setAddressErrorSign('ที่อยู่ห้ามมีอักขระพิเศษ') }
        else {
            setAddressErrorSign('✔')
        }
    }
    const validateRoad = (e) => {
        var roadInput = e.target.value
        var format = /[`!@#$%^&*()_+\=\[\]{};':"\\|,.<>\/?~]/;
        if (format.test(roadInput)) { setRoadErrorSign('ชื่อผู้ใช้งานห้ามมีอักขระพิเศษ ') }
        else {
            setRoadErrorSign('✔')
        }
    }
    const validatePassword = (index,passInput) => {
        var format = /[ `!@#$%^&()+\-=\[\]{};':"\\|,.<>\/?~]/;
        let shallowPasswordError = passErrorSign
        if (index ==2){
        if(password_storer[1] != passInput){   

                shallowPasswordError = 'รหัสผ่านไม่ตรงกัน'
            }
            else {shallowPasswordError = 'OK'
        }}
        let tempPass = password_storer
        tempPass[index] = passInput
        set_password_storer(tempPass)
        setPassErrorSign(shallowPasswordError)
    }
    const clearData = () =>{
        localStorage.removeItem('dataPetForLike')
        localStorage.removeItem('dataPet')
        localStorage.removeItem('user')
        localStorage.removeItem('dataPetId')
    }

    const submitEditForm = async (next) => {
        console.log("aaa")

        if (
            mobileErrorSign === '✔' &&
            nameErrorSign === '✔' &&
            roadErrorSign === '✔' &&
            addressErrorSign === '✔' &&
            dateErrorSign === '✔' 
        ) {
            if(postalCode != ''){
            saveEditAccountData(Name,
                mobilePhone,
                postalCode)
            profileSwitch(1)
              const res = await fetch('http://localhost:4000/updateProfileUser',{
                  method: 'PUT',
                  headers :{
                    "Content-Type":"application/json",
                    "Accept":"application/json"
                  },
                  body:JSON.stringify({
                    userId : user.userId,
                    name:Name,
                    mobileNumber:mobilePhone,
                    address:address,
                    road:road,
                    district:district,
                    subDistrict:subDistrict,
                    province:province,
                    postalCode:postalCode
                  })
                });
            const a = await res.json();
            localStorage.setItem("user",JSON.stringify(a))
            let path = `/profile`;
            history.push(path);
        }
            else{
                profileSwitch(1)
            }
        } else {
            alert("กรุณากรอกข้อมูลให้ถูกต้อง");
        }
    }
    const dataPetForLike = JSON.parse(localStorage.getItem("dataPetForLike"))
    const fetDataForLike = async() => {
        const res = await fetch('http://localhost:4000/dataPetForLike',{
                  method: 'post',
                  headers :{
                    "Content-Type":"application/json",
                    "Accept":"application/json"
                  },
                  body:JSON.stringify({
                  userId : user.userId
            })
        });
        const a = await res.json();
        localStorage.setItem("dataPetForLike",JSON.stringify(a))
    }   
    const [Name,setName]=useState()
    const submitEditPassForm = async (next) => {
        if (passErrorSign == 'OK' && ( password_storer[1] == password_storer[2])) {      
            setUserData('password',password_storer[1])
            

            const res = await fetch('http://localhost:4000/checkPasswordAndUpdate',{
                  method: 'PUT',
                  headers :{
                    "Content-Type":"application/json",
                    "Accept":"application/json"
                  },
                  body:JSON.stringify({
                    userId : user.userId,
                    originalPassword : password_storer[0],
                    newPassword : password_storer[1]
                  })
                });

                const respone = await res.json();
                console.log(respone)
                if(respone === false ){
                    alert("รหัสเดิมไม่ถูกต้อง");
                }else{
                    alert("แก้ไขรหัสผ่านสำเร็จ");
                    profileSwitch(1)
                }
                
                
        }
        else {
            
            alert("กรุณากรอกข้อมูลรหัสให้ถูกต้อง");
        }
    }


    const profileSwitch = (selectedTab) => {
        if (selectedTab === 1) {
            setprofileTab([true, false, false, false, false, false])
        }
        else if (selectedTab === 2) {
            setprofileTab([false, true, false, false, false, false])
        }
        else if (selectedTab === 3) {
            setprofileTab([false, false, true, false, false, false])
        }
        else if (selectedTab === 4) {
            
            setprofileTab([false, false, false, true, false, false])
        }
        else if (selectedTab === 5) {
            setPassErrorSign(' '); setNameErrorSign('✔'); setMobileErrorSign('✔'); set_password_storer([]);
            setprofileTab([false, false, false, false, true, false])
        }
        else {
            setprofileTab([false, false, false, false, false, true])
        }
    }

    const showPopUp = (type) => {
        if (type === 'Sell') {
            setPopUpPay(true)
            setPopUpDe(false)
            // getTotalPaid()
        }
        else if (type === 'Exit') {
            // setPopUpExit(true)
            // getTotalPaid()
        }
        else if (type === 'Dog') {
            // let shallowDate = ''
            // for (let i = 3; i < 15; i++) {
            //     shallowDate = shallowDate+ dog.dateCreate[i]
            // }
            // setDogDateCreate(shallowDate)
            setPopUpDe(true)
        }
        else if (type === 'Buy') {
            // setPopUp(true)
            getTotalPaid()
        }
        else if (type == 'Answer') {
            setPopUpAns(true)
        }

    }
    // --------------------------------------------Account Page----------------------------------------------------------
    const Account = () => {
        console.log("Hello in sayHello")
    }

    // const showPopUpEdit = (type) => {
    //     if (type === 'Edit') {
    //         setPopUp(true)
    //         // getTotalPaid()
    //     }
    // }
    // --------------------------------------------Exit Page----------------------------------------------------------
    // const showPopUpExit = (type) => {
    //     if (type === 'Exit') {
    //         // setPopUpExit(true)
    //         // getTotalPaid()
    //     }
    // }

    // ******************Edit****************



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
    const [dogDateCreate, setDogDateCreate] = useState('')
    const [dogDetail, setdogDetail] = useState({
        imgName: '',
        breed: '',
        cost: '',
        status: '',
        icon: <FavoriteIcon className="icon_details_accept" style={{ fontSize: 45 }} />,
        like: 5,
        question1: '',
        answer1: '',
        question2: '',
        answer2: '',
        question3: '',
        answer3: '',
        question4: '',
        answer4: '',
        question5: '',
        answer5: '',
        seller: { picture: '', name: '' },
        dateCreate: '',
        detail: '',
        gender: '',
        age: ''
    })

    // --------------------------------------------Store Page----------------------------------------------------------

    const [storeTab, setstoreTab] = useState([true, false]);

    const storeSwitch = (selectedTab) => {
        if (selectedTab === 1) {
            setstoreTab([true, false])
        }
        else {
            setstoreTab([false, true])
        }
    }

    const [likeNameTab, setlikeNameTab] = useState([true, false, false]);

    const likeNameSwitch = (selectedTab) => {
        if (selectedTab === 1) {
            setlikeNameTab([true, false, false])
        }
        else if (selectedTab === 2) {
            setlikeNameTab([false, true, false])
        }
        else {
            setlikeNameTab([false, false, true])
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
    const [popUpPay, setPopUpPay] = useState(false)
    const [choosePayment,setChoosePayment] = useState(null)

    const [popUpDe, setPopUpDe] = useState(false)
    const [popUpAns, setPopUpAns] = useState(false)

    const [userAnswer, setUserAnswer] = useState()
    const [popUpAnsType, setPopUpAnsType] = useState()
    const [dogForSellToShow, setDogForSellToShow] = useState()


    const [canceledPaidDog, setCanceledPaidDog] = useState([])


    const [moneyTab, setMoneyTab] = useState([true, false, false])

    const setToggle = () => {
        classStyle == 'menu-header' ? setClassStyle('menu-header active') : setClassStyle('menu-header')
        classStyle == 'menu-header active' ? setAstStyle('ast-fullbg') : setAstStyle('ast')
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
    // const showPopUp = (type) => {
    //     if (type === 'Buy') {
    //         // setPopUp(true)
    //         getTotalPaid()
    //     }
    // }

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
    }

    const saveEditAccountData = (
        name,
        mobileNumber,
        postalCode
        ) => {

        if (name != '' && nameErrorSign == '✔') {
            setUserData('name', name)
        }
        if (mobileNumber != '' && mobileErrorSign == '✔') {
            setUserData('mobileNumber', mobilePhone)
        }
        if (postalCode != '' && addressErrorSign == '✔' && roadErrorSign == '✔'){
            setUserData('address', address)
            setUserData('road', road)
            setUserData('subDistrict', subDistrict)
            setUserData('district', district)
            setUserData('province', province)
            setUserData('postalCode', postalCode)
        }
        
    }
    const logOut = () => {
        localStorage.removeItem("user")
        window.open('http://localhost:3000/');
        window.close("_self");
    }
    const setUserData = (attr, val) => {
        let shallowUser = user
        if (attr == 'listPetIForsell') {
            shallowUser.listPetIForsell = val
        }
        else if (attr == 'name') {
            shallowUser.name = val
        }
        else if (attr == 'password') {
            shallowUser.password = val
        }
        else if (attr == 'mobileNumber') {
            shallowUser.mobileNumber = val
        }
        else if (attr == 'address') {
            shallowUser.address = val
        }
        else if (attr == 'road') {
            shallowUser.road = val
        }
        else if (attr == 'subDistrict') {
            shallowUser.subDistrict = val
        }
        else if (attr == 'district') {
            shallowUser.district = val
        }
        else if (attr == 'province') {
            shallowUser.province = val
        }
        else if (attr == 'postalCode') {
            shallowUser.postalCode = val
        }
        setUser(shallowUser)
    }
    

    const fetchDataMyMarket = async() => {
        const res = await fetch('http://localhost:4000/dataPetMyStore',{
          method: 'POST',
            headers: {
                'Content-Type': 'application/json'     
            },
            mode : "cors",
            body: JSON.stringify({
                userId : user.userId
            }),
        });
        const a = await res.json(); 
        localStorage.setItem("dataPet",JSON.stringify(a[0]))
    }

    const dataPet = JSON.parse(localStorage.getItem("dataPet"))
    return (
        <div style={{ height: '100%', width: '100%',fontFamily:'Kanit'}}>
            <div className='containerProfile'></div>
            <div class='content'>
                <p>บัญชีของฉัน</p>
            </div>
            {profileTab[0] &&

                <div className="content2">

                    <div className="tab_one">
                        <label>
                            <div className='img_border'>
                                <img className='img-wrap' src={Profile_Dog} />
                            </div>
                            {/* <input id="photo-upload" type="file" onChange={this.handleInputChange}/>  */}
                        </label>
                        <div className="profile_bar">
                            <div className="SidebarList">
                                <li className="row">
                                    <div id="icon"><ArrowForwardIosIcon style={{ fontSize: 18 }} /></div>
                                    <div id="title" style={{ color: "#ED8E82" }}>บัญชีของฉัน</div>
                                </li>
                                <li onClick={() => {fetDataForLike();profileSwitch(2)}} className="row">
                                    <div id="icon"><ArrowForwardIosIcon style={{ fontSize: 18 }} /></div>
                                    <div id="title">สนใจ</div>
                                </li>
                                <li onClick={() => {profileSwitch(3)}} className="row">
                                    <div id="icon"><ArrowForwardIosIcon style={{ fontSize: 18 }} /></div>
                                    <div id="title">ร้านค้าของฉัน</div>
                                </li>
                                <li onClick={() => { profileSwitch(4);}} className="row">
                                    <div id="icon"><ArrowForwardIosIcon style={{ fontSize: 18 }} /></div>
                                    <div id="title">สถานะการชำระเงิน</div>
                                </li>
                                <li onClick={() => {logOut();showPopUp('Exit');clearData()}} className="row">
                                    <div id="icon"><ArrowForwardIosIcon style={{ fontSize: 18 }} /></div>
                                    <div id="title">ออกจากระบบ</div>
                                </li>
                            </div>
                            <div className='sell-pane'>
                                <button class="sell-button" onClick={popup1.open}>
                                    + ลงขาย
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='account_details'>
                        <div className="head_topic">
                            <p>รายละเอียดบัญชี</p>
                        </div>

                        <div className="Account_Text">
                            <div id="name" onClick ={()=> console.log(user.name)}>
                                <p>ชื่อ-นามสกุล</p>
                            </div>
                            <input disabled className='edit-input-no-cursor' type="text" value="" placeholder={user.name} id="text"></input>
                        </div>
                        <div className="Account_Text">
                            <div id="name">
                                <p>อีเมล</p>
                            </div>
                            <input type="text" className='edit-input-no-cursor' readonly="readonly" placeholder={user.email} id="text"></input>
                        </div>
                        <div className="Account_Text">
                            <div id="name">
                                <p>เบอร์โทรศัพท์</p>
                            </div>
                            <input type="text" className='edit-input-no-cursor' readonly="readonly" placeholder={user.mobileNumber} id="text"></input>
                        </div>
                        <div className="Account_Text">
                            <div id="name">
                                <p>วันเกิด</p>
                            </div>
                            <input type="text" className='edit-input-no-cursor' readonly="readonly" placeholder={user.birth} id="text"></input>
                        </div>
                        <div className="Account_Text">
                            <div id="name">
                                <p>ที่อยู่</p>
                            </div>
                            <input type="text" className='edit-input-no-cursor' readonly="readonly" placeholder={user.address} id="text"></input>
                        </div>
                        <div className="Account_Text">
                            <div id="name">
                                <p>ถนน</p>
                            </div>
                            <input type="text" className='edit-input-no-cursor' readonly="readonly" placeholder={user.road} id="text"></input>
                        </div>
                        <div className="Account_Text">
                            <div id="name">
                                <p>ตำบล</p>
                            </div>
                            <input type="text" className='edit-input-no-cursor' readonly="readonly" placeholder={user.subDistrict} id="text"></input>
                        </div>
                        <div className="Account_Text">
                            <div id="name">
                                <p>อำเภอ</p>
                            </div>
                            <input type="text" className='edit-input-no-cursor' readonly="readonly" placeholder={user.district} id="text"></input>
                        </div>
                        <div className="Account_Text">
                            <div id="name">
                                <p>จังหวัด</p>
                            </div>
                            <input type="text" className='edit-input-no-cursor' readonly="readonly" placeholder={user.province} id="text"></input>
                        </div>
                        <div className="Account_Text">
                            <div id="name">
                                <p>รหัสไปรษณีย์</p>
                            </div>
                            <input type="text" className='edit-input-no-cursor' readonly="readonly" placeholder={user.postalCode} id="text"></input>
                        </div>
                        <div className='Edit-pane'>
                            <button class="Edit-button" onClick={() => profileSwitch(5)}>
                                แก้ไขข้อมูล
                            </button>
                        </div>
                    </div>

                </div>
            }

            {/* -----------------------------------------------LIKE PAGE---------------------------------------------------------------- */}
            {
                profileTab[1] &&
                <div className="content2">
                    {/* {popUp && <PopUp setPopUp={setPopUp} getTotalPaid={totalPaid} />} */}
                    <div className="tab_one">
                        <label>
                            <div className='img_border'>
                                <img className='img-wrap' src={Profile_Dog} />
                            </div>
                            {/* <input id="photo-upload" type="file" onChange={this.handleInputChange}/>  */}
                        </label>
                        <div className="profile_bar">
                            <div className="SidebarList">
                                <li onClick={() => {profileSwitch(1)}} className="row">
                                    <div id="icon"><ArrowForwardIosIcon style={{ fontSize: 18 }} /></div>
                                    <div id="title">บัญชีของฉัน</div>
                                </li>
                                <li className="row" onClick={() => {fetDataForLike()}}>
                                    <div id="icon"><ArrowForwardIosIcon style={{ fontSize: 18 }} /></div>
                                    <div id="title" style={{ color: "#ED8E82" }}>สนใจ</div>
                                </li>
                                <li onClick={() => {fetchDataMyMarket(); profileSwitch(3)}} className="row">
                                    <div id="icon"><ArrowForwardIosIcon style={{ fontSize: 18 }} /></div>
                                    <div id="title">ร้านค้าของฉัน</div>
                                </li>
                                <li onClick={() => { profileSwitch(4)}} className="row">
                                    <div id="icon"><ArrowForwardIosIcon style={{ fontSize: 18 }} /></div>
                                    <div id="title">สถานะการชำระเงิน</div>
                                </li>
                                <li className="row" onClick= {()=> {logOut();clearData()}}>
                                    <div id="icon"><ArrowForwardIosIcon style={{ fontSize: 18 }} /></div>
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
                                    <div className='cards__container'>
                                        <div className="row_img">
                                            {dataPetForLike.map((each, key) => {
                                                return (
                                                    <div className='cards__wrapper' key={key}>
                                                        <div className="img_wrapper" onClick={() => { setdogDetail(each); showPopUp('Dog') }}>
                                                            <div className="img_list"><img className="img_list" src={each.picture} /></div>
                                                            <div className="img_text_bottom">
                                                                <text>{each.breed}</text>
                                                                <text>{each.typeSell==='บริจาค'?'บริจาคฟรี':'ราคา:'+ each.cost}</text>
                                                                <text>{each.acceptUser.filter(e => e.userId == user.userId).map(e => e.userId).length===0?'สถานะ :' + ' ' + 'รอการตอบรับ':'สถานะ :' + ' ' + 'ตอบรับแล้ว'}</text>
                                                                <div className='icon_details'>{}</div>
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
                        {likeTab[1] &&
                            <div className='temp-money-pane'>
                                <div className='money-tab'>
                                    <text className='money-header' onClick={() => likeSwitch(1)} >ทั้งหมด</text>
                                    <text className='money-header-selected'>รอการตอบรับ</text>
                                    <text className='money-header' onClick={() => likeSwitch(3)}>ตอบรับแล้ว</text>
                                </div>
                                <div className='cards_all'>
                                    <div className='cards__container'>
                                        <div className="row_img">
                                            {dataPetForLike.filter(e=>e.acceptUser.filter(e => e.userId == user.userId).map(e => e.userId).length===0).map((each, key) => {
                                                return (
                                                    <div className='cards__wrapper' key={key}>
                                                        <div className="img_wrapper" onClick={() => { setdogDetail(each); showPopUp('Dog') }}>
                                                            <div className="img_list"><img className="img_list" src={each.picture} /></div>
                                                            <div className="img_text_bottom">
                                                                <text>{each.breed}</text>
                                                                <text>{each.typeSell==='บริจาค'?'บริจาคฟรี':'ราคา:'+ each.cost}</text>
                                                                <text>{'สถานะ :' + ' ' + 'รอการตอบรับ'}</text>
                                                                <div className='icon_details'>{each.icon}</div>
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
                        {likeTab[2] &&
                            <div className='temp-money-pane'>
                                <div className='money-tab'>
                                    <text className='money-header' onClick={() => likeSwitch(1)} >ทั้งหมด</text>
                                    <text className='money-header' onClick={() => likeSwitch(2)}>รอการตอบรับ</text>
                                    <text className='money-header-selected'>ตอบรับแล้ว</text>
                                </div>
                                <div className='cards_all'>
                                    <div className='cards__container'>
                                        <div className="row_img">
                                            {dataPetForLike.filter(e=>e.acceptUser.filter(e => e.userId == user.userId).map(e => e.userId).length!==0).map((each, key) => {
                                                return (
                                                    <div className='cards__wrapper' key={key}>
                                                        <div className="img_wrapper" onClick={() => { setdogDetail(each); showPopUp('Dog') }}>
                                                            <div className="img_list"><img className="img_list" src={each.picture} /></div>
                                                            <div className="img_text_bottom">
                                                                <text>{each.breed}</text>
                                                                <text>{each.typeSell==='บริจาค'?'บริจาคฟรี':'ราคา:'+ each.cost}</text>
                                                                <text>{'สถานะ :' + ' ' + 'ตอบรับแล้ว'}</text>
                                                                <div className='icon_details'>{each.icon}</div>
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

            {/* -----------------------------------------------STORE PAGE----------------------------------------------------------------  */}
            {
                profileTab[2] &&
                <div className="content2">
                    {/* {popUp && <PopUp setPopUp={setPopUp} getTotalPaid={totalPaid} />} */}
                    <div className="tab_one">
                        <label>
                            <div className='img_border'>
                                <img className='img-wrap' src={Profile_Dog} />
                            </div>
                            {/* <input id="photo-upload" type="file" onChange={this.handleInputChange}/>  */}
                        </label>
                        <div className="profile_bar">
                            <div className="SidebarList">
                                <li onClick={() => profileSwitch(1)} className="row">
                                    <div id="icon"><ArrowForwardIosIcon style={{ fontSize: 18 }} /></div>
                                    <div id="title">บัญชีของฉัน</div>
                                </li>
                                <li onClick={() => {fetDataForLike();profileSwitch(2)}} className="row">
                                    <div id="icon"><ArrowForwardIosIcon style={{ fontSize: 18 }} /></div>
                                    <div id="title">สนใจ</div>
                                </li>
                                <li className="row">
                                    <div id="icon"><ArrowForwardIosIcon style={{ fontSize: 18 }} /></div>
                                    <div id="title" style={{ color: "#ED8E82" }}>ร้านค้าของฉัน</div>
                                </li>
                                <li onClick={() => { profileSwitch(4)}} className="row">
                                    <div id="icon"><ArrowForwardIosIcon style={{ fontSize: 18 }} /></div>
                                    <div id="title">สถานะการชำระเงิน</div>
                                </li>
                                <li className="row" onClick= {()=> {logOut();clearData()}}>
                                    <div id="icon"><ArrowForwardIosIcon style={{ fontSize: 18 }} /></div>
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
                                            {dataPet.filter(e=>e.statusSell==true).map((each, key) => { 
                                                return (
                                                    <div className='cards__wrapper' key={key}>
                                                        <div className="img_wrapper" onClick={() => { localStorage.setItem('petIdForStorePage',JSON.stringify(each.petId)); profileSwitch(6); setDogForSellToShow(each) }}>
                                                            <div className="img_list">{each.picture}</div>
                                                            <div className="img_text_bottom">
                                                                <text>{each.breed}</text>
                                                                <text>{each.typeSell==='บริจาค'?'บริจาคฟรี':'ราคา:'+ each.cost}</text>
                                                                <text>{'จำนวนคนสนใจ :' + ' ' + each.likeUser.length}</text>
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
                                            {dataPet.filter(e=>e.statusSell==false).map((each, key) => {
                                                return (
                                                    <div className='cards__wrapper' key={key}>
                                                        <div className="img_wrapper" onClick={() => profileSwitch(6)}>
                                                            <div className="img_list">{each.picture}</div>
                                                            <div className="img_text_bottom">
                                                                <text>{each.breed}</text>
                                                                <text>{'ราคา :' + ' ' + each.cost}</text>
                                                                <text>{'จำนวนคนสนใจ :' + ' ' + each.like}</text>
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
            {
                profileTab[3] &&
                <div className="content2">
                    {/* {popUp && <PopUp setPopUp={setPopUp} getTotalPaid={totalPaid} />} */}
                    <div className="tab_one">
                        <label>
                            <div className='img_border'>
                                <img className='img-wrap' src={Profile_Dog} />
                            </div>
                            {/* <input id="photo-upload" type="file" onChange={this.handleInputChange}/>  */}
                        </label>
                        <div className="profile_bar">
                            <div className="SidebarList">
                                <li onClick={() => profileSwitch(1)} className="row">
                                    <div id="icon"><ArrowForwardIosIcon style={{ fontSize: 18 }} /></div>
                                    <div id="title">บัญชีของฉัน</div>
                                </li>
                                <li onClick={() => {fetDataForLike();profileSwitch(2)}} className="row">
                                    <div id="icon"><ArrowForwardIosIcon style={{ fontSize: 18 }} /></div>
                                    <div id="title">สนใจ</div>
                                </li>
                                <li onClick={() => {profileSwitch(3)}} className="row">
                                    <div id="icon"><ArrowForwardIosIcon style={{ fontSize: 18 }} /></div>
                                    <div id="title">ร้านค้าของฉัน</div>
                                </li>
                                <li className="row">
                                    <div id="icon"><ArrowForwardIosIcon style={{ fontSize: 18 }} /></div>
                                    <div id="title" style={{ color: "#ED8E82" }}>สถานะการชำระเงิน</div>
                                </li>
                                <li className="row" onClick= {()=> {logOut();clearData()}}>
                                    <div id="icon"><ArrowForwardIosIcon style={{ fontSize: 18 }} /></div>
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
                                </div>
                                <div className='money-info-pane'>
                                    <div className='money-table-row'>
                                        <div class='col2-pic-header' />
                                        <div className='col3-name-header'><div class='.center-div-black'>สุนัข</div></div>
                                        <div className='col4-price-header'><div class='.center-div-black'>ราคา</div></div>
                                        <div className='col6-total-header'><div class='.center-div-black'>ชำระเงิน</div></div>
                                        <div class='col4-price-header'><div class='.center-div-black'>ยกเลิก</div></div>
                                    </div>
                                    {dataPetForLike.filter((a)=>a.typeSell!=='บริจาค' && a.acceptUser.filter(e => e.userId == user.userId).map(e => e.userId).length!==0).map(each => {
                                                       /////////ต้องใส่ตัวแปรอื่น
                                        return (
                                            <div className='money-table-row'>
                                                <div class='col2-pic'><img className='money-table-pic' src={each.picture} /></div>
                                                <div className='col3-name'><div className='.center-div-black'>{each.breed}</div></div>
                                                <div className='col4-price'><div className='.center-div-pink'>{each.cost}</div></div>
                                                <div className='col6-total'><div className='.center-div-pink'>
                                                <button class="money-button" onClick={() => {showPopUp('Sell');setChoosePayment(each);}}>ซื้อสุนัข</button></div></div>
                                                <div class='col4-price'><div class='col1-tools' onClick={() => cancelPaidDog(each)}>X</div></div>
                                            </div>
                                        )
                                    })}
                                </div>
                                </div>}

                        {moneyTab[1] && <div className='temp-money-pane'>
                            <div className='money-tab'>
                                <text className='money-header' onClick={() => moneySwitch(1)}>ที่ต้องชำระ</text>
                                <text className='money-header-selected'>ชำระแล้ว</text>
                            </div>
                            <div className='money-info-pane'>
                                <div className='money-table-row'>
                                    <div class='col2-pic-header' />
                                        <div className='col3-name-header'><div class='.center-div-black'>สุนัข</div></div>
                                        <div className='col4-price-header'><div class='.center-div-black'>ราคา</div></div>
                                        <div className='col5-amount-header'><div class='.center-div-black'>จำนวน</div></div>
                                        <div className='col6-total-header'><div class='.center-div-black'>ชำระเงิน</div></div>
                                        <div class='col4-price-header'><div class='.center-div-black'></div></div>
                                </div>
                                {paidDogData && paidDogData.map(each => {
                                    return (
                                        <div className='money-table-row'>
                                            <div class='col2-pic'><img className='money-table-pic' src={each.picture} /></div>
                                                <div className='col3-name'><div className='.center-div-black'>{each.name}</div></div>
                                                <div className='col4-price'><div className='.center-div-pink'>{each.price}</div></div>
                                                <div className='col5-amount'><div className='.center-div-black'>{each.amount}</div></div>
                                                <div className='col6-total'><div className='.center-div-pink'>
                                                <button class="money-button" onClick={() => showPopUp('Sell')}>ดูสลิป</button></div></div>
                                                <div class='col4-price'></div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className='money-pane' />
                        </div>}
                    </div>
                </div>
            }

            {/* -----------------------------------------------EDIT ACCOUNT PROFILE PAGE---------------------------------------------------------------- */}
            {
                profileTab[4] &&
                <div className="content2">
                    {/* {popUp && <PopUp setPopUp={setPopUp} getTotalPaid={totalPaid} />} */}
                    <div className="tab_one">
                        <label>
                            <div className='img_border'>
                                <img className='img-wrap' src={Profile_Dog} />
                            </div>
                            {/* <input id="photo-upload" type="file" onChange={this.handleInputChange}/>  */}
                        </label>
                        <div className="profile_bar">
                            <div className="SidebarList">
                                <li onClick={() => profileSwitch(1)} className="row">
                                    <div id="icon"><ArrowForwardIosIcon style={{ fontSize: 18 }} /></div>
                                    <div id="title" style={{ color: "#ED8E82" }}>บัญชีของฉัน</div>
                                </li>
                                <li onClick={() => {fetDataForLike();profileSwitch(2)}} className="row">
                                    <div id="icon"><ArrowForwardIosIcon style={{ fontSize: 18 }} /></div>
                                    <div id="title">สนใจ</div>
                                </li>
                                <li onClick={() => {profileSwitch(3)}} className="row">
                                    <div id="icon"><ArrowForwardIosIcon style={{ fontSize: 18 }} /></div>
                                    <div id="title">ร้านค้าของฉัน</div>
                                </li>
                                <li onClick={() => { profileSwitch(4)}} className="row">
                                    <div id="icon"><ArrowForwardIosIcon style={{ fontSize: 18 }} /></div>
                                    <div id="title">สถานะการชำระเงิน</div>
                                </li>
                                <li className="row" onClick= {()=> {logOut();clearData()}}>
                                    <div id="icon"><ArrowForwardIosIcon style={{ fontSize: 18 }} /></div>
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

                        <div className="head_topic">
                            <p>รายละเอียดบัญชี</p>
                        </div>
                        <div className='edit-input-row-right-main'>
                            <div className='edit-input-col-center'>
                                <div id="name" className='edit-input-subHeader'>
                                    <p>ชื่อ-นามสกุล</p>
                                </div>
                                <div id="name" className='edit-input-subHeader'>
                                    <p>อีเมล</p>
                                </div>
                                <div id="name" className='edit-input-subHeader'>
                                    <p>เบอร์โทรศัพท์</p>
                                </div>
                                <div id="name" className='edit-input-subHeader'>
                                    <p>วันเกิด</p>
                                </div>
                            </div>
                            <div className='edit-input-col-center'>

                                
                                <div className="edit-input-row-left">

                                    {/* <input type="text" placeholder={user.name} id="text_edit"></input> */}
                                    <div className='edit-profile-col-center-sizable'>
                                        <div className="edit-profile-input-block2">
                                            <input
                                                className='edit-input-style'
                                                placeholder=""
                                                onChange={(e) => {
                                                    let tempVVV = e.target.value
                                                    let tempPassSTR = tempVVV.replace(/[^A-Za-zก-ฮ]/ig, '')
                                                    validateName(tempPassSTR)
                                                    setName(tempVVV)
                                                }}
                                                maxLength={maxName}
                                            /></div>
                                    </div>
                                    <div className='edit-input-error-box'>
                                        <span style={{ fontsize: { errorFontSize }, fontWeight: 'bold', color: 'red' }}>{nameErrorSign}</span>
                                    </div>
                                </div>

                                <div className="edit-input-row-left">

                                    <div className='edit-input-subHeader-data'>{user.email}</div>

                                </div>


                                <div className="edit-input-row-left">

                                    {/* <input type="text" placeholder={user.mobileNumber} id="text_edit"></input> */}
                                    <div className="edit-profile-input-block">
                                        <input
                                            className='edit-input-style'
                                            onChange={(e) => {
                                                validateMobilePhone(e)
                                                mobilePhone = e.target.value
                                            }}
                                            maxLength={maxMobile}
                                        />
                                    </div>
                                    <div className='edit-input-error-box'>
                                        <span style={{ fontsize: { errorFontSize }, fontWeight: 'bold', color: 'red' }}>{mobileErrorSign}</span>
                                    </div>
                                </div>
                                <div className="edit-input-row-left">

                                    <div className='edit-input-subHeader-data'>{user.birth}</div>


                                </div>
                            </div>
                        </div>
                        <div className="head_topic">
                            <p>รายละเอียดที่อยู่</p>
                        </div>

                        <div className='edit-input-row-right-main'>
                            <div className='edit-input-col-center'>
                                <div id="name" className='edit-input-subHeader2'>
                                    <p>ที่อยู่</p>
                                </div>
                                <div id="name" className='edit-input-subHeader2'>
                                    <p>ถนน</p>
                                </div>
                            </div>

                            <div className="edit-input-col-center">
                                <div className="edit-input-row-left">
                                    <div className="edit-profile-input-block">
                                        <input
                                            className='edit-input-style'
                                            placeholder={user.address}
                                            onChange={(e) => {
                                                validateAddress(e)
                                                address = e.target.value
                                            }}
                                            maxLength={maxAddress}
                                        /></div>
                                    <div className='edit-input-error-box'>
                                        <span style={{ fontsize: 15, fontWeight: 'bold', color: 'red' }}>{addressErrorSign}</span>
                                    </div></div>



                                <div className="edit-input-row-left">
                                    <div className="edit-profile-input-block">
                                        <input
                                            className='edit-input-style'
                                            placeholder={user.road}
                                            onChange={(e) => {
                                                validateRoad(e)
                                                road = e.target.value
                                            }}
                                            maxLength={maxRoad}
                                        /></div>
                                    <div className='edit-input-error-box'>
                                        <span style={{ fontsize: { errorFontSize }, fontWeight: 'bold', color: 'red' }}>{roadErrorSign}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <EditProvinceInput 
                        setDistrict={setDistrict} setPostalCode={setPostalCode} 
                        setProvince={setProvince} setSubDistrict={setSubDistrict} 
                        
                        getPostalCodeVal = {user.postalCode}
                        district = {user.district}
                        province = {user.province}
                        subDistrict = {user.subDistrict} 

                        />

                        <div className='Edit2-pane'>
                            <button class="Edit2-button" onClick={() => { submitEditForm('profile');}}>
                                บันทึก
                        </button>
                            <button class="Edit2-button" onClick={() => profileSwitch(1)}>
                                ยกเลิก
                        </button>
                        </div>

                        <div className="head_topic">
                            <p>เปลี่ยนรหัสผ่าน</p>
                        </div>

                        <div className='edit-input-row-right-main'>
                            <div className='edit-input-col-center'>
                                <div id="name" className='edit-input-subHeader'>
                                    <p>รหัสเดิม</p>
                                </div>
                                <div id="name" className='edit-input-subHeader'>
                                    <p>รหัสผ่านใหม่</p>
                                </div>
                                <div id="name" className='edit-input-subHeader'>
                                    <p>ยืนยันรหัสผ่าน</p>
                                </div>
                            </div>

                            <div className="edit-input-col-center">
                                <div className="edit-input-row-left">

                                    {/* <input type="text" placeholder='old password' id="text_edit"></input> */}
                                    <div className="edit-profile-input-block">
                                        <input type="password"
                                            className='edit-input-style'
                                            placeholder='old password'
                                            onChange={(e) => {
                                                let curPassvalue = e.target.value
                                                let tempPassSTR = curPassvalue.replace(/[^0-9A-Za-z]/ig, '')
                                                e.target.value = tempPassSTR
                                                validatePassword(0,tempPassSTR)

                                                Password[0] = e.target.value
                                            }}
                                            maxLength={maxPass}
                                        /></div>
                                    <div className='edit-input-error-box'>
                                    </div>
                                </div>

                                <div className="edit-input-row-left">

                                    {/* <input type="text" placeholder='new password' id="text_edit"></input> */}
                                    <div className="edit-profile-input-block">
                                        <input type="password"
                                            className='edit-input-style'
                                            placeholder='new password'
                                            onChange={(e) => {
                                                let curPassvalue = e.target.value
                                                let tempPassSTR = curPassvalue.replace(/[^0-9A-Za-z]/ig, '')
                                                e.target.value = tempPassSTR
                                                Password[1] = e.target.value
                                                validatePassword(1,tempPassSTR)
                                                
                                            }}
                                            maxLength={maxPass}
                                        /></div>
                                    <div className='edit-input-error-box'>
                                    </div>
                                </div>

                                <div className="edit-input-row-left">

                                    {/* <input type="text" placeholder='confirm password' id="text_edit"></input> */}
                                    <div className="edit-profile-input-block">
                                        <input type="password"
                                            className='edit-input-style'
                                            className='edit-input-style'
                                            placeholder='confirm password'
                                            onChange={(e) => {
                                                let curPassvalue = e.target.value
                                                let tempPassSTR = curPassvalue.replace(/[^0-9A-Za-z]/ig, '')
                                                validatePassword(2,tempPassSTR)
                                                e.target.value = tempPassSTR
                                                Password[2] = e.target.value
                                            }}
                                            maxLength={maxPass}
                                        /></div>
                                    <div className='edit-input-error-box'>
                                        <span style={{ fontsize: { errorFontSize }, fontWeight: 'bold', color: 'red' }}>{passErrorSign}</span>
                                    </div>
                                </div>
                            </div>
                        </div>


                            <div className='Edit2-pane'>
                                <button class="Edit2-button" onClick={() => { submitEditPassForm('profile')}}>
                                    เปลี่ยนรหัสผ่าน
                        </button>
                            </div>
                            {/* <div className='sell-pane'>
                                <button class="sell-button" onClick={() => showPopUp('Sell')}>
                                    + ลงขาย
                                </button>
                            </div> */}

                        </div>
                    </div>
            }


            {/* -----------------------------------------------EDIT STORE PROFILE PAGE---------------------------------------------------------------- */}

                    {
                        profileTab[5] &&
                        <div className="content2">
                            <div className="tab_one">
                                <label>
                                    <div className='img_border'>
                                        <img className='img-wrap' src={Profile_Dog} />
                                    </div>
                                    {/* <input id="photo-upload" type="file" onChange={this.handleInputChange}/>  */}
                                </label>
                                <div className="profile_bar">
                                    <div className="SidebarList">
                                        <li onClick={() => profileSwitch(1)} className="row">
                                            <div id="icon"><ArrowForwardIosIcon style={{ fontSize: 18 }} /></div>
                                            <div id="title">บัญชีของฉัน</div>
                                        </li>
                                        <li onClick={() => {fetDataForLike();profileSwitch(2)}} className="row">
                                            <div id="icon"><ArrowForwardIosIcon style={{ fontSize: 18 }} /></div>
                                            <div id="title">สนใจ</div>
                                        </li>
                                        <li onClick={() => {profileSwitch(3);}} className="row">
                                            <div id="icon"><ArrowForwardIosIcon style={{ fontSize: 18 }} /></div>
                                            <div id="title" style={{ color: "#ED8E82" }} >ร้านค้าของฉัน</div>
                                        </li>
                                        <li onClick={() => {profileSwitch(4)}} className="row">
                                            <div id="icon"><ArrowForwardIosIcon style={{ fontSize: 18 }} /></div>
                                            <div id="title">สถานะการชำระเงิน</div>
                                        </li>
                                        <li className="row" onClick= {()=>{ logOut();clearData()}}>
                                            <div id="icon"><ArrowForwardIosIcon style={{ fontSize: 18 }} /></div>
                                            <div id="title">ออกจากระบบ</div>
                                        </li>
                                    </div>
                                </div>
                            </div>
                            <div className='temp-money-pane'>
                                        <div className="store_page2">
                                            <div className="Dog_box">
                                                <div className="Dog_card">
                                                    <div className="img_dog">{dogForSellToShow.picture}</div>
                                                    {/* <div className="img_dog_details">
                                                        <div className="img_dog_small">{each.imgdetail1}</div>
                                                        <div className="img_dog_small">{each.imgdetail2}</div>
                                                        <div className="img_dog_small">{each.imgdetail3}</div>
                                                    </div> */}
                                                </div>
                                                <div className="Text_card">
                                                    <div className="cancel" onClick={() => profileSwitch(3)}><CancelIcon className="C_hover" style={{ fontSize: 70 }} /></div>
                                                    <div className="text_card_text1">{dogForSellToShow.breed}</div>
                                                    <div className="text_card_text2">{dogForSellToShow.typeSell==='บริจาค'?'บริจาคฟรี':'ราคา :' + ' ' + dogForSellToShow.cost}</div>
                                                    <div className="text_card_text1">{'เพศ :' + ' ' + dogForSellToShow.gender}</div>
                                                    <div className="text_card_text1">{'อายุ :' + ' ' + dogForSellToShow.age}</div>
                                                    <div className="text_card_text1">{'รายละเอียด :'}</div>
                                                    <div className="text_card_text3" style={{width:'500px',height:'170px',overflowY:'auto'}}>{dogForSellToShow.detail}</div>
                                                    <div className="text_card_text4">{'ลงขายเมื่อวันที่ :' + ' ' + dogForSellToShow.dateCreate}</div>

                                                </div>
                                            </div>
                                            {likeNameTab[0] &&
                                                <div className="like_card">
                                                    <div className="like_button_box">
                                                        <button className="like_button_details_selected" onClick={() => likeNameSwitch(1)}>
                                                            คนสนใจ
                                                    </button>
                                                        <button className="like_button_details" onClick={() => likeNameSwitch(2)}>
                                                            ยอมรับ
                                                    </button>
                                                        <button className="like_button_details" onClick={() => likeNameSwitch(3)}>
                                                            ยกเลิก
                                                    </button>
                                                    </div>
                                                    <div className="like_card_details">
                                                        <div className="Text_like_all">{'จำนวน' + ' ' + dogForSellToShow.likeUser.length + ' ' + 'คนสนใจ'}</div>
                                                        {dogForSellToShow.likeUser.map((each) => {
                                                            return (
                                                                <div className="block_user" onClick={() => { setUserAnswer(each); setPopUpAnsType(true); showPopUp('Answer');localStorage.setItem('likeUser',JSON.stringify(each))}}>
                                                                    <div className="img_block_user_detail"><img className="img_user_list" src={each.picture} /></div>
                                                                    <div className="name_block_user_detail">{each.name}</div>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            }
                                            {likeNameTab[1] &&
                                                <div className="like_card">
                                                    <div className="like_button_box">
                                                        <button className="like_button_details" onClick={() => likeNameSwitch(1)}>
                                                            คนสนใจ
                                                    </button>
                                                        <button className="like_button_details_selected" onClick={() => likeNameSwitch(2)}>
                                                            ยอมรับ
                                                    </button>
                                                        <button className="like_button_details" onClick={() => likeNameSwitch(3)}>
                                                            ยกเลิก
                                                    </button>
                                                    </div>
                                                    <div className="like_card_details">
                                                        <div className="Text_like_all">{'จำนวน' + ' ' + dogForSellToShow.acceptUser.length + ' ' + 'คนสนใจ'}</div>
                                                        {dogForSellToShow.acceptUser.map((each) => {
                                                            return (
                                                                <div className="block_user" onClick={() => { setUserAnswer(each); setPopUpAnsType(false); showPopUp('Answer');setChoosePeopleForAccept(each);localStorage.setItem('likeUser',JSON.stringify(each))}}>
                                                                    <div className="img_block_user_detail"><img className="img_user_list" src={each.picutre} /></div>
                                                                    <div className="name_block_user_detail">{each.name}</div>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            }
                                            {likeNameTab[2] &&
                                                <div className="like_card">
                                                    <div className="like_button_box">
                                                        <button className="like_button_details" onClick={() => likeNameSwitch(1)}>
                                                            คนสนใจ
                                                    </button>
                                                        <button className="like_button_details" onClick={() => likeNameSwitch(2)}>
                                                            ยอมรับ
                                                    </button>
                                                        <button className="like_button_details_selected" onClick={() => likeNameSwitch(3)}>
                                                            ยกเลิก
                                                    </button>
                                                    </div>

                                                    <div className="like_card_details">
                                                        <div className="Text_like_all">{'จำนวน' + ' ' + dogForSellToShow.cancelUser.length + ' ' + 'คนสนใจ'}</div>
                                                        {dogForSellToShow.cancelUser.map((each) => {
                                                            return (
                                                                <div className="block_user" onClick={() => { setUserAnswer(each); setPopUpAnsType(false); showPopUp('Answer');setChoosePeopleForAccept(each);;localStorage.setItem('likeUser',JSON.stringify(each)) }}>
                                                                    <div className="img_block_user_detail"><img className="img_user_list" src={each.picture} /></div>
                                                                    <div className="name_block_user_detail">{each.name}</div>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            }
                                        </div>
                            
                            </div>
                        </div>
                    }
                    {popUpPay && <PopUppayment setPopUp={setPopUpPay} getTotalPaid={choosePayment} />}

                    {
                        popUpDe && <PopDetail setPopUp={setPopUpDe}
                            // setDog = {setDog}
                            // getDateCreate = {dogDateCreate}
                            getDog={dogDetail}
                            user ={data}
                        />
                    }

                    {
                        popUpAns && <PopUpAnswer setPopUp={setPopUpAns}
                            setUser={setUser}
                            user={userAnswer}
                            dog={dogForSellToShow}
                            popUpAnsType={popUpAnsType}
                            setUserData={setUserData}
                        />
                    }

                    <Popup popup={popup1}>
        <Popup1 popup1={popup1} popup2={popup2} setType={SetPopType} />
      </Popup>
      <Popup popup={popup2}>
        <Popup2 popup1={popup1} popup2={popup2} popupFinish={popupFinish} setType={PopType} />
      </Popup>
      <Popup popup={popupFinish}>
        <PopupFinish
          // popup1={popup1}
          // popup2={popup2}
          popupFinish={popupFinish}
        />
      </Popup>

                </div >
    );
}


export default Profile

