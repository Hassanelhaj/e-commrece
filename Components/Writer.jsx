"use client"
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Writer = () => {
  return (
    
    <div className='App'>
      <h1 
      className='p-1
   bg-gradient-to-r from-green-300 via-indigo-600-300 to-blue-300 font-extrabold text-white
      
      '
      >
        {' '}
        <span >
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['SoftWare Engineer', 'Front end Developer',]}
            loop={1}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={''}
            onType={''}
          />
        </span>
      </h1>
    </div>
  )
}
  


export default Writer