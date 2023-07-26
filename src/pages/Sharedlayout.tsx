import Topbar from "../components/Topbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Outlet} from "react-router-dom";


export default function Sharedlayout() {
    return (
    <>
        <Topbar/>
         <Header/>
         <Outlet/>
        <Footer/>
    </>
    )
}
