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
            imgName: Profile_Dog2,  
            breed: 'บีเกิ้ล',
            cost: '3500',
            status: 'false',
            like: 10,
            question1: 'ทำไม',
            answer1: '',
            question2: 'ทำไม',
            answer2: '',
            question3: 'ทำไม',
            answer3: '',
            question4: 'ทำไม',
            answer4: '',
            question5: 'ทำไม',
            answer5: '',
            seller: {picture:'',name:'คุณต้อม'},
            dateCreate:'12/02/2554',
            detail: 'รับสุนัขตัวน้อยไหมคะ',
            gender: 'ชาย',
            age: '12 month'

        },
        {
            imgName: Profile_Dog3,          
            breed: 'ลาบราดอร์',
            cost: '15000',
            status: 'ตอบรับแล้ว',
            icon: <FavoriteBorderIcon className="icon_details" style={{ fontSize: 45 }}/>,
            like: 15,
            question1: 'ทำไม',
            answer1: '',
            question2: 'ทำไม',
            answer2: '',
            question3: 'ทำไม',
            answer3: '',
            question4: 'ทำไม',
            answer4: '',
            question5: 'ทำไม',
            answer5: '',
            seller: {picture:'',name:'คุณต้อม'},
            dateCreate:'12/02/2554',
            detail: 'รับสุนัขตัวน้อยไหมคะ',
            gender: 'ชาย',
            age: '12 month'

        },
        
    ]
    


export default CardItem_Wait;