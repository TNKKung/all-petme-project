import {React,useEffect} from 'react';
import { Link } from 'react-router-dom';
import './profile';
import Profile_Dog from './img/profile3.jpg'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { colors } from '@material-ui/core';



export const CardItem_Accept = [
        {
            picture: Profile_Dog,           
            dogBreed: 'ซามอย',
            cost: '35000',
            status: 'ตอบรับแล้ว',
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
            petDetail: 'รับสุนัขตัวน้อยไหมคะ',
            gender: 'ชาย',
            age: '12 month'
        },
    ]


export default CardItem_Accept;