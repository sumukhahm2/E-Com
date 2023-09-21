import React,{Fragment,useState,useContext} from 'react'
import { Navbar,Container,Button } from 'react-bootstrap';
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
  const logoutHandler=()=>{
    ctx.deleteToken()
  }
 
    return(
      <Fragment>
        <Navbar expand="sm" bg='dark' variant='dark' className='nav' >
      <Container fluid className='justify-content-center' >
        <ul className='nav-list'>
          {ctx.LoggedIn && <li  className='nav-li'>
            <NavLink to='/home' alt='' > Home</NavLink></li>}
          <li  className='nav-li'>
          <NavLink to='/store' alt=''> Store</NavLink></li>
         {ctx.LoggedIn && <li className='nav-li'>
         <NavLink to='/about' alt='' > About</NavLink></li>}
         {ctx.LoggedIn && <li className='nav-li'>
         <NavLink to='/contactus' alt='' > Contact Us</NavLink></li>}
         {!ctx.LoggedIn && <li className='nav-li'>
         <NavLink to='/login' alt='' > Login</NavLink></li>}
         {ctx.LoggedIn && <li className='nav-li'>
         <Button variant='danger' onClick={logoutHandler}> Logout</Button></li>}
        {ctx.LoggedIn && <a href='/' className='cart-holder' onClick={onCartHandler}>
          Cart
          <span className='cart-number'>{ctx.totalCartNumber}</span>
         </a>}
         </ul>
          </Container>
         
    </Navbar>
      {isCart && <Cart onClose={closeCart}/>}
       </Fragment>
    );
}

export default Navigation