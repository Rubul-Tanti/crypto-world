import { useEffect } from 'react'
import React, { useState } from 'react'
import { useGetNewsListQuery } from './services/NewsApi'
import millify from 'millify'

const News = ({simplified}) => {
  const [count,setcount]=useState(100)

  useEffect(()=>{simplified?setcount(10):setcount(100)},[])
  const {data,eror,isFetching}=useGetNewsListQuery("cryptodaily")
  
  return (
    <div>
 <div className='grid grid-cols-1 sm:grid-cols-3 p-5 gap-5  ' >
 {data&&data.data.map((news,i)=>(
count>i&&<div key={news.title} className='mb-5 bg-slate-700 p-5 shadow-sm rounded-lg hover:shadow-slate-300'>  <div className=' flex flex-col text-sm w-full mb-2'>
<div  >{(news.createdAt)}</div>
<span className='text-xl font-bold font-mono'>{news.title}</span>
</div>
<div className='text-slate-400  mb-1'><img src={news.thumbnail} ></img></div>
<div className=' mb-1 h-[200px]  overflow-y-auto ' >{news.description}</div>
<div className='mt-5' ><a className='bg-white text-blue-600  p-2 px-5 font-bold text-lg rounded-full ' href={news.url}> Visit</a></div>
</div>
))
} 
      </div>
          </div>
  )
}

export default News
