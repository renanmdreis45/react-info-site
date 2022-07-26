import React from "react"
import logo from "./react-logo.png";

export default function Nav() {
    return (
       <header> 
          <nav className="nav">
             <img src= {logo} alt="" className="nav-logo"/>
             <h3 className='nav_logo_text'>ReactFacts</h3>
             <h4 className='nav_title'> By Renanmdreis </h4>
          </nav>         
       </header>
    )
 }