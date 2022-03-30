import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout";
import styled from "styled-components";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Vocabulary App</title>
      </Head>
      <StyledMain>
        <WelcomeText>Welcome, Dora!</WelcomeText>
        <StyledHeadline>My languages</StyledHeadline>

        <LanguageContainer>
          <Language>
            <Link href="#" passHref>
              <LanguageButton>Language 1</LanguageButton>
            </Link>
          </Language>
          <Language>
            <Link href="#" passHref>
              <LanguageButton>Language 2</LanguageButton>
            </Link>
          </Language>
          <Language>
            <Link href="#" passHref>
              <LanguageButton>Language 3</LanguageButton>
            </Link>
          </Language>
          <Language>
            <Link href="#" passHref>
              <LanguageButton>+</LanguageButton>
            </Link>
          </Language>
        </LanguageContainer>

        <ButtonFrame>
          <Link href="/learn" passHref>
            <PracticeButton>Practice now</PracticeButton>
          </Link>
        </ButtonFrame>
      </StyledMain>
      <Navbar />
    </Layout>
  );
}

const StyledMain = styled.main`
  padding: 20px;
`;

const Language = styled.li`
  list-style: none;
  border: 0.5px solid grey;
  color: grey;
  border-radius: 40px;
  padding: 0.5rem 0.8rem;
`;

const LanguageContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 10px;
`;

const ButtonFrame = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

const PracticeButton = styled.a`
  display: flex;
  justify-content: center;
  border-radius: 40px;
  background-color: #26cd7d;
  color: white;
  padding: 1rem 2rem;
  margin: 10px;
  width: 10rem;
  text-decoration: none;
  font-weight: 400;
`;

const WelcomeText = styled.h1`
  display: flex;
  justify-content: center;
`;

const StyledHeadline = styled.p`
  display: flex;
  justify-content: flex-start;
  margin-top: 3rem;
`;

const LanguageButton = styled.a`
  color: grey;
`;
