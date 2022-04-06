import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const NavbarItemActiveClass = "NavbarItem-active";

export default function Navbar() {
  const router = useRouter();

  return (
    <footer>
      <StyledNavbar>
        {navigationItems.map((item) => {
          return (
            <Link key={item.href} href={item.href} passHref>
              <NavbarItem
                className={
                  router.asPath === item.href ? NavbarItemActiveClass : ""
                }
              >
                <Image
                  width="20"
                  height="20"
                  src={item.src}
                  alt={item.alt}
                ></Image>
                <ItemLabel>{item.label}</ItemLabel>
              </NavbarItem>
            </Link>
          );
        })}
      </StyledNavbar>
    </footer>
  );
}

const navigationItems = [
  {
    href: "/home",
    src: "/icons/home.svg",
    alt: "HomeIcon",
    label: "Home",
  },
  {
    href: "/create",
    src: "/icons/create.svg",
    alt: "CreateIcon",
    label: "Create",
  },
  {
    href: "/learn",
    src: "/icons/learn.svg",
    alt: "LearnIcon",
    label: "Learn",
  },
  {
    href: "/search",
    src: "/icons/search.svg",
    alt: "SearchIcon",
    label: "Search",
  },
  {
    href: "/profile",
    src: "/icons/profile.svg",
    alt: "ProfileIcon",
    label: "Profile",
  },
];

const StyledNavbar = styled.nav`
  position: fixed;
  width: 100%;
  box-shadow: 0px 0px 21px 3px rgba(223, 223, 242, 0.67);
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 12px 12px 12px;
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

  &.${NavbarItemActiveClass} {
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
