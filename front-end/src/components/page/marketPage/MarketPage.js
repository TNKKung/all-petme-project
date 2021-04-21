import React from 'react'
import './MarketPage.css'
import part1 from './img/part1.jpg'
import part2 from './img/part2.png'
import PetCard from '../../PetCard/PetCard.js'

function MarketPage() {
  const dog = [
    { imgName: 'part3.png', breed: 'บีเกิ้ล' },
    { imgName: 'part3.png', breed: 'บีเกิ้ล' },
    { imgName: 'part3.png', breed: 'บีเกิ้ล' },
    { imgName: 'part3.png', breed: 'บีเกิ้ล' },
    { imgName: 'part3.png', breed: 'บีเกิ้ล' },
    { imgName: 'part3.png', breed: 'บีเกิ้ล' },
    { imgName: 'part3.png', breed: 'บีเกิ้ล' },
    { imgName: 'part3.png', breed: 'บีเกิ้ล' },
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
      <div className='marketPage-part2'>part2</div>
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
