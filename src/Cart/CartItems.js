import React,{Fragment,useContext} from 'react'
import { Row,Col,Image} from 'react-bootstrap';
import Context from '../store/Context';
import './CartItem.css'

    
const CartItems=()=>{
    const ctx=useContext(Context)
    return(
        <Fragment>
         {ctx.items.map((item)=>{
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