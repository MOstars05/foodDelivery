import { Navbar, Header, MainUs, MainSave, MainFind, MainSvinya, MainMoney, MainFooter, Footer } from "./components"

const App = () => {
  return (
    <div className="w-full">
      <div className="bg-black p-[40px]">
        < Navbar />
      </div>

      <div className="bg-black p-[40px] text-white">
        <Header />
      </div>

      <div className="bg-black p-[40px] text-white">
        <MainUs />
      </div>

      <div className="bg-black p-[40px] text-white">
        <MainSave />
      </div>
      <div className="bg-black p-[40px] text-white">
        <MainFind />
      </div>

      <div className="bg-black p-[40px] text-white">
        <MainSvinya />
      </div>

      <div className="bg-black text-white">
        <MainMoney />
      </div>

      <div className="bg-black text-white pt-[50px]">
        <MainFooter />
      </div>
       <div className="bg-black text-white pt-[50px]">
        <Footer />
       </div>

    </div>
  )
}

export default App
