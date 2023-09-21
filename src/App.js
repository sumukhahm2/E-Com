import React,{Fragment,useContext,useEffect} from 'react'
import './App.css';
import { Navigate, Route,Routes } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import { Col,Row,Container } from 'react-bootstrap';
import Contact from './Contact/Contact';
import Context from './store/Context';
import About from './pages/About';
import Home from './pages/Home';
import Store from './pages/Store';
import ContactUs from './pages/ContactUs';
import ProductPage from './pages/ProductPage';
import AuthForm from './AuthForm/AuthForm';
import Welcome from './AuthForm/Welcome';

function App() {

  const ctx=useContext(Context)
   
const contactUsSubmitHandler=async(item)=>{
   const response= await fetch('https://first-http-c28a3-default-rtdb.firebaseio.com/movies.json',{
    method:'POST',
    body:JSON.stringify(item)
   })
   const data=await response.json()
   console.log(data)
}


  return (
     <Fragment>
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
    {ctx.LoggedIn && <Route path='/welcome' element={<Welcome/>} >
     </Route>}
      <Route path='/store' element={<Store/>} exact>
     </Route>
     {ctx.LoggedIn && <Route path='/about' element={<About/>} > 
     </Route>} 
    {ctx.LoggedIn && <Route path='/home' element={<Home/>} >
     </Route>}
      {!ctx.LoggedIn && <Route path='/login' element={<AuthForm/>} >
     </Route>}
    {ctx.LoggedIn && <Route path='/contactus' element={<ContactUs onSubmit={contactUsSubmitHandler}/>} >
     </Route>}
     {ctx.LoggedIn && <Route path='/store/:productid' element={<ProductPage/>} >
     </Route>}
     {ctx.LoggedIn && <Route path='/login' element={<Navigate to='/store'/>}>
       </Route>}
     <Route path='*' element={<Navigate to='/login'/>}>
      
     </Route>
     
   
    </Routes>
     
    </main>
     <footer>
      <Contact/>
     </footer>
     </Fragment>
    
    
  );
}

export default App;
