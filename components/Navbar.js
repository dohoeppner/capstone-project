import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function Navbar() {
  const router = useRouter();
  return (
    <footer>
      <StyledNavbar>
        <Link href="/home" passHref>
          <NavbarItem className={router.asPath === "/home" ? "active" : ""}>
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
          <NavbarItem className={router.asPath === "/create" ? "active" : ""}>
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
          <NavbarItem className={router.asPath === "/learn" ? "active" : ""}>
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
          <NavbarItem className={router.asPath === "/search" ? "active" : ""}>
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
          <NavbarItem className={router.asPath === "/profile" ? "active" : ""}>
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
  padding: 8px 16px 24px 16px;
  gap: 20px;
  background-color: #fcfcff;
`;

const NavbarItem = styled.a`
  position: relative;
  text-align: center;
  margin: 10px;
  text-decoration: none;
  opacity: 0.5;
  font-size: 10px;
  color: black;

  &:hover {
    top: -4px;
    opacity: 1;
  }

  &.active {
    opacity: 1;
  }
`;

const ItemLabel = styled.span`
  display: block;
  text-align: center;
  font-size: 10px;

  &:hover {
    text-decoration: none;
    font-weight: 400;
  }
`;
