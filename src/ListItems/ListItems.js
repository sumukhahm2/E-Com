import React,{Fragment} from 'react'
import { Container,Col,Row,Image, Button } from 'react-bootstrap';
import Items from './Items';

const ListItems=()=>{
    return(
      <Fragment>
        <Container className='text-center'>
      <Row className='p-5'>
        <Col  md={6}>
            <h3>Album 1</h3>
            <Image src={Items[0].imageUrl}></Image>
            <Container>
                <h6>${Items[0].price}</h6>
                <Button>Add To Cart</Button>
            </Container>
        </Col>
        <Col md={6}>
        <h3>Album 2</h3>
            <Image src={Items[1].imageUrl}></Image>
            <Container>
            <h6>${Items[1].price}</h6>
                <Button>Add To Cart</Button>
            </Container>
            </Col>
      </Row>
      <Row className='p-5'>
        <Col md={6}>
        <h3>Album 3</h3>
            <Image src={Items[2].imageUrl}></Image>
            <Container>
            <h6>${Items[2].price}</h6>
                <Button>Add To Cart</Button>
            </Container>
            </Col>
        <Col md={6}>
        <h3>Album 4</h3>
            <Image src={Items[3].imageUrl}></Image>
            <Container>
            <h6>${Items[3].price}</h6>
                <Button>Add To Cart</Button>
            </Container>
            </Col>
      </Row>
    </Container>
        </Fragment>

    );
}

export default ListItems