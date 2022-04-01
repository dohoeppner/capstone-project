import styled from "styled-components";
import Image from "next/image";

export default function FailureButton({ handleClick }) {
  return (
    <StyledCheckButton onClick={handleClick}>
      <Image
        width="30"
        height="30"
        src="/icons/x_white.svg"
        alt="FailureIcon"
      ></Image>
    </StyledCheckButton>
  );
}

const StyledCheckButton = styled.button`
  border: none;
  cursor: pointer;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background-color: #db2828;
`;
