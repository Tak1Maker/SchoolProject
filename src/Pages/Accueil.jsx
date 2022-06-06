import React from 'react'
import Background from '../Video/video.mp4'
import './Accueil.css'

import TypeWriter from '../Components/TypeWriter/TypeWriter'

export default function Accueil() {
  return (
    <div>
      <TypeWriter />
      <video autoPlay loop muted src={Background} />
    </div>



  )
}
