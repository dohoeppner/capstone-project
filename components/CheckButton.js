import styled from "styled-components";
import Image from "next/image";

export default function CheckButton({ handleClick }) {
  return (
    <StyledCheckButton onClick={handleClick}>
      <Image
        width="30"
        height="30"
        src="/icons/check_white.svg"
        alt="CheckIcon"
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
  background-color: #21ba45;
`;
