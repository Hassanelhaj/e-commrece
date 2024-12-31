"use client"
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Writer = () => {
  return (
    
    <div className='App'>
      <h1 
      className='
   
      
      '
      >
        {' '}
        <span >
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Hassan Alhaj','Data Analyst','Social Media Specialist','Hassan Alhaj']}
            loop={10}
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