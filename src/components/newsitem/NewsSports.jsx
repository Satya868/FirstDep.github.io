import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';

const NewsSports = () => {
  const [num, setNum]=useState();
  const [urlToImage, seturlToImage]=useState();
  const [url, setUrl]=useState();
  const [title, setTitle]=useState();
   useEffect(()=> {
   async function getData(){
    const res = await axios.get(`https://newsapi.org/v2/everything?q=${num}&apiKey=a1b0ec461a4b4ea0b8e8de9b562558c7`) 
    setTitle(res.data.title);
    setUrl(res.data.url);
  }
    getData();
  })

  return (
    <><h3>PLEASE CHOOSE THE CHOICE WHICH EVER YOU LIKE</h3>
    <div className="choose">
      <select value={num} onClick={(event)=>{
         setNum(event.target.value);
       }}>
       <option value="football">Football</option>
       <option value="fifa">FIFA-2022</option>
       <option value="uefa">UEFA</option>
       <option value="messi">MESSI</option>
       <option value="cricket">CRICKET</option>
       </select> 
  
    
    <h3>NEWS FROM {num} GOES HERE:</h3>
      <div className="card" style={{width: '18rem', boxShadow: " 1.2rem .3rem #0dcaf0"}}>
        <img src={urlToImage} className="card-img-top" alt="..."/>
     <div className="card-body">
       <h5 className="card-title">{title}</h5>
        <p className="card-text">description  </p>
       <a href="" className="btn btn-secondary">{url}</a>
      </div>
   </div></div>
   
    </>
  )
}
export default NewsSports

//https://newsapi.org/v2/everything?q=bitcoin&apiKey=a1b0ec461a4b4ea0b8e8de9b562558c7