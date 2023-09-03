import React from 'react'
import { useLocation } from 'react-router-dom'

const RecipeDetails = () => {

  const location = useLocation();
  const itemId = location.state && location.state.value;
  const items = location.state && location.state.items;
  console.log('itemId:', itemId);
  console.log('items:', items);

  const selectedItem = items.find((item) => item.rid === itemId);

  console.log('selectitem: ',selectedItem)

  return (
    <div>
      
    </div>
  )
}

export default RecipeDetails
