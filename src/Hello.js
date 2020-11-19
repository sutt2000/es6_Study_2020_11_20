import React from 'react';

// function Hello(props) {
//     console.log(props);
//     return <div style={ { 
//         color: props.color
//     } }>안용하세용 {props.name}</div>
// }


function Hello({color, name , isSpecial} ) {
   console.log(color, name);
   return (
   <div style = {{
       color
    }}> 
    {isSpecial ? <b> * </b> : null}
    안녕하세요 {name} 
    </div>
   )
}


export default Hello;