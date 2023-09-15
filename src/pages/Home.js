import React from'react'
import { Container,Row,Col } from 'react-bootstrap';
import './Home.css'
const Home=()=>{
    return(
        <React.Fragment>
            <Container className='w-75'>
             <h1 className='text-center fw-bold' id='tour'>Tours</h1>
             <Row className='p-2 square border-bottom border-dark'>
                <Col className='d-flex' id='span'>
                  <span className='w-25'>JUL 16</span>
                  <span className='w-25'>CONCORD, CA</span>
                  <span className='w-25' >DTE ENERGY MUSIC THEATRE</span>
                  <button className='btn btn-primary'>BUY TICKETS</button>
                </Col>
             </Row>
             <Row className='p-2 square border-bottom border-dark'>
             <Col className='d-flex' id='span'>
                  <span className='w-25'>JUL 19</span>
                  <span className='w-25'> DETROIT, MI</span> 
                  <span className='w-25'>BUDWEISER STAGE</span>
                  <button className='btn btn-primary'>BUY TICKETS</button>
                  </Col>
            </Row>   
            <Row className='p-2 square border-bottom border-dark'>
                <Col className='d-flex' id='span'>
                  <span className='w-25'>JUL 22</span>
                  <span className='w-25'>TORONTO,ON</span>
                  <span className='w-25'>JIGGY LUBE LIVE</span>
                  <button className='btn btn-primary'>BUY TICKETS</button>
                </Col>
            </Row>    
                <Row className='p-2 square border-bottom border-dark'>
                <Col className='d-flex' id='span'>
                  <span className='w-25'>JUL 29</span>
                  <span className='w-25'>BRISTOW, VA</span>
                  <span className='w-25'>AK-CHIN PAVILION</span>
                  <button className='btn btn-primary'>BUY TICKETS</button>
                </Col>
                </Row>
                <Row className='p-2 square border-bottom border-dark'>
                <Col className='d-flex' id='span'>
                  <span className='w-25'>AUG 2</span>
                  <span className='w-25'>PHOENIX, AZ</span>
                  <span className='w-25'>CONCORD PAVILION</span>
                  <button className='btn btn-primary'>BUY TICKETS</button>
                </Col>
                </Row>
                <Row className='p-2 square border-bottom border-dark'>
                <Col className='d-flex' id='span'>
                  <span className='w-25'>AUG 7</span>
                  <span className='w-25'>LAS VEGAS, NV</span>
                  <span className='w-25'>T-MOBILE ARENA</span>
                  <button className='btn btn-primary'>BUY TICKETS</button>
                </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}
export default Home