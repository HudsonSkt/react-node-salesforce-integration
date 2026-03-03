import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "../../Button";
import * as S from "../../ViaCep/ViaCep.style";

import { CardHeader } from "../../ComponentCards/CardHeader";
import { Userpage } from "../../ComponentCards/CardUsers/UserPage.style";
import { Card } from "../../ComponentCards/Card";
import { CardBody } from "../CardBodyJsForce/cardBodyJsforce.style";
import { CardFooter } from "../CardFooterJsForce/cardFoorterJsForce.style";
interface PropsJsForceCard {
  children?: React.ReactNode;
}
interface Student__c {
  Name: string;
  Bio__c: string;
  QuarterYear__c: string;
  LastName__c: string;

  
}

 
export default function JsForceCardComponent({ children }: PropsJsForceCard) {
  const [userData, setUserData] = useState<Student__c[]>([]);

  useEffect(() => {
    const getResult = async () => {
      const response = await axios.post("http://localhost:4000/select", {
        objectName: "Student__c",
      });

      setUserData(response.data);
      console.log("rederizou cars js force",response.data);
    };
    console.log("rederizou card js force");

    getResult();
  }, []); // array vazio = executa apenas 1 vez

  return (
    <Userpage>
      {children}
      {userData.map(
        (user: {
          Name: string;
          LastName__c: string;
          Bio__c: string;
          QuarterYear__c: string;
          
        }) => (
          <Card variant="default">
            <CardHeader>
              {/* <Profile>
                {user.Name.charAt(0).toUpperCase()}{" "}
               </Profile>
                */}
          <S.LabelsItems>{user.Name}</S.LabelsItems>
              
   
            </CardHeader>

            <CardBody>
              <p>{user.Bio__c}</p>
              <p style={{ color: "oklch(0.64 0.09 132.63)", margin: "5px" }}>
                Quarter Year: {user.QuarterYear__c}
              </p>
              
            </CardBody>

            <CardFooter>
              
              <Button
                title={"Submit"}
                size="small"
                color="secondary"
                onClick={() => alert("É")}
              ></Button>
               
            </CardFooter>
          </Card>
        ),
      )}
    </Userpage>
  );
}
