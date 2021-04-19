import { Button } from 'bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import RegInputField from './regInputField';
import fetch from 'unfetch';




const Register = () => {

    const inputRefs = React.useRef([
        React.createRef(), React.createRef(),
        React.createRef(), React.createRef(),
        React.createRef(), React.createRef(),
        React.createRef(), React.createRef(),
        React.createRef(), React.createRef(),
        React.createRef(), React.createRef(),

      ]);
    
      const [data, setData] = React.useState({});
      
      const handleChange = (name, value) => {
        setData(prev => ({ ...prev, [name]: value }))
      }


      
      
      const submitForm = async(e) => {
        e.preventDefault();
        
    
        const res = await fetch('http://localhost:4000/api/add',{
          method: 'POST',
            headers: {
                'Content-Type': 'application/json'     
            },
            mode : "cors",
            body: JSON.stringify({
              Username :data.username,
              Password :data.password,
              Name : data.name,
              Email : data.email,
              Tell : data.mobile_number,
              Birth : data.birth_date,
              Address : data.address,
              Road : data.road,
              Sub_district : data.sub_district,
              District : data.district,
              Province : data.province,
              Postal_code : data.postal_code
            }),
        });
        
        console.log("Logged In");

      }
    React.useEffect(()=>{
      console.log(data);
    },[data]);
    return (
        <div className = 'Register'>
            <form class ="reg-form" onSubmit={submitForm}>
                <text class='register-header'>สมัครใช้งาน</text>
                <div class= 'col'>
                  <div class = 'left-rol'>
                    <div class = 'reg-block'>
                      <text class='reg-input-head'>ชื่อผู้ใช้งาน</text>
                      <RegInputField
                        ref={inputRefs.current[0]}
                        name="username"
                        placeholder=""
                        onChange={handleChange}
                        validation={"required|min:6|max:12,ชื่อผู้ใช้งาน"}
                      />
                    </div>
                    <div class = 'reg-block'>
                      <text class='reg-input-head'>รหัสผ่าน</text>
                      <RegInputField
                        ref={inputRefs.current[1]}
                        name="password"
                        placeholder=""
                        onChange={handleChange}
                        validation={"required,รหัสผ่าน"}
                      />
                    </div>
                    <div class = 'reg-block'>
                      <text class='reg-input-head'>ชื่อจริง-นามสกุล</text>
                      <RegInputField
                        ref={inputRefs.current[2]}
                        name="name"
                        placeholder=""
                        onChange={handleChange}
                        validation={"required,ชื่อจริง-นามสกุล"}
                      />
                    </div>
                    <div class = 'reg-block'>
                      <text class='reg-input-head'>อีเมล</text>
                      <RegInputField
                        ref={inputRefs.current[3]}
                        name="email"
                        placeholder=""
                        onChange={handleChange}
                        validation={"required,อีเมล"}
                      type="email"/>
                    </div>
                    <div class = 'reg-block'>
                      <text class='reg-input-head'>เบอร์โทรศัพท์</text>
                      <RegInputField
                        ref={inputRefs.current[4]}
                        name="mobile_number"
                        placeholder=""
                        onChange={handleChange}
                        validation={"required|length:10,เบอร์โทรศัพท์"}
                      />
                    </div>
                    <div class = 'reg-block'>
                      <text class='reg-input-head'>วัน/เดือน/ปี เกิด</text>
                      <RegInputField
                        ref={inputRefs.current[5]}
                        name="birth_date"
                        placeholder=""
                        onChange={handleChange}
                        validation={"required,วัน/เดือน/ปี เกิด"}
                      />
                    </div>
                    
                    </div>
                    
                  
                  <div class = 'right-rol'>
                    <div class = 'reg-block'>
                      <text class='reg-input-head'>ที่อยู่</text>
                      <RegInputField
                        ref={inputRefs.current[6]}
                        name="address"
                        placeholder=""
                        onChange={handleChange}
                        validation={"required,ที่อยู่"}
                      />
                    </div>
                    <div class = 'reg-block'>
                      <text class='reg-input-head'>ถนน</text>
                      <RegInputField
                        ref={inputRefs.current[7]}
                        name="road"
                        placeholder=""
                        onChange={handleChange}
                        validation={"required,ถนน"}
                      />
                    </div>
                    <div class = 'reg-block'>
                      <text class='reg-input-head'>จังหวัด</text>
                      <RegInputField
                        ref={inputRefs.current[8]}
                        name="sub_district"
                        placeholder=""
                        onChange={handleChange}
                        validation={"required,แขวง/ตำบล"}
                      />
                    </div>
                    <div class = 'reg-block'>
                      <text class='reg-input-head'>เขต/อำเภอ</text>
                      <RegInputField
                        ref={inputRefs.current[9]}
                        name="district"
                        placeholder=""
                        onChange={handleChange}
                        validation={"required,เขต/อำเภอ"}
                      />
                    </div>
                    
                    <div class = 'reg-block'>
                      <text class='reg-input-head'>แขวง/ตำบล</text>
                      <RegInputField
                        ref={inputRefs.current[10]}
                        name="province"
                        placeholder=""
                        onChange={handleChange}
                        validation={"required,จังหวัด"}
                      />
                    </div>
                    
                    <div class = 'reg-block'>
                      <text class='reg-input-head'>รหัสไปรษณีย์</text>
                      <RegInputField
                        ref={inputRefs.current[11]}
                        name="postal_code"
                        placeholder=""
                        onChange={handleChange}
                        validation={"required,รหัสไปรษณีย์"}
                      />
                    </div>
                    
                  </div>
                </div>
                <div class ="bottom">
                  <button class="reg-button" type="submit">
                    บันทึกข้อมูล
                  </button>
                </div>
            </form>
        </div>
    )
}

export default Register 