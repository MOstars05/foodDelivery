import { bgimg, logo } from "../images"


const MainFooter = () => {
  return (
    <div className="w-full bgImg ">
      <div  className="flex gap-[80px] justify-start items-center p-[50px] sm:gap-[70px] gap-[40px]">
      <div className="sm:w-[150px] w-[100px]">
      <div className=" flex flex-col gap-[40px] ">
          <img src={logo} alt="" />
        </div>
        <div className="flex flex-col gap-[50px] ">
          <h1 className="sm:text-[15px] text-[9px] sm:w-[500px] w-[200px] ">TRASAVE travel fund is a <br /> good way to track your <br /> travel money. </h1>
        <div className="flex gap-[20px] text-[25px]">
          <i class="fa-brands fa-square-instagram"></i>
          <i class="fa-brands fa-telegram"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
        </div>
      </div>
      </div>
<div className="sm:flex block gap-[20px]">
  
<div className="flex gap-[50px]">
     <div className="flex flex-col gap-[20px]">
        <h1 className="text-primary text-[25px] sm:text-[25px] text-[19px]">About</h1>
        <ul className="flex flex-col gap-[10px] sm:text-[19px] text-[11px] xs:text-[10px] text-[8px]">
          <li>Technical Info</li>
          <li>Other Products</li>
        </ul>
      </div>
      <div>
        <h1 className="text-primary text-[25px] sm:text-[25px] text-[19px]">Contact US</h1>
        <ul className="flex flex-col gap-[10px] pt-[20px] sm:text-[19px] text-[11px] xs:text-[10px] text-[8px]">
          <li>Banglor, India</li>
          <li>8003010108</li>
          <li>hemendra.mali72@gmail.com</li>
        </ul>
      </div>
     </div>
    <div className="flex flex-col">
       <div className=" pb-[110px] md:pb-[5px] pb-[0px]">
      <h1 className="text-[30px] sm:text-[25px] text-[13.9px]">Subscribe <span className="text-primary">Newsletter</span></h1>
     </div>
       <div className="mt-[100px] sm:mt-[98px] mt-[30px] flex relative sm:right-[-40px] right-[100px]">
         <input type="text" placeholder="Enter your email" className="text-black py-[10px] px-[40px] hover:text-white hover:bg-black absolute right-0 bottom-[-75px]" />
          <button className="mr-[300px] absolute right-[-290px] top-[40px] ">
             <a href="#" className="bg-primary text-white py-[6px] px-[20px] rounded-[10px] ">Subscribe</a>
          </button>
     </div>
    </div>
      </div>
</div>
      <div className="text-white flex flex-col items-center gap-[100px]">
      <p> copright  2022 Hemendra Mali. All right reserved</p>
    </div>
    </div>
  )
}

export default MainFooter