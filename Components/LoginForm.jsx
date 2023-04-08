import Link from 'next/link';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {BiLogIn} from 'react-icons/bi';

const LoginForm = () => {
  return (
    <div className='form-warpper'>
    <center className='form-con'>

    {/* <Form> */}
      <Form.Group className="mb-3 mt-5" >
  
        <Form.Control type="email" placeholder="Enter email" />
      
      </Form.Group>

      <Form.Group className="mb-5" >
        
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <div className='flex-row-between mb-3'>
        <Link href='/register' className='form-link '>
        
        New Account 
        
        </Link>
        <Link href='/register' className='form-link'>
        
        Forgey Password ?? 
        
        </Link>

     {/* <link href='/register' className='form-link'> 
   
     Forgot Password ??
   
     </link> */}
      </div>
      
      <Button className="card-btn"type="submit">
        <BiLogIn/><span className='mx-2'>Login</span>
      </Button>
    {/* </Form> */}

    </center>
    </div>
  )
}

export default LoginForm
