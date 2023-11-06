import React, { useEffect, useState } from "react";
import './FetchData.css'


function FetchData(){
    const [data, setData] = useState([]);


    const FetchData =()=>{
        fetch("https://fakestoreapi.com/products").then((response)=>{
            return response.json()
        // console.log(response)
    }).then((json=>{
        console.log(json)
        setData(json)
    }))
    }

    useEffect(()=>{
        FetchData()
    },[])


    return (
    <>
        <h1>FetchData Method</h1>

        {data.map((item) =>(
            <div className="users">
            <h2 className="all-data">Id: {item.id}</h2>
            <h2 className="all-data">{item.title}</h2>
            <h2 className="all-data">Price: {item.price}</h2>
            <h3 className="all-data">Description: {item.description}</h3>
            <h3 className="all-data">category: {item.category}</h3>
            <img src={item.image} alt=""/>
            </div>
        ))}
    </>
        
    )
}

export default FetchData;