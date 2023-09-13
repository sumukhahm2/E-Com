import React,{Fragment} from 'react'
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import Facebook from '../logo/Facebook Logo.png'
import Spotify from '../logo/Spotify Logo.png'
import Youtube from '../logo/youtube.jpg'
import './Contact.css'
const Contact=()=>{
    return(
        <Fragment>
            <Container fluid style={{backgroundColor:'rgb(153 246 228)'}} className='text-center m-1' >
                <Row >
                    <Col>
                <h2>The Generics</h2>
                </Col>
                <Col>
                <ListGroup as='ul' horizontal className='p-2 d-flex gap-1' >
                    <ListGroup.Item as='li' style={{backgroundColor:'rgb(153 246 228)'}}>
                        <a href='https://www.youtube.com'  alt=''>
                        <img src={Youtube} alt='' className='image'/>
                        </a>
                    </ListGroup.Item>
                    <ListGroup.Item as='li' style={{backgroundColor:'rgb(153 246 228)'}}>
                    <a href='https://spotify.com'  alt=''>
                        <img src={Spotify} alt='' className='image'/>
                        </a>
                    </ListGroup.Item>
                    <ListGroup.Item as='li' style={{backgroundColor:'rgb(153 246 228)'}}>
                    <a href='https://facebook.com'  alt=''>
                    <img src={Facebook} alt='' className='image'/>
                        </a>
                    </ListGroup.Item>
                </ListGroup>
                </Col>
                </Row>
            </Container>
        </Fragment>
    );
}
export default Contact   