import React from 'react';
import { Link } from 'react-router-dom';
import './profile';
import Profile_Dog from './img/profile3.jpg'

import { colors } from '@material-ui/core';
import Profile from './img/profile.jfif'
import Profile3 from './img/profile2.jfif'
import Profile4 from './img/profile3.jfif'
import Profile2 from './img/profile9.jpg'

const user1 = {
    "username": 'username',
    "password": 'password',
    "name": 'คนแรก ชื่อไรนะ',
    "email": 'email',
    "mobileNumber": 'mobileNumber',
    "birth": 'birth',
    "address": 'address',
    "road": 'road',
    "subDistrict": 'subDistrict',
    "district": 'district',
    "province": 'province',
    "postalCode": 'postalCode',
    "listPetIForsell": [],
    "listPetIdForBuy": [],
    "img": [Profile],
}
const user2 = {
    "username": 'user',
    "password": 'password',
    "name": 'วิภาดา มีสกุล',
    "email": 'email',
    "mobileNumber": 'mobileNumber',
    "birth": 'birth',
    "address": 'address',
    "road": 'road',
    "subDistrict": 'subDistrict',
    "district": 'district',
    "province": 'province',
    "postalCode": 'postalCode',
    "listPetIForsell": [],
    "listPetIdForBuy": [],
    "img": [Profile2],
}
const user3 = {
    "username": 'username',
    "password": 'password',
    "name": 'ธันนน เจริญ',
    "email": 'email',
    "mobileNumber": 'mobileNumber',
    "birth": 'birth',
    "address": 'address',
    "road": 'road',
    "subDistrict": 'subDistrict',
    "district": 'district',
    "province": 'province',
    "postalCode": 'postalCode',
    "listPetIForsell": [],
    "listPetIdForBuy": [],
    "img": [Profile3],
}
const user4 = {
    "username": 'username',
    "password": 'password',
    "name": 'ชัยยุทธ์ ไกรทอง',
    "email": 'email',
    "mobileNumber": 'mobileNumber',
    "birth": 'birth',
    "address": 'address',
    "road": 'road',
    "subDistrict": 'subDistrict',
    "district": 'district',
    "province": 'province',
    "postalCode": 'postalCode',
    "listPetIForsell": [],
    "listPetIdForBuy": [],
    "img": [Profile4],
}
const user5 = {
    "username": 'username',
    "password": 'password',
    "name": 'คนแรก ชื่อไรนะคะ',
    "email": 'email',
    "mobileNumber": 'mobileNumber',
    "birth": 'birth',
    "address": 'address',
    "road": 'road',
    "subDistrict": 'subDistrict',
    "district": 'district',
    "province": 'province',
    "postalCode": 'postalCode',
    "listPetIForsell": [],
    "listPetIdForBuy": [],
    "img": [Profile],
}
const user6 = {
    "username": 'user',
    "password": 'password',
    "name": 'วิภาดา มีสกุล',
    "email": 'email',
    "mobileNumber": 'mobileNumber',
    "birth": 'birth',
    "address": 'address',
    "road": 'road',
    "subDistrict": 'subDistrict',
    "district": 'district',
    "province": 'province',
    "postalCode": 'postalCode',
    "listPetIForsell": [],
    "listPetIdForBuy": [],
    "img": [Profile2],
}
const user7 = {
    "username": 'username',
    "password": 'password',
    "name": 'คนแรก ชื่อไรนะครับ',
    "email": 'email',
    "mobileNumber": 'mobileNumber',
    "birth": 'birth',
    "address": 'address',
    "road": 'road',
    "subDistrict": 'subDistrict',
    "district": 'district',
    "province": 'province',
    "postalCode": 'postalCode',
    "listPetIForsell": [],
    "listPetIdForBuy": [],
    "img": [Profile],
}
const user8 = {
    "username": 'user',
    "password": 'password',
    "name": 'วิภาดา มีสกุล',
    "email": 'email',
    "mobileNumber": 'mobileNumber',
    "birth": 'birth',
    "address": 'address',
    "road": 'road',
    "subDistrict": 'subDistrict',
    "district": 'district',
    "province": 'province',
    "postalCode": 'postalCode',
    "listPetIForsell": [],
    "listPetIdForBuy": [],
    "img": [Profile2],
}

const CardStoreSell = [

    {
        imgName: <img className="img_list" src={Profile_Dog} />,
        breed: 'สุนัขพันธ์ : ซามอย',
        cost: '35000',
        WebGL2RenderingContext: 'ผู้',
        age: '5 เดือน',
        detail: 'ลูกบีเกิ้ลแท้สามสี ไซส์13 นิ้ว พ่อมีใบเพด แม่ไม่มีใบ มาร์คครบ อายุ31วัน พร้อมส่งหลังรับวัคซีนรวม5โรค ที่อายุ50วัน',
        date: '2/12/2564',
        question1 : "question1 deiei",
        question2 : "question2 whay",
        question3 : "question3 wht",
        likeUser: [{
            userId: user1,
            name: 'Tom',
            answer1: 'like ans1',
            answer2: 'like ans2',
            answer3: 'like ans3',
            dateCreate: '01/01/2021'
        },
        {
            user: user2,
            answer1: 'like ans1',
            answer2: 'like ans2',
            answer3: 'like ans3',
            dateCreate: '01/01/2021'

        },
        {
            user: user3,
            answer1: 'like ans1',
            answer2: 'like ans2',
            answer3: 'like ans3',
            dateCreate: '01/01/2021'

        },
        {
            user: user4,
            answer1: 'like ans1',
            answer2: 'like ans2',
            answer3: 'like ans3',
            dateCreate: '01/01/2021'
        },],
        acceptUser: [{
            user: user7,
            answer1: 'accept ans1',
            answer2: 'accept ans2',
            answer3: 'accept ans3',
            dateCreate: '01/01/2021'
        },
        {
            user: user8,
            answer1: 'accept ans1',
            answer2: 'accept ans2',
            answer3: 'accept ans3',
            dateCreate: '01/01/2021'
        },],
        cancelUser: [{
            user: user5,
            answer1: 'cancel ans1',
            answer2: 'cancel ans2',
            answer3: 'cancel ans3',
            dateCreate: '01/01/2021'
        },
        {
            user: user6,
            answer1: 'cancel ans1',
            answer2: 'cancel ans2',
            answer3: 'cancel ans3',
            dateCreate: '01/01/2021'
        },],
    },
]


export default CardStoreSell;