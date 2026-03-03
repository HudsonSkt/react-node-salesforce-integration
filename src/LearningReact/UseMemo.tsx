import { useState } from "react";

  const [age, setAge] = useState(23);

 export const handleChangeAge = () =>{
    setAge(prevAge => prevAge === 23 ? 26 : 23);
  }

  const salvaIdade = useMemo (()=>{
    console.log('calculo',  age)
    return 10 * age;
  }, [ age ]) 
console.log('rederizado', salvaIdade)
return(
  <div>
    <p>idade: {age}</p>
    <button onClick={handleChangeAge}> + </button>
  </div>
)
