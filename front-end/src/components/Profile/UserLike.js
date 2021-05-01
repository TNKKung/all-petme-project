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
            name: 'ธันยวัชร์ พงศ์เจริญ',
            answer1: 'ans1',
            answer2: 'ans2',
            answer3: 'ans3',
        },
        {
            pic_user: <img className="img_user_list" src={Profile2}/>,
            name: 'วิภาดา มีสกุล',
            answer1: 'ans1',
            answer2: 'ans2',
            answer3: 'ans3',
        },
        {
            pic_user: <img className="img_user_list" src={Profile3}/>,
            name: 'ธันนน เจริญ',
            answer1: 'ans1',
            answer2: 'ans2',
            answer3: 'ans3',
        },
        {
            pic_user: <img className="img_user_list" src={Profile4}/>,
            name: 'ชัยยุทธ์ ไกรทอง',
            answer1: 'ans1',
            answer2: 'ans2',
            answer3: 'ans3',
        },
        
    ]


export default UserLike;