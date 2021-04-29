import React from 'react';
import { Link } from 'react-router-dom';
import './profile';
import Profile_Dog from './img/profile3.jpg'
import Profile from './img/profile2.jfif'
import Profile2 from './img/profile10.jpg'
import { colors } from '@material-ui/core';

const UserAccept = [

        {
            pic_user: <img className="img_user_list" src={Profile}/>,
            user_like: 'ธันยวัชร์ พงศ์เจริญ',
        },
        {
            pic_user: <img className="img_user_list" src={Profile2}/>,
            user_like: 'วิภาดา มีสกุล',
        },
    ]


export default UserAccept;