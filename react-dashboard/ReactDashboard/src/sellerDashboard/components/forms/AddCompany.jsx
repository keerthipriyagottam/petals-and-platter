import React from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { MDBFile } from 'mdb-react-ui-kit';
import { useState } from 'react';
import { API_URL } from '../../data/apiPath';


import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput
  }
  from 'mdb-react-ui-kit';

const AddCompany = () => {
  const[companyName,setCompanyName]=useState("");
  const[companyAddress,setCompanyAddress]=useState("");
  const[category,setCategory]=useState("FlowerStore");
  const[filter,setFilter]=useState([]);
  const[deals,setDeals]=useState("");
  const[image,setImage]=useState(null);
   
  const handleCompanySubmit=async(e)=>{
    e.preventDefault();
    try {
      const loginToken=localStorage.getItem('loginToken');
      if(!loginToken){
        console.error("User Not Authenticated")
      }
      const formData=new FormData();
      formData.append("companyName",companyName);

      formData.append("companyAddress",companyAddress);
      formData.append("Deals",deals);


      formData.append("category",category);

      filter.forEach((val)=>{
        formData.append("FilterByStore",val)
      })

      console.log(formData)

      const Response=await fetch(`${API_URL}/Company/addCompany`,{
        method:'POST',
        headers:{
          'Token':`${loginToken}`
        },
        body:
          formData
      });

      const data=await Response.json();
      
      if(Response.ok){
        console.log(data)
        alert("Company details are added")
      }
    

    } catch (error) {
      console.error("failed to add company!!",error)
    }
  }


  const handleCategoryChange=(e)=>{
    const val = e.target.value;
    setCategory(val);
  }

  const handleFilterChange=(e)=>{
    const val=e.target.value;

    // If there is an item already in filter array, it means that the user is trying to uncheck the checkbox. So, we have to remove the item from filter array
    if(filter.includes(val)){
     setFilter(filter.filter((item)=>item!==val))
    }
    else{
     setFilter([...filter,val])
    }
    console.log(filter)
   }
   
   const handleImage=(e)=>{
    const file=e.target.image[0];
    setImage(file);
   }
 



  return (
    <MDBContainer className="my-5 gradient-form ">
      <MDBContainer className="my-4 gradient-form" style={{width: '70%',height:'100vh'}}>
      <Row style={{background:"antiquewhite",padding:"0 40px 0"}}>
        <Form style={{margin:"30px 0"}}  onSubmit={handleCompanySubmit}>
          <Row >
            <Col>
            <Form.Control Label="Company:" placeholder="Company Name" name='companyName' value={companyName} onChange={(e)=>setCompanyName(e.target.value)}/>
            </Col>
            <Col>
            <Form.Control Label="Address:" placeholder="Company Address" name='companyAddress'  value={companyAddress} onChange={(e)=>setCompanyAddress(e.target.value)}/>
            </Col>
        </Row>
        <br/>
        <Row >
            <Col>
                <Form.Select aria-label="Default select example" value={category} onChange={handleCategoryChange}>
                    <option value="FlowerStore" >Flower Store</option>
                    <option value="GroceryStore">Grocery Store</option>
                    <option value="DairyStore">Dairy Store</option>
                </Form.Select>
            </Col>
        </Row>
        <br/>
        <Row >
        <Form>
      {['checkbox'].map((type) => (
        <div key={`inline-${type}`} className="mb-3" label="category">
          <Form.Check
            inline
            label="Fruits"
            value="Fruits"
            name="group1"
            type={type}
            checked={filter.includes('Fruits')}
            onChange={handleFilterChange}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Vegetables"
            value="Vegetables"
            name="group1"
            type={type}
            checked={filter.includes('Vegetables')} 
            onChange={handleFilterChange}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="Milk"
            value="Milk"
            name="group1"
            type={type}
            checked={filter.includes('Milk')} 
            onChange={handleFilterChange}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Eggs"
            value="Eggs"
            name="group1"
            type={type}
            checked={filter.includes('Eggs')} 
            onChange={handleFilterChange}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="cheese"
            value="cheese"
            name="group1"
            type={type}
            checked={filter.includes('cheese')}
            onChange={handleFilterChange}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="Flowers"
            value="Flowers"
            name="group1"
            type={type}
            checked={filter.includes('Flowers')}
            onChange={handleFilterChange}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="Plants"
            value="Plants"
            name="group1"
            type={type}
            checked={filter.includes('Plants')}
            onChange={handleFilterChange}
            id={`inline-${type}-2`}
          />
        </div>
      ))}
    </Form>
        </Row>
            <Row >
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" name="deals" >
            <Form.Label>Deals:(Offers Applied)</Form.Label>
            <Form.Control as="textarea" rows={3} />
            </Form.Group>
        </Row>
        <Row>
            <Col className="mb-3">
              <MDBFile name='image' label='Image:' id='customFile' onClick={handleImage} />
            </Col>
        </Row>
        <Row>
            <Col xs="auto" className="my-1">
            <Button type="submit">Submit</Button>
            </Col>
        </Row>
        </Form>

</Row>
</MDBContainer>

</MDBContainer>
    

  );
}

export default AddCompany