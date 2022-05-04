import React from 'react'
import About from '../components/about'
import PanteonCarousel from '../components/carousel'
import {carouselData} from '../config/sliderData'
function HomePage() {


  
  return (
    <div>
      <PanteonCarousel data={carouselData} />

      <About />
    </div>
  )
}

export default HomePage