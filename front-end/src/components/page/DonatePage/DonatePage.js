import React,{useState} from 'react'
import './DonatePage.scoped.css'
import part1 from './img/part1.png'
import PetCard from '../../PetCard/PetCardMarket.js'
import PopDetail from '../../Profile/popdogDetail'

function DonatePage() {
  const [dogInfo,SetdogInfo] = useState(null);
  const [Popup,setPopups] = useState(false);
  const [dataPet,setDataPet] = useState([])
  React.useEffect(() => {
    const fetchdata = async() =>{
      const res = await fetch("http://localhost:4000/api/get/dataPet", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      mode: "cors",
    })
    const data = await res.json();
    setDataPet(data);
    }
    fetchdata()
  },[]);
  
  const dog = [
    {
      
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
          {dataPet.filter((a)=>a.typeSell==='บริจาค').map(dog => {                                                  /////edit const dog
            return <PetCard dog={dog} setdogDetail={SetdogInfo} setpop={setPopups}/>
          })}
          {Popup ?<PopDetail onChange={localStorage.setItem("dataPetIdForDetailMarket",JSON.stringify(dogInfo))} setPopUp={setPopups} getDog = {dogInfo}/>:null}
        </div>
      </div>
    </div>
  )
}
export default DonatePage
