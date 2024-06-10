import React from 'react'
import salad from "../Assets/greek salad.jpg"
import bruchetta from "../Assets/bruchetta.svg"
import dessert from "../Assets/lemon dessert.jpg"
function Menu(){
    return(
        <div className="menu-container">
            <div className="menu-header">
                <h2>Specials</h2>
                <button>Online Menu</button>
            </div>
            <section className="cards">
                
                    
                <article className="menu-items">
                    
                    <img src={salad} alt='salad'/>
                    
                    <main className="menu-content">
                    <header className="heading">
                        <h5>Greek salad</h5>
                        <p style={{color:"#EE9972"}}>$12.99</p>
                    </header>
                    <p>The famous greek salad of crispy lettus,peppers,olives and our Chicago style teta cheese,garnished with crunchy garlic and rosemary croutons.</p>
                    <h5>Order a delivery</h5> 
                    </main>
                           
                </article>
                <article className="menu-items">
                    
                    <img src={bruchetta} alt='bruchetta'/>
                    <main className="menu-content">
                    <header className="heading">
                        <h5>Bruchetta</h5>
                        <p style={{color:"#EE9972"}}>$5.99</p>
                    </header>
                    <p>Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                    <h5>Order a delivery</h5> 
                    </main>  
                </article>
                <article className="menu-items">
                    
                    <img src={dessert} alt='dessert'/>
                    <main className="menu-content">
                    <header className="heading">
                        <h5>Lemon Dessert</h5>
                        <p style={{color:"#EE9972"}}>$5.00</p>
                    </header>
                    <p>This comes straight from grandma's reciepe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                    <h5>Order a delivery</h5>
                    </main>

                </article>  
            
        </section>

        </div>
    )
}
export default Menu;