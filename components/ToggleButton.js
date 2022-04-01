import styled from "styled-components";
import Image from "next/image";

export default function ToggleButton({ handleClick }) {
  return (
    <StyledToggleButton onClick={handleClick}>
      <Image
        width="25"
        height="25"
        src="/icons/arrows.svg"
        alt="ArrowIcon"
      ></Image>
    </StyledToggleButton>
  );
}

const StyledToggleButton = styled.button`
  border: none;
  cursor: pointer;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background-color: lavender;
`;
