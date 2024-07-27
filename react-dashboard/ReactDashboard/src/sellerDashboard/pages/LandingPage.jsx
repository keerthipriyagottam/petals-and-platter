import React from 'react'
import NavBar from '../components/NavBar'
import Register from '../components/forms/Register'
import SideBar from '../components/SideBar'
import Login from '../components/forms/Login'
import AddCompany from '../components/forms/AddCompany'
import AddProduct from '../components/forms/AddProduct'
import { useState } from 'react'

const LandingPage = () => {
  const[loginPage,setLoginpage]=useState(false);
  const[registerPage,setRegisterpage]=useState(false);
  const[company,setCompany]=useState(false);
  const[product,setProduct]=useState(false);

  const loginHandler=()=>{
    setLoginpage(true);
    setRegisterpage(false);
    setCompany(false);
    setProduct(false);
  }
  const registerHandler=()=>{
    setRegisterpage(true);
    setLoginpage(false);
    setCompany(false);
    setProduct(false);
  }
  const showCompanyHandler=()=>{
    setCompany(true);
    setRegisterpage(false);
    setLoginpage(false);
    setProduct(false);
  }
  const showProductHandler=()=>{
    setCompany(false);
    setRegisterpage(false);
    setLoginpage(false);
    setProduct(true);
  }

  return (
    <>
    <section className='landing-section'>
        <NavBar loginHandler={loginHandler} registerHandler={registerHandler}/>
        {loginPage &&<Login registerHandler={registerHandler}/>}
        {registerPage && <Register/>}
        {/* <SideBar showCompanyHandler={showCompanyHandler} showProductHandler={showProductHandler}/>
        {company && <AddCompany/>}
        {product && <AddProduct/>} */}
        
        
        
       
    </section>
    </>
  )
}

export default LandingPage