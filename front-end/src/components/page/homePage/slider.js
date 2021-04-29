import React, { useState, useEffect } from 'react'

import News_dog_src from './img/news_dog.png'
import News_dog2_src from './img/news_dog2.jpg'
import Slider_icon_src from './img/slider_icon.png'
import './home2.scoped.css'

const Slider = () => {
  const [newsPic, setNewsPic] = useState(News_dog_src)
  const [sliderIcon, setSliderIcon] = useState('slider-icon')
  const [sliderIcon2, setSliderIcon2] = useState('slider-icon2')

  const setSliderIcons = (pic) => {
    if (pic == 1) {
      setNewsPic(News_dog_src)
      setSliderIcon('slider-icon')
      setSliderIcon2('slider-icon2')
    } else {
      setNewsPic(News_dog2_src)
      setSliderIcon('slider-icon2')
      setSliderIcon2('slider-icon')
    }
  }

  return (
    <div className='center-pad'>
      <img className='news-img' src={newsPic} />
      <div className='slider-font-pane'>
        <div className='slider-pane'>
          <img
            className={sliderIcon}
            src={Slider_icon_src}
            onClick={() => setSliderIcons(1)}
          />
          <img
            className={sliderIcon2}
            src={Slider_icon_src}
            onClick={() => setSliderIcons(2)}
          />
        </div>
      </div>
    </div>
  )
}

export default Slider
