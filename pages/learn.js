import Layout from "../components/layout";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import ToggleButton from "../components/ToggleButton";
import { useState } from "react";
import styled from "styled-components";

export default function Learn() {
  const [showTranslation, setShowTranslation] = useState(false);

  return (
    <Layout>
      <StyledMain>
        <Card
          content="Bonjour"
          translation="Guten Tag"
          showTranslation={showTranslation}
        />
        <ButtonWrapper>
          <ToggleButton
            handleClick={() => setShowTranslation(!showTranslation)}
          />
        </ButtonWrapper>
      </StyledMain>
      <Navbar />
    </Layout>
  );
}

const StyledMain = styled.main`
  margin-top: 5rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;
