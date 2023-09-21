import React,{Fragment,useContext} from 'react'
import {  Col, Container, Row } from 'react-bootstrap';
import Context from '../store/Context';
import './Cart.css'
import CartItems from './CartItems';
const Cart=(props)=>{
 const ctx=useContext(Context)
  const cartCloseHandler=()=>{
     props.onClose()
  }
    return(
     <Fragment>
      <Container className='text-center' id='cart'>
          <h2 className='text-cart'>Cart</h2>
          <button className='cancel' onClick={cartCloseHandler}>X</button>
          <Row horizontal className='justify-content-center ' >
            <Col xs lg="2" className='cart-item'>Item</Col>
            <Col xs lg="2" className='cart-price'>Price</Col>
            <Col xs lg="2" className='cart-quantity'>Quantity</Col>
            <CartItems/>
          
          </Row>
          <div className='total-amt'>
            <h4>Total Amount ${ctx.totalAmount}</h4>
          </div>
          <button type='button' id='btn' className='btn btn-primary'>Purchase</button>
         
      </Container>
     </Fragment>

    );
} 

export default Cart