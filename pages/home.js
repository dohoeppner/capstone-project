import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import LanguageList from "../components/LanguageList";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Vocabulary App</title>
      </Head>
      <StyledMain>
        <WelcomeText>Welcome Dora!</WelcomeText>
        <StyledHeadline>My languages</StyledHeadline>

        <LanguageList />

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

const ButtonFrame = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
`;

const PracticeButton = styled.a`
  display: flex;
  justify-content: center;
  border-radius: 40px;
  background-color: #26cd7d;
  color: white;
  padding: 1rem 1.5rem;
  min-width: 4rem;
  text-decoration: none;
  font-weight: 400;
`;

const WelcomeText = styled.h1`
  display: flex;
  justify-content: center;
  text-align: center;
`;

const StyledHeadline = styled.p`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  font-size: larger;
`;
