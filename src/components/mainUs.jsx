import React from 'react'
import { gift, servis, travel } from '../images'

const MainUs = () => {
  return (
    <div>
        <div className='w-full flex flex-col justify-center items-center gap-[30px]'>
            <h1 className='text-[50px] md:text-[50px] text-[35px] ss:text-[35px] text-[20px] xs:text-[29px] text-[19px]'>Why to <span className='text-primary'>travel</span> with us?</h1>
            <p className='w-[800px] leading-[30px] text-center md:w-[800px] w-[600px] ss:w-[550px] w-[210px] ss:text-[19px] text-[14px] xs:text-[18px] text-[11px]'>Ambitious about your next adventure but sick of saving money? End up sneaking into those savings because well.. You’re bored? Lost motivation? You don’t feel the funds are growing fast enough? Saving just sucks? Trasave has introduced an epic new way to reward you for your savings for travel</p>
        </div>
        <div className='flex justify-center items-center gap-[160px] pt-[200px] sm:gap-[250px] gap-[80px] xs:gap-[40px] gap-[10px]'>
            <div>
                <img src={servis} alt="" />
                <h1 className='text-[30px] md:text-[29px] text-[19px] xs:text-[15px] text-[10px]'>Save money</h1>
                <p className='md:text-[18px] text-[13px]'>Invest in trasave <br /> securily for future</p>
            </div>

            <div>
                <img src={gift} alt="" />
                <h1 className='text-[30px] md:text-[29px] text-[19px] xs:text-[15px] text-[10px]'>Earn rewards</h1>
                <p lassName='md:text-[18px] text-[13px]'>Earn rewards and <br /> track your money</p>
            </div>

            <div>
                <img src={travel} alt="" />
                <h1 className='text-[30px] md:text-[29px] text-[19px] xs:text-[15px] text-[10px]'>Travel</h1>
                <p lassName='md:text-[18px] text-[13px]'>Use this money for <br /> your travelling</p>
            </div>
        </div>




    </div>
  )
}

export default MainUs