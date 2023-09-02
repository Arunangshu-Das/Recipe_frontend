import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../styles/home.css'
import axios from 'axios'

const Home = () => {
  const [items,setItems] = useState([]);
  // const [limit,setLimit] = useState(6);

  useEffect(()=>{
    async function fetchdata(){
    try{
      const res = await axios.get('https://receipe-zd4n.onrender.com/receipes')

      if (Array.isArray(res.data.data)) {
        setItems(res.data.data);
        console.log('Received data (array):', res.data );
        
      } else {
        console.error('Received data ', res.data);
      }
    }catch (err) {
      console.log(err);
      
    }
  }
  fetchdata();
  },[])
  
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
        {items.length === 0 ? (
            <div className="d-flex justify-content-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
        items.map((item)=>(
          <div className='box' key={item.id}>
            <img src={item.image_url} alt=''/>
            <h3>{item.name}</h3>
            <button key={item.rid}>Read More</button>
          </div>
          ))
          )}
        </div>

      </section>
      </>
  )
}

export default Home
