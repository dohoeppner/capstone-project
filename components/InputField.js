import styled from "styled-components";

export default function InputField(props) {
  return <StyledInputField {...props}></StyledInputField>;
}

const StyledInputField = styled.input`
  border: 1px solid grey;
  border-radius: 5px;
  min-width: 245px;
  padding: 0.3rem 0.5rem;
  margin-top: 0.3rem;
  margin-bottom: 0.7rem;
`;
