import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
const LoginPopup = ({setShowLogin}) => {
    const [currState,setCurrState] = useState("Login")
  return (
    <div className='login-popup' >
        <form  className='login-popup-container'>
            <div className='login-popup-title' > 
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" /> 
             </div>
             <div className="login-popup-inputs">
                {currState ==="Login"?<></>:<input type="text " placeholder='Your Name' required />}
                
                <input type="email" placeholder='your email ' required />
                <input type="password" placeholder='your password' required />
             </div>
             <button>{currState==="Sign Up"? "Create Account":"Login"}</button>
             <div className='login-popup-condition' >
                <input type="checkbox" required />
                <p>By Continuing , i agree to the terms and conditons and privacy policy</p>
             </div>
             {currState==="Login"?  <p>Create a New Account ? <span onClick={()=> {setCurrState("Sign Up")}}>Click Here</span></p>:     <p>Already Have a Account ? <span onClick={()=> {setCurrState("Login")}}  > Login</span></p>}
        </form>
    </div>
  )
}

export default LoginPopup
