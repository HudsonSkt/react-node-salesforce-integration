import { useState } from "react";
export function UseStates (){

  const [cont, setCont] = useState(0);

  const handleChange1 =()=>{
    setCont(prevCont => prevCont + 1);
  }
    return (
      <view>
        <p>Cont:</p>
        <div >{ cont } </div>
        <button style={{margin: 10}}onClick={ handleChange1 } >enviar</button>
      </view>
  );
}
 
  /*
  //useState: é um gerenciamento de estado interno, onde o state avisa o react de que um valor foi 
  // // alterado, pois ele sozinho não sabe.
  // const [ valor, setValor ] = useState<"red"|"magenta">("red")

  //   function trocaCor() {
  //       if(valor == "red"){
  //         setValor('magenta');
          
  //       }else{
  //         setValor('red');
  //       }
  //   }
    
  //   return (
  //     <view>
  //       <div> UseState Button :</div>
  //       <button style={{backgroundColor: valor}} onClick={trocaCor} >Troca cor</button>
  //     </view>
  // );
  */


  
// export default function App(){
//   const [contador, setCont] = useState(0);
//   const [historico, setHistorico] = useState<number[]>([ ]);

//    console.log(historico)

 
//   const incrementador = () => {
//     historico.slice(-5)
//     if(contador % 2 == 0){
//       setCont(antCont => antCont + 2)
//       setHistorico(antHistorico => [...antHistorico.slice(-4), contador])
//      }else{ 
//       setCont(antCont => antCont + 1) 
//      }
//   }
//   const Decrementador = () => {
//      historico.slice(-5)
//     if(contador == 0 ){
//       return   
//      } 
//     if(contador % 3 == 0 ){

//       setCont(antCont => antCont - 2)
//       setHistorico(antHistorico => [...antHistorico.slice(-4), contador])

//     }else{
          
//       setCont(antCont => antCont - 1 )
//       setHistorico(antHistorico => [...antHistorico.slice(-4), contador])
 
//       }
        
//   }
 
   

// return (
//   <view>
//     <h2>Contador </h2>
//      historico: 
//      {historico.map((his) => (
//       <span style={{padding: 2}}>
//       {his}
//      </span>
     
    
//     ))}    
//     <div>{contador}</div>
//     <div> <button onClick={incrementador}> + </button>  <button onClick={Decrementador}> - </button></div>
    

//   </view>
// )