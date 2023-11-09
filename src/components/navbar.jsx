import { logo } from "../images"

const Navbar = () => {
  return (
    <div>

        <div className="flex text-white justify-between items-center ">
            <div className="">
                <img src={logo} alt="" className="" />
            </div>
            <div className="flex gap-[60px] justify-between items-center sm:flex hidden ">
                <ul className="flex gap-[50px] md:gap-[40px] ">
                    <li className="hover:text-white text-primary ">Home</li>
                    <li className="hover:text-primary">Save</li>
                    <li className="hover:text-primary">Travel</li>
                    <li className="hover:text-primary">Experience</li>
                    <li className="hover:text-primary">Wallet</li>
                </ul>
                <button className="">
                    <a href="#" className="bg-primary text-white py-[8px] px-[25px] rounded-[10px] hover:bg-white hover:text-primary md:px-[15px] px-[18px]">Contact Us</a>
                </button>
            </div>
        </div>











    </div>
  )
}

export default Navbar