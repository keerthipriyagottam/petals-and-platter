import React from 'react'
import NavBar from '../components/NavBar'
import Register from '../components/forms/Register'
import SideBar from '../components/SideBar'
import Login from '../components/forms/Login'
import AddCompany from '../components/forms/AddCompany'
import AddProduct from '../components/forms/AddProduct'

const LandingPage = () => {
  return (
    <>
    <section className='landing-section'>
        <NavBar/>
        <AddProduct/>
        
        
        
       
    </section>
    </>
  )
}

export default LandingPage