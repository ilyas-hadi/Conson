import {NavLink, Link} from "react-router-dom";
import {useState} from "react";
import Headerlogo from '../assets/images/curson_logo.svg';
import addresholder from '../assets/images/footer_logo.svg';
import Topbar from "./Topbar";
export default function Header() {
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => { // 👇️ toggle isActive state variable
        setIsActive(!isActive);
    };
    return (
        <>
           <Topbar/>
            <div className="main-header">
                <div className="container">
                    <div className="navigation_web">
                        {/* logo */}
                        <div className="logo-wb">
                            <Link to='/'><img src={Headerlogo}
                                    alt="CursonLogo"/></Link>
                        </div>
                        {/* navLinks */}
                        <div className="naigation-web-links">
                            <ul>
                                <li>
                                    <NavLink to="/"
                                        className={
                                            ({isActive}) => (isActive ? 'link active' : 'link')
                                    }>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/About-us"
                                        className={
                                            ({isActive}) => (isActive ? 'link active' : 'link')
                                    }>About</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/Our-Services"
                                        className={
                                            ({isActive}) => (isActive ? 'link active' : 'link')
                                    }>Services</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/Portfolio"
                                        className={
                                            ({isActive}) => (isActive ? 'link active' : 'link')
                                    }>Portfolio</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/Our-blogs"
                                        className={
                                            ({isActive}) => (isActive ? 'link active' : 'link')
                                    }>Blog</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/Contact-us"
                                        className={
                                            ({isActive}) => (isActive ? 'link active' : 'link')
                                    }>Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                        {/* button&ham */}
                        <div className="dual_btn hamburger">
                            <div className=" ham-ico" onClick={handleClick}>
                                <i className='bx bx-menu-alt-left'></i>
                            </div>
                            <div className="theme_btn">
                                <Link to='/'>Request A Quote</Link>
                            </div>
                            <div className="menu-fx">
                                <span>Menu</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div  className={`adreebar ${isActive ? 'toggle-left' : null}`}>
                <div className="sidebar-address">
                    <div className="add-lg-holder">
                        <img src={addresholder}
                            alt="addressbar logo"/>
                        <p>It is a long established fact that a reader of a page when looking at its layout.</p>
                    </div>
                    <h5>Categoriess</h5>
                    <ul>
                        <li>
                            <a href="#">Budgeting & Cash Flow</a>
                        </li>
                        <li>
                            <a href="#">Investment Planning</a>
                        </li>
                        <li>
                            <a href="#">Retirement Prep</a>
                        </li>
                        <li>
                            <a href="$">Risk & Insurance</a>
                        </li>
                        <li>
                            <a href="#">Tax Optimization</a>
                        </li>
                    </ul>
                    <h5>Contacts</h5>
                    <ul>
                        <li className='addr'>
                            <a href="#">Themeforest, Envato HQ 24 Fifth st., Los Angeles, USA</a>
                        </li>
                        <li>
                            <a href="tel:+1800-001-658">+1800-001-658</a>
                        </li>
                        <li>
                            <a href="mailto:Demoemail234@gmail.com">Demoemail234@gmail.com</a>
                        </li>
                    </ul>
                    <ul className='social-links'>
                        <li>
                            <a href="#">
                                <i className='bx bxl-linkedin'></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className='bx bxl-github'></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className='bx bxl-facebook'></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className='bx bxl-twitter'></i>
                            </a>
                        </li>
                    </ul>
                    <div onClick={handleClick}  className="close-btn">
                        <i className='bx bxl-xing'></i>
                    </div>
                </div>
            </div>
            </div>
            {/* address bar */}
            
        </>
    )
}
