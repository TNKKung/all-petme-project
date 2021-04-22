import React from 'react'
import './MarketPage.css'
import part1 from './img/part1.jpg'
import part2 from './img/part2.png'
import PetCard from '../../PetCard/PetCard.js'

function MarketPage() {
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
      garuntee: true,
    },
    {
      imgName: 'part3.png',
      breed: 'สุนัขพันธ์ : บีเกิ้ล',
      cost: 'ราคา  3500 บาท',
      profile: 'คุณต้อม',
      garuntee: true,
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
      garuntee: true,
    },
  ]
  return (
    <div>
      <div className='marketPage-part1'>
        <img src={part1} className='marketPage-part1-img' />
        <div className='marketPage-part1-cover'>
          <div className='marketPage-part1-text1'>ตลาดซื้อขายสุนัข</div>
          <div className='marketPage-part1-line'></div>
          <div className='marketPage-part1-text2'>
            สำหรับบุคคลที่อยากหาซื้อสุนัขพันธุ์ที่ต้องการ
          </div>
        </div>
      </div>
      <div className='marketPage-part2'>
        <div className='marketPage-part2-cover'>
          <div className='marketPage-part2-text1'>เลือกพันธุ์สุนัข</div>
          <div className='marketPage-part2-line'></div>
          <div className='marketPage-part2-box-cover'>
            <img src={part2} className='marketPage-part2-img' />
            <div className='marketPage-part2-box'>
              <div className='marketPage-part2-inBox1'>เลือกพันธุ์สุนัข</div>
              <div className='marketPage-part2-inBox2 '>
                เลือกเลี้ยงพันธุ์สุนัขให้เหมาะกับคุณ
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='marketPage-part3'>
        <div className='marketPage-part3-cards'>
          {dog.map((iter, idx) => {
            return <PetCard {...iter} key={'petcard' + idx} />
          })}
        </div>
      </div>
    </div>
  )
}
export default MarketPage
