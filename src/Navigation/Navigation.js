import React,{Fragment} from 'react'
import { Navbar,Container } from 'react-bootstrap';
import './Navigation.css'
const Navigation=()=>{
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
         <a href='/' className='cart-holder'>
          Cart
          <span className='cart-number'></span>
         </a>
          </Container>
         
    </Navbar>
   
       </Fragment>
    );
}

export default Navigation