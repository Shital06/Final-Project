import React from 'react'
import logo1 from "../Assets/Logo .svg"
import { Link } from "react-router-dom";

function Nav(){
 return(
    <nav className={'navbar'}>
      <img src={logo1} alt='logo'/>
        <ul className={'nav-links'}>
            <Link to ="/" className="nav-item"><li>Home</li></Link>
            <li>
                <a href="/">About</a>
            </li>
            <li>
                <a href="/">Menu</a>
            </li>
            <li>
                <a href="/">Reservations</a>
            </li>
            <li>
                <a href="/">Order Online</a>
            </li>
            <li>
                <a href="/">Login</a>
            </li>
        </ul>
    </nav>
 )
}
export default Nav;
