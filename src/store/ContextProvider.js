import React,{useState,useEffect}from 'react'
import Context from './Context';
const ContextProvider=(props)=>{
  const [addToCart,setAddToCart]=useState(0)
  const [updatedToken,setToken]=useState(null)
  useEffect(()=>{
     setToken(localStorage.getItem('token'))
  },[])
  const isLoggedIn=!!updatedToken;
  const addCartHandler=()=>{
      setAddToCart((prev)=>{
        return prev+1;
      })
  }
  const setLoginToken=(token)=>{
      setToken(token)
      localStorage.setItem('token',token)
      
  }
  const removeToken=()=>{
    setToken(null)
    localStorage.removeItem('token')
  }
    const context={
        items:[],
          totalCartNumber:addToCart,
          LoggedIn:isLoggedIn,
          token:updatedToken,
          setToken:setLoginToken,
          deleteToken:removeToken,
          addCart:addCartHandler,
          deleteCart:(id)=>{}
    }
 return (
   <Context.Provider value={context}>
    {props.children}
   </Context.Provider>
 );
}

export default ContextProvider