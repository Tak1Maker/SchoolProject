import React from 'react'
import BackgroundVideo from '../Video/video.mp4'
import './Accueil.css'
import Typewriter from 'typewriter-effect'

export default function Accueil() {
  return (
      <>
    
      <div id='TypeWriter'>
        <h1>Hello welcome to</h1>
        <video id='video' src={BackgroundVideo} autoPlay loop muted />
          <Typewriter
            onInit={(typewriter) => {
              typewriter
              .typeString("GrandeMotors")
              .pauseFor(1000)
              .start();
            }}/>
      </div>

      </>
    
  )
}
