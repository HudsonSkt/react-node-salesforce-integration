//  useEffect é o pega o efeito colateral da reação do componente, como (criação,atualização, destruição)  
import { useEffect, useState } from "react";

export default function Useffects(){
    const [ valor, setValor ] = useState<"red"|"magenta">("red")
    
      useEffect(( ) => {
        alert(`a cor mudou!!!`)
      }, [valor]);
    
        function trocaCor() {
            if(valor == "red"){
              setValor('magenta');
              
            }else{
              setValor('red');
            }
        }
        
        return (
          <view>
            <div> UseState Button :</div>
            <button style={{backgroundColor: valor}} onClick={trocaCor} >Troca cor</button>
          </view>
      );

}