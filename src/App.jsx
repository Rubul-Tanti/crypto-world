import React from 'react'
import Sidebar from './components/Sidebar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { useState } from 'react'
const App = () => {

  return (
    <Provider store={store}>

    <div className='bg-black w-full min-h-[100vh]'>
      <div className='flex flex-col sm:flex-row '>
      <div className='w-[300px]'><Sidebar/></div>
      <div className='text-white w-[100vw] h-full mt-20 sm:mt-5'>
  <Outlet/>
  <div>
    <Footer/>
  </div>
</div>
      </div>
    </div>
    </Provider>
  )
}

export default App
