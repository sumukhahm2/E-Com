import React from 'react'

const Context=React.createContext(
        {
          items:[],
          totalCartNumber:0,
          addCart:()=>{},
          deleteCart:(id)=>{}
        }
    )

    export default Context
