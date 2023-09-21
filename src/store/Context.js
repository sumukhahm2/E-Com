import React from 'react'

const Context=React.createContext(
        {
          items:[],
          totalCartNumber:0,
          LoggedIn:false,
          token:'',
          setToken:(token)=>{},
          deleteToken:()=>{},
          addCart:()=>{},
          deleteCart:(id)=>{}
        }
    )

    export default Context
