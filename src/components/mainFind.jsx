import React from 'react'
import { aka } from '../images'

const MainFind = () => {
  return (
    <div className='flex justify-between items-end '>
        <div>
            <img src={aka} alt="" className='w-[500px] pl-[40px] md:w-[500px] w-[450px] xx:w-[450px] w-[350px]' />
        </div>
        <div className='flex flex-col gap-[30px] xx:gap-[20px] gap-[10px]'>
            <h1 className='text-[40px] md:text-[40px] text-[30px] sm:text-[30px] text-[19px] ss:text-[17px] text-[9.9px]'>Find the best places <br /> of the world</h1>
            <p className='w-[380px] md:w-[380px] w-[290px] sm:w-[200px] w-[180px] ss:w-[150px] w-[80px] ss:text-[16px] text-[10px] xs:w-[90px] w-[80px] xx:w-[90px] w-[80px] xx:text-[9px] text-[5px]'>We at trasave provide ou the best destination for travel, go and find new places and add to your travel list and go for travel later and enjoy, use your saved money later without thinking about money</p>
        </div>
    </div>
  )
}

export default MainFind