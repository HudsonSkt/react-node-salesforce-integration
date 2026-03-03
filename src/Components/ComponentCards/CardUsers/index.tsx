import * as S from "./UserPage.style";
import { Card } from "../Card";
import { CardBody } from "../CardBody";
import { CardFooter } from "../CardFooter";
import { CardHeader } from "../CardHeader";
import { Button } from "../../Button";
import { DivHeader } from "../CardHeader/cardHeader.style";
// import axios from "axios";
// import { useState } from "react";
interface PropsUserPageCard {
  children?: React.ReactNode;
}
const users = [
  {
    name: "João Silva",
    cargo: "Desenvolvedor Full Stack",
    description:
      "Desenvolvedor apaixonado por tecnologia com 5 anos de esperiência em React, Node.js e bancos de dados. Sempre buscando aprender novas tecnologias e compartilhar conhecimento.",
    button: ["Mensagem", "Seguir"],
  },
  {
    name: "Maria santos",
    cargo: "UI/UX",
    description:
      "Designer criativa especializada em interfaces ordenadas e experiência do usuário. Focada em criar produtos digitais que sejam bonitos, funcionais e acessíveis para todos.",
    button: ["Portfolio", "Conectar"],
  },
  {
    name: "Pedro Costa",
    cargo: "Gerente de Projetos",
    description:
      "Gerente experiente com background técnico, especializado em metodologias ágeis e liderança de equipes. Apaixonado por entregar produtos de qualidade no prazo.",
    button: ["Linkedln", "Adicionar"],
  },
];

export default function CardUserPage({ children }: PropsUserPageCard) {
  //   const [userData, setUserData] = useState([])

  //  const getResult = async () => {
  //       const result =  await axios.get('/get/Student__c')
  //        console.log('result',result, userData)
  //       setUserData(result.data);
  //     };

  //     getResult();
  return (
    <S.Userpage >
{ children }
      {users.map(
        (user: {
          name: string;
          cargo: string;
          description: string;
          button: string[];
        }) => (
          <Card variant="compact">
            <CardHeader>
              <DivHeader> {user.name}</DivHeader>
              {user.cargo}
            </CardHeader>

            <CardBody
              user={{
                description: user.description,
              }}
              children={""}
              />

            <CardFooter
              button={{
                option: "",
              }}
              >
              {user.button.map((element) => (
                <Button
                title={element}
                size="small"
                color="secondary"
                onClick={() => alert(element)}
                >
                  {" "}
                </Button>
              ))}
            </CardFooter>
          </Card>
        ),
      )}
  {children}
    </S.Userpage>
  );
}
