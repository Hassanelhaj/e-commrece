import React from 'react'
import SubTitle from '../../SubTitle'
import { articles } from '../../../Articles'
import ArticleCard from './ArticleCard'

const Articles = () => {
  return (
    <main>
        <sectopn>
            <SubTitle title = "المقالات"/>
        </sectopn>
        <section className='flex justify-center items-center gap-x-4 gap-y-2 flex-wrap p-4'>
            {
                articles.map((article)=>{
                    return <ArticleCard key={article.id} data={article} />
                })
            }
        </section>
    </main>
  )
}

export default Articles