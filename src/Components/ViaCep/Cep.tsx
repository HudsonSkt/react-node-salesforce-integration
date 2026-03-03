
import { useEffect } from "react";
interface AddressData {
  logradouro: string;
  bairro: string;
  estado: string;
  localidade: string;
}
interface Props {
  valorInput: string;
  onCepResult: (data: AddressData) => void;
}
export const FindCep = ({ valorInput, onCepResult }: Props) => {
  useEffect(() => {
    if (valorInput.length === 8) {
      fetch(`https://viacep.com.br/ws/${valorInput}/json/`)
        .then((response) => response.json())
        .then((data) => {
          onCepResult(data);
        });
    }
  }, [valorInput]);

  // for (const key in data) {
  //   const element = data[key];
  //   console.log(element)
  // }


  // //   return(
  // //     <ThemeProvider>
  // //       <Container>
  // //         <header className='py-5'>
  // //           <h1 className='text-3xl'>
  // //             titulo da pagina
  // //           </h1>
  // //         </header>
  // //         <section>
  // //           <p className='my-5'>conteudo da page</p>
  // //           <Button label='click aqui' onClick={()=>{}}/>

  // //         </section>
  // //       </Container>
  // //     </ThemeProvider>
  // //   )
  return (
    <>
     
        <div>
          <div style={{ textAlign: "left", margin: 10 }}></div>
        </div>
       
    </>
  );
};
