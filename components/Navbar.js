import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export default function Navbar({ active }) {
  const styleActiveClass = "navBar-active";
  return (
    <footer>
      <StyledNavbar>
        <Link href="/home" passHref>
          <NavbarItem>
            <Image
              width="20"
              height="20"
              src="/icons/home.svg"
              alt="HomeIcon"
            ></Image>
            <ItemLabel>Home</ItemLabel>
          </NavbarItem>
        </Link>
        <Link href="/create" passHref>
          <NavbarItem>
            <Image
              width="20"
              height="20"
              src="/icons/create.svg"
              alt="CreateIcon"
            ></Image>
            <ItemLabel>Create</ItemLabel>
          </NavbarItem>
        </Link>
        <Link href="/learn" passHref>
          <NavbarItem>
            <Image
              width="20"
              height="20"
              src="/icons/learn.svg"
              alt="LearnIcon"
            ></Image>
            <ItemLabel>Learn</ItemLabel>
          </NavbarItem>
        </Link>
        <Link href="/search" passHref>
          <NavbarItem>
            <Image
              width="20"
              height="20"
              src="/icons/search.svg"
              alt="SearchIcon"
            ></Image>
            <ItemLabel>Search</ItemLabel>
          </NavbarItem>
        </Link>
        <Link href="/profile" passHref>
          <NavbarItem>
            <Image
              width="20"
              height="20"
              src="/icons/profile.svg"
              alt="ProfileIcon"
            ></Image>
            <ItemLabel>Profile</ItemLabel>
          </NavbarItem>
        </Link>
      </StyledNavbar>
    </footer>
  );
}

const StyledNavbar = styled.nav`
  position: fixed;
  width: 100%;
  border-top: 1px solid grey;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 24px 32px 24px;
  gap: 20px;
  background-color: #fcfcff;
`;

const NavbarItem = styled.a`
  text-decoration: none;
  text-align: center;
  margin: 10px;

  &:hover {
    text-decoration: none;
  }
`;

const StyledIcon = styled(Image)`
  border: 2px red solid important!;
`;

const ItemLabel = styled.span`
  display: block;
  text-align: center;
  color: grey;
  font-size: 10px;
  transition-duration: 0.4s;

  &:hover {
    text-decoration: none;
    color: tomato;
    font-weight: 400;
  }
`;
