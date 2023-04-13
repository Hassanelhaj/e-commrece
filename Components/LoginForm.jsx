// .import Link from 'next/link';
import React, { useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {BiLogIn} from 'react-icons/bi';
import {BiUserCircle} from 'react-icons/bi'
import { Users } from '../Data';
import Link from 'next/link';
import ErrorAlert from './ErrorAlert';
import AppElert from './ErrorAlert';

const LoginForm = () => {
  const userName = useRef();
  const userEmail = useRef();

  const userPassword = useRef();
  const onLogin = ()=>{
    // console.log('success');

    const name = userName.current.value;
    const password = userPassword.current.value;
    if(name == Users[0].name || name == Users[1].name){
    console.log('success');
    console.log(password);
    }
    
    else{
      console.log('you are not auth');
    }

  }

  
  return (
    <div className='form-warpper'>
    <center className='form-con'>
      <center><h1 className='primmary'><BiUserCircle className='primmary'/></h1></center>

    {/* <Form> */}
      <Form.Group className="mb-3 mt-5" >
  
        <Form.Control type="email" placeholder="Enter email" ref={userName}/>
      
      </Form.Group>

      <Form.Group className="mb-5 mt-3" >
        
        <Form.Control type="password" placeholder="Password" ref={userPassword}/>
      </Form.Group>
      <div className='flex-row-between mb-3'>
        {/* <link href='register'> */}
          {/* <p>New Account</p></link> */}
    {/* <p><link href='/register'><a>New Account</a></link>forget Pasword</p> */}
<Link href='/rigster' className='primmary'>New Account</Link>
<Link href='/' className='primmary'>Forget Password ??</Link>

       
      </div>
      
      <Button className="card-btn mt-3"type="submit" onClick={onLogin}>
        <BiLogIn/><span className='mx-2'>Login</span>
      </Button>
    {/* </Form> */}

    </center>
    {/* <AppElert/> */}
    </div>
  )
}

export default LoginForm
