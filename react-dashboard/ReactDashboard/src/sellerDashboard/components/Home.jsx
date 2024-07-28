import React from 'react'
  import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';



const Home = ({showCompanyHandler,showProductHandler}) => {
  return (
   <MDBContainer>
    <MDBRow className='p-5' >
      <MDBCol onClick={showCompanyHandler} sm='9' className='p-3 mb-3 bg-danger bg-gradient text-center text-white rounded-5 p-3 border' size='8'>
        Add Company
      </MDBCol>
      <MDBCol onClick={showProductHandler} sm='9' className='p-3 mb-3 bg-danger bg-gradient text-center text-white rounded-5 p-3 border' size='8'>
        Add Product
      </MDBCol>
      <div className='w-100'></div>
      <MDBCol sm='9' className='p-3 mb-3 bg-danger bg-gradient text-center text-white rounded-5 p-3 border' size='8'>
        All Products
      </MDBCol>
      <MDBCol sm='9' className='p-3 mb-3 bg-danger bg-gradient text-center text-white rounded-5 p-3 border' size='8'>
       User Details
      </MDBCol>
    </MDBRow>
    </MDBContainer>
  )
}

export default Home