import React,{useState}from 'react'
import Context from './Context';
const ContextProvider=(props)=>{
  const [addToCart,setAddToCart]=useState(0)
  const addCartHandler=()=>{
      setAddToCart((prev)=>{
        return prev+1;
      })
  }
    const context={
        items:[],
          totalCartNumber:addToCart,
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