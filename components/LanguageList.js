import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import LanguageForm from "./LanguageForm";
import Image from "next/image";
import { Dialog, AppBar } from "@mui/material";
import { LanguagesContext } from "../context/languagesContext";
import { UserContext } from "../context/userContext";

export default function LanguageList() {
  const { languages, setLanguages } = useContext(LanguagesContext);
  const { user, setUser } = useContext(UserContext);
  const [displayForm, setDisplayForm] = useState(false);

  function handleSubmit(newLanguage) {
    setLanguages((currentLanguages) => {
      return [...currentLanguages, newLanguage];
    });
  }

  useEffect(() => {
    setDisplayForm(false);
  }, [languages]);

  const handleDelete = (item) => {
    if (
      confirm("Do you really want to delete this language and all the content?")
    ) {
      setLanguages((currentLanguages) => {
        return currentLanguages.filter(
          (language) => language.code !== item.code
        );
      });
    }
  };

  const onSelectLanguage = (code) => {
    setUser((currentUser) => {
      return { ...currentUser, selectedLanguage: code };
    });
  };

  return (
    <div>
      <LanguageContainer>
        {languages.map((item) => {
          return (
            <Language key={item.code}>
              <LanguageButton
                className={
                  item.code === user.selectedLanguage ? "selected" : ""
                }
                onClick={() => {
                  onSelectLanguage(item.code);
                }}
              >
                {item.label}
                <DeleteButton
                  onClick={() => {
                    handleDelete(item);
                  }}
                >
                  <Image
                    width="30"
                    height="30"
                    src="/icons/minus_black.svg"
                    alt="MinusIcon"
                  ></Image>
                </DeleteButton>
              </LanguageButton>
            </Language>
          );
        })}

        <Language>
          <PlusButton onClick={() => setDisplayForm(true)}>+</PlusButton>
        </Language>
      </LanguageContainer>

      <Dialog fullScreen open={displayForm}>
        <AppBar
          sx={{
            boxShadow: "none",
            display: "flex",
            flexDirection: "row-reverse",
            alignItems: "center",
            paddingTop: "0.5rem",
            paddingRight: "0.5rem",
          }}
          position="relative"
          color="transparent"
        >
          <StyledCloseButton onClick={() => setDisplayForm(false)}>
            <Image
              width="15"
              height="15"
              src="/icons/x_white.svg"
              alt="FailureIcon"
            ></Image>
          </StyledCloseButton>
        </AppBar>
        <LanguageForm languages={languages} onSubmit={handleSubmit} />
      </Dialog>
    </div>
  );
}

const Language = styled.li`
  list-style: none;
  display: flex;
  justify-content: center;
`;

const LanguageContainer = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;

const LanguageButton = styled.a`
  color: grey;
  background-color: #e6e6fa;
  border: 3px solid #fff;
  border-radius: 40px;
  padding: 0.5rem 0.8rem;
  display: flex;
  justify-content: center;
  min-width: 7rem;
  position: relative;

  &.selected {
    border-color: #c1a0fe;
  }
`;

const PlusButton = styled.a`
  color: grey;
  background-color: lavender;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: larger;
`;

const DeleteButton = styled.button`
  background-color: #c1a0fe;
  border: none;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  color: grey;
  display: flex;
  align-items: center;
  position: absolute;
  right: 0rem;
  top: -0.3rem;
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
