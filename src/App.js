import React,{useState} from 'react'
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import { Col,Row,Container, Button } from 'react-bootstrap';
import ListItems from './ListItems/ListItems';
import Contact from './Contact/Contact';
import ContextProvider from './store/ContextProvider';
import About from './pages/About';
function App() {
 
const [isAbout,setIsAbout]=useState(false)
const aboutHandler=()=>{
  setIsAbout(true)
}
  return (
    <ContextProvider>
      <header>
     <Navigation onClickAbout={aboutHandler}/>
     <Container  fluid className=''>
        <Row className='p-2' style={{backgroundColor:'#636363'}}>
          <Col className=' text-center'  ><p className='text'>The Generics</p></Col>
        </Row>
      </Container>
     </header>
     <main>
      {!isAbout && <><ListItems/>
     <Container className='text-center'>
      <Button><a href='/' className='see-cart'>See the cart</a></Button>
     </Container>
     </>}
     
     
    {isAbout && <><Routes>
    <Route path='/about' element={<About/>} >
     </Route>
    </Routes>
    </>}
     
     </main>
     <footer>
      <Contact/>
     </footer>
      
    </ContextProvider>
    
  );
}

export default App;
