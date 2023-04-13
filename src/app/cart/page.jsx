"use client"

import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import CardInfo from '../../../Components/CardInfo';



const Page = () => {
  // const [iteams,setIteams] = useState([]);


  const cartIteams = useSelector(state=>state.cart.value);
  // setIteams(cartIteams);
  return (
    <div className='flex-row mt-3'>
     {cartIteams.map((iteam)=>{
      return(<CardInfo key={iteam.id} data ={iteam} cart ={true}/>)
     })}
    </div>
  )
}

export default Page
