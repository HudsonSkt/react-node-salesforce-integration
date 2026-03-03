import { useState } from "react";
import { FindCep } from "./Cep";
import * as S from "./ViaCep.style";
import { Button } from "../Button";

//  import {    useNavigate } from "react-router";
// import HomePage from "./LearningReact/Homepage/HomePage";

interface AddressData {
  logradouro: string;
  bairro: string;
  estado: string;
  localidade: string;
}
export default function ViaCep() {
  // const navegate = useNavigate();

  //useStates para possam receber dados da api
  const [isLoad, setIsLoad] = useState(false);
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState({
    logradouro: "",
    bairro: "",
    localidade: "",
    estado: "",
  });

  const handleAddress = (data: AddressData) => {

      setEndereco({
        logradouro: data.logradouro,
        bairro: data.bairro,
        localidade: data.localidade,
        estado: data.estado,
      });
  };
const validateCep = () => {
  if (!cep) {
    alert("The zip code cannot be empty.");
    return false;
  }

  if (cep.length !== 8) {
    alert("The postal code must contain exactly 8 digits.");
    return false;
  }

  return true;
};
  // const submit = () => {

  //   setCep("");
  //   setEndereco({
  //     logradouro: "",
  //     bairro: "",
  //     localidade: "",
  //     estado: "",
  //   });
  // };
  const showElement = () => {
  if (!validateCep()) return;

  setIsLoad(true);
  };
  const closeElement = () => {
    setIsLoad(false);
    setCep("");

    setEndereco({
      logradouro: "",
      bairro: "",
      localidade: "",
      estado: "",
    });
  };

  return (
    <S.ZipCard>
      <S.divHeaderZIP>Search Zip-Code</S.divHeaderZIP>
      <div style={{display: 'flex', alignItems: ' baseline'}}>

      <S.ZipInput
        value={cep}
        onChange={(e) => setCep(e.target.value.replace(/\D/g, ""))}
        type="text"
        placeholder="Digit..."
        />
      <Button
        title={"Search"}
        size="small"
        color="secondary"
        onClick={showElement}
        />
        </div>
      {isLoad && (
        <div>
          <S.LabelsItems>City : {endereco.localidade}</S.LabelsItems>
          <S.LabelsItems> District : {endereco.bairro}</S.LabelsItems>
          <S.LabelsItems>Public place : {endereco.logradouro}</S.LabelsItems>
          <S.LabelsItems>State : {endereco.estado}</S.LabelsItems>
           
          <button
            onClick={closeElement}
            style={{
                  marginLeft: '130px',
              backgroundColor: "black",
              borderRadius: 10,
              background: "linear-gradient(135deg, #1E3A8A, #2563EB)",
              alignItems: "center",
            }}
            
          >
             
            <img
              className="avatar"
              src="https://media1.tenor.com/m/TsVXIAMBZXoAAAAC/cat-thumbs-up-thumbs-up.gif"
              alt="Lin Lanying"
              width={50}
              height={50}
            />
          </button>
         
        </div>
      )}
      <FindCep valorInput={cep} onCepResult={handleAddress}></FindCep>
    </S.ZipCard>
  );
}
