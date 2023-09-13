import React from 'react'
import './App.css';
import Navigation from './Navigation/Navigation';
import { Col,Row,Container, Button } from 'react-bootstrap';
import ListItems from './ListItems/ListItems';
import Contact from './Contact/Contact';
function App() {
  return (
    <React.Fragment>
      <header>
     <Navigation/>
     <Container  fluid className=''>
        <Row className='p-2' style={{backgroundColor:'#636363'}}>
          <Col className=' text-center'  ><p className='text'>The Generics</p></Col>
        </Row>
      </Container>
     </header>
     <main>
     <ListItems/>
     <Container className='text-center'>
      <Button><a href='/' className='see-cart'>See the cart</a></Button>
     </Container>
     </main>
     <footer>
      <Contact/>
     </footer>
      
    </React.Fragment>
  );
}

export default App;
