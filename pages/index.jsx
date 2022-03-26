import IndexInfo from "../components/IndexInfo";
import banner from "../public/banner.png";
import Image from "next/image";


const Home = () => {
  return (
    <div>

      <main>
        {/* <h1>This is new Next JS ecommerce app</h1> */}
        <Image src={banner}/>

        <IndexInfo/>
      </main>

    </div>
  )
}

export default Home
