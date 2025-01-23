import React from 'react'
import logo from"../assets/logo.jpg"
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='flex sm:flex-col flex-row item-start sm:w-[254px] w-full justify-evenly h-[10vh] sm:h-[100vh] fixed gap-2 pt-5 bg-black z-10 border border-zinc-900 text-white text-sm sm:text-lg font-semibold'>
     
    <Link to={`/`}><div className='p-0 pl-0 sm:pl-5 active:bg-orange-600 active:text-white hover:bg-orange-600 hover:text-white ' >
       <div className='flex-row flex h-full items-center gap-2 text-xs sm:text-lg text-orange-500' >
        <img className='w-[25px] sm:w-[50px] flex  rounded-full' src={logo}/>
        <h1>crypto world</h1>
        </div>
      </div></Link>
     
    <Link to={`/`}><div className='p-0 pl-0 sm:pl-5 active:bg-orange-600 active:text-white hover:bg-orange-600 hover:text-white ' >
       Home
      </div></Link>
      <Link to={`/cripto`}>      <div className='p-0 pl-0 sm:pl-5 active:bg-orange-600 active:text-white hover:bg-orange-600 hover:text-white '>
Criptocurrencies
      </div></Link>
      <Link to={`/cripto-details`}>
      <div className='p-0 pl-0 sm:pl-5 active:bg-orange-600 active:text-white hover:bg-orange-600 hover:text-white '>

      Criptodetails
      </div ></Link>
      <Link to={`/news`}><div className='p-0 pl-0 sm:pl-5 active:bg-orange-600 active:text-white hover:bg-orange-600 hover:text-white '>
      News

      </div>
      </Link>      
    </div>
  )
}

export default Sidebar
