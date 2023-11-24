import "../assets/css/main.css";
import LogoImage from '../assets/images/curson_logo.svg'

export default function StartLoader() {
  return (
    <>
      {/* loader */}
      <div className="backDrop">
       <section className="fixed_Ld">
        <div className="logoimg_holder">
            <img src={LogoImage} alt="logo_image" />
        </div>
        <span className="loader-71"></span>
        </section>
      </div>
      
    </>
  )
}
