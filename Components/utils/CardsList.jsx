import React from 'react'

import Card from './Card';


const CardsList = ({data}) => {
 
  return (
    <div className=' flex flex-row justify-center items-center gap-3 flex-wrap p-4'>
      {data.map((project)=>{return(<Card key ={project.id} data ={project}/>)})}
     
       
    </div>
  )
}

export default CardsList