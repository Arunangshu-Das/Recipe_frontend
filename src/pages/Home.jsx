import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/home.css'

const Home = () => {
  return (
    <>
      <section className='home' id='home'>
        <div className='content'>
          <h3>
            Get Your <span>favourite</span>Recipe
          </h3>
          <p>some texts</p>
          {/* <Link to=''>Explore now</Link> */}
        </div>
      </section>

      {/* cards */}
      <section className='menu'id='menu'>
        <h1 className='heading'>
          Our <span>Recipes</span> 
        </h1>
        <div className='box-container'>
          <div className='box'>
            <img src='' alt=''/>
            <h3>recipe</h3>
            <button>Read More</button>
          </div>

          <div className='box'>
            <img src='' alt=''/>
            <h3>recipe</h3>
            <button>Read More</button>
          </div>
          <div className='box'>
            <img src='' alt=''/>
            <h3>recipe</h3>
            <button>Read More</button>
          </div>
        </div>
      </section>
      </>
  )
}

export default Home
