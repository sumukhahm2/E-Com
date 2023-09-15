import React from 'react'
import ListItems from '../ListItems/ListItems'
import {Container,Button} from 'react-bootstrap'
import './Store.css'
const Store=()=>{
    return(
        <React.Fragment>
        <ListItems/>
        <Container className='text-center'>
         <Button><a href='/' className='see-cart'>See the cart</a></Button>
        </Container>
        </React.Fragment>
    );
}

export default Store