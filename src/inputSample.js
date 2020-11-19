import React , {useState ,  useRef }  from 'react';

function InputSample() {
    const [inputs, setInputs] = useState({
        name:'',
        nickname:'',
    });

    const nameInput = useRef();
    const {name , nickname} = inputs;    
    
       const onChange = (ee) => {
        
        const {name, value } = ee.target;     
    
        setInputs ({
          ...inputs,
          [name]: value,  
        })             
    };

    const onReset = () => {    
        setInputs({
            name: '',
            nickname: '',
        });
        nameInput.current.focus();   
    };

    return (
        <div>
            <input
                name="name"
                placeholder="이름"
                onChange={onChange}  
                value={name}
               
             />

            <input name="nickname" 
                placeholder="닉네임" 
                onChange={onChange} 
                value={nickname}
                ref={nameInput}
               
            />
            <button onClick={onReset} > 초기화  </button> 
        <div>
            <b>값:{name} </b>
            이름 ({nickname})
        </div>
        </div>

    );
}


export default InputSample;