import React from 'react';
import Counter from './Counter';
import Hello from './Hello';
import InputSample from './inputSample';
import UserList from './UserList';
import Wrapper from './Wrapper';

function App() {     
    return (

        <div>
            <UserList></UserList>
        </div>
    //   <div>
    //   <Wrapper>
    //     <Hello  color="red" isSpecial></Hello>
    //     <Hello  color="red"></Hello> 
    //     <Hello  color="red"></Hello>  
    //     <Counter/>
    //    </Wrapper>        
    //     <InputSample/>
    //   </div>     
        )
}    

Hello.defaultProps ={
    name:'이름이 없다~'
}
        export default App;
        // let posts ='강남 고기 맛집';
    // function 함수 () {
    //     return  100;
    // }
    
    // return (
    //     <div className="App">
    //        <div className="black-nav">
    //        <div style={ {color:'blue',
    //        fontSize : '30px'}} >{ posts }</div>
    //        </div>
    //        <img src={Logo} alt="nice" />
    //        <h4> { 함수() } </h4>      
    //     </div>
    // );
