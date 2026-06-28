import Banner from "../Components/Banner"
import BrandSection from "../Components/BrandSection"
import CycleBanner from "../Components/CycleBanner"
import Features from "../Components/Features"
import Subcription from "../Components/Subcription"


const Home = () => {
  return (
    <div>
        <Banner/>
        <Features/>
        <CycleBanner/>
        <Subcription/>
        {/* <BrandSection/> */}
    </div>
  )
}

export default Home