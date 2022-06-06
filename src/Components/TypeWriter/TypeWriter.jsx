import React from 'react'
import Typewriter from 'typewriter-effect'
import { useState } from 'react'
import './TypeWriter.css'

export default function TypeWriter() {
    const [props] = useState({
        title:'Welcome to ',
      })
  return (
    <div id='TypeWriter'>
          <h1>{props.title}
          <Typewriter options={{
            autoStart: true,
            loop: true, 
            strings:["General Motors", "Passion", "Perfection", "Work"]
          }}/>
          </h1>
        </div>
  )
}
