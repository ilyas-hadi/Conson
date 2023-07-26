
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Outlet} from "react-router-dom";


export default function Sharedlayout() {
    return (
    <>
         <Header/>
          <Outlet/>
         <Footer/>
    </>
    )
}
