import Link from 'next/link';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {BiLogIn} from 'react-icons/bi';
import {AiOutlineUserAdd} from 'react-icons/ai';
import MyAlret from './MyAlret';




const RegisterForm = () => {
  return (
    <div className='form-warpper'>
    <center className='form-con'>
      <center className='mb-3'><h2 className='flex-row primmary'><AiOutlineUserAdd/>
      </h2></center>

    {/* <Form> */}
    <Form.Group className="mb-3 mt-3" >
  
        <Form.Control type="text" placeholder="Enter Your Name" />
      
      </Form.Group>
      <Form.Group className="mb-3 mt-3" >
  
        <Form.Control type="email" placeholder="Enter email" />
      
      </Form.Group>

      <Form.Group className="mb-3 mt-3" >
        
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-5 mt-3" >
        
        <Form.Control type="password" placeholder="Confirm Password" />
      </Form.Group>
      <div className='flex-row-between mb-3'>
        <Link href='/login' className='form-link primmary'>
        
        You have Account 
        
        </Link>
        

     {/* <link href='/register' className='form-link'> 
   
     Forgot Password ??
   
     </link> */}
      </div>
      
      <Button className="card-btn"type="submit">
        <BiLogIn/><span className='mx-2'>Login</span>
      </Button>
      {/* <MyAlret/> */}
    {/* </Form> */}

    </center>
    </div>
  )
}

export default RegisterForm
