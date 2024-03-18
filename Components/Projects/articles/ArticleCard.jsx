import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ArticleCard = ({data}) => {
  return (
    <main dir='rtl' className='flex flex-col justify-center gap-4 w-72 bg-white rounded-lg text-slate-700 shadow '>
        <section>
            <Image src = {data.img} className= 'w-full h-64'/>
        </section>
        <section className='p-2 pt-3 arafont flex flex-col gap-2'>
            <h3 className='text-lg font-bold'>{data.title}</h3>
            <p className='text-sm'>{data.text.slice(0,140)} 
            <a target='_blank' href={data.link}
            //  href={`/${data.id}`}
            className='text-blue-600'> { " عرض المزيد " }
            </a></p>
        </section>
    </main>
  )
}

export default ArticleCard