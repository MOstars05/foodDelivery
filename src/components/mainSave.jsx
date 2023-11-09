
import { opaa } from '../images'

const MainSave = () => {
  return (
    <div className='flex justify-between items-center'>
        <div className='flex flex-col gap-[30px] xx:gap-[20px] gap-[10px]'>
            <h1 className='text-[40px] md:text-[40px] text-[30px] sm:text-[30px] text-[19px] ss:text-[17px] text-[9.9px]'>Save and get Travel <br /> Fund Rewards</h1>
            <p className='w-[380px] md:w-[380px] w-[290px] sm:w-[200px] w-[180px] ss:w-[150px] w-[80px] ss:text-[16px] text-[10px] xs:w-[90px] w-[80px] xx:w-[90px] w-[80px] xx:text-[9px] text-[5px]'>Trasave travel fund is a fun and secure way to save. Not only can you customise your own travel journey but also earn rewards while travelling by uploading videos of the destination. Also it gives cool tips to <br /> <br />
            encourage more savings and  we will also reward you with epic cool gifts when you hit saving goals. </p>
        </div>
        <div className='w-[500px] pr-[40px] md:w-[500px] w-[450px] xx:w-[450px] w-[350px] '>
            <img src={opaa} alt="" />
        </div>
    </div>
  )
}

export default MainSave