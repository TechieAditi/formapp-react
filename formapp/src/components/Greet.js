import React from 'react';
 const Greet = props => {
     console.log(props)
     return (
         <div style={{background:'#fffff'}}>
             <h1>
                 Welcome {props.name} !!
             </h1>
         </div>
     );

 }
 export default Greet