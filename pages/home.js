import { useContext } from "react";
import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";

import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import LanguageList from "../components/LanguageList";
import { SubmitLink } from "../components/SubmitButton";
import { UserContext } from "../context/userContext";

export default function Home() {
  const { user } = useContext(UserContext);

  return (
    <Layout>
      <Head>
        <title>Vocabulary App</title>
      </Head>
      <StyledMain>
        <WelcomeText>Welcome {user.firstName}!</WelcomeText>
        <StyledHeadline>My languages</StyledHeadline>

        <LanguageList />

        <ButtonFrame>
          <Link href="/learn" passHref>
            <SubmitLink>Practice now</SubmitLink>
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
