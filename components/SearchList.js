import styled from "styled-components";

export default function SearchList({ result, handleClick }) {
  return (
    <>
      <StyledSearchListWrapper>
        <StyledSearchList>
          {result.map((item) => {
            return (
              <StyledListItem key={item.id} onClick={() => handleClick(item)}>
                {item.content} - {item.translation}
                {item.archived === true ? " (archived)" : ""}
              </StyledListItem>
            );
          })}
        </StyledSearchList>
      </StyledSearchListWrapper>
    </>
  );
}

const StyledSearchList = styled.ul`
  list-style: none;
`;

const StyledSearchListWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledListItem = styled.div`
  font-size: small;
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }
`;

const StyledCloseButton = styled.button`
  border: none;
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: black;
  display: flex;
  align-items: center;
`;
