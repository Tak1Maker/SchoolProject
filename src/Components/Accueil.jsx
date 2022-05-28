import React from 'react'
import BackgroundVideo from '../Video/video.mp4'
import './Accueil.css'
import Typewriter from 'typewriter-effect'

export default function Accueil() {
  return (
      <>
      <h1>Hello welcome to</h1>
      <div id='TypeWriter'>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
              .typeString("GrandeMotors")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Le Boss")
              .start();
              
            }}/>
        <video id='video' src={BackgroundVideo} autoPlay loop muted />
      </div>

      </>
    
  )
}
