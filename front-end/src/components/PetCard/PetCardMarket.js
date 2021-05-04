import React, { useState } from "react";
import "./PetCard.scoped.css";
import {
  BrowserRouter as Router,
  useHistory,
} from "react-router-dom";

function PetCard(props) {
  const dogDetail = props.dog;
  const history = useHistory();
  const dataB = JSON.parse(localStorage.getItem("user"))
  return (
    <div
      className="petcard-wrapper"
      onClick={() => {
        if (dataB==null){
          alert("กรุณาเข้าสู่ระบบ");
          let path = `/`;
          history.push(path);}
        props.setdogDetail(dogDetail);
        props.setpop(true);

      }}
    >
      {dogDetail.garuntee && <div className="petcard-garuntee">การันตี</div>}
      <img src={dogDetail.picture} className="petcard-img" />
      <div className="petcard-detail">
        <div className="petcard-detail-left">
          <div className="head">
            <div>สุนัขพันธ์ : {dogDetail.breed}</div>
            {dogDetail.typeSell==='ขาย'?<div>ราคา  :{dogDetail.cost}</div>:<div>บริจาคฟรี</div>}
          </div>
        </div>
        <div className="petcard-detail-right">
          <img className="petcard-detail-right-imgProfile" />
          <div style={{height:'25px',width:'7ch',textAlign:'center',overflow:'hidden'}}>{dogDetail.profile}</div>
        </div>
      </div>
    </div>
  );
}

export default PetCard;

//
