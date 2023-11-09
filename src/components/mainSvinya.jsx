import React from 'react'
import { svinya } from '../images'

const MainSvinya = () => {
  return (
    <div className='flex justify-between items-center '>
        <div className='flex flex-col gap-[40px] items-start ss:gap-[30px] gap-[19px]'>
            <h1 className='text-[40px] md:text-[40px] text-[19.1px] sm:text-[15px] text-[13px] xs:text-[14px] text-[9px] xx:text-[12px] text-[6px]'>Save now and earn <br /> cashback upto 250</h1>
            <p className='text-[20px] md:text-[20px] text-[16px] sm:text-[15px] text-[9px] xs:text-[9px] xx:text-[9px] text-[7px]'>We at trasave provide ou the best destination <br /> for travel, </p>
            <button className="">
                    <a href="#" className="bg-primary text-white py-[8px] px-[30px] rounded-[10px] hover:bg-white hover:text-primary xs:px-[30px] px-[7px] xx:py-[8px] py-[5px]">Let’s save</a>
                </button>
        </div>
        <div className='w-[500px] pr-[40px] sm:w-[500px] w-[300px]'>
            <img src={svinya} alt="" />
        </div>
    </div>
  )
}

export default MainSvinya