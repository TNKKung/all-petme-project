
  
import React from 'react';
import './login.css';
import InputField from './InputField';
import Login_icon from './login_icon.png'
import '../../../fonts/Abel-Regular.ttf'; 
import { Link } from 'react-router-dom';
import fetch from 'unfetch';
import {useHistory } from "react-router-dom";

const Login = () => {


  const history = useHistory();
  const inputRefs = React.useRef([
    React.createRef(), React.createRef()
  ]);

  const [data, setData] = React.useState({});

  const handleChange = (name, value) => {
    setData(prev => ({ ...prev, [name]: value }))
  }

  const submitForm = async(e) => {
    e.preventDefault();

    
    const res = await fetch('http://localhost:4000/api/login',{
          method: 'POST',
            headers: {
                'Content-Type': 'application/json'     
            },
            mode : "cors",
            body: JSON.stringify({
              username : data.username,
              password: data.password,
            }),
        });

      
        const a = await res.json();
        console.log(a)
        localStorage.setItem("user",JSON.stringify(a))
        const dataPath = JSON.parse(localStorage.getItem("user"))
        console.log(dataPath.userId)

        if(dataPath.userId != null){
          console.log('111')
          let path = "/profile"; 
          history.push(path);
        }
      

    console.log("Logged In");
    //Carry on as normal
  }
  React.useEffect(()=>{
    console.log(data);
  },[data]);
  return (
    <div className="Login">
      <img src = {Login_icon} className = 'logo_icon_style'/>
      <text className="login-header">เข้าสู่ระบบผู้ใช้งาน</text>
      <form onSubmit={submitForm} className="form">
        
        <InputField
          ref={inputRefs.current[0]}
          name="username"
          placeholder="ชื่อผู้ใช้"
          onChange={handleChange}
          validation={"required|min:6|max:12,ชื่อผู้ใช้งาน"}
        />
        <InputField type = "password"
          ref={inputRefs.current[1]}
          name="password"
          placeholder="รหัสผ่าน"
          validation="required|min:6,รหัสผ่าน"
          onChange={handleChange}
        />
        <Link to ='/'></Link><button class = "login-button" type="submit">เข้าสู่ระบบ</button><Link/>
        <text className="forgot-password">ลืมรหัสผ่าน?</text>
        </form>

      <Link to ='/register'><text className="text-new-account">สร้างบัญชีใหม่</text></Link>
    </div>


  );
}

export default Login 

