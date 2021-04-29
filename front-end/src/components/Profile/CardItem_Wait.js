import React from 'react';
import { Link } from 'react-router-dom';
import './profile';
import Profile_Dog from './img/profile3.jpg'
import Profile_Dog2 from './img/profile5.jpg'
import Profile_Dog3 from './img/profile6.jpg'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { colors } from '@material-ui/core';

const CardItem_Wait = [
        {
            imgName: <img className="img_list" src={Profile_Dog2}/>,  
            breed: 'สุนัขพันธ์ : บีเกิ้ล',
            cost: '3500',
            status: 'รอการตอบรับ',
            icon: <FavoriteBorderIcon className="icon_details" style={{ fontSize: 45 }}/>,
            like: 10,

        },
        {
            imgName: <img className="img_list" src={Profile_Dog3}/>,          
            breed: 'สุนัขพันธ์ : ลาบราดอร์',
            cost: '15000',
            status: 'รอการตอบรับ',
            icon: <FavoriteBorderIcon className="icon_details" style={{ fontSize: 45 }}/>,
            like: 15,

        },
        
    ]
    


export default CardItem_Wait;