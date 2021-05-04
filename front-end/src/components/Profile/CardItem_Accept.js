import { React, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './profile';
import Profile_Dog from './img/profile3.jpg'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { colors } from '@material-ui/core';



export const CardItem_Accept = [
    {
        picture: Profile_Dog,
        breed: 'ซามอย',
        cost: '35000',
        status: true,
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
        profile: 'Tom',
        dateCreate: '12/02/2554',
        petDetail: 'รับสุนัขตัวน้อยไหมคะ',
        gender: 'ชาย',
        age: '12 month',
        likeUser: [{
            user: 'asa',
            answer1: 'like ans1',
            answer2: 'like ans2',
            answer3: 'like ans3',
            dateCreate: '01/01/2021'
        },
        {
            user: 'asaa',
            answer1: 'like ans1',
            answer2: 'like ans2',
            answer3: 'like ans3',
            dateCreate: '01/01/2021'
        },]
    },

    {
        picture: Profile_Dog,
        breed: 'บีเกิ้ล',
        cost: '45000',
        status: true,
        question1: 'ทำไม1',
        answer1: '',
        question2: 'ทำไม2',
        answer2: '',
        question3: 'ทำไม3',
        answer3: '',
        question4: 'ทำไม4',
        answer4: '',
        question5: 'ทำไม5',
        answer5: '',
        profile: 'Tom',
        dateCreate: '12/02/2554',
        petDetail: 'รับสุนัขตัวน้อยไหมคะ',
        gender: 'ชาย',
        age: '12 month',
        likeUser: [{
            user: 'asa',
            answer1: 'like ans1',
            answer2: 'like ans2',
            answer3: 'like ans3',
            dateCreate: '01/01/2021'
        },
        {
            user: 'asaa',
            answer1: 'like ans1',
            answer2: 'like ans2',
            answer3: 'like ans3',
            dateCreate: '01/01/2021'
        },]
    },


    {
        picture: Profile_Dog,
        breed: 'อื่นๆ',
        cost: '45000',
        status: false,
        question1: 'ทำไม1',
        answer1: '',
        question2: 'ทำไม2',
        answer2: '',
        question3: 'ทำไม3',
        answer3: '',
        question4: 'ทำไม4',
        answer4: '',
        question5: 'ทำไม5',
        answer5: '',
        profile: 'Tom',
        dateCreate: '12/02/2554',
        petDetail: 'รับสุนัขตัวน้อยไหมคะ',
        gender: 'ชาย',
        age: '12 month',
        likeUser: [{
            user: 'asa',
            answer1: 'like ans1',
            answer2: 'like ans2',
            answer3: 'like ans3',
            dateCreate: '01/01/2021'
        },
        {
            user: 'asaa',
            answer1: 'like ans1',
            answer2: 'like ans2',
            answer3: 'like ans3',
            dateCreate: '01/01/2021'
        },]
    },

]


export default CardItem_Accept;