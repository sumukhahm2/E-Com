import React from 'react'
import './ProductPage.css'
import { Col, Container, Row,ListGroup, Image, NavLink } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Laptop from '../logo/laptop1.jpg'
import Laptop2 from '../logo/laptop2.jpg'
import Laptop3 from '../logo/laptop3.jpg'
import Laptop4 from '../logo/laptop4.jpg'
import Mouse1 from '../logo/mouse1.jpg'
import Mouse2 from '../logo/mouse2.jpg'
const ProductPage=()=>{
    const params=useParams()

    return(
        <Container fluid>
            <Row >
            <Col xs={5} >
            <Row className='d-flex'> 
              <Col xs={3} >
           <ListGroup className='w-100 p-1'>
            <ListGroup.Item><NavLink><Image src={Laptop2} className='w-100'/></NavLink></ListGroup.Item>
            <ListGroup.Item><NavLink><Image src={Laptop3} className='w-75'/></NavLink></ListGroup.Item>
            <ListGroup.Item><NavLink><Image src={Laptop4} className='w-75'/></NavLink></ListGroup.Item>
            <ListGroup.Item><NavLink><Image src={Mouse1} className='w-75'/></NavLink></ListGroup.Item>
            <ListGroup.Item><NavLink><Image src={Mouse2} className='w-75'/></NavLink></ListGroup.Item>
         </ListGroup>
           </Col>
           <Col xs={8} className='d-flex' >
           <Image src={Laptop} alt=''/> 
           </Col>
            </Row>
             </Col>
            <Col>
            <div>
                <h2>Microsoft Surface Laptop 4 AMD Ryzen 5 4680U 13.5 inches Touchscreen Laptop (8GB/256GB SSD/Windows 11 Home /Radeon Graphics/Platinum/1.265 kg) - 5PB-00023</h2>
              </div>
              <div>
              <div><p>Brand Microsoft</p></div>
              <div><i className="bi bi-star"></i></div>
                
              </div>
              <div>
                4.3 
              </div>
            </Col> 
            <Col>
            <div></div>
            <div></div>
            <div></div>
            </Col>
             
            </Row>
        </Container>
    );
}

export default ProductPage