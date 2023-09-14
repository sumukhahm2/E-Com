import React,{Fragment} from 'react'
import { Row,Col,Image} from 'react-bootstrap';
import './CartItem.css'
const cartElements = [

    {
    
    title: 'Colors',
    name:'Album 1',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    quantity: 2,
    
    },
    
    {
    
    title: 'Black and white Colors',
    name:'Album 2',
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    quantity: 3,
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    name:'Album 3',
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    quantity: 1,
    
    }
    
    ]
    
    
const CartItems=()=>{
    
    return(
        <Fragment>
         {cartElements.map((item)=>{
            return(<Row   horizontal className='justify-content-center ' >
            <Col xs lg="2" className='cart-images'>
                <Image src={item.imageUrl} className='cart-image'/>
                <p>{item.name}</p>
            </Col>
            <Col xs lg="2" className='price'>
                <span>${item.price}</span>
            </Col>
            <Col xs lg="2" className='quantity'>
                <input className='cart-input' type='number' value={1}/>
                <button className='cart-remove'>Remove</button>
            </Col>
            
          </Row> ); 
           
         })}   
     
    </Fragment>
       
      
    );
}

export default CartItems