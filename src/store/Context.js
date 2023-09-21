import React from 'react'

const Context=React.createContext(
        {
          items:[],
          totalAmount:0,
          LoggedIn:false,
          userName:'',
          token:'',
          setToken:(item)=>{},
          deleteToken:()=>{},
          addCart:(item)=>{},
          deleteCart:(id)=>{}
        }
    )

    export default Context
