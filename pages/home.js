import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout";
import styled from "styled-components";
import Button from "../components/Button";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Vocabulary App</title>
      </Head>
      <main>
        <WelcomeText>Welcome, Dora!</WelcomeText>
        <StyledHeadline>My languages</StyledHeadline>
        <LanguageSection>
          <ul>
            <Language>
              <Link href="#">
                <a>Language 1</a>
              </Link>
            </Language>
            <Language>
              <Link href="#">
                <a>Language 2</a>
              </Link>
            </Language>
            <Language>
              <Link href="#">
                <a>Language 3</a>
              </Link>
            </Language>
            <Language>
              <Link href="#">
                <a>+</a>
              </Link>
            </Language>
          </ul>
        </LanguageSection>
        <div>
          <Link href="/learn" passHref>
            <PracticeButton>Practice now</PracticeButton>
          </Link>
        </div>
      </main>
      <Navbar active="home" />
    </Layout>
  );
}

const Language = styled.li`
  list-style: none;
  border: 0.5px solid black;
  border-radius: 0.5rem;
  width: 9rem;
  padding: 0.5rem 1.5rem;
`;

const PracticeButton = styled.a`
  display: flex;
  justify-content: center;
  border-radius: 40px;
  background-color: #26cd7d;
  color: white;
  padding: 15px 25px;
  margin: 10px;
  text-decoration: none;
  font-weight: 400;
`;

const WelcomeText = styled.h1`
  display: flex;
  justify-content: center;
  background-color: tomato;
`;

const LanguageSection = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: aliceblue;
`;

const StyledHeadline = styled.h2`
  display: flex;
  justify-content: center;
  align-content: center;
`;
