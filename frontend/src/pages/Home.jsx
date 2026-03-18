import React from "react";
import "../css/Home.css"
import {useState, useEffect} from "react";


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
    const [currentCustomer, setCurrentCustomer] = useState(0);
    useEffect(() =>{
        const timer = setInterval(() =>{
            setCurrent((prev)=> (prev+1) % slidesCars.length);
        }, 2500); // makes the time to switch images around 2.5 seconds
        return () => clearInterval(timer);
    },[]);

    useEffect(() =>{
        const customerTimer = setInterval(() =>{
            setCurrentCustomer((prev)=> (prev+1) % slidesCustomers.length);
        }, 4000); // makes the time to switch images around 4 seconds
        return () => clearInterval(customerTimer);
    },[]);


    return(
<div id = "homeP">
    <section id = "background-header"
        style={{backgroundImage: `url(${slidesCars[current]})`}}
    >

        <h1 className = "fontHome">Frank <br></br> <br></br> <br></br> Autosale</h1>
       
    </section>
    <section id = "main-section">
        <h1 id = "headers">Customers</h1>
        <section id = "customerPics"
            
        >
             <img src = {slidesCustomers[currentCustomer]} alt ="customer" id = "custImg"/>

        </section>
        <br></br>
        <br></br>
        <br></br>
        <h2 id = "headers">Reviews</h2>
    </section>

</div>





    );

}

export default Home
