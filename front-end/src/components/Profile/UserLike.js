import React from 'react';
import { Link } from 'react-router-dom';
import './profile';
import Profile_Dog from './img/profile3.jpg'
import Profile from './img/profile.jfif'
import Profile3 from './img/profile2.jfif'
import Profile4 from './img/profile3.jfif'
import Profile2 from './img/profile9.jpg'
import { colors } from '@material-ui/core';

const UserLike = [

        {
            pic_user: <img className="img_user_list" src={Profile}/>,
            user_like: 'ธันยวัชร์ พงศ์เจริญ',
        },
        {
            pic_user: <img className="img_user_list" src={Profile2}/>,
            user_like: 'วิภาดา มีสกุล',
        },
        {
            pic_user: <img className="img_user_list" src={Profile3}/>,
            user_like: 'ธันนน เจริญ',
        },
        {
            pic_user: <img className="img_user_list" src={Profile4}/>,
            user_like: 'ชัยยุทธ์ ไกรทอง',
        },
        
    ]


export default UserLike;