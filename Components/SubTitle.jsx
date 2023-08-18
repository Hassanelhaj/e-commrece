import React from 'react'

const SubTitle = ({title}) => {
  return (
    <div className='flex justify-center text-center text-3xl 
    font-bold capitalize p-3 underline underline-offset-8 '>
        {title}
    </div>
  )
}

export default SubTitle