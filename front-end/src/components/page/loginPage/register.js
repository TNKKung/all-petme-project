
import React, { useEffect, useState, useRef } from 'react';
import {
  BrowserRouter as Router,
  useHistory ,                              
  Switch,
  Route,                   
  Link,
  useRouteMatch
} from "react-router-dom";
import './login.css';

import ProvinceInput from './registerComponent/provinceInput.js'
import validator from 'validator'


import ModernDatepicker from 'react-modern-datepicker';
import "react-datepicker/dist/react-datepicker.css";


var Username,Password,Name,Email,Tell,Birth,Address,Road,Sub_district,District,Province,Postal_code;

const Register = () => {

  const inputRefs = React.useRef([
    React.createRef(), React.createRef(),
    React.createRef(), React.createRef(),
    React.createRef(), React.createRef(),
    React.createRef(), React.createRef(),
    React.createRef(), React.createRef(),
    React.createRef(), React.createRef(),

  ]);

  var maxID = '15'
  var maxName = '20'
  var maxPass = '15'
  var maxEmail = '20'
  var maxMobile = '10'
  var maxAddress = '40'
  var maxRoad = '20'


  
  
  const [emailErrorSign, setEmailErrorSign] = useState(' ')
  const [mobileErrorSign, setMobileErrorSign] = useState(' ')
  const [passErrorSign, setPassErrorSign] = useState(' ')
  const [nameErrorSign, setNameErrorSign] = useState(' ')
  const [IDErrorSign, setIDErrorSign] = useState(' ')
  const [roadErrorSign, setRoadErrorSign] = useState(' ')
  const [addressErrorSign, setAddressErrorSign] = useState(' ')
  const [dateErrorSign, setDateErrorSign] = useState(' ')
  const [district,setDistrict] = useState(' ')
  const [subDistrict,setSubDistrict] = useState(' ')
  const [province,setProvince] = useState(' ')
  const [postalCode,setPostalCode] = useState(' ')
  
  
  const history = useHistory();

  const [selectedDate, setSelectedDate] = useState()

  const validateID = (e) => {
    var idInput = e
    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if(idInput.length < 6 && idInput.length != 0){ setIDErrorSign('ชื่อผู้ใช้งานต้องมีความยาวอย่างน้อย 6 ตัวอักษร') }
    else if(format.test(idInput)){setIDErrorSign('ชื่อผู้ใช้งานห้ามมีอักขระพิเศษ ')}
    else if(idInput.length == 0) {
      setIDErrorSign('กรุณากรอกชื่อผู้ใช้งาน')
    } else{
      setIDErrorSign('✔')
    }
  }

  const validateAddress = (e) => {
    var addresesInput = e.target.value
    var format = /[`!@#$%^&*_+\-=\[\]{};':"\\|<>\?~]/;
    if(format.test(addresesInput)){setAddressErrorSign('ที่อยู่ห้ามมีอักขระพิเศษ')}
    else if(addresesInput.length == 0) {
      setAddressErrorSign('กรุณากรอกที่อยู่ให้ครบถ้วน')
    } else{
      setAddressErrorSign('✔')
    }
  }
  const validateRoad = (e) => {
    var roadInput = e.target.value
    var format = /[`!@#$%^&*()_+\=\[\]{};':"\\|,.<>\/?~]/;
    if(format.test(roadInput)){setRoadErrorSign('ชื่อผู้ใช้งานห้ามมีอักขระพิเศษ ')}
    else{
      setRoadErrorSign('✔')
    }
  }
  const validatePassword = (passInput) => {
    var format = /[ `!@#$%^&()+\-=\[\]{};':"\\|,.<>\/?~]/;
    if(passInput.length < 6 && passInput.length != 0){ setPassErrorSign('รหัสผ่านต้องมีความยาวอย่างน้อย 6 ตัวอักษร') }
    else if(format.test(passInput)){setPassErrorSign('รหัสผ่านห้ามมีอักขระพิเศษ ยกเว้น *_ ')}
    else if(passInput.length == 0) {
      setPassErrorSign('กรุณากรอกรหัสผ่าน')
    } else{
      setPassErrorSign('✔')
    }
  }
  const validateDate = (start) => {
    setSelectedDate(start)

    var month = Number(start[0]+start[1])
    var day = Number(start[3]+start[4])
    var year = Number(start[6]+start[7]+start[8]+start[9])
    //console.log(month+' '+day+' '+year)

    var end = JSON.stringify(new Date())
    var curDay= ''
    for (let i = 1; i < 11; i++) {
      curDay = curDay+end[i]
    }
    var cur_month = Number(curDay[5]+curDay[6])
    var cur_day = Number(curDay[8]+curDay[9])
    var cur_year = Number(curDay[0]+curDay[1]+curDay[2]+curDay[3])
    //console.log(cur_month+' '+cur_day+' '+cur_year)
    //console.log('gap : '+ age)
    if(cur_year-year>20 && cur_year-year<100){
      setDateErrorSign('✔')}
    else if(cur_year-year === 20){
      if(cur_month-month>0){
        setDateErrorSign('✔')}
      else if(cur_month-month === 0){
        if(cur_day-day>=0){
          setDateErrorSign('✔')}
        else setDateErrorSign('ผู้ใช้งานต้องมีอายุระหว่าง 20 ถึง 100 ปีบริบูรณ์')
      }
      else setDateErrorSign('ผู้ใช้งานต้องมีอายุระหว่าง 20 ถึง 100 ปีบริบูรณ์')
    }
    else{
      setDateErrorSign('ผู้ใช้งานต้องมีอายุระหว่าง 20 ถึง 100 ปีบริบูรณ์')
    }

  }
  const validateName = (e) => {
    var nameInput = e.target.value
    var format = /[`!@#$%^&()+*_\-=\[\]{};':"\\|,.<>\/?~]/;
    if(format.test(nameInput)){setNameErrorSign('ชื่อจริงห้ามมีอักขระพิเศษ')}
    else if(nameInput.length === 0) {
      setNameErrorSign('กรุณากรอกชื่อและนามสกุล')
    } else{
      setNameErrorSign('✔')
    }
  }

  const validateEmail = (e) => {
    var email = e.target.value
    
    if (validator.isEmail(email)) {
      setEmailErrorSign('✔')
    } else if(e.target.value){
      setEmailErrorSign('✘')
    }else{
      setEmailErrorSign('กรุณากรอกอีเมลล์')
    }
  }
  const validMobile = (mobilePhone) =>{
    if(mobilePhone.length === 10 && mobilePhone[0] === '0' && (mobilePhone[1]==='9' || mobilePhone[1]==='6' || mobilePhone[1]==='8' )){
      for (var i = 0; i < 10; i++) {
        if(mobilePhone[i]<'0' || mobilePhone[i]>'9'){
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
    } else if(e.target.value){
      setMobileErrorSign('✘')
    }else{
      setMobileErrorSign('กรุณากรอกเบอร์')
    }
  }

  const submitRegisterForm = async(next) => {
    
    console.log('submit')
    if(
      emailErrorSign === '✔' &&
      mobileErrorSign === '✔' &&
      passErrorSign === '✔' &&
      nameErrorSign === '✔' &&
      IDErrorSign === '✔' &&
      roadErrorSign === '✔' &&
      addressErrorSign === '✔' &&
      dateErrorSign === '✔'
    ){


      const res = await fetch('http://localhost:4000/api/add/registerUser',{
          method: 'POST',
          headers :{
            "Content-Type":"application/json",
            "Accept":"application/json"
          },
          body:JSON.stringify({
            username : Username,
            password:Password,
            name:Name,
            email:Email,
            mobileNumber:Tell,
            birth:Birth,
            address:Address,
            road:Road,
            district:district,
            subDistrict:subDistrict,
            province:province,
            postalCode:postalCode
          })
        });
        
        const a = res.json;
        console.log(a);

      let path = `/`; 
      history.push(path);
    }else{
      alert("กรุณากรอกข้อมูลให้ถูกต้อง");
    }
  }
  useEffect(()=>{
    console.table(district,subDistrict,province,postalCode);
  },[district,subDistrict,province,postalCode])
  return (
    <div className='Register'>
      <form class="reg-form" >
        <text class='register-header'>สมัครใช้งาน</text>
        <div class='col'>
          <div class='left-rol'>
            <div class='reg-block'>
              <text class='reg-input-head'>ชื่อผู้ใช้งาน</text>
              <div className="reg-input-wrapper">
              <input 
                onChange={(e) => {
                  let curvalue = e.target.value
                  let tempSTR = curvalue.replace(/[^0-9A-Za-z]/ig, '')
                  validateID(tempSTR)
                  e.target.value = tempSTR
                  Username = e.target.value
                  }}
                maxLength={maxID}
              /></div>
              <span style={{ fontSize:20, fontWeight: 'bold', color: 'red'}}>
              {IDErrorSign}</span>
              
            </div>
            <div class='reg-block'>
              <text class='reg-input-head'>รหัสผ่าน</text>
              <div className="reg-input-wrapper">
              <input
                onChange={(e) => {
                  let curPassvalue = e.target.value
                  let tempPassSTR = curPassvalue.replace(/[^0-9A-Za-z]/ig, '')
                  validatePassword(tempPassSTR)
                  e.target.value = tempPassSTR
                  Password = e.target.value
                  }}
                maxLength={maxPass}
              /></div>
              <span style={{ fontSize:20, fontWeight: 'bold', color: 'red'}}>{passErrorSign}</span>
              
            </div>
            <div class='reg-block'>
              <text class='reg-input-head'>ชื่อจริง-นามสกุล</text>
              <div className="reg-input-wrapper">
              <input 
                placeholder=""
                onChange={(e) => {
                  validateName(e)
                  Name = e.target.value
                }}
                
                maxLength={maxName}
              /></div>
              <span style={{ fontSize:20, fontWeight: 'bold', color: 'red'}}>{nameErrorSign}</span>
              
            </div>
            <div class='reg-block'>
              <text class='reg-input-head'>อีเมล</text>
              <div className="reg-input-wrapper">
              <input 
                placeholder=""
                onChange={(e) => {
                  validateEmail(e)
                  Email = e.target.value
                }}
                maxLength={maxEmail}
              />
              </div>
              <span style={{ fontSize:20, fontWeight: 'bold', color: 'red'}}>
              {emailErrorSign}</span>
            </div>
            <div class='reg-block'>
              <text class='reg-input-head'>เบอร์โทรศัพท์</text>
              <div className="reg-input-wrapper">
              <input
                onChange={(e) => {
                  validateMobilePhone(e)
                  Tell = e.target.value
                }}
                maxLength={maxMobile}
              />
              </div>
              <span style={{ fontSize:20, fontWeight: 'bold', color: 'red'}}>{mobileErrorSign}</span>
            </div>
            <div class='reg-block'>
              <text class='reg-input-head'>วัน/เดือน/ปี เกิด</text>
              <div className="reg-input-wrapper">
              <ModernDatepicker
                date={ selectedDate}
                format={'DD-MM-YYYY'}
                showBorder
                onChange={date => {
                  validateDate(date)
                  Birth = date
                }}
                placeholder={'Select a date'}
              /></div>
              <span style={{ fontSize:20, fontWeight: 'bold', color: 'red'}}>{dateErrorSign}</span>
              
            
            </div>
          </div>


          <div class='right-rol'>
            <div class='reg-block'>
              <text class='reg-input-head'>ที่อยู่</text>
              <div className="reg-input-wrapper">
              <input 
                placeholder=""
                onChange={(e) => {
                  validateAddress(e)
                  Address = e.target.value
                }}
                maxLength={maxAddress}
              /></div>
              <span style={{ fontSize:20, fontWeight: 'bold', color: 'red'}}>{addressErrorSign}</span>
              
            </div>
            <div class='reg-block'>
              <text class='reg-input-head'>ถนน</text>
              <div className="reg-input-wrapper">
              <input 
                placeholder=""
                onChange={(e) => {
                  validateRoad(e)
                  Road = e.target.value
                }}
                maxLength={maxRoad}
              /></div> 
              <span style={{ fontSize:20, fontWeight: 'bold', color: 'red'}}>{roadErrorSign}</span>
              
            </div>
            

              <ProvinceInput setDistrict={setDistrict} setPostalCode={setPostalCode} setProvince={setProvince} setSubDistrict={setSubDistrict}/>
            

            

          </div>
        </div>
        <div class="bottom">
          <button class="reg-button" type="submit"  onClick={() => submitRegisterForm('home')}>
            บันทึกข้อมูล
                  </button>
        </div>

      </form>
    </div>
  )
}
export default Register