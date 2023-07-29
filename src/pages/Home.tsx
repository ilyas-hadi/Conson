import bImage from "../assets/images/financial_Planner.jpg";
import businesIcon from "../assets/images/services-icon/busines-groth-icon.svg";
import stratergyIcon from "../assets/images/services-icon/strategy-icon.svg";
import sutomerIcon from "../assets/images/services-icon/customer_support-icon.svg";
import stackholder from "../assets/images/stackholder-img.png";
import CircularChart from "../components/Circularpercent"
const Home = () => {
    return (
        <>

            <div className="main_conson">
                <div className="row g-0 align-items-center ">
                    <div className="col-md-5 xs-dimtion">
                        <div className="baner-content">
                            <h1>The Financial Planning
                                <span className="sp_style">Guide</span>
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
                                                <a href="javascript:void(0)">
                                                    <i className='bx bx-plus'></i>
                                                </a>
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
                                                <a href="javascript:void(0)">
                                                    <i className='bx bx-plus'></i>
                                                </a>
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
                                                <a href="javascript:void(0)">
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
                                                    <div className="clt"><p>Clients <br /> Satisfactions</p></div>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-6">
                                                <div className="pr-crl">
                                                    <div className="single-chart">
                                                        <CircularChart percentage={80}
                                                            color="orange"/>
                                                    </div>
                                                    <div className="clt"><p>Finance <br /> Satisfactions</p></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* themebtn */}
                                    <div className="theme_btn mt-4"><a href="#"><i className="bx bx-cog"></i> More About</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Home;
