import styled from "styled-components";

export default function InputField(props) {
  return <StyledInputField {...props}></StyledInputField>;
}

const StyledInputField = styled.input`
  border: 1px solid #ddddf0;
  border-radius: 5px;
  width: 100%;
  padding: 0.5rem 0.5rem;
  margin-top: 0.5rem;
  margin-bottom: 0.7rem;
`;
