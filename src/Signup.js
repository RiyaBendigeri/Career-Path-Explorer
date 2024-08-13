import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useState } from 'react'
import './Signup.css'



const Signup = () => {
    const [action,setAction] = useState("Login");
  return (
    <div className='container'>
        <div className="header">
            <div className="text">
                {action}
            </div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Login"?<div></div>:<div className="input">
                <img src="https://tse2.mm.bing.net/th?id=OIP.xlTxIX_i9UIgOJtZCd01jwHaHa&pid=Api&P=0&h=180" alt="" height={85} width={90} />
                <input type="text"   placeholder='Name '/>
            </div>}
            
            <div className="input">
                <img src="https://static.vecteezy.com/system/resources/previews/000/581/999/original/email-icon-vector-illustration.jpg" alt="" width={90} height={85} />
                <input type="Email" placeholder='Email id ' />
            </div>
            <div className="input">
                <img src="https://static.vecteezy.com/system/resources/previews/000/581/808/non_2x/lock-icon-vector-illustration.jpg" alt="" height={85} width={90} />
                <input type="Password" placeholder='Password ' />
            </div>
        </div>
        {action==="Sign Up"?<div></div>:<div className="forgot-password">Forgot Password? <span>Click Here</span></div>
}
        
      <div className="submit-container">
        <div className={action==="Login"?"submit grey":"submit"}onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up"?"submit grey":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
      </div>
    </div>
  )
}

export default Signup


   