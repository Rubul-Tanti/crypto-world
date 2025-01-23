import React, { useEffect, useState } from 'react'
import millify from 'millify'
import { useGetCoinListQuery } from './services/criptoApi'
const Criptocurrency = ({simplified}) => {

  const [count,setcount]=useState(50)
useEffect(()=>{
simplified?setcount(10):setcount(50)
},[])

const {data,error,isFetching}=useGetCoinListQuery(count) 
return(<div>
      <div className='grid grid-cols-2 sm:grid-cols-4 p-5 gap-5  '>
{data&&data.data.coins.map((coin)=>(
<div className='mb-5 bg-slate-700 p-5 shadow-sm rounded-lg hover:shadow-slate-300'>  <div className='flex flex-row items-center  justify-between w-full mb-2'>
<div className='text-1xl font-bold'><span className='text-lg'>{coin.rank}.</span> {coin.name}</div><img src={coin.iconUrl} width={50}></img>
</div>
<div className='text-slate-400  mb-1'><span className='text-white text-sm'>price:</span> {millify(coin.price)}</div>
<div className='text-slate-400 mb-1'><span className='text-white text-sm'>Daily Change:</span> {millify(coin.change)}</div>
<div className='text-slate-400 mb-1'><span className='text-white text-sm'>Market Cap:</span> {millify(coin.marketCap)}</div>
</div>

))}
      </div>
{!simplified&&<div className='w-full justify-center flex p-2'><button onClick={()=>{setcount(count+50)}} className='p-2 bg-orange-700 hover:p-[9px] rounded-full  text-bold'>Showmore</button></div>}
    </div>
  )
}

export default Criptocurrency
