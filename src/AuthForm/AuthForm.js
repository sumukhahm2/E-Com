import React,{Fragment,useRef,useState,useContext} from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import Context from '../store/Context';
const AuthForm=()=>{
    const ctx=useContext(Context)
    const emailRef=useRef();
    const passwordRef=useRef();
    const [inLogin,setInLogin]=useState(true)
    const [error,setError]=useState(null)
    const authFormSubmitHandler=async(event)=>{
      event.preventDefault()
    
      let response;
      if(inLogin)
      {
        
         response= await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC2ZbjyytCTRQbt6vZbsWoue1BxW7OXY-g',{
         method:'POST',
         body:JSON.stringify({
            email:emailRef.current.value,
            password:passwordRef.current.value,
            returnSecureToken:true
         }),
         headers:{
            'Content-Type': 'application/json'
         }
         })
      }
      else{
        
         response= await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC2ZbjyytCTRQbt6vZbsWoue1BxW7OXY-g', {
            method:'POST',
            body:JSON.stringify({
            email:emailRef.current.value,
            password:passwordRef.current.value,
            returnSecureToken:true
         }),
         headers:{
            'Content-Type': 'application/json'
         }
         })
      }
       const data=await response.json()
       let errorMessage='Authentication Error!'
       if(data && data.error && data.error.message)
       {
         errorMessage=data.error.message
         setError(errorMessage)
       }
       else if(data.idToken)
       {
        ctx.setToken({token:data.idToken,email:data.email})
       }
       emailRef.current.value='';
       passwordRef.current.value='';

    }
    const switchModeHandler=()=>{
        setInLogin((prev)=> !prev)
    }
    const onEmailChangrHandler=()=>{
        setError(null)
    }
  return (
    <Fragment>
        <Container  className='justify-content-center' fluid>
            <Form className=' rounded w-50 mt-3 mb-3 p-4 shadow-lg' style={{marginLeft:'350px',backgroundColor:'#CAF7A7'}} onSubmit={authFormSubmitHandler} >
            <Form.Label ><h2>{inLogin?'Login Here':'SignUp Here'}</h2></Form.Label>
               <Form.Group className='mb-3 '>
                <Form.Label >Email Address</Form.Label>
                <Form.Control type='email' placeholder='Enter Email' className='w-100 border border-dark rounded' ref={emailRef} onChange={onEmailChangrHandler}/>
               </Form.Group>
               <Form.Group className='mb-3'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Enter Password' className='w-100 border border-dark rounded' ref={passwordRef} />
               </Form.Group>
               {error && <Form.Text>{error}</Form.Text>}
               <br/>
               <Button variant='primary' type='submit'>{inLogin?'Login':'SignUp'}</Button>
              
               <p>{inLogin?'Dont have an Account?':'Have an Account?'} </p><Button onClick={switchModeHandler} style={{backgroundColor:'transparent',border:'none',color:'blue',}}>{inLogin?<u>SignUp</u>:<u>LogIn</u>}</Button>
            </Form>
        </Container>
    </Fragment>
  );
}

export default AuthForm