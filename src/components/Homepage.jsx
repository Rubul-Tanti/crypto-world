import React from 'react'
import { useGetCoinListQuery } from './services/criptoApi'
import { Link } from 'react-router-dom'
import millify from 'millify'
import News from './News'
import Criptocurrency from './Criptocurrency'
const Homepage = () => {
const {data,error,isFetching}=useGetCoinListQuery(10) 

 return (
    <div className='w-full p-2 text-white' >
      <h1 className='md:text-2xl text-xs lg:text-3xl m-2 font-semibold uppercase tracking-wider underline underline-offset-8 mb-5 '>Global Cripto Status</h1>
    <div className='grid  grid-cols-2 gap-2 m-5 md:p-3 p-2 lg:p-5 rounded-md bg-slate-900 '>
<div className='pl-5 '>
<h4 className='md:text-sm text-[10px] lg:text-lg'>Total coins:</h4>
<span className={isFetching?"text-sm":'lg:text-3xl md:text-2xl text-xs'}>{data?millify(data.data.stats.totalCoins):"loading..."}</span>
</div>
<div className='pl-5 '>
<h4 className='md:text-sm text-[10px] lg:text-lg'>Total Market Cap:</h4>
<span className={isFetching?"text-sm":'lg:text-3xl md:text-2xl text-xs'} >{data?millify(data.data.stats.totalMarketCap):"loading..."}</span>
</div>
<div className='pl-5 '>
<h4 className='md:text-sm text-[10px] lg:text-lg'>Total Exchanges:</h4>
<span className={isFetching?"text-sm":'lg:text-3xl md:text-2xl text-xs'}>{data?millify(data.data.stats.totalExchanges):"loading.."}</span>
</div>
<div className='pl-5 '>
<h4 className='md:text-sm text-[10px] lg:text-lg'>Total 24hour Volume</h4>
<span className={isFetching?"text-sm":'lg:text-3xl md:text-2xl text-xs'}>{data?millify(data.data.stats.total24hVolume):"loading..."}</span>
</div>
<div className='pl-5 '>
<h4 className='md:text-sm text-[10px] lg:text-lg'>Total Markets</h4>
<span className={isFetching?"text-sm":'lg:text-3xl md:text-2xl text-xs'}>{data?millify(data.data.stats.totalMarkets):"loading..."}</span>
</div>
    </div>
    <div className='flex w-full m-3 h-full'>

<div className='md:text-2xl text-xs lg:text-3xl  font-bold uppercase tracking-wider ' >Top 10 Criptocurrencies </div>
<Link className='md:text-sm text-[10px] lg:text-lg hover:bg-black border border-orange-500 hover:text-orange-500  ml-10 px-2 py-2 rounded-lg bg-orange-500' to="/cripto">ShowMore</Link>
    </div>
<Criptocurrency simplified/>
   
    <div className='flex w-full md:m-1 lg:m-3 h-full'>
<div className='md:text-2xl text-xs lg:text-3xl md:font-semibold lg:font-bold uppercase tracking-wider ' >Top 5 Criptocurrency news </div>
<Link className='md:text-sm text-[10px] lg:text-lg hover:bg-black border border-orange-500 hover:text-orange-500  ml-10 px-2 py-2 rounded-lg bg-orange-500' to="/cripto">news</Link>
    </div>
    <News simplified/>
    </div>
  )
}

export default Homepage
