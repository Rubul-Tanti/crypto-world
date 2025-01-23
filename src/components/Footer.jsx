import React from 'react'
import { Link } from 'react-router-dom'
import logo from'../assets/logo.jpg'
const Footer = () => {
  return (
    <div className='flex justify-evenly items-center flex-row bg-black z-10 border border-zinc-900 w-full'>
      <div className='flex justify-center gap-1 text-xl font-bold flex-col items-center'>
        <img className='rounded-full ' width={50} src={logo}></img>
        <h1> Cripto Market</h1>
      </div>
      
      <div className='flex flex-col '>
      <div className='p-2 pl-5 ' >
       <Link to={`/`}>Home</Link>
      </div>
      <div className='p-2 pl-5 '>
<Link to={`/cripto`}>Criptocurrencies</Link>
      </div>
      <div className='p-2 pl-5 '>

      <Link to={`/cripto-details`}>Criptodetails</Link>
      </div >
      <div className='p-2 pl-5 '>
      <Link to={`/news`}>News</Link>

      </div>
      </div>
    </div>
  )
}

export default Footer
