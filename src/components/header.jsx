import React from 'react'
import { figma, fotoshop, green, illus, qiz } from '../images'

const Header = () => {
  return (
    <div className='w-full flex gap-[40px]'>
        <div className='md:flex block justify-center items-center md:left-[0px] l-[50px]'>
        <div className='flex flex-col gap-[30px] justify-between items-start lg:text-[15px] text-[12px]'>
            <h1 className='text-[40px] leading-[50px] xl:text-[35px] text-[25px] lg:text-[40px] text-[19px] md:text-[35px] text-[35px] sm:text-[25px] text-[15px]'><span className='text-primary'>SAVING</span> YOUR MONEY <br /> FOR TRAVEL THROUGH <br /> TRAVEL FUND</h1>
            <p className='text-[18px] lg:text-[16px] text-[14px] sm:text-[13px] text-[11px]'>Save your money for travel securely and explore <br /> the whole world with trasave, we provide you <br /> the best travel services.</p>
           <div className='flex flex-col justify-start items-start gap-[40px] '>
           <button className=''>
                <a href="#" className="bg-primary text-white py-[9px] px-[30px] rounded-[10px] hover:bg-white hover:text-primary">Save now</a>
            </button>
            <button>
                <a href="#" className="bg-primary text-white py-[9px] px-[30px] rounded-[10px] hover:bg-white hover:text-primary">UI/UX Case Study</a>
            </button>
           </div>
           <div className='flex flex-col gap-[15px] w-[30px] pt-[70px] '>
                <div className='flex gap-[15px]'>
                    <img src={figma} alt="" />
                    <p className='text-[20px]'>Figma</p>
                 </div>
                 <div className='flex gap-[15px]'>
                    <img src={fotoshop} alt="" />
                    <p className='text-[20px]'>Photoshop</p>
                </div>
                <div className='flex gap-[15px]'>
                    <img src={illus} alt="" />
                    <p className='text-[20px]'>Illustrator</p>
                </div>
            </div>
        </div>
     
       <div className='flex justify-end items-end gap-[150px] lg:gap-[150px] gap-[100px] lg:pt-[30px] pt-[2 50px] md:gap-[100px] gap-[80px] sm:gap-[70px] gap-[40px] ss:gap-[20px] gap-[0px]'>
        <div className='w-[180px] lg:w-[170px] w-[150px] md:w-[130px] w-[120px] sm:pb-[100px] pb-[200px] xs:w-[90px] w-[60px]'>
            <img src={green} alt="" />
           </div>
           <div className='w-[450px] pb-[100px] lg:w-[440px] w-[350px] md:w-[400px] w-[335px] sm:w-[370px] w-[300px] md:pb-[90px] pb-[60px] xs:w-[300px] w-[250px]'>
            <img src={qiz} alt="" />
           </div>
        </div>
        </div>


    </div>
  )
}

export default Header