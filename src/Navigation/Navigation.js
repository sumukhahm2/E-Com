import React,{Fragment,useState,useContext} from 'react'
import { Navbar,Container } from 'react-bootstrap';
import './Navigation.css'
import Cart from '../Cart/Cart';
import Context from '../store/Context';
const Navigation=()=>{
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
        <Navbar expand="sm" bg='dark' variant='dark'  >
      <Container fluid className='justify-content-center' >
        <ul className='nav-list'>
          <li  className='nav-li'>
            <a href='/' alt=''> Home</a></li>
          <li  className='nav-li'>
          <a href='/' alt=''> Store</a></li>
         <li className='nav-li'>
         <a href='/' alt=''> About</a></li>
        </ul>
         <a href='/' className='cart-holder' onClick={onCartHandler}>
          Cart
          <span className='cart-number'>{ctx.totalCartNumber}</span>
         </a>
          </Container>
         
    </Navbar>
      {isCart && <Cart onClose={closeCart}/>}
       </Fragment>
    );
}

export default Navigation