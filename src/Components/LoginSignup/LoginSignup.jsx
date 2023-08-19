
import { BiSolidUser } from 'react-icons/bi'
import { AiTwotoneMail } from 'react-icons/ai'
import { RiLockPasswordFill } from 'react-icons/ri'
import './LoginSignup.css'
import '../../index.css'
import { useState } from 'react'

const LoginSignup = () =>{

    const [action, setAction] = useState('Login');


    return(
        <div className='container'>
           <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
           </div>
           <div className='inputs'>
            {/*input section ffor full name */}
            {action==='Login'?<div></div>:<div className='input'>
            
                <label className='img'>
                    <BiSolidUser/>
                </label>
                <input type='text' placeholder='Name'/>
            </div>}
            {/*more input section for eamil */}
            <div className='input'>
                <label className='img'>
                    <AiTwotoneMail/>
                </label>
                <input type='email' placeholder='Enter Id'/>
            </div>
            {/*more input section for password */}
            <div className='input'>
                <label className='img'>
                    <RiLockPasswordFill/>
                </label>
                <input type='password' placeholder='Password'/>
            </div>
            {/*end of input */}
           </div>
           {/*submit or lost password button for form */}
           {action==='Sign Up'?<div></div>:<div className='forgot-password'>Lost Password? <span>Click Here!</span></div>}
           <div className='submit-container'>
            <div className={action==='Login'?'submit gray':'submit'} onClick={()=>{setAction('Sign Up')}}>Sign Up</div>
            <div className={action=='Sign Up'?'submit gray':'submit'} onClick={()=>{setAction('Login')}}>Log In</div>
           </div>
        </div>
    )
}

export default LoginSignup