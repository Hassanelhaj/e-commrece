"use client"

import React from 'react'
import { useSelector } from 'react-redux'
import CardInfo from '../../../Components/CardInfo';

const page = () => {
  const cartIteams = useSelector(state=>state.cart.value);
  return (
    <div className='flex-row mt-3'>
     {cartIteams.map((iteam)=>{
      return(<CardInfo key={iteam.id} data ={iteam} cart ={true}/>)
     })}
    </div>
  )
}

export default page
