import React from 'react';
import { Link } from 'react-router-dom';
import './profile';
import Profile_Dog from './img/profile3.jpg'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { colors } from '@material-ui/core';

export const CardItem_Accept = [
        {
            imgName: <img className="img_list" src={Profile_Dog}/>,           
            breed: 'สุนัขพันธ์ : ซามอย',
            cost: '35000',
            status: 'ตอบรับแล้ว',
            icon: <FavoriteIcon className="icon_details_accept" style={{ fontSize: 45 }}/>,
            like: 5,
        },
    ]


export default CardItem_Accept;