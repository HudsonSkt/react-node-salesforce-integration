import {    useRef, useState,   } from "react";
export default function UseRefs (){

     const [valor , setValor]= useState('')
    const textInputRef = useRef<HTMLInputElement>(null);
    
    
    const submit= ()=>{
        setValor('')
        

    }   
    
    const handleChange = (e) => {
      setValor(e.target.value);
      textInputRef.current?.style.setProperty('background-color', 'red');
    
    };
      return (
      < > 
        <p> Digite para ficar vermelho: </p>
        <form onSubmit={handleChange}>
         <input 
          ref={textInputRef}
          style={{  marginTop: 5 , marginLeft: 50  }}
          type="text" 
          value={valor}
          onChange={handleChange}
          placeholder='Texto...'
         />
          <button style={{  marginLeft: 5  }} onClick={submit}>Voltar</button> 
        </form>
      </ >
    )
}