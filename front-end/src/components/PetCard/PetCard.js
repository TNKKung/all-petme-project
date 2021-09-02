import React, { useState } from "react";
import "./PetCard.scoped.css";

function PetCard(props) {
  const [dogDetail, SetdogDetail] = useState(props.dog);
  // const [Popup,setPopups] = useState(false)
  return (
    <div
      className="petcard-wrapper"
      onClick={() => {
        props.setdogDetail(dogDetail);
        props.setpop(true);
      }}
    >
      {dogDetail.garuntee && <div className="petcard-garuntee">การันตี</div>}
      <img src={dogDetail.picture} className="petcard-img" />
      <div className="petcard-detail">
        <div className="petcard-detail-left">
          <div className="head">
            <div>สุนัขพันธ์ : {dogDetail.dogBreed}</div>
          </div>
        </div>
        <div className="petcard-detail-right">
          <img className="petcard-detail-right-imgProfile" />
          {dogDetail.profile}
        </div>
      </div>
    </div>
  );
}

export default PetCard;

//
