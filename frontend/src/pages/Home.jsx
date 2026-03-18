import React from "react";
import "../css/Home.css"
import React, {useState, useEffect} from "react";


const slidesCustomers = [
        "img/cust1.jpg",
        "img/cust2.jpg",
        "img/cust3.jpg",
        "img/cust4.jpg",
        "img/cust5.jpg"

    ];

const slidesCars = [
    "img/car1.jpg",
    "img/car2.jpg",
    "img/car3.jpg",
    "img/car4.jpg",
    "img/car5.jpg",
    "img/car6.jpg",
    "img/car7.jpg"
]


function Home(){
    
// initializing array of images for fading pictures background in home page
    const [current, setCurrent] = useState(0);

    useEffect(() =>{
        const timer = setInterval(() =>{
            setCurrent((prev)=> (prev+1) % slidesCars.length);
        }, 3500); // makes the time to switch images around 3.5 seconds
        return () => clearInterval(timer);
    },[]);

    
    return(
<div id = "homeP">
    <section id = "background-header"> 
        <h1 className = "fontHome">Francisco </h1>

        <h1 className = "fontHome">Autosale</h1>
    </section>
        <p> test</p>

</div>





    );

}

export default Home
