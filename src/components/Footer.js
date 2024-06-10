import React from 'react';
import logo from '../Assets/Asset 20@4x.png'
function Footer(){
    return(
        <footer>
            <section>
                <article className='company-info'>
                    <img src={logo} alt="logo"/>
                </article>
                <article>
                    <h4>Doormat Navigation</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Menu</a></li>
                        <li><a href="/">Reservations</a></li>
                        <li><a href="/">Order Online</a></li>
                        <li><a href="/">Login</a></li>
                    </ul>
                </article>
                <article>
                    <h4>Contact</h4>
                    <ul>
                        <li>Address: <br/>123 Towncity, USA</li>
                        <li>Phone: <br/>++ 8123 456 789</li>
                        <li>Email: <br/>little@lemon.com</li>
                    </ul>
                </article>
                <article>
                    <h4>Social Media Links</h4>
                    <ul>
                        <li><a href="/">Facebook</a></li>
                        <li><a href="/">Instagram</a></li>
                        <li><a href="/">Twitter</a></li>
                    </ul>
                </article>
            </section>
        </footer>
    )

}
export default Footer;