import React, { useState, useEffect } from 'react'
import './MarketPage.scoped.css'
import part1 from './img/part1.jpg'
import part2 from './img/part2.png'
import PetCard from '../../PetCard/PetCard.js'
import { ContactsOutlined } from '@material-ui/icons'

function MarketPage() {
  const [form, setForm] = useState({
    dogBreed: null,
  })
  const [dataPet,setDataPet] = useState([])
 
  React.useEffect(() => {
    const fetchdata = async() =>{
      const res = await fetch("http://localhost:4000/api/get/dataPet", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      mode: "cors",
      body: JSON.stringify({
        "get" :"g",
      }),
    })
    const a = await res.json();

    setDataPet(a);
    }
    fetchdata()
  },[]);

  React.useEffect(() => {
    console.log(dataPet)
  },[dataPet]);

  const dog = [
    {
      imgName: 'Pomeranian.jpg',
      breed: 'ปอมเมอเรเนี่ยน',
      cost: ' 5,500 บาท',
      profile: 'คุณต้อม',
    },
    {
      imgName: 'Chihuahua.jpg',
      breed: 'ชิวาวา',
      cost: ' 5,500 บาท',
      profile: 'คุณต้อม',
    },
    {
      imgName: 'Beagle.png',
      breed: 'บีเกิ้ล',
      cost: ' 5,500 บาท',
      profile: 'คุณต้อม',
    },
    {
      imgName: 'Yorkshire Terrier.jpg',
      breed: 'ยอร์กไชร์เทอร์เรีย',
      cost: ' 5,500 บาท',
      profile: 'คุณต้อม',
    },
    {
      imgName: 'Bulldog.jpg',
      breed: 'บูลล์ด็อก',
      cost: ' 5,500 บาท',
      profile: 'คุณต้อม',
    },
    {
      imgName: 'Rottweiler.jpg',
      breed: 'ร็อตต์ไวเลอร์',
      cost: ' 5,500 บาท',
      profile: 'คุณต้อม',
    },
    {
      imgName: 'Siberian Husky.jpg',
      breed: 'ไซบีเรียน ฮัสกี้',
      cost: ' 5,500 บาท',
      profile: 'คุณต้อม',
    },
    {
      imgName: 'Pug.jpg',
      breed: 'ปั๊ก',
      cost: ' 5,500 บาท',
      profile: 'คุณต้อม',
    },
    {
      imgName: 'Shih Tzu.jpg',
      breed: 'ชิสุ',
      cost: ' 5,500 บาท',
      profile: 'คุณต้อม',
    },
    {
      imgName: 'Golden Retriever.jpg',
      breed: 'โกลเด้นรีทรีฟเวอร์',
      cost: ' 5,500 บาท',
      profile: 'คุณต้อม',
    },

  ]
  return (
    <div>
      <div className='marketPage-part1'>
        <img src={part1} className='marketPage-part1-img' />
        <div className='marketPage-part1-cover'>
          <div className='marketPage-part1-text1'>ตลาดซื้อขายสุนัข</div>
          <div className='marketPage-part1-line' />
          <div className='marketPage-part1-text2'>
            สำหรับบุคคลที่อยากหาซื้อสุนัขพันธุ์ที่ต้องการ
          </div>
        </div>
      </div>
      <div className='marketPage-part2'>
        <div className='marketPage-part2-cover'>
          <div className='marketPage-part2-text1'>เลือกพันธุ์สุนัข</div>
          <div className='marketPage-part2-line' />
          <div className='marketPage-part2-box-cover'>
            <img src={part2} className='marketPage-part2-img' />
            <div className='marketPage-part2-box'>
              {/* <div className='marketPage-part2-inBox1'> */}

              <select
                // required
                className='marketPage-part2-inBox1'
                value={form.dogBreed}
                onChange={(e) => {
                  setForm({ ...form, dogBreed: e.target.value })
                  // console.table(form)
                }}
              >
                <option value=''>เลือกพันธุ์สุนัข</option>
                <option value='ปอมเมอเรเนี่ยน'>ปอมเมอเรเนี่ยน</option>
                <option value='โกลเด้นรีทรีฟเวอร์'>โกลเด้นรีทรีฟเวอร์</option>
                <option value='ชิสุ'>ชิสุ</option>
                <option value='ปั๊ก'>ปั๊ก</option>
                <option value='ไซบีเรียน ฮัสกี้'>ไซบีเรียน ฮัสกี้</option>
                <option value='ร็อตต์ไวเลอร์'>ร็อตต์ไวเลอร์</option>
                <option value='บูลล์ด็อก'>บูลล์ด็อก</option>
                <option value='ยอร์กไชร์เทอร์เรีย'>ยอร์กไชร์เทอร์เรีย</option>
                <option value='บีเกิ้ล'>บีเกิ้ล</option>
                <option value='ชิวาวา'>ชิวาวา</option>
                <option value='ทั้งหมด'>ทั้งหมด</option>
              </select>
              {/* </div> */}
              <div className='marketPage-part2-inBox2 '>
                เลือกเลี้ยงพันธุ์สุนัขให้เหมาะกับคุณ
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='marketPage-part3'>
        <div className='marketPage-part3-cards'>
          {/* filter(d => form.dogBreed? d.breed === form.dogBreed : true) */}
          {dataPet
            .filter((d) => {
              if (form.dogBreed === null || form.dogBreed === 'ทั้งหมด')
                return true
              else if (d.breed === form.dogBreed) return true
            })
            .map((iter, idx) => {
              return <PetCard {...iter} key={'petcard' + idx} />
            })}
        </div>
      </div>
    </div>
  )
}
export default MarketPage
