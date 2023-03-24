import React from 'react'
import { Link } from "react-router-dom"
/*import Home from './components/home/Home'
import Analytic from './components/analytic/Analytic'
import Fixture from './components/fixture/Fixture'
import Fifa from './components/FIFA2022/Fifa'
import Blog from './components/blog/Blog'*/
import './Navbar.css'

const Navbar = () => {
  return (
    <>
    <div className="nav">
      <ul>        
        <li><Link className='link' to='/'>Home</Link></li>
      <li> <Link className='link' to='/analytic'>Analytic</Link></li>
      <li><Link className='link' to='/fixture'>Fixture</Link></li>
      <li><Link className='link' to='/fifa'>Fifa</Link>    </li> 
      <li><Link  className='link' to='/blog'>Blog</Link></li>
      </ul>
     </div>
    </>
  )
  /* <li><a href='/' className="link"><Home/></a></li>
      <li> <a href="/" className="link"><Analytic/></a></li> 
      <li> <a href="/" className="link"><Fixture/></a></li> 
      <li> <a href="/" className="link"><Fifa/></a></li> 
      <li><a href="/" className="link"><Blog/></a> </li>     */
}

export default Navbar
// https://www.shutterstock.com/search/xavi?