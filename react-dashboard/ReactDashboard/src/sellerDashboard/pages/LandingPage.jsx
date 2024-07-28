import React from 'react'
import NavBar from '../components/NavBar'
import Register from '../components/forms/Register'
import SideBar from '../components/SideBar'
import Login from '../components/forms/Login'
import AddCompany from '../components/forms/AddCompany'
import AddProduct from '../components/forms/AddProduct'
import { useState } from 'react'
import Home from '../components/Home'

const LandingPage = () => {
  const[loginPage,setLoginpage]=useState(true);
  const[registerPage,setRegisterpage]=useState(false);
  const[homePage,setHomePage]=useState(false);
  const[company,setCompany]=useState(false);
  const[product,setProduct]=useState(false);

  const loginHandler=()=>{
    setLoginpage(true);
    setRegisterpage(false);
    setCompany(false);
    setProduct(false);
    setHomePage(false);
  }
  const showHomeHandler=()=>{
    setHomePage(true);
    setLoginpage(false);
    setRegisterpage(false);
    setCompany(false);
    setProduct(false);
  }
  const registerHandler=()=>{
    setRegisterpage(true);
    setLoginpage(false);
    setCompany(false);
    setProduct(false);
    setHomePage(false);
  }
  const showCompanyHandler=()=>{
    setCompany(true);
    setRegisterpage(false);
    setLoginpage(false);
    setProduct(false);
    setHomePage(false);
  }
  const showProductHandler=()=>{
    setCompany(false);
    setRegisterpage(false);
    setLoginpage(false);
    setHomePage(false);
    setProduct(true);
  }

  return (
    <>
    <section className='landing-section'>
        <NavBar/>
        {loginPage && <Login registerHandler={registerHandler} showHomeHandler={showHomeHandler}/>}
        {registerPage && <Register/>}
        {homePage && <Home showCompanyHandler={showCompanyHandler} showProductHandler={showProductHandler}/>}
        {company && <AddCompany/>}
        {product && <AddProduct/>} 
    </section>
    </>
  )
}

export default LandingPage