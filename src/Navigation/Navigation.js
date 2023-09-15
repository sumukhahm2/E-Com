import React,{Fragment,useState,useContext} from 'react'
import { Navbar,Container } from 'react-bootstrap';
import './Navigation.css'
import { NavLink } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Context from '../store/Context';
const Navigation=(props)=>{
  const ctx=useContext(Context)
  const [isCart,setIsCart]=useState(false)
  const onCartHandler=(event)=>{
    event.preventDefault()
      setIsCart(true)
  }
  const closeCart=()=>{
    setIsCart(false)
  }
 
    return(
      <Fragment>
        <Navbar expand="sm" bg='dark' variant='dark' className='nav' >
      <Container fluid className='justify-content-center' >
        <ul className='nav-list'>
          <li  className='nav-li'>
            <NavLink to='/home' alt='' > Home</NavLink></li>
          <li  className='nav-li'>
          <NavLink to='/store' alt=''> Store</NavLink></li>
         <li className='nav-li'>
         <NavLink to='/about' alt='' > About</NavLink></li>
       
         <a href='/' className='cart-holder' onClick={onCartHandler}>
          Cart
          <span className='cart-number'>{ctx.totalCartNumber}</span>
         </a>
         </ul>
          </Container>
         
    </Navbar>
      {isCart && <Cart onClose={closeCart}/>}
       </Fragment>
    );
}

export default Navigation