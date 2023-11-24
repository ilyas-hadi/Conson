/* swiper slider */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


import {Link} from "react-router-dom";
import bImage from "../assets/images/financial_Planner.jpg";
import choseus from "../assets/images/chose_us/ch-banner-image.png";
import businesIcon from "../assets/images/services-icon/busines-groth-icon.svg";
import stratergyIcon from "../assets/images/services-icon/strategy-icon.svg";
import sutomerIcon from "../assets/images/services-icon/customer_support-icon.svg";
import stackholder from "../assets/images/stackholder-img.png";
import CircularChart from "../components/Circularpercent";
import wicon1 from "../assets/images/services-icon/w-icon-1.svg";
import wicon2 from "../assets/images/services-icon/w-icon-2.svg";
import wicon3 from "../assets/images/services-icon/w-icon-3.svg";
import wicon4 from "../assets/images/services-icon/w-icon-4.svg";
import team1 from "../assets/images/testimonial/team_1.jpg";
import team2 from "../assets/images/testimonial/team_2.jpg";
import team3 from "../assets/images/testimonial/team_3.jpg";
import team4 from "../assets/images/testimonial/team_4.jpg";
import Gallery from '../components/Gallery';
const Home = () => {
    return (
        <>
{/*-======================== Banner start */}
            <div className="main_conson h-consn">
                <div className="row g-0 align-items-center ">
                    <div className="col-md-5 xs-dimtion">
                        <div className="baner-content">
                            <h1>The Financial Planning
                            </h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur suscipit dolorem pariatur recusandae sed quas.</p>
                            <div className="theme_btn tbg-white">
                                <a href="#">
                                    <i className='bx bx-cog'></i>
                                    Discover More</a>
                            </div>
                            <div className="animated-demo">
                                <span className="an-1"></span>
                                <span className="an-2"></span>
                                <span className="an-3"></span>
                                <span className="an-4"></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="b-imgHolder bx-style">
                            <img src={bImage}
                                alt="bImage"/>
                        </div>
                    </div>
                </div>
            </div>
            {/*-======================== Banner end */}
            {/*================================ services section ================================ */}
            <section>
                <div className="main-services">
                    <div className="container">
                        <div className="row">
                            {/* ser-item 1 */}
                            <div className="col-md-4 mb-5">
                                <div className="srv-item sr-1">
                                    <div className="sr-header">
                                        <div className="srv-title">
                                            <h2>
                                                <span>Planning</span>
                                                Business Planning
                                            </h2>
                                            <div className="rd-more">
                                                <Link to='/'>
                                                    <i className='bx bx-plus'></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sr-body">
                                        <div className="ico-sr"><img src={businesIcon}
                                                alt="Business Suport"/></div>
                                        <h3>Business Planning</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis culpa ut veniam et provident aliquam?</p>
                                        <span className="line-ser"></span>
                                    </div>
                                </div>
                            </div>
                            {/* ser-item 2 */}
                            <div className="col-md-4 mb-5">
                                <div className="srv-item sr-2">
                                    <div className="sr-header">
                                        <div className="srv-title">
                                            <h2>
                                                <span>strategy</span>
                                                Strategy Building
                                            </h2>
                                            <div className="rd-more">
                                                <Link to='/'>
                                                    <i className='bx bx-plus'></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sr-body">
                                        <div className="ico-sr"><img src={stratergyIcon}
                                                alt="Business Suport"/></div>
                                        <h3>Strategy Building</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis culpa ut veniam et provident aliquam?</p>
                                        <span className="line-ser"></span>
                                    </div>
                                </div>
                            </div>
                            {/* ser-item 3 */}
                            <div className="col-md-4 ">
                                <div className="srv-item sr-3">
                                    <div className="sr-header">
                                        <div className="srv-title">
                                            <h2>
                                                <span>Support</span>
                                                Customer Support</h2>
                                            <div className="rd-more">
                                                <a href="#">
                                                    <i className='bx bx-plus'></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sr-body">
                                        <div className="ico-sr"><img src={sutomerIcon}
                                                alt="Business Suport"/></div>
                                        <h3>Customer Support</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis culpa ut veniam et provident aliquam?</p>
                                        <span className="line-ser"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*================================ about conson section ============================ */}
            <section className="md-y-pad">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="cn-ab-imgholder">
                                <img src={stackholder}
                                    alt="stackholder-image"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="cn-ab-item">
                                <div className="cn-h">
                                    <h2 className="theme_h">
                                        <span className="sub-hd">About Consen</span>
                                        We are Global Stakeholder over 2000+
                                        <span className="sp_style">Companies</span>
                                    </h2>
                                </div>
                                <div className="cn-b">
                                    <p>As global stakeholders, our influence spans across numerous companies, fostering growth and interconnectedness.</p>
                                    <ul className="list-stl">
                                        <li>
                                            <i className='bx bx-chevron-right'></i>
                                            Nurturing diverse companies, driving success.</li>
                                        <li>
                                            <i className='bx bx-chevron-right'></i>Empowering growth, fostering collaboration globally..</li>
                                    </ul>
                                    <div className="percent-circle">
                                        <div className="row">
                                            <div className="col-6 col-md-6">
                                                <div className="pr-crl">
                                                    <div className="single-chart">
                                                        <CircularChart percentage={70}
                                                            color="orange"/>
                                                    </div>
                                                    <div className="clt">
                                                        <p>Clients
                                                            <br/>
                                                            Satisfactions</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-6">
                                                <div className="pr-crl">
                                                    <div className="single-chart">
                                                        <CircularChart percentage={80}
                                                            color="orange"/>
                                                    </div>
                                                    <div className="clt">
                                                        <p>Finance
                                                            <br/>
                                                            Satisfactions</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* themebtn */}
                                    <div className="theme_btn mt-4">
                                        <a href="#">
                                            <i className="bx bx-cog"></i>
                                            More About</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*================================ What we Do? section ============================ */}
            <section className="y_pad w-do">
                <div className="container">
                    <div className="main-wd">
                        <div className="cn-h">
                            <h2 className="theme_h">
                                <span className="sub-hd">What we Do</span>
                                We Run All Kinds of Services From  <span className="sp_style">Technologies</span>
                            </h2>
                        </div>
                        <div className="row justify-content-center y-md-pad">
                            {/* card-1 */}
                            <div className="col-md-6 col-lg-3 mb-md-4">
                                <div className="wd-item">
                                    {/* card icon */}
                                    <div className="srv-item wd-1">
                                        <div className="sr-body">
                                            <div className="ico-sr"><img src={wicon1}
                                                    alt="Business Suport"/></div>
                                            <h3>Business Growth</h3>
                                            <span className="line-ser"></span>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis culpa ut veniam et provident aliquam?</p>
                                            <div className="theme_btn ">
                                                <a href="#">Read More
                                                    <i className='bx bx-plus'></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* card-2 */}
                            <div className="col-md-6 col-lg-3 mb-md-4">
                                <div className="wd-item">
                                    {/* card icon */}
                                    <div className="srv-item wd-2">
                                        <div className="sr-body">
                                            <div className="ico-sr"><img src={wicon2}
                                                    alt="Business Suport"/></div>
                                            <h3>Content Strategy</h3>
                                            <span className="line-ser"></span>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis culpa ut veniam et provident aliquam?</p>
                                            <div className="theme_btn ">
                                                <a href="#">Read More
                                                    <i className='bx bx-plus'></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* card-3 */}
                            <div className="col-md-6 col-lg-3 mb-md-4">
                                <div className="wd-item">
                                    {/* card icon */}
                                    <div className="srv-item wd-3">
                                        <div className="sr-body">
                                            <div className="ico-sr"><img src={wicon3}
                                                    alt="Business Suport"/></div>
                                            <h3>IT Consulting</h3>
                                            <span className="line-ser"></span>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis culpa ut veniam et provident aliquam?</p>
                                            <div className="theme_btn ">
                                                <a href="#">Read More
                                                    <i className='bx bx-plus'></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* card-4 */}
                            <div className="col-md-6 col-lg-3 ">
                                <div className="wd-item">
                                    {/* card icon */}
                                    <div className="srv-item wd-4">
                                        <div className="sr-body">
                                            <div className="ico-sr"><img src={wicon4}
                                                    alt="Business Suport"/></div>
                                            <h3>Leadership Work</h3>
                                            <span className="line-ser"></span>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis culpa ut veniam et provident aliquam?</p>
                                            <div className="theme_btn  ">
                                                <a href="#">Read More
                                                    <i className='bx bx-plus'></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="find-slu">
                            <p>Consulting and Finance Services Built Specially for Business</p>
                            <div className="theme_btn tbg-white nm-sp">
                                <a href="#">Find Solutions</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*================================ Why Chose US? section ============================ */}
            <section className="y_pad bg-wdu">
                <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                            <div className="cn-ab-item">
                                <div className="cn-h">
                                    <h2 className="theme_h">
                                        <span className="sub-hd">Why Chose Us?</span>
                                        The Fatest Way To Achieve Technology <span className="sp_style"> Consulting</span>
                                    </h2>
                                </div>
                                <div className="cn-b">
                                    <p>As global stakeholders, our influence spans across numerous companies, fostering growth and interconnectedness.</p>
                                    <ul className="list-stl">
                                        <li><i className='bx bx-chevron-right'></i>Nurturing diverse companies, driving success.</li>
                                        <li><i className='bx bx-chevron-right'></i>Empowering growth, fostering collaboration globally..</li>
                                        <li><i className='bx bx-chevron-right'></i>Nurturing diverse companies, driving success.</li>
                                        <li><i className='bx bx-chevron-right'></i>Empowering growth, fostering collaboration globally</li>
                                        <li><i className='bx bx-chevron-right'></i>Nurturing diverse companies, driving success.</li>
                                        <li><i className='bx bx-chevron-right'></i>Empowering growth, fostering collaboration globally</li>
                                    </ul>
                                    {/* themebtn */}
                                    <div className="theme_btn mt-4">
                                        <a href="#">
                                            <i className="bx bx-cog"></i>
                                            More About</a>
                                    </div>
                                </div>
                            </div>
                      </div>
                      <div className="col-md-6">
                            <div className="cn-ab-imgholder">
                                <img src={choseus}
                                    alt="whychose-us-image"/>
                            </div>
                      </div>
                    </div>
                </div>
            </section>
            {/*================================ What we Do? section ============================ */}
            <section className="y_pad w-do ttm-bg">
                <div className="container">
                    <div className="main-wd">
                      <div className="tes-monialhd">
                        <div className="cn-h">
                            <h2 className="theme_h">
                                <span className="sub-hd">Testimonials</span>
                                IT-Soft Trusted Customers Awesome
                                <span className="sp_style"> Reviews</span>
                            </h2>
                        </div>
                        <div className="coutn-dd">
                            <ul>
                                <li><strong>1,273+ <span>Happy Customers</span></strong></li>
                                <li><strong>100% <span>Satisfaction Rate</span></strong></li>
                            </ul>
                        </div>
                      </div>
                     
                     {/* swiper slier */}
                    <Swiper
                                slidesPerView={1}
                                centeredSlides={true}
                                spaceBetween={10}
                                loop={false}
                                pagination={{
                                clickable: true,
                                }}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                  }}
                                breakpoints={{
                                640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                                },
                                768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                                },
                                1024: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                                },
                                }}
                                modules={[Pagination,Autoplay]}
                                className="mySwiper y-md-pad"
                                >
                                <SwiperSlide>
                                {/* card-1 */}
                                    <div className="wd-item testmoni_item">
                                        {/* card icon */}
                                        <div className="srv-item wd-1">
                                            <div className="sr-body testm-body">
                                                <div className="test-hd">
                                                  <div className="ico-sr pf_team"><img src={team1} alt="Business Suport"/>
                                                  <span className="quote-icon"><i className='bx bxs-quote-alt-left'></i></span></div>
                                                  <h3>Filip Anthory <span className='desination'>Ui Desgner</span></h3>
                                                </div>
                                                <p>"🚀 Frontend Dev | UI/UX | HTML, CSS, JS | Pixel Perfect | Problem Solver | Clean Code Advocate | Passionate Learner | #WebDev #FrontendMagic ✨"</p>
                                                <div className="rating_start">
                                                    <fieldset className="rate">
                                                        <input type="radio" id="rating10" name="rating" value="10" /><label htmlFor="rating10" title="5 stars"></label>
                                                        <input type="radio" id="rating9" name="rating" value="9" /><label className="half" htmlFor="rating9" title="4 1/2 stars"></label>
                                                        <input type="radio" id="rating8" name="rating" value="8" /><label htmlFor="rating8" title="4 stars"></label>
                                                        <input type="radio" id="rating7" name="rating" value="7" /><label className="half" htmlFor="rating7" title="3 1/2 stars"></label>
                                                        <input type="radio" id="rating6" name="rating" value="6" /><label htmlFor="rating6" title="3 stars"></label>
                                                        <input type="radio" id="rating5" name="rating" value="5" /><label className="half" htmlFor="rating5" title="2 1/2 stars"></label>
                                                        <input type="radio" id="rating4" name="rating" value="4" /><label htmlFor="rating4" title="2 stars"></label>
                                                        <input type="radio" id="rating3" name="rating" value="3" /><label className="half" htmlFor="rating3" title="1 1/2 stars"></label>
                                                        <input type="radio" id="rating2" name="rating" value="2" /><label htmlFor="rating2" title="1 star"></label>
                                                        <input type="radio" id="rating1" name="rating" value="1" /><label className="half" htmlFor="rating1" title="1/2 star"></label>
                                                        {/* <input type="radio" id="rating0" name="rating" value="0" /><label htmlFor="rating0" title="No star"></label> */}
                                                    </fieldset>
                                                </div>
                                            </div>
                                            {/* quote */}
                                             <div className="quote"><i className='bx bxs-quote-alt-right'></i></div> 
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                {/* card-1 */}
                                    <div className="wd-item testmoni_item">
                                        {/* card icon */}
                                        <div className="srv-item wd-1">
                                            <div className="sr-body testm-body">
                                                <div className="test-hd">
                                                  <div className="ico-sr pf_team"><img src={team2} alt="Business Suport"/>
                                                  <span className="quote-icon"><i className='bx bxs-quote-alt-left'></i></span></div>
                                                  <h3>Filip Anthory <span className='desination'>Ui Desgner</span></h3>
                                                </div>
                                                <p>"🚀 Frontend Dev | UI/UX | HTML, CSS, JS | Pixel Perfect | Problem Solver | Clean Code Advocate | Passionate Learner | #WebDev #FrontendMagic ✨"</p>
                                                <div className="rating_start">
                                                    <fieldset className="rate">
                                                        <input type="radio" id="rating101" name="rating1" value="10" /><label htmlFor="rating101" title="5 stars"></label>
                                                        <input type="radio" id="rating91" name="rating1" value="9" /><label className="half" htmlFor="rating91" title="4 1/2 stars"></label>
                                                        <input type="radio" id="rating81" name="rating1" value="8" /><label htmlFor="rating81" title="4 stars"></label>
                                                        <input type="radio" id="rating71" name="rating1" value="7" /><label className="half" htmlFor="rating71" title="3 1/2 stars"></label>
                                                        <input type="radio" id="rating61" name="rating1" value="6" /><label htmlFor="rating61" title="3 stars"></label>
                                                        <input type="radio" id="rating51" name="rating1" value="5" /><label className="half" htmlFor="rating51" title="2 1/2 stars"></label>
                                                        <input type="radio" id="rating41" name="rating1" value="4" /><label htmlFor="rating41" title="2 stars"></label>
                                                        <input type="radio" id="rating31" name="rating1" value="3" /><label className="half" htmlFor="rating31" title="1 1/2 stars"></label>
                                                        <input type="radio" id="rating21" name="rating1" value="2" /><label htmlFor="rating21" title="1 star"></label>
                                                        <input type="radio" id="rating11" name="rating1" value="1" /><label className="half" htmlFor="rating11" title="1/2 star"></label>
                                                        {/* <input type="radio" id="rating0" name="rating" value="0" /><label htmlFor="rating0" title="No star"></label> */}
                                                    </fieldset>
                                                </div>
                                            </div>
                                            {/* quote */}
                                            <div className="quote"><i className='bx bxs-quote-alt-right'></i></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                {/* card-1 */}
                                    <div className="wd-item testmoni_item">
                                        {/* card icon */}
                                        <div className="srv-item wd-1">
                                            <div className="sr-body testm-body">
                                                <div className="test-hd">
                                                  <div className="ico-sr pf_team"><img src={team3} alt="Business Suport"/>
                                                  <span className="quote-icon"><i className='bx bxs-quote-alt-left'></i></span></div>
                                                  <h3>Filip Anthory <span className='desination'>Ui Desgner</span></h3>
                                                </div>
                                                <p>"🚀 Frontend Dev | UI/UX | HTML, CSS, JS | Pixel Perfect | Problem Solver | Clean Code Advocate | Passionate Learner | #WebDev #FrontendMagic ✨"</p>
                                                <div className="rating_start">
                                                    <fieldset className="rate">
                                                        <input type="radio" id="rating102" name="rating2" value="10" /><label htmlFor="rating102" title="5 stars"></label>
                                                        <input type="radio" id="rating92" name="rating2" value="9" /><label className="half" htmlFor="rating92" title="4 1/2 stars"></label>
                                                        <input type="radio" id="rating82" name="rating2" value="8" /><label htmlFor="rating82" title="4 stars"></label>
                                                        <input type="radio" id="rating72" name="rating2" value="7" /><label className="half" htmlFor="rating72" title="3 1/2 stars"></label>
                                                        <input type="radio" id="rating62" name="rating2" value="6" /><label htmlFor="rating62" title="3 stars"></label>
                                                        <input type="radio" id="rating52" name="rating2" value="5" /><label className="half" htmlFor="rating52" title="2 1/2 stars"></label>
                                                        <input type="radio" id="rating42" name="rating2" value="4" /><label htmlFor="rating42" title="2 stars"></label>
                                                        <input type="radio" id="rating32" name="rating2" value="3" /><label className="half" htmlFor="rating32" title="1 1/2 stars"></label>
                                                        <input type="radio" id="rating22" name="rating2" value="2" /><label htmlFor="rating22" title="1 star"></label>
                                                        <input type="radio" id="rating12" name="rating2" value="1" /><label className="half" htmlFor="rating12" title="1/2 star"></label>
                                                        {/* <input type="radio" id="rating0" name="rating" value="0" /><label htmlFor="rating0" title="No star"></label> */}
                                                    </fieldset>
                                                </div>
                                            </div>
                                            {/* quote */}
                                            <div className="quote"><i className='bx bxs-quote-alt-right'></i></div> 
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                {/* card-1 */}
                                    <div className="wd-item testmoni_item">
                                        {/* card icon */}
                                        <div className="srv-item wd-1">
                                            <div className="sr-body testm-body">
                                                <div className="test-hd">
                                                  <div className="ico-sr pf_team"><img src={team4} alt="Business Suport"/>
                                                  <span className="quote-icon"><i className='bx bxs-quote-alt-left'></i></span></div>
                                                  <h3>Filip Anthory <span className='desination'>Ui Desgner</span></h3>
                                                </div>
                                                <p>"🚀 Frontend Dev | UI/UX | HTML, CSS, JS | Pixel Perfect | Problem Solver | Clean Code Advocate | Passionate Learner | #WebDev #FrontendMagic ✨"</p>
                                                <div className="rating_start">
                                                    <fieldset className="rate">
                                                        <input type="radio" id="rating106" name="rating6" value="10" /><label htmlFor="rating106" title="5 stars"></label>
                                                        <input type="radio" id="rating96" name="rating6" value="9" /><label className="half" htmlFor="rating96" title="4 1/2 stars"></label>
                                                        <input type="radio" id="rating86" name="rating6" value="8" /><label htmlFor="rating86" title="4 stars"></label>
                                                        <input type="radio" id="rating76" name="rating6" value="7" /><label className="half" htmlFor="rating76" title="3 1/2 stars"></label>
                                                        <input type="radio" id="rating66" name="rating6" value="6" /><label htmlFor="rating66" title="3 stars"></label>
                                                        <input type="radio" id="rating56" name="rating6" value="5" /><label className="half" htmlFor="rating56" title="2 1/2 stars"></label>
                                                        <input type="radio" id="rating46" name="rating6" value="4" /><label htmlFor="rating46" title="2 stars"></label>
                                                        <input type="radio" id="rating36" name="rating6" value="3" /><label className="half" htmlFor="rating36" title="1 1/2 stars"></label>
                                                        <input type="radio" id="rating26" name="rating6" value="2" /><label htmlFor="rating26" title="1 star"></label>
                                                        <input type="radio" id="rating16" name="rating6" value="1" /><label className="half" htmlFor="rating16" title="1/2 star"></label>
                                                        {/* <input type="radio" id="rating0" name="rating" value="0" /><label htmlFor="rating0" title="No star"></label> */}
                                                    </fieldset>
                                                </div>
                                            </div>
                                            {/* quote */}
                                            <div className="quote"><i className='bx bxs-quote-alt-right'></i></div> 
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                {/* card-1 */}
                                    <div className="wd-item testmoni_item">
                                        {/* card icon */}
                                        <div className="srv-item wd-1">
                                            <div className="sr-body testm-body">
                                                <div className="test-hd">
                                                  <div className="ico-sr pf_team"><img src={team2} alt="Business Suport"/>
                                                  <span className="quote-icon"><i className='bx bxs-quote-alt-left'></i></span></div>
                                                  <h3>Filip Anthory <span className='desination'>Ui Desgner</span></h3>
                                                </div>
                                                <p>"🚀 Frontend Dev | UI/UX | HTML, CSS, JS | Pixel Perfect | Problem Solver | Clean Code Advocate | Passionate Learner | #WebDev #FrontendMagic ✨"</p>
                                                <div className="rating_start">
                                                    <fieldset className="rate">
                                                        <input type="radio" id="rating103" name="rating5" value="10" /><label htmlFor="rating103" title="5 stars"></label>
                                                        <input type="radio" id="rating93" name="rating5" value="9" /><label className="half" htmlFor="rating93" title="4 1/2 stars"></label>
                                                        <input type="radio" id="rating83" name="rating5" value="8" /><label htmlFor="rating83" title="4 stars"></label>
                                                        <input type="radio" id="rating73" name="rating5" value="7" /><label className="half" htmlFor="rating73" title="3 1/2 stars"></label>
                                                        <input type="radio" id="rating63" name="rating5" value="6" /><label htmlFor="rating63" title="3 stars"></label>
                                                        <input type="radio" id="rating53" name="rating5" value="5" /><label className="half" htmlFor="rating53" title="2 1/2 stars"></label>
                                                        <input type="radio" id="rating43" name="rating5" value="4" /><label htmlFor="rating43" title="2 stars"></label>
                                                        <input type="radio" id="rating33" name="rating5" value="3" /><label className="half" htmlFor="rating33" title="1 1/2 stars"></label>
                                                        <input type="radio" id="rating23" name="rating5" value="2" /><label htmlFor="rating23" title="1 star"></label>
                                                        <input type="radio" id="rating13" name="rating5" value="1" /><label className="half" htmlFor="rating13" title="1/2 star"></label>
                                                        {/* <input type="radio" id="rating0" name="rating" value="0" /><label htmlFor="rating0" title="No star"></label> */}
                                                    </fieldset>
                                                </div>
                                            </div>
                                            {/* quote */}
                                            <div className="quote"><i className='bx bxs-quote-alt-right'></i></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                    </Swiper>
                       
                    </div>
                </div>
            </section>
            {/* ================================ Gallery section ============================  */}
             <Gallery />
        </>
    )
}
export default Home;
