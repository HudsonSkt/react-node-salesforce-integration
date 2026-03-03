import {
  Container,
  ContainerButton,
  DivItemTitles,
  DivItens,
  DivTitles,
  HItem,
  InputFilter,
  MainContactForcePage,
  PTitle,
  StrongTitle,
} from "./ContactForcePage.style";
import { CardContactForcePage } from "../CardContact/CardContact.style";
import { Button } from "../../Button";
import { CardContactForcePageHeader } from "../HeaderContact";
import { BodyContactForcePage } from "../BodyContact";
// import { InfoContactForcePage } from "../../Components/ContactJsforce/InfoContact";
import axios from "axios";
import { useEffect, useState } from "react";
import { Input } from "../Input";
 interface Contact {
  Name: string;
  LastName: string;
  Email: string;
  Id: string;
  Fax: string;
  QuarterYear__c: string;
}

export const ContactForcePage = () => {
  const [userData, setUserData] = useState<Contact[]>([]);
  const [search, setSearch] = useState<Contact[]>([]);
  const [isLoad, setIsLoad] = useState(false); // state booleano que para abrir a div da ciração de contato
  const [nome, setNome] = useState("");
  // const [email, setEmail] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [id, setId] = useState<Contact[]>([]); // criei o id para armazenar o valor dele, e usar pra dar update nos campos, vou add mais tarde

  const getResult = async () => {
    const response = await axios.post("http://localhost:4000/select", {
      objectName: "Contact",
    });

    setUserData(response.data);
    console.log("rederizou cars js force");
    console.log("data ", response.data);
    setSearch(response.data);
  };

  const handleChange = (event: any) => {
    const searchTerm = event.target.value;

    if (searchTerm.length >= 2) {
      const filter = userData.filter((item) =>
        item.Name.toLowerCase().includes(searchTerm.toLowerCase()),
      );

      const notFound = "Not found";
      setSearch(filter);
      if (filter.length == 0) {
        console.log("olá");

        return notFound;
      }
    } else {
      setSearch(userData);
    }
  };
  console.log("iddd ", id);

  useEffect(() => {
    // setSearch(search)
    getResult();
  }, []); //  executa  1 vez

  const showElement = () => {
    setIsLoad(true);
  };

  const SaveContact = async (e: any) => {
    const response = await axios.post("http://localhost:4000/create", {
      objectName: "Contact",
      id: id,
      fields: {
        FirstName: nome,
        // Fax: fax,
        LastName: sobrenome,
        // Email: email,
      },
    });
    
 
    console.log("data ", response);

    const savetTerm = e.target.value;
    getResult();
    setIsLoad(false);
    // console.log(savetTerm);
    if (savetTerm) {
      console.log("Salvo");
    }
  };

  return (
    <MainContactForcePage>
      <CardContactForcePage>
        <CardContactForcePageHeader>
          Contact{" "}
          <Button
            title={"+ New Contact"}
            size="small"
            color="secondary"
            onClick={showElement}
          />
        </CardContactForcePageHeader>
        <Container>
          {isLoad && (
            <Container>
              <StrongTitle>Name: </StrongTitle>

              <Input
                placeholder="Digit here"
                onChange={(e) => setNome(e.target.value)}
              />
              <StrongTitle>Surname: </StrongTitle>
              <Input
                placeholder="Digit here"
                onChange={(event) => setSobrenome(event.target.value)}
              />
            </Container>
          )}
          {isLoad && (
            <ContainerButton>
              <Button
                title={"Save"}
                size="small"
                color="secondary"
                onSubmit={() => SaveContact}
              />

              <Button
                title={"Cancel"}
                size="small"
                color="danger"
                onClick={() => setIsLoad(false)}
              />
            </ContainerButton>
          )}
        </Container>
        <PTitle>Manage your contacts and relationships.</PTitle>
        <InputFilter>
          {" "}
          <Input
            placeholder="Search your contact... "
            onChange={handleChange}
          />{" "}
        </InputFilter>{" "}
        <DivTitles>
          {" "}
          <DivItemTitles> Name </DivItemTitles>{" "}
          <DivItemTitles> Phone </DivItemTitles>{" "}
          <DivItemTitles> E-mail</DivItemTitles>{" "}
        </DivTitles>
        {search.map(
          (user: {
            Name: string;
            Email: string;
            QuarterYear__c: string;
            Fax: string;
          }) => (
            <BodyContactForcePage key={user.Name}>
              <DivItens>
                {" "}
                {user.Name || "--"}
                <div>
                  {/* <EditIcon size={"15px"} /> */}
                </div>
              </DivItens>
              <DivItens>
                <StrongTitle></StrongTitle>
                {user.Fax || "--"}
              </DivItens>

              <DivItens>
                <HItem>
                  <StrongTitle> </StrongTitle> {user.Email || "--"}
                </HItem>
              </DivItens>
            </BodyContactForcePage>
          ),
        )}
      </CardContactForcePage>
    </MainContactForcePage>
  );
};
