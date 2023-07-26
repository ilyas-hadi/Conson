import bImage from "../assets/images/financial_Planner.jpg"

export default function Home() {
  return (
  <>
  
    <div className="main_conson ">
      <div className="row g-0 align-items-center">
        <div className="col-md-5">
          <div className="baner-content">
           <h1>The Financial Planning <span>Guide</span></h1>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur suscipit dolorem pariatur recusandae sed quas.</p>
          </div>
        </div>
        <div className="col-md-7">
          <div className="b-imgHolder">
            <img src={bImage} alt="bImage" />
          </div>
        </div>
      </div>
    </div>
  </>
  )
}