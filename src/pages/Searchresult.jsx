import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate , useLocation } from 'react-router-dom'



const Searchresult = () => {
    const location = useLocation();
    const searchQuery = location.state.query;
    const [searchResults, setSearchResults] = useState([]);
    console.log("vallue recieved: ",searchQuery)
    console.log(typeof searchQuery === 'string')
  
    useEffect(() => {
      
      const fetchData = async () => {
        
        try {
            console.log("vallue recieved: ",searchQuery)
            console.log(typeof searchQuery === 'string')

            const res = await axios.get('https://receipe-zd4n.onrender.com/searchreceipe', {
            "rname": searchQuery,
          });

  
          console.log(res.data.data);
          setSearchResults(res.data.data);
        } catch (err) {
          console.error(err);
        }
      };
    // try {
    //     console.log("value received:", searchQuery);
    //     if (typeof searchQuery === 'string') {
    //       const res = await axios.get('https://receipe-zd4n.onrender.com/searchreceipe', {
    //         params: {
    //           "rname": searchQuery
    //         }
    //       });
      
    //       console.log(res.data.data);
    //       setSearchResults(res.data.data);
    //     } else {
    //       console.error("searchQuery is not a string.");
    //     }
    //   } catch (err) {
    //     console.error("An error occurred:", err);
    //   }
    // };
  
        fetchData();
    }, [searchQuery]);
  return (
    <>
    <div className='box-container'>
        { 
        searchResults.map((item)=>(
          <div className='box' key={item.id}>
            <img src={item.imagelink} alt=''/>
            <h3>{item.name}</h3>
            {/* <h8>by {userData.user.firstname}</h8> */}
            <button  key={item.rid}>Read More</button>
          </div>
          ))
        }
        </div>
    </>
  )
}

export default Searchresult
