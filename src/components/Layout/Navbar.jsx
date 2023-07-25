import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"

  
  const Navbar = () => {

    const navRef = useRef();
    const navHandler =()=>{
      navRef.current.classList.toggle("active");
    }


  return (
    <>
        {/* logo part */}
      <header className='header'>
      <div className='logo'>
          <h2>
            <span>R</span>ecipsy
          </h2>
        </div>
      

        {/* menu  part */}

        <nav className='navbar' ref ={navRef}>  
        <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/search">Search</Link></li>
        </ul>
        </nav>




        <div className='icons'>
          <div className='fas fa-bars' id='menu-btn' onClick={navHandler}></div>
        </div>
        </header>


      {/* hero section */}
      {/* <section className='hero-section'>
        <h1>Recipsy</h1>
        <h4>World of recipes</h4>
      </section> */}
    </>
  )
}

export default Navbar
