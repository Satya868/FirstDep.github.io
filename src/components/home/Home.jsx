import React from 'react'
import './Home.css'
import Img from '../../assets/football1.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import NewsSports from '../newsitem/NewsSports';
import Comments from '../comments/Comments';


const Home = () => {
  
  return (
    <>
      <div className="body">
        <div className="card1">
          <img src={Img} alt="error" className="card_img" />

        </div>
        <div className="card2">
         <div className="text">
          <h3>Welcome to our website, here you can get a complete roundup of
            <h2>FOOTBALL </h2>related stuffs.
          </h3>
         </div>
        </div>
      </div>
      <div className="headlines">
        <h1>TOP HEADLINES FROM SPORTS</h1>
      </div>

    <div className="grid">
    <NewsSports/> <NewsSports/> <NewsSports/>
    </div>
      <div className="container my-4 ">     
          <div className="row">
             <div className="col-md-3">
                
              </div>
          </div>
     </div>  
     <div className="commt">
        <Comments/>
      </div>
    </>
  )
}

export default Home
