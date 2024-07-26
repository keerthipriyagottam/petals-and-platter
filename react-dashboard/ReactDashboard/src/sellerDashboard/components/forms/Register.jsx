import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';

function Register() {
  return (
    <MDBContainer className="my-5 gradient-form">
      <MDBContainer className="my-5 gradient-form" style={{width: '50%'}}>
      <MDBRow>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column ms-5" >

            <div className="text-center">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                style={{width: '100px'}} alt="logo" />
              <h4 className="mt-1 mb-5 pb-1">Sign Up</h4>
            </div>

            <p>Please login to your account</p>

            <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text'/>
            <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
            <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>


            <div className="text-center pt-1 mb-5 pb-1">
              <MDBBtn className="mb-4 w-100 gradient-custom-2">Submit</MDBBtn>
            </div>

          </div>

        </MDBCol>

      </MDBRow>
      </MDBContainer>

    </MDBContainer>
  );
}

export default Register;