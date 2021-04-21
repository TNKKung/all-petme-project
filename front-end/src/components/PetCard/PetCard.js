import React from 'react'
import './PetCard.css'

function PetCard(props) {
  return (
    <div className='petcard-wrapper'>
      <img src={'./img/' + props.imgName} className='petcard-img' />
      <div className='petcard-detail'>
        <div className='petcard-detail-left'>
          {props.breed}
          {props.cost}
        </div>
        <div className='petcard-detail-right'>
          {props.imgProfile}
          {props.profile}
        </div>
      </div>
    </div>
  )
}

export default PetCard

//
