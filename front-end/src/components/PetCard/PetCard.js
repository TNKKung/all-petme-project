import React from 'react'
import './PetCard.css'

function PetCard(props) {
  return (
    <div className='petcard-wrapper'>
      <img src={'./img/' + props.imgName} className='petcard-img' />
      <div className='petcard-detail'>{props.breed}</div>
    </div>
  )
}

export default PetCard

//
