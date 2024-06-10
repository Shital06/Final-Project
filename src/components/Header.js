import React from "react";
import food from "../Assets/restauranfood.jpg"
import { Link } from "react-router-dom";

function Header(){
    return(
        <header className="header">
      <section>
        <div className={'banner'}>
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>We are a family owned Mediterranean restaurant,focused on traditional recipes served with a modern twist</p>
          <Link to="/bookingpage"><button>Reserve a table</button></Link>
          </div>
        <div className={'banner-img'}>
        <img src={food} alt="resaurantimg"/>
        </div>
      </section>
      
    </header>
    )
}
export default Header;