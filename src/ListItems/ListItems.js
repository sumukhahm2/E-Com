import React,{Fragment} from 'react'
import Items from './Items';

import './ListItems.css'
import ListMap from './ListMap';
const ListItems=()=>{
    
    return(
      <Fragment>
        <ul className='ul'>
        {Items.map((item)=>{
            return(
                <li key={item.id} className='li'>
                 <ListMap id={item.id} name={item.name} imageUrl={item.imageUrl} price={item.price}/>
               </li> 
                
            );
        })}
        </ul>
        
        </Fragment>

    );
}

export default ListItems