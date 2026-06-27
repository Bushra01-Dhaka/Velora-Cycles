import { Outlet } from "react-router"
import Navbar from "../ReUsed/Navbar"
import Footer from "../ReUsed/Footer"


const MainLayout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default MainLayout