import { useState } from 'react';
import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';
import { API_URL } from '../../data/apiPath';

function Login({registerHandler,showHomeHandler}) {
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("");

  const loginHandler= async(e) =>{
    console.log('in login')
    e.preventDefault();
    try {
      const Response=await fetch(`${API_URL}/Seller/login`,{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:
          JSON.stringify({email,password})
        
      })
        const data= await Response.json();
        if(Response.ok){
          setEmail("")
          setPassword("")
          localStorage.setItem('loginToken',data.token)
          showHomeHandler();
        }
        


    } catch (error) {
      console.error("Login failed",error);
    }
  }

  return (
    <MDBContainer className="my-5 gradient-form">
      <MDBContainer className="my-5 gradient-form" style={{width: '50%',height:'100vh'}}>
      <MDBRow>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column ms-5" >

            <div className="text-center">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                style={{width: '100px'}} alt="logo" />
              <h4 className="mt-1 mb-5 pb-1">Welcome to Petals and Platter</h4>
            </div>

            <form onSubmit={loginHandler}>


            <MDBInput wrapperClass='mb-4' label='Email' value={email} onChange={(e)=>setEmail(e.target.value)} name='email' id='form1' type='email'/>
            <MDBInput wrapperClass='mb-4' label='Password'name='password' onChange={(e)=>setPassword(e.target.value)} value={password} id='form2' type='password'/>


            <div className="text-center pt-1 mb-5 pb-1">
              <MDBBtn className="mb-4 w-100 gradient-custom-2" type='submit'>Sign in</MDBBtn>
              
            </div>

            
            
            </form>

            
            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Don't have an account?</p>
              <button outline className='mx-2' color='danger' onClick={registerHandler}>
                Register
              </button>
              
            </div>

          </div>

        </MDBCol>

      </MDBRow>
      </MDBContainer>

    </MDBContainer>
  );
}

export default Login;