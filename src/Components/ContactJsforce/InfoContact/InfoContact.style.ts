import styled from "styled-components";

export const InfoContactForcePage = styled.div`
   display: flex;
  flex-direction: column;

  span {
    font-size: 14px;
    color: #aaa;
  }

// align-items: center;
  // padding: 5px;
  // justify-content: space-between;
  // display: flex;
 
  // border: 1px solid green;
 
  // font-weight: bold;
`;

export const CardContainer = styled.div`
  border: 1px solid white;
  padding: 20px;
`;

export const ContactRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #333;

  &:last-child {
    border-bottom: none;
  }
`;