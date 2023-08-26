import React from 'react'

const Upload = () => {
  return (
    <div className='container'>
      <form className='uploadform'>
        <h1>Create Your Recipe</h1>
        <div className='form-box'>
        <input type='text' placeholder='name of the recipe' value=''/>
        <input type='text' placeholder='taste' value=''/>
        <textarea rows='6' cols='50' placeholder='About the recipe' value=''/>
        <input type='button' placeholder='Submit' value=''/>
        </div>
      </form>
    </div>
  )
}

export default Upload
