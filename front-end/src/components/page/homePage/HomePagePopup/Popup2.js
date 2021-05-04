import "./Popup2.scoped.css";
import Input from "../../../Input/Input";
import React, { useState, useEffect } from "react";
import fetch from "unfetch";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useHistory,
} from "react-router-dom";

function Popup2({ popup1, popup2, popupFinish, setType }) {
  const dataUser = JSON.parse(localStorage.getItem("user"));
  const history = useHistory();
  const typeSell = setType;

  function checkLogin() {
    if (dataUser == null) {
      let path = `/login`;
      history.push(path);
    }
  }

  const [form, setForm] = useState({
    petId: null,
    dogBreed: null,
    gender: null,
    age: null,
    petDetail: null,
    cost: 0,
    nameAccountPromtpay: null,
    detailAccountPromtpay: null,
    question1: null,
    question2: null,
    question3: null,
    question4: null,
    question5: null,
    picture: null,
    subPicture1: null,
    subPicture2: null,
    subPicture3: null,
    subPicture4: null,
    dataCreate: null
  });

  const [dataimage, setDataimage] = useState({});


  const sendDataImage = async (e) => {
    const data = JSON.parse(localStorage.getItem("user"));
    console.log("succes");
    let formData = new FormData();
    formData.append("avatar", dataimage);
    formData.append(
      "jsonbody",
      JSON.stringify({
        userId: dataUser.userId,
        breed: form.dogBreed,
        gender: form.gender,
        age: form.age,
        petDetail: form.petDetail,
        cost: form.cost,
        profile: dataUser.name,
        nameAccountPromtpay: form.nameAccountPromtpay,
        detailAccountPromtpay: form.detailAccountPromtpay,
        question1: form.question1,
        question2: form.question2,
        question3: form.question3,
        question4: form.question4,
        question5: form.question5,
        typeSell: typeSell,
        dataCreate: form.dataCreate

      })
    );
    const res = await fetch("http://localhost:4000/uploadFile", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.text())
      .then((resBody) => {
        console.log(resBody);
      });
  };



  function arrayBufferToBase64(buffer) {
    var binary = "";
    var bytes = [].slice.call(new Uint8Array(buffer));

    bytes.forEach((b) => (binary += String.fromCharCode(b)));

    return window.btoa(binary);
  }
  const [pathPicture, setPathPicture] = useState("");
  return (
    <form className="box-large" onSubmit={sendDataImage}>
      <div className="popup-closeButton" onClick={popup2.close}>
        X
      </div>
      <div className="top-box">
        <div className="left-box">
          <div className="header">
            <div className="text-head">
              {typeSell == "ขาย" ? "ลงทะเบียนขายสุนัข" : "ลงทะเบียนบริจาคสุนัข"}
            </div>
          </div>

          <div className="line" />
          <div className="text-input-box">
            <div className="text-box">
              <div className="text-origin">สุนัขพันธุ์</div>
              <div className="text-origin">เพศ</div>

              <div className="text-origin">อายุ</div>

              <div className="text-origin">
                {typeSell == "ขาย" ? "ราคา" : "บริจาคฟรี"}
              </div>
            </div>
            <div className="input-box">
              <select
                required
                className="selector"
                value={form.dogBreed}
                onChange={(e) => {
                  setForm({ ...form, dogBreed: e.target.value });
                }}
              >
                <option value="">เลือกพันธุ์สุนัข</option>
                <option value="ปอมเมอเรเนี่ยน">ปอมเมอเรเนี่ยน</option>
                <option value="โกลเด้นรีทรีฟเวอร์">โกลเด้นรีทรีฟเวอร์</option>
                <option value="ชิสุ">ชิสุ</option>
                <option value="ปั๊ก">ปั๊ก</option>
                <option value="ไซบีเรียน ฮัสกี้">ไซบีเรียน ฮัสกี้</option>
                <option value="ร็อตต์ไวเลอร์">ร็อตต์ไวเลอร์</option>
                <option value="บูลล์ด็อก">บูลล์ด็อก</option>
                <option value="ยอร์กไชร์เทอร์เรีย">ยอร์กไชร์เทอร์เรีย</option>
                <option value="บีเกิ้ล">บีเกิ้ล</option>
                <option value="ชิวาวา">ชิวาวา</option>
              </select>
              <select
                required
                className="selector"
                value={form.gender}
                onChange={(e) => {
                  setForm({ ...form, gender: e.target.value });
                }}
              >
                <option value="">เลือกเพศ</option>
                <option value="เพศผู้">เพศผู้</option>
                <option value="เพศเมีย">เพศเมีย</option>
              </select>

              <Input
                required
                min="1"
                max="20"
                type="number"
                value={form.age}
                onChange={(e) => {
                  setForm({ ...form, age: e.target.value });
                }}
              />
              {typeSell == "ขาย" ? (
                <Input
                  required
                  type="number"
                  value={form.cost}
                  onChange={(e) => {
                    setForm({ ...form, cost: e.target.value });
                  }}
                />
              ) : (
                <div></div>
              )}
            </div>
          </div>
          <div className="detail">รายละเอียด :</div>
          {/* <div className='input-detail' /> */}
          <textarea
            required
            className="input-detail"
            // rows='4'
            // cols='50'
            value={form.petDetail}
            onChange={(e) => {
              setForm({ ...form, petDetail: e.target.value });
            }}
          />
        </div>
        <div className="right-box">
          <div style={{ height: '150px', width: '150px', display: 'flex', justifyContent: 'center' }}>
            <div
              className="addPicture"
              onClick={() => {
                const button = document.querySelector("#uploadButton");
                button.click();
              }}
            >
              {form.picture ? (
                <img src={form.picture} className="image" />
              ) : (
                "เพิ่มรูปภาพ"
              )}
            </div>
            <input
              type="file"
              id="uploadButton"
              className="uploadPicture"
              onChange={(e) => {
                const file = e.target.files[0];
                if (!file) return;
                const reader = new FileReader();

                reader.readAsArrayBuffer(file);
                reader.onload = () => {
                  setForm({
                    ...form,
                    picture:
                      "data:image/jpeg;base64," +
                      arrayBufferToBase64(reader.result),
                  });
                };
                setDataimage(file);
              }}
            />
          </div>



          {/* <div className='show-picture-cover'>
            <div className='show-picture'>
              {form.subPicture1 ?
                (<img src={form.subPicture1} className="image" style={{ height: '70px', width: '70px', borderRadius: '10px' }} />) : ("เพิ่ม")}
              <input type="file" style={{ height: '70px', width: '70px', position: 'absolute', opacity: '0' }}
                onChange={(e) => {
                  setForm({ ...form, subPicture1: URL.createObjectURL(e.target.files[0]) }); const reader1 = new FileReader();
                  // reader.readAsArrayBuffer(file);
                  // reader.onload = () => {setForm({...form,subPicture1:"data:image/jpeg;base64," + arrayBufferToBase64(reader.result),});};
                  // setDataimage(file);
                }}
              /></div>
            <div className='show-picture'>
              {form.subPicture2 ?
                (<img src={form.subPicture2} className="image" style={{ height: '70px', width: '70px', borderRadius: '10px' }} />) : ("เพิ่ม")}
              <input type="file" style={{ height: '70px', width: '70px', position: 'absolute', opacity: '0' }}
                onChange={(e) => {
                  setForm({ ...form, subPicture2: URL.createObjectURL(e.target.files[0]) }); const reader1 = new FileReader();
                  // reader.readAsArrayBuffer(file);
                  // reader.onload = () => {setForm({...form,subPicture1:"data:image/jpeg;base64," + arrayBufferToBase64(reader.result),});};
                  // setDataimage(file);
                }}
              /></div>
            <div className='show-picture'>
              {form.subPicture3 ?
                (<img src={form.subPicture3} className="image" style={{ height: '70px', width: '70px', borderRadius: '10px' }} />) : ("เพิ่ม")}
              <input type="file" style={{ height: '70px', width: '70px', position: 'absolute', opacity: '0' }}
                onChange={(e) => {
                  setForm({ ...form, subPicture3: URL.createObjectURL(e.target.files[0]) }); const reader1 = new FileReader();
                  // reader.readAsArrayBuffer(file);
                  // reader.onload = () => {setForm({...form,subPicture1:"data:image/jpeg;base64," + arrayBufferToBase64(reader.result),});};
                  // setDataimage(file);
                }}
              /></div>
            <div className='show-picture'>
              {form.subPicture4 ?
                (<img src={form.subPicture4} className="image" style={{ height: '70px', width: '70px', borderRadius: '10px' }} />) : ("เพิ่ม")}
              <input type="file" style={{ height: '70px', width: '70px', position: 'absolute', opacity: '0' }}
                onChange={(e) => {
                  setForm({ ...form, subPicture4: URL.createObjectURL(e.target.files[0]) }); const reader1 = new FileReader();
                  // reader.readAsArrayBuffer(file);
                  // reader.onload = () => {setForm({...form,subPicture1:"data:image/jpeg;base64," + arrayBufferToBase64(reader.result),});};
                  // setDataimage(file);
                }}
              /></div>
          </div> */}

          {typeSell == "ขาย" ? (
            <div className="text-input-box">
              <div className="text-box-2">
                <div className="text-origin-2">ชื่อบัญชี</div>
                <div className="text-origin-2">รายละเอียด</div>
              </div>
              <div className="input-box-2">
                <Input
                  required
                  className="margin"
                  value={form.nameAccountPromtpay}
                  onChange={(e) => {
                    setForm({ ...form, nameAccountPromtpay: e.target.value });
                  }}
                />
                <textarea
                  required
                  className="textArea-detailAccount"
                  rows="3"
                  // cols='50'
                  value={form.detailAccountPromtpay}
                  onChange={(e) => {
                    setForm({ ...form, detailAccountPromtpay: e.target.value });
                  }}
                />
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
      <div className="bottom-box">
        <div className="text-head">สร้างแบบสอบถามสำหรับคัดเลือกผู้ซื้อ</div>
        <div className="line-bottom" />
        <div className="text-input-bottom">
          <div className="text-box-bottom">
            <div className="text-bottom">คำถามข้อที่ 1</div>
            <div className="text-bottom">คำถามข้อที่ 2</div>
            <div className="text-bottom">คำถามข้อที่ 3</div>
            <div className="text-bottom">คำถามข้อที่ 4</div>
            <div className="text-bottom">คำถามข้อที่ 5</div>
          </div>
          <div className="input-box-bottom">

            <select
              required
              className="selector"
              value={form.question1}
              onChange={(e) => {
                setForm({ ...form, question1: e.target.value });
              }}
            >
              <option value="สุนัขพันธ์นี้ชอบการเอาใจใส่ คุณมีเวลาเลี้ยงดูได้ไหม?">สุนัขพันธ์นี้ชอบการเอาใจใส่ คุณมีเวลาเลี้ยงดูได้ไหม?</option>
              <option value="สุนัขพันธ์นี้ไม่ควรอยู่ใกล้เด็กเล็ก คุณมีเด็กเล็กไหม?">สุนัขพันธ์นี้ไม่ควรอยู่ใกล้เด็กเล็ก คุณมีเด็กเล็กไหม?</option>
              <option value="สุนัขพันธ์นี้เสี่ยงเป็นโรคได้ง่าย คุณดูแลเรื่องอาหารได้ไหม?">สุนัขพันธ์นี้เสี่ยงเป็นโรคได้ง่าย คุณดูแลเรื่องอาหารได้ไหม?</option>
              <option value="สุนัขพันธ์นี้ต้องดูแลรักษาความสะอาดเป็นพิเศษ คุณดแลไดไหม?">สุนัขพันธ์นี้ต้องดูแลรักษาความสะอาดเป็นพิเศษ คุณดูแลได้ไหม?</option>
              <option value="สุนัขพันธ์นี้ชอบออกกำลัง คุณมีเวลาพาสุนัขไปออกกำลังกายไหม?">สุนัขพันธ์นี้ชอบออกกำลัง คุณมีเวลาพาสุนัขไปออกกำลังกายไหม?</option>
              <option value="สุนัขพันธ์นี้ชอบการเอาใจใส่ คุณมีเวลาเลี้ยงดูได้ไหม?">สุนัขพันธ์นี้ชอบการเอาใจใส่ คุณมีเวลาเลี้ยงดูได้ไหม?</option>
            </select>

            <select
              required
              className="selector"
              value={form.question2}
              onChange={(e) => {
                setForm({ ...form, question2: e.target.value });
              }}
            >
              <option value="สุนัขพันธ์นี้ใช้ค่าใช้จ่ายในการเลี้ยงดูสูง คุณดูแลได้ไหม?">สุนัขพันธ์นี้ใช้ค่าใช้จ่ายในการเลี้ยงดูสูง คุณดูแลได้ไหม? </option>
              <option value="สุนัขพันธ์นี้ชอบเล่นน้ำ คุณดูแลได้หรือไม่?">สุนัขพันธ์นี้ชอบเล่นน้ำ คุณดูแลได้หรือไม่?</option>
              <option value="สุนัขพันธ์นี้ไม่เหมาะกับเลี้ยงในพื้นที่ปิด คุณมีสนามหญ้าไหม?">สุนัขพันธ์นี้ไม่เหมาะกับเลี้ยงในพื้นที่ปิด คุณมีสนามหญ้าไหม?</option>
              <option value="สุนัขพันธ์นี้ต้องการพื้นที่ในการวิ่งเล่นออกกำลังกาย คุณมีพื้นที่ไหม">สุนัขพันธ์นี้ต้องการพื้นที่ในการวิ่งเล่นออกกำลังกาย คุณมีพื้นที่ไหม</option>
              <option value="สุนัขพันธ์นี้ดุร้าย คุณดูแลได้ไหม">สุนัขพันธ์นี้ดุร้าย คุณดูแลได้ไหม</option>
              
              
            </select>

            <textarea
              required
              className="input-bottom"
              // rows='4'
              // cols='50'
              value={form.question3}
              onChange={(e) => {
                setForm({ ...form, question3: e.target.value });
              }}
            />
            <textarea
              className="input-bottom"
              // rows='4'
              // cols='50'
              value={form.question4}
              onChange={(e) => {
                setForm({ ...form, question4: e.target.value });
              }}
            />
            <textarea
              className="input-bottom"
              // rows='4'
              // cols='50'
              value={form.question5}
              onChange={(e) => {
                setForm({ ...form, question5: e.target.value });
              }}
            />
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="text-footer">
          หมายเหตุ : สามารถตั้งคำถามได้มากสุด 5 ข้อ
        </div>
        <button className="footer-button">ลงทะเบียนสุนัข</button>
      </div>
    </form>
  );
}

export default Popup2;
