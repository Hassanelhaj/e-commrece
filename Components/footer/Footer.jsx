import React from 'react'

import Contact from '../contact/Contact'
import SubTitle from '../SubTitle'

const Footer = () => {
  return (
    <div className='container mx-auto  flex flex-col p-3 justify-start items-center gap-3'>
    <SubTitle title ="Contact Me" className ='mb-3' id = "contact"/>
        <div className='columns-1 sm:flex justify-start items-center gap-4'>
            <section className='mb-4 sm:mb-0  columns-1'>
               <h4 className='capitalize text-2xl font-semibold'> Don't hesitate to contact me
               <br/> to have a wonderfull Service
               </h4>
               <div className='mt-4'>

           <Contact/>

               </div>
            </section>
        
        </div>


    </div>
  )
}

export default Footer
