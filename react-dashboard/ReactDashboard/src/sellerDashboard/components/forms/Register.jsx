import React from 'react';
import {API_URL} from '../../data/apiPath'
import { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';
import { Form } from 'react-router-dom';

function Register({}) {
const[username,setusername]=useState("");
const[email,setEmail]=useState("");
const[password,setPassword]=useState("");
const[error,setError]=useState("")
const[loading,setLoading]=useState(true);//till the promise is fullfilled

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


const handleSubmit = async(e)=>{
  delay(3000)
  console.log("reached inside handleSubmit")
  e.preventDefault();
  try {
    console.log("123")
    const Response= await fetch(`${API_URL}/Seller/Register`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({username,email,password})

    })
    const data=await Response.json();
    if(Response.ok){
        console.log('data')
        alert('Registeration Successful')
        setEmail("");
        setPassword("");
        setusername("");
    };


  } catch (error) {
    console.error('Registeration Failed!!',error)
  }


}

  return (

    <MDBContainer className="my-5 gradient-form" >
      <MDBContainer className="my-5 gradient-form" style={{width: '50%'}}>
      <MDBRow>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column ms-5" >

            <div className="text-center">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                style={{width: '100px'}} alt="logo" />
              <h4 className="mt-1 mb-5 pb-1">Sign Up</h4>
            </div>
           <form onSubmit={handleSubmit}>
  

            <MDBInput wrapperClass='mb-4' value={username}  name='username' onChange={(e)=>setusername(e.target.value)}  label='Username' id='form1'  type='text'/>
            <MDBInput wrapperClass='mb-4' value={email}  name='email' onChange={(e)=>setEmail(e.target.value)} label='Email' id='form2' type='email'/>
            <MDBInput wrapperClass='mb-4'  value={password} name='password' onChange={(e)=>setPassword(e.target.value)} label='Password' id='form3' type='password'/>


            <div className="text-center pt-1 mb-5 pb-1" >
              <button className="mb-4 w-100 gradient-custom-2" type='submit'>Submit</button>
            </div>

            </form>

          </div>

        </MDBCol>

      </MDBRow>
      </MDBContainer>

    </MDBContainer>
  
  );
}

export default Register;