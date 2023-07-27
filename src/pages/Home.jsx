import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/home.css'

const Home = () => {
  return (
      <section className='home' id='home'>
        <div className='content'>
          <h3>
            Get Your <span>favourite</span>Recipe
          </h3>
          <p>some texts</p>
          {/* <Link to=''>Explore now</Link> */}
        </div>
      </section>
  )
}

export default Home
