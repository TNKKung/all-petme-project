import React from 'react'
import './DonatePage.scoped.css'
import part1 from './img/part1.png'
import PetCard from '../../PetCard/PetCard.js'

function DonatePage() {
  const dog = [
    {
      imgName: 'part3.png',
      breed: 'สุนัขพันธ์ : บีเกิ้ล',
      cost: 'ราคา  3500 บาท',
      profile: 'คุณต้อม',
    },
    {
      imgName: 'part3.png',
      breed: 'สุนัขพันธ์ : บีเกิ้ล',
      cost: 'ราคา  3500 บาท',
      profile: 'คุณต้อม',
    },
    {
      imgName: 'part3.png',
      breed: 'สุนัขพันธ์ : บีเกิ้ล',
      cost: 'ราคา  3500 บาท',
      profile: 'คุณต้อม',
    },
    {
      imgName: 'part3.png',
      breed: 'สุนัขพันธ์ : บีเกิ้ล',
      cost: 'ราคา  3500 บาท',
      profile: 'คุณต้อม',
    },
    {
      imgName: 'part3.png',
      breed: 'สุนัขพันธ์ : บีเกิ้ล',
      cost: 'ราคา  3500 บาท',
      profile: 'คุณต้อม',
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
          {dog.map((iter, idx) => {
            return <PetCard {...iter} key={'petcard' + idx} />
          })}
        </div>
      </div>
    </div>
  )
}
export default DonatePage
