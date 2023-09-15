import React from 'react'
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import { Col,Row,Container } from 'react-bootstrap';
import Contact from './Contact/Contact';
import ContextProvider from './store/ContextProvider';
import About from './pages/About';
import Home from './pages/Home';
import Store from './pages/Store';
function App() {
 


  return (
    <ContextProvider>
      <header>
     <Navigation  className='nav'/>
     <Container  fluid className=''>
        <Row className='p-2' style={{backgroundColor:'#636363'}}>
          <Col className=' text-center'  ><p className='text'>The Generics</p></Col>
        </Row>
      </Container>
     </header>
     <main>
    
      <Routes>
      <Route path='/store' element={<Store/>} >
     </Route>
    <Route path='/about' element={<About/>} >
     </Route>
    <Route path='/home' element={<Home/>} >
     </Route>
    </Routes>
    
     
     </main>
     <footer>
      <Contact/>
     </footer>
      
    </ContextProvider>
    
  );
}

export default App;
