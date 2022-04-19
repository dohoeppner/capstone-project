import styled from "styled-components";

import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Image from "next/image";
import LanguageList from "../components/LanguageList";

export default function Profile() {
  return (
    <Layout>
      <StyledMain>
        <StyledProfileWrapper>
          <StyledImageFrame>
            <Image
              width="50"
              height="50"
              src="/icons/cat_profile_pink.svg"
              alt="Profile Picture"
            ></Image>
          </StyledImageFrame>
        </StyledProfileWrapper>
        <StyledProfileName>Little Miss Late</StyledProfileName>

        <StyledHeadline>My languages</StyledHeadline>
        <LanguageList />
      </StyledMain>
      <Navbar />
    </Layout>
  );
}

const StyledMain = styled.main`
  padding: 20px;
`;

const StyledProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledProfileName = styled.p`
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: large;
  color: #5e5e66;
`;

const StyledHeadline = styled.p`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  color: #5e5e66;
`;

const StyledImageFrame = styled.div`
  display: flex;
  justify-content: center;
  width: 6rem;
  height: 6rem;
  border: 3px solid grey;
  border-radius: 50%;
`;
