import styled from "styled-components";

export const BodyForm = styled.form`
  align-content: center;
background: #111827;
  border-radius: 12px;
  border: 1px solid #1F2937;
  padding: 5px;
  width: 200px;
`;
export const ZipCard = styled.div`
    place-self: center;
  background: #111827;
  border: 1px solid #1F2937;
  border-radius: 12px;
  padding: 20px;
  width: 320px;
  color: #E5E7EB;
`;

export const divHeaderZIP = styled.header`
    text-align:center;
     background-color: #1a2035;
  borderradius: 10px;
  padding: 5px;
`;
export const LabelsItems = styled.label`

    font-size: 20px;
    color: #E5E7EB;
    display: flex;
    padding-bottom: 20px;
    padding-top: 20px;
`;
export const ZipInput = styled.input`
     margin-top: 30px;
    width: 93%;
    background: #0F172A;
    border: 1px solid #1E293B;
    border-radius: 8px;
    padding: 10px;
    color: #F9FAFB;
    margin-bottom: 15px;
  &:focus {
    outline: none;
    border: 1px solid #2563EB;
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.3);
  }
`;

