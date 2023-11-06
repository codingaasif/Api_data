import React from "react";
import axios from 'axios';
import './AxiosData.css';
import { useState } from "react";
import { useEffect } from "react";

// const API = "https://jsonplaceholder.typicode.com"

function AxiosData(){
    const [myData, setMyData] = useState([])
    const [isError, setIsError] = useState("")


    //NOTE: using Promises

    // useEffect(()=>{
    //     axios.get("https://jsonplaceholder.typicode.com/posts")
    //     .then((res)=> 
    //     // console.log(res.data)
    //     setMyData(res.data))
    //     .catch((error)=> setIsError(error.message));

    // }, []);



    //NOTE: using Async Await

    // const getApiData = async ()=>{
    //     try {
    //         const res = await axios.get("https://jsonplaceholder.typicode.com/posts/1/comments")
    //         setMyData(res.data)
    //     }catch(error){
    //         setIsError(error.message)
    //     }
        
    // }


    // Photos data fetching

    const getApiData = async ()=>{
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/photos")
            setMyData(res.data)
        }catch(error){
            setIsError(error.message)
        }
        
    }

    useEffect(()=>{
        getApiData()
        //getApiData(`${API}/posts`);
    }, [])
    

    return (
        <>
        <h1>Axios Method</h1>
        {isError !== "" && <h3>{isError}</h3>}
        <div className="grid">
        {myData.map((post)=>{


            //NOTE: using Promises

            //const {id, title, body} = post;
           // return <div className="card" key={id}>
                //<h3 className="center">{id}</h3>
                //<h3 className="center">{title.slice(0, 15).toUpperCase()}</h3>
                //<p className="para">{body.slice(0, 150)}</p>


            //NOTE: using Async Await                

            //const {id, name, email, body} = post;
            //return <div className="card" key={id}>
                //<h3 className="center">{id}</h3>
                //<h3 className="center">{name.slice(0, 15).toUpperCase()}</h3>
                //<h3 className="center">{email}</h3>
                //<p className="para">{body.slice(0, 150)}</p>


            // Photos data fetching

            const {id, title, url, thumbnailUrl} = post;
            return <div className="card" key={id}>
                <h3 className="center">{id}</h3>
                <h3 className="center">{title.slice(0, 15).toUpperCase()}</h3>
                <h3 className="center">{url}</h3>
                <p className="para">{thumbnailUrl.slice(0, 150)}</p>
            </div>
        })}
        </div>

        </>
    )
}


export default AxiosData;