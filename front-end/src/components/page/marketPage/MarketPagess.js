import React, { useState, useEffect } from 'react'
import './MarketPage.scoped.css'
import part1 from './img/part1.jpg'
import part2 from './img/part2.png'
import PetCard from '../../PetCard/PetCardMarket.js'
import { ContactsOutlined } from '@material-ui/icons'
import PopDetail from '../../Profile/popdogDetail'

function MarketPage() {
  const [form, setForm] = useState({
    ChoosedogBreed: null,
  })
  const [dataPet,setDataPet] = useState([])

  const [dogInfo,SetdogInfo] = useState(null);
  const [Popup,setPopups] = useState(false);
 
  React.useEffect(() => {
    const fetchdata = async() =>{
      const res = await fetch("http://localhost:4000/api/get/dataPet", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      mode: "cors",
    })
    const a = await res.json();
    console.log(a)
    setDataPet(a);
    }
    fetchdata()
  },[]);

  React.useEffect(() => {
    console.log(dataPet)
  },[dataPet]);

 
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
                value={form.ChoosedogBreed}
                onChange={(e) => {
                  setForm({ ...form, ChoosedogBreed: e.target.value })

                  // console.table(form)
                }}
              >
                <option value= ''>เลือกพันธุ์สุนัข</option>
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
<<<<<<< HEAD
          {/* filter(d => form.dogBreed? d.breed === form.dogBreed : true) */}
          {dataPet                                                   /////edit doger back to dataPet !!!!!!!//////// use doger to set new dataname
            .filter((d) => {
=======
          {doger                                                     /////edit doger back to dataPet !!!!!!!//////// use doger to set new dataname
            .filter(d => {
>>>>>>> 93efea30fba7c59e5a5a3b97dd16f24c66c63740
              if (form.ChoosedogBreed === null || form.ChoosedogBreed === 'ทั้งหมด')
                return true
              else if (d.dogBreed === form.ChoosedogBreed) return true
            })
            .map(e => {            
              return <PetCard dog={e} setdogDetail={SetdogInfo} setpop={setPopups} />
            })}
          {Popup ?<PopDetail onChange={console.log(localStorage.setItem("petId",dogInfo.petId))} setPopUp={setPopups} getDog = {dogInfo}/>:null}
        </div>
      </div>
    </div>
  )
}
export default MarketPage
