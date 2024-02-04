// import {banner} from "../assets/images/banner.jpg"
const banner = require('../assets/images/banner.jpg'); 
export const Header=()=>{
    return(
        <>
      <header className="header">
        <img className="header-image" src={banner} alt="Header Image"/>
        <div className="logo-container">
            {/* <img className="logo" src="path/to/your/logo.png" alt="Logo"/> */}
            <h1 className="logo">MovieFlix</h1>
        </div>
    </header>
        </>
    )
}