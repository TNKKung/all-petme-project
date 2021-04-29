import React from 'react'
import './PetCard.scoped.css'

function PetCard({ imgName, breed, cost, profile, garuntee }) {
  return (
    <div className='petcard-wrapper'>
      {garuntee && <div className='petcard-garuntee'>การันตี</div>}
      <img src={'./img/' + imgName} className='petcard-img' />
      <div className='petcard-detail'>
        <div className='petcard-detail-left' >
          <div className='head'>
            <div>สุนัขพันธ์ : {breed}</div>
            <div>ราคา : {cost}</div>
          </div>
        </div>
        <div className='petcard-detail-right'>
          <img className='petcard-detail-right-imgProfile' />
          {profile}
        </div>
      </div>
    </div>
  )
}

export default PetCard

//
