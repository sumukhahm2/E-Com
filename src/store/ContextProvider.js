import React,{useState,useEffect,useReducer,useCallback}from 'react'
import Context from './Context';
const defaultCart={
  items:[],
  totalAmount:0
}
const reducer=(state,action)=>{
  if(action.title==='ADD')
  {
    const updatedItems=state.items.concat(action.item)
    const total=action.item.reduce((prev,cur)=>{
      return prev+parseInt(cur.price)
    },0)
    const updatedAmount=parseInt(state.totalAmount)+total;
    console.log(total)
    console.log(action.item)
    return {
      items:updatedItems,
      totalAmount:updatedAmount 
    }
    
  }
  return defaultCart;
}

const ContextProvider=(props)=>{
  const [updatedToken,setToken]=useState(null)
  const [loginUserName,setLoginUserName]=useState('')
  const [updatedCart,dispatch]=useReducer(reducer,defaultCart)
 
  
  console.log('context')
  const isLoggedIn=!!updatedToken;
  const addCartHandler=useCallback((item)=>{
      
      
      dispatch({title:'ADD',item:item})

  },[])
  useEffect(()=>{
    console.log('context useref')
     setToken(localStorage.getItem('token'))
     setLoginUserName(localStorage.getItem('email'))
      fetch(`https://crudcrud.com/api/938d08ceb2a445f1970fe755d895292f/cart${localStorage.getItem('email')}`)
      .then((res)=>{
        res.json().then((data)=>{
          addCartHandler(data)
        })
      })
    
     
  },[addCartHandler])
  
 
  const setLoginToken=(item)=>{
      setToken(item.token)
      
      localStorage.setItem('token',item.token)
      const first=item.email.split('@')
      const second=first[1].split('.')
      const email=first[0]+second[0]+second[1];
      setLoginUserName(email)
      localStorage.setItem('email',email)
      
  }
  const removeToken=()=>{
    setToken(null)
    localStorage.removeItem('token')
    localStorage.removeItem('email')
  }
    const context={
        items:updatedCart.items,
          totalAmount:updatedCart.totalAmount,
          LoggedIn:isLoggedIn,
          userName:loginUserName,
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