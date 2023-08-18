import React from 'react'
import SubTitle from '../SubTitle'
import { servicesList } from '../../Data'
import ServicesCard from './ServicesCard'

const Services = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-3'>
        <SubTitle title='Services'/>
        <div className='flex justify-center items-center gap-4 flex-wrap mt-2'>
        {
       servicesList.map((service)=>{
        return(<ServicesCard key={service.id} data={service}/>)
       })
}
</div>

    </div>
  )
}

export default Services