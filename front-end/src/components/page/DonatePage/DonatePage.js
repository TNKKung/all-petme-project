import React,{useState} from 'react'
import './DonatePage.scoped.css'
import part1 from './img/part1.png'
import PetCard from '../../PetCard/PetCard.js'
import PopDetail from '../../Profile/popdogDetail'

function DonatePage() {
  const [dogInfo,SetdogInfo] = useState(null);
  const [Popup,setPopups] = useState(false);
  const dog = [
    {
      picture: 'part3.png',
      dogBreed: 'อื่นๆ',
      cost: '3500 บาท',
      profile: 'คุณต้อม',
      status: 'ตอบรับแล้ว',
      like: 5,
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
      petDetail: 'มันเยอะเหลือเกินน',
      gender: 'ผู้',
      age: '12 month'
    },
    {
      picture: 'part3.png',
      dogBreed: 'บีเกิ้ล',
      cost: '3500 บาท',
      profile: 'คุณต้อม',
      status: 'ตอบรับแล้ว',
      like: 5,
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
      petDetail: 'ตายๆ ตายกันพอดี',
      gender: 'เมีย',
      age: '12 month'
    },
    {
      picture: 'part3.png',
      dogBreed: 'บีเกิ้ล',
      cost: '3500 บาท',
      profile: 'คุณต้อม',
      status: 'ตอบรับแล้ว',
      like: 5,
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
      gender: 'ผู้',
      age: '12'
    },
    {
      picture: 'part3.png',
      dogBreed: 'บีเกิ้ล',
      cost: '3500 บาท',
      profile: 'คุณต้อม',
      status: 'ตอบรับแล้ว',
      like: 5,
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
      petDetail: 'front-end ไม่คุย= แตก',
      gender: 'ชาย',
      age: '12'
    },
    {
      picture: 'part3.png',
      dogBreed: 'บีเกิ้ล',
      cost: '3500 บาท',
      profile: 'คุณต้อม',
      status: 'ตอบรับแล้ว',
      like: 5,
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
      petDetail: 'รวมfront เหนื่อยสัส',
      gender: 'ชาย',
      age: '12'
    },
    {
      picture: '',           
      dogBreed: 'ซามอย',
      cost: '35000',
      status: 'ตอบรับแล้ว',
      like: 5,
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
      age: '12'
  },

  ]
  return (
    <div>
      <div className='donatePage-part1'>
        <img src={part1} className='donatePage-part1-img' />
        <div className='donatePage-part1-cover'>
          <div className='donatePage-part1-text1'>
            รับเลี้ยงสุนัขสำหรับสุนัขไร้บ้าน
          </div>
          <div className='donatePage-part1-line' />
          <div className='donatePage-part1-text2'>
            สำหรับบุคลที่มีใจเมตตา ที่อยากรับเลี้ยงสุนัขที่ไม่มีเจ้าของดูแล
          </div>
        </div>
      </div>
      <div className='donatePage-part2'>
        <div className='donatePage-part2-cards'>
          {dog.map(dog => {                                                  /////edit const dog
            return <PetCard dog={dog} setdogDetail={SetdogInfo} setpop={setPopups}/>
          })}
          {Popup ?<PopDetail setPopUp={setPopups} getDog = {dogInfo}/>:null}
        </div>
      </div>
    </div>
  )
}
export default DonatePage
