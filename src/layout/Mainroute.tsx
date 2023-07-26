import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Sharedlayout from "../pages/Sharedlayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import Portfolio from "../pages/Portfolio";
import Services from "../pages/Services";
import "../assets/css/main.css";

function Mainroute() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path='/' element={<Sharedlayout />}>
          <Route index element={<Home />} />
          <Route path='About-us' element={<About />} />
          <Route path='Our-blogs' element={<Blog />} />
          <Route path='Contact-us' element={<Contact />} />
          <Route path='Our-services' element={<Services/>} />
          <Route path='Portfolio' element={<Portfolio />} />
          <Route />
        </Route>
     </Routes>
    </BrowserRouter>
  )
}

export default Mainroute;