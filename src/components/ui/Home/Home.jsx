import React from 'react'
import banner from "../../../assets/banner.jpg";

const Home = () => {
  return (
    <div className='w-full h-full bg-[#EEF6FF] flex flex-col justify-center items-center rounded-lg cursor-default select-none'>
      <img src={banner} alt="" />
      <h1 className='text-4xl font-medium my-4'>Welcome to Management</h1>
    </div>
  )
}

export default Home
