import styled from "styled-components";

export const StyledInput = styled.input` 

    width: 240px;
  padding:5px;
  display: flex;
  gap: 10px;
  border-radius: 6px;
  border:none;
  border-radius: 2px;
  background: #e3e3e3;
  transition:
    background 0.2s ease,
    opacity 0.2s ease;
 
 
    &:hover {
    background: white;
    color: black;
  }

`;
