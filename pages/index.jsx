import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import banner from "../public/banner.png";
import Image from "next/image";


const Home = () => {
  return (
    <div>

      <Navbar/>

      <main>
        {/* <h1>This is new Next JS ecommerce app</h1> */}
        <Image src={banner}/>
      </main>

      <Footer/>
    </div>
  )
}

export default Home
