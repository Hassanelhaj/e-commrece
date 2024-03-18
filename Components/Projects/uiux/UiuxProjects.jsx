import React from 'react'
import { uiuxProjectsList } from '../../../Data'
import UiuxProject from './UiuxProject'
import SubTitle from '../../SubTitle'

const UiuxProjects = () => {

  return (
    <div >
        <SubTitle title ="UiUx Projects" />
        <div className='flex justify-center items-center p-4 gap-2 flex-wrap'>
        {uiuxProjectsList.map((project)=>{
            return<UiuxProject data={project} />
        })}
        </div>
    </div>
  )
}

export default UiuxProjects
