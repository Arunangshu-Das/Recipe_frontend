import React,{useState,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/home.css'
import axios from 'axios'

const Home = () => {
  const [items,setItems] = useState([]);
  const [limit,setLimit] = useState(6);
  const navigate = useNavigate();

  const userData = JSON.parse(localStorage.getItem("auth"));

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

  const loadMore = () =>{
    setLimit((value)=> value + 6 )
  }

  const handleClick = (itemId) =>{
    navigate('/recipedetails',{state: {value: itemId,items}})
    console.log(itemId)
  }
  
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
        items.slice(0,limit).map((item)=>(
          <div className='box' key={item.id}>
            <img src={item.imagelink} alt=''/>
            <h3>{item.name}</h3>
            {/* <h8>by {userData.user.firstname}</h8> */}
            <button onClick={() => handleClick(item.rid)} key={item.rid}>Read More</button>
          </div>
          ))
        )}
        </div>
          <div className='loadcontainer'>
            <div className='btnload' onClick={loadMore}>Load More</div>
          </div>
      </section>

      <section className='reviews'>

      </section>
      </>
  )
}

export default Home
