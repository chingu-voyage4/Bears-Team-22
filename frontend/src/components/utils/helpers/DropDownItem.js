import React from 'react';

const DropDownItem = (props) => {
    
    let {name} = props;

   return (
     <li onClick={()=> props.onClick(name)}>
         <i className={props.class}></i>
         <span>{name}</span>
     </li>
   )
}
                           
export default DropDownItem