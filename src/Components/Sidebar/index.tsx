import { Outlet, useNavigate } from "react-router-dom";

import {
  Content,
  DivItems,
  Header,
  MainDiv,
  ToggleButton,
} from "./Sidebar.styled";
import { useState } from "react";
import { Button } from "../Button";
import {
  CassetteTape,
  Contact,
  ContainerIcon,
  House,
  PanelRightClose,
  PanelRightOpen,
  School2,
  SearchCode,
 } from "lucide-react";
 
export function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navegate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MainDiv isOpen={isOpen}>
        <Header>
          NA - School <School2 size="30px" />{" "}
        </Header>

        <h5
          style={{
            borderBottom: "solid white 1px  ",
            width: "230px",
            boxShadow: "0 0 1px 0.2px white",
          }}
        ></h5>

        <DivItems>
          <Button
            size="large"
            color="primary"
            title="Home Page"
            onClick={() => navegate("/")}
            iconLeft={<House size={18} />}
          />
          <Button
            size="large"
            color="primary"
            title="Search Cep"
            onClick={() => navegate("/ViaCep")}
            iconLeft={<SearchCode size={18} />}
          />

          <Button
            size="large"
            color="primary"
            onClick={() => navegate("/Card")}
            iconLeft={<CassetteTape size={18} />}
            title="Card"
          ></Button>
          <Button
            size="large"
            color="primary"
            onClick={() => navegate("/JsForceUserPage")}
            iconLeft={<ContainerIcon size={18} />}
            title="Student's Card"
          ></Button>
          <Button
            size="large"
            color="primary"
            onClick={() => navegate("/ContactForcePage")}
            iconLeft={<Contact size={18} />}
            title="Contact"
          ></Button>
          
        </DivItems>
      </MainDiv>
      <ToggleButton isOpen={isOpen} onClick={toggleSidebar}>
        {isOpen ? (
          <PanelRightOpen color="white" size={25} />
        ) : (
          <PanelRightClose color="white" size={25} />
        )}
      </ToggleButton>
      <Content color="black" isOpen={isOpen}>
        <Outlet />
      </Content>
    </>
  );
}
