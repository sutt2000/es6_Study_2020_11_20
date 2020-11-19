import React , {useState} from 'react';


function Counter() {

   const [number, setNumber] = useState(0);
    
   const onIncrease = (e) => {
       console.log(e.target.value);
       setNumber( prevNumber => prevNumber + 1);
   } 


   const onDecrease = (e) => {
      console.log(e.target.value);
      setNumber(number -1);
    }

    return (
        <div>
         <h1>{number}</h1>
         <button onClick={onIncrease}>+1</button>
         <button onClick={onDecrease}>-1</button>
        </div>
    )    
}


export default Counter;