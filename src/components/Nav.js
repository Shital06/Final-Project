import { Link } from "react-router-dom";
function Nav(){
 return(

<header>
      <img/>
      <nav className="nav">
        <ul>
            <Link to ="/" className="nav-item"><li>Home</li></Link>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
        </ul>
    </nav>
     </header>
 )
}
export default Nav;
