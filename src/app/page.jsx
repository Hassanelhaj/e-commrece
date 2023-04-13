"use client"

import { useState } from "react";
import CardInfo from "../../Components/CardInfo";
import { useEffect } from "react";
import Slider from "../../Components/Slider";

export default  function  Home() {
  const[state,setState]= useState([]);
  const  fetchData = async ()=>{
    const data = await fetch('https://fakestoreapi.com/products');
    const res = await data.json();
    setState(res);
    // console.log(state);
  }
  // useEffect(
  // fetchData,[])
  fetchData();


  // console.log(' this is '+ typeof state);

  return (
    <div>
<Slider/>
  <main className='products-wrapper'>

 {/* <h1>home page </h1> */}
 {
 state.map((product)=>{
return(<CardInfo key={product.id} data ={product}/>)
 })
 }
 

    </main>
    </div>
  )
}
