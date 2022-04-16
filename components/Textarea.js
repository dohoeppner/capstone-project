import styled from "styled-components";

export default function Textarea(props) {
  return <StyledTextarea {...props}></StyledTextarea>;
}

const StyledTextarea = styled.textarea`
  border-radius: 5px;
  border-color: #ddddf0;
  font-family: Roboto !important;
  padding: 0.3rem 0.5rem;
`;
