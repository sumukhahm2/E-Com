import React,{useState} from 'react'
import { Form,Button, Row, Col, Container} from 'react-bootstrap';
import './AboutUs.css'
const ContactUs=(props)=>{
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [phone,setPhone]=useState('')
    
    const submitHandler=(event)=>{
     event.preventDefault()
     props.onSubmit({
        name:name,
        email:email,
        phoneno:phone
      })
    }

    const nameHandler=(event)=>{
      setName(event.target.value)
    }

    const phoneHandler=(event)=>{
      setEmail(event.target.value)
    }
    const emailHandler=(event)=>{
      setPhone(event.target.value)
    }

    return(
        <React.Fragment>
        <Container className='text-center' >
      <Row className='text-center w-100' id='row'>
         <Col className="">
        <Form className='text-center'id='form' onSubmit={submitHandler}>
        <Form.Group className="" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" onChange={nameHandler}/>
      </Form.Group>
      <Form.Group className="" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={emailHandler}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="" controlId="formBasicPassword">
        <Form.Label>Phone No</Form.Label>
        <Form.Control type="number" placeholder="phone" onChange={phoneHandler} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Col>
    </Row>
    </Container>
    
    </React.Fragment>
    );
}
export default ContactUs