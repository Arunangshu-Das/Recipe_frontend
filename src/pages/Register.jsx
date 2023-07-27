import React , {useState} from 'react'
import '../styles/register.css'
const Register = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className='registerform'>
    <form className ="registerformbox" action=" " >
    <h1 className='text-white'>Register</h1>
    
    <input type="text" name="" id="fullname" placeholder='Full Name' autoComplete='off' value={fullname} onChange={(e)=>setFullname(e.target.value)}/>
    
    <input type="email" name="" id="email" placeholder='email' autoComplete='off' value={email} onChange={(e)=>setEmail(e.target.value)}/>

    <input type="number" name="" placeholder='Phone no' id="number" autoComplete='off' value={number} onChange={(e)=>setNumber(e.target.value)}/>
    
    <input type="password" name="" placeholder='Password' id="password" autoComplete='off' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      
    

    <input type="submit" name="" value="Register"/>
    <div>
          <input type='checkbox' id='acceptTerms' />
          <label htmlFor='acceptTerms'>I am accepting terms & conditions</label>
        </div>
    </form>
    </div>
  )
}

export default Register
