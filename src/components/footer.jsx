
import { footer } from '../images'

const Footer = () => {
  return (
    <div className='w-full flex justify-between gap-[50px] items-center p-[20px] '>
        <div className='flex flex-col gap-[20px]'>
            <h1 className='text-[30px] sm:text-[20px] text-[19px]'>Thanks For
                  Watching</h1>
                  <p className='w-[400px] sm:w-[400px] w-[220px] ss:text-[19px] text-[13px]'>We are professional UI/UX and Graphice designer.
                    Design your product or new website with us.
                    Feel free to contact us. </p>
                    </div>
                    <div className='w-[400px]'>
                        <img src={footer} alt="" />
                    </div>
                    
    </div>
  )
}

export default Footer