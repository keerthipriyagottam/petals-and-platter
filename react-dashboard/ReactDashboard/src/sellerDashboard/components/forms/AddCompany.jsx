import React from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { MDBFile } from 'mdb-react-ui-kit';


import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput
  }
  from 'mdb-react-ui-kit';

const AddCompany = () => {
  return (
    <MDBContainer className="my-5 gradient-form ">
      <MDBContainer className="my-4 gradient-form" style={{width: '70%',height:'100vh'}}>
      <Row style={{background:"antiquewhite",padding:"0 40px 0"}}>
        <Form style={{margin:"30px 0"}}>
        <Row >
            <Col>
            <Form.Control Label="Company:" placeholder="Company Name" />
            </Col>
            <Col>
            <Form.Control Label="Area:" placeholder="Company Area" />
            </Col>
        </Row>
        <br/>
        <Row >
            <Col>
                <Form.Select aria-label="Default select example">
                    <option>Filter By Category</option>
                    <option value="1">Flower Store</option>
                    <option value="2">Grocery Store</option>
                    <option value="3">Dairy Store</option>
                </Form.Select>
            </Col>
        </Row>
        <br/>
        <Row >
        <Form>
      {['checkbox'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Fruits"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Vegetables"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="Milk"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Eggs"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
        </div>
      ))}
    </Form>
        </Row>
            <Row >
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Deals:(Offers Applied)</Form.Label>
            <Form.Control as="textarea" rows={3} />
            </Form.Group>
        </Row>
        <Row>
            <Col className="mb-3">
              <MDBFile label='Image:' id='customFile' />
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