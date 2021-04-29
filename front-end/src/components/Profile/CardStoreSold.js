import React from 'react';
import { Link } from 'react-router-dom';
import './profile';
import Profile_Dog from './img/profile3.jpg'
import Profile from './img/profile.jfif'
import { colors } from '@material-ui/core';

const CardStoreSold = [
    {
        imgName: <img className="img_list" src={Profile_Dog}/>,
            imgName2: <img className="img_list2" src={Profile_Dog}/>,
            imgdetail1: <img className="img_list3" src={Profile_Dog}/>,
            imgdetail2: <img className="img_list3" src={Profile_Dog}/>,
            imgdetail3: <img className="img_list3" src={Profile_Dog}/>,           
            breed: 'สุนัขพันธ์ : ซามอย',
            cost: '35000',
            garantee: 'การันตี',
            sex: 'ผู้',
            age: '5 เดือน',
            details: 'ลูกบีเกิ้ลแท้สามสี ไซส์13 นิ้ว พ่อมีใบเพด แม่ไม่มีใบ มาร์คครบ อายุ31วัน พร้อมส่งหลังรับวัคซีนรวม5โรค ที่อายุ50วัน',
            date: '2/12/2564',
            like: 5,
            pic_user: <img className="img_user_list" src={Profile}/>,
            user_like: 'ธันยวัชร์ พงศ์เจริญ',
            pic_user2: <img className="img_user_list" src={Profile}/>,
            user_like2: 'วิภาดา มีสกุล',
    },
    
]

export default CardStoreSold;