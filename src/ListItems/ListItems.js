import React,{Fragment,useContext} from 'react'
import { Container,Col,Row,Image, Button } from 'react-bootstrap';
import Items from './Items';
import Context from '../store/Context';
import { NavLink } from 'react-router-dom';

const ListItems=()=>{
    const ctx=useContext(Context)
    const addToCartHandler=()=>{
        ctx.addCart();
    }
    return(
      <Fragment>
        <Container className='text-center'>
      <Row className='p-5'>
        <Col  md={6}>
            <h3>Album 1</h3>
            <NavLink to={ctx.LoggedIn?'/store/productpage':'/login'}>
            <Image src={Items[0].imageUrl}></Image>
            </NavLink>
            <Container>
                <h6>${Items[0].price}</h6>
                <Button onClick={addToCartHandler}>Add To Cart</Button>
            </Container>
        </Col>
        <Col md={6}>
        <h3>Album 2</h3>
        <NavLink to={ctx.LoggedIn?'/store/productpage':'/login'}>
            <Image src={Items[1].imageUrl}></Image>
            </NavLink>
            <Container>
            <h6>${Items[1].price}</h6>
                <Button onClick={addToCartHandler}>Add To Cart</Button>
            </Container>
            </Col>
      </Row>
      <Row className='p-5'>
        <Col md={6}>
        <h3>Album 3</h3>
        <NavLink to={ctx.LoggedIn?'/store/productpage':'/login'}>
            <Image src={Items[2].imageUrl}></Image>
            </NavLink>
            <Container>
            <h6>${Items[2].price}</h6>
                <Button onClick={addToCartHandler}>Add To Cart</Button>
            </Container>
            </Col>
        <Col md={6}>
        <h3>Album 4</h3>
        <NavLink to={ctx.LoggedIn?'/store/productpage':'/login'}>
            <Image src={Items[3].imageUrl}></Image>
            </NavLink>
            <Container>
            <h6>${Items[3].price}</h6>
                <Button onClick={addToCartHandler}>Add To Cart</Button>
            </Container>
            </Col>
      </Row>
    </Container>
        </Fragment>

    );
}

export default ListItems