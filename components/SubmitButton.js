import styled, { css } from "styled-components";

const styles = css`
  display: flex;
  justify-content: center;
  border: none;
  border-radius: 40px;
  background-color: #26cd7d;
  color: white;
  padding: 1rem 1.5rem;
  font-weight: 400;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
  }
`;

export default function SubmitButton({ children, ...props }) {
  return <StyledSubmitButton {...props}>{children}</StyledSubmitButton>;
}

export const SubmitLink = styled.a`
  ${styles}
`;

const StyledSubmitButton = styled.button`
  ${styles}
`;
