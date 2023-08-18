import React from 'react'
import CardsList from '../utils/CardsList'

import { projects } from '../../Data'



const WebProjects = () => {
 
  return (
    <div className='container mx-auto p-2 flex flex-col justify-center items-center gap-3'>
    <h2 className='text-xl font-medium underline underline-offset-8 flex flex-col
    justify-center items-center gap-3 
      '>Web Projects</h2>
      <main>
      <div className='flex flex-col justify-center items-center gap-2 
      sm:flex-row flex-wrap'>
      <CardsList data = {projects}/>

      </div>
      </main>
</div>
)
  
}

export default WebProjects