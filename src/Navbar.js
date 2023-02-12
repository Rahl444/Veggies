import "./Nav.css"

import Logo from "./logo.png"
import { useNavigate } from "react-router-dom";


export default function Navbar(){

    const navigate = useNavigate();

    return(
        <div class="nav">
  <input type="checkbox" id="nav-check"/>
  <div class="nav-header">
    <img src={Logo} className="Logo"
      onClick={()=>{
        navigate("/")
      }}
    />
    <div class="nav-title">
      Vital Veggies
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div class="nav-links">
    <a onClick={()=>{
      navigate("/contact")
    }}>Contact Us</a>
  </div>
</div>
    )
}