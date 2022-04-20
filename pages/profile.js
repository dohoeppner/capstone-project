import styled from "styled-components";

import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Image from "next/image";
import LanguageList from "../components/LanguageList";
import { UserContext } from "../context/userContext";
import { useContext } from "react";

export default function Profile() {
  const { user } = useContext(UserContext);
  const userName = `${user.firstName} ${user.lastName}`;

  return (
    <Layout>
      <StyledMain>
        <StyledProfileWrapper>
          <StyledImageFrame>
            <Image
              width="100%"
              height="100%"
              src={`/api/imageproxy?url=${encodeURIComponent(user.image)}`}
              alt={`Profile Picture of ${userName}`}
              objectFit="cover"
              quality={80}
            ></Image>
          </StyledImageFrame>
        </StyledProfileWrapper>
        <StyledProfileName>{userName}</StyledProfileName>

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
  overflow: hidden;
`;
