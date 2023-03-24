import React, {  useEffect } from 'react'
import axios from 'axios'
import './Leagues.css'
import { useState } from 'react'
//const API ="https://apiv3.apifootball.com/?action=get_countries&APIkey=1e06ff87cbba4c30b4ac407730e8ae6f604656130d8b0ee2b52dca7833729820"

const Leagues = () => {
      
     const [Data, setData] = useState([])
     const [url, setUrl]=useState();
     
     const gethApiData = async (url)=> {
         try {
          const res = await axios.get("https://apiv3.apifootball.com/?action=get_countries&APIkey=1e06ff87cbba4c30b4ac407730e8ae6f604656130d8b0ee2b52dca7833729820")
             setData(res.data)
           setUrl(res.data.country_logo)
           console.log(res.data)
         } catch (error) {
           
         }
     };

     useEffect(() => {
        gethApiData()
       
     },[]);
     return (
      <>
      <div className="leagues-container" id='d1'>
        <a href={url}>gu</a>


     
  
      </div>
        
      </>
    )
  } 
  
  
  
  /*const[data, setData]=useState()

    const getData =  async ()=>{
        try {
            const res= await fetch('https://api-football-standings.azharimm.site/leagues');
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
       /* axios('https://api-football-standings.azharimm.site/leagues').then(res=>{
            console.log(res.data.data);
            setData(res.data.data)
        }); 
       
         getData();
    }, []) 
    
    
    const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://api-football-v1.p.rapidapi.com/v3/timezone',
  headers: {
    'X-RapidAPI-Key': '58424f91ecmshcd38803ad3f2e0fp156300jsn6339c6217dd4',
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
}); 
    */


 

export default Leagues
