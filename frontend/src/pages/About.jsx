import React from "react";
import "../css/About.css"


function About(){
    return(
        <div id = "aboutP">
            <h1 className = "headName">About Me</h1>
            <hr></hr>
            <table id = "aboutText">
            <tr>
                <td><p> Hello! My name is Francisco Martinez, I am a broker in the autosale business and I work with multiple car dealerships all over Miami. I will help you find the best prices and lowest interest rates!</p></td>
                <td><p>Hola! Mi nombre es Frank Martinez, soy un broker en las ventas de caros y trabajo con muchos dealerships en la area de Miami. ¡Te ayudaré a encontrar los mejores precios y las tasas de interés más bajas!</p></td>
            </tr>
            
            </table>
            <hr></hr>
            <section id = "socials">
                <h2 id ="aboutHeaders">Social Media and Listings:</h2>
                <table>
                <tr>
                    <th>Social</th>
                    <th>Listings/Ventas</th>
                </tr>
                <tr>
                    
                    <td> <a href = "https://tiktok.com/@solo19663" target = "_blank" rel="noreferrer" ><img src = "/img/tiktok-64.png"/></a> </td>
                    <td><a href ="https://www.facebook.com/marketplace/profile/100026588288002/" target = "_blank" rel = "noreferrer"><img src = "/img/facebook.png" id= "facebookimg"/></a></td>
                    
                </tr>
                </table>
            </section> 
            <hr></hr>
            <p> </p>
            <section id = "reviews">
                
            </section>


        </div>

        
    );
}
export default About