import React from "react";
import "../css/About.css"


function About(){
    return(
        <div id = "aboutP">
            <h1 className = "headName">About Me</h1>
            <p> Hello! My name is Francisco Martinez, I am a broker in the autosale business and I work with multiple car dealerships around Miami. I will help you find the best prices and lowest interest rates!</p>
            <hr></hr>
            <p>Hola!</p>
            <section id = "socials">
                <h2 id ="aboutHeaders">Find me on Social Media and View my Listings!:</h2>
                <a href = "https://tiktok.com/@solo19663" target = "_blank" rel="noreferrer" ><img src = "./img/tiktok-64.png"/></a>
                <a href ="https://www.facebook.com/marketplace/profile/100026588288002/" target = "_blank" rel = "noreferrer">Facebook Marketplace</a>
            </section> 
            <hr></hr>
            <p> </p>
            <section id = "reviews">
                <h2>My Reviews:</h2>
                
            </section>


        </div>

        
    );
}
export default About