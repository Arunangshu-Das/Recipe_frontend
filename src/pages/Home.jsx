import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import './home.css'

const Home = () => {
  return (
    <Layout>
      <section className='home' id='home'>
        <div className='content'>
          <h3>
            Get Your <span>favourite</span>Recipe
          </h3>
          <p>some texts</p>
          {/* <Link to=''>Explore now</Link> */}
        </div>
      </section>
    </Layout>
  )
}

export default Home
