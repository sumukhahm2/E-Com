import React,{useContext} from 'react'
import { NavLink } from 'react-router-dom';
import { Row,Image, Button, Form } from 'react-bootstrap';
import Context from '../store/Context';
const ListMap=(props)=>{
    const ctx=useContext(Context)
    
       /* fetch(`https://crudcrud.com/api/4d060798d97a497c96d1a995ff1a5d91/cart${ctx.userName}`)
        .then((res)=>{
         res.json().then((data)=>{
           ctx.addCart(data)
         })
        })*/
      
     
    
    console.log(ctx.userName)
    const addToCartHandler=async(event)=>{
   event.preventDefault()
       const response=await fetch(`https://crudcrud.com/api/938d08ceb2a445f1970fe755d895292f/cart${ctx.userName}`,
       {
        method:'POST',
        body:JSON.stringify({
            name:props.name,
            imageUrl:props.imageUrl, 
            price:props.price,
            amount:1  
        }),
        headers:{
            'Content-Type':'application/json'
        } 
       })
        ctx.addCart([{
            name:props.name,
            imageUrl:props.imageUrl,
            price:props.price,
            amount:1

        }]);
        
        

    } 
    return(
        <Row className=''>
           
        <h3>{props.name}</h3>
       <NavLink to={ctx.LoggedIn?'/store/productpage':'/login'}>
       <Image src={props.imageUrl}></Image>
       </NavLink>
       <Form onSubmit={addToCartHandler}>
       <h6>${props.price}</h6>
           <Button type='submit'>Add To Cart</Button>
       </Form>
    </Row>
    );
}

export default ListMap