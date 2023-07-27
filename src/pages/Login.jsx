import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import '../styles/login.css'
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [auth,setAuth] = useAuth()
  
    // const navigate =  useNavigate()
  return (
    <div className='loginform'>
    <form className ="formbox" action=" " >
    <h1 className='text-white'>Login</h1>
    
      
      <input type="email" name="" id="email" placeholder='Username' autoComplete='off' value={email} onChange={(e)=>setEmail(e.target.value)}/>
    
    
      
      <input type="password" name="" placeholder='Password' id="password" autoComplete='off' value={password} onChange={(e)=>setPassword(e.target.value)}/>
    

    <input type="submit" name="" value="Login"/>
    <div> 
        <h5>Don't have an account     <Link to='/register'>Register</Link></h5>
    </div>
    </form>

    
    </div>
  )
}

export default Login
