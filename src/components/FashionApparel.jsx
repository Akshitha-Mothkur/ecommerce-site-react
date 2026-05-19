import React, { useEffect, useState } from "react";
import axios from "axios";
import './Home.css'

function FashionApparel() {

    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get("https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json")
        .then(res=>setData(res.data.filter(product => product.category === "Fashion & Apparel")))
    },[])
console.log(data)
return(
    <>
    <div className="outer">
        {data.map((obj)=>{
            return(
                
                <div className="item-card">
                    <img src={obj.image} alt={obj.name} width="180px" height="270px"/>
                    <h3>{obj.name}</h3>
                    <h4>₹{obj.priceCents}</h4>
                    <h5>⭐{obj.rating.stars}</h5>


                </div>
            )
        })}
    </div>
    </>
)
}

export default FashionApparel;