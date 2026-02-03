import { motion } from "framer-motion";
import styled from "styled-components";
import scrollTo from "../utils/scrollTo";

const Header = styled.header`
  width: 100%;
  height: var(--header-height);
  background: rgba(10, 10, 15, 0.5);
  backdrop-filter: blur(5px);
  position: fixed;
  top: 0;
  z-index: 1000;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 24px;
`;

const Logo = styled(motion.h1)`
  font-family: "Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI";
  font-size: 1.6rem;
  font-weight: 700;
  color: #37b4be;
  letter-spacing: 1px;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #fff;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 28px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  align-items: center;

  span {
    font-family: "Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI";
    font-weight: 700;
    color: #37b4be;
    font-size: 0.95rem;
    cursor: pointer;
    position: relative;
    transition: color 0.2s ease;

    &:hover {
      color: #fff;
    }

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -6px;
      width: 0;
      height: 2px;
      background: #37b4be;
      transition: width 0.25s ease;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;

export default function HeaderComponent() {
  return (
    <Header>
      <Container>
        <Logo whileHover={{ scale: 1.05 }} onClick={() => scrollTo("home")}>
          TUBATECH
        </Logo>

        <Nav>
          <span onClick={() => scrollTo("home")}>Início</span>
          <span onClick={() => scrollTo("about")}>Quem somos nós</span>
          <span onClick={() => scrollTo("services")}>Serviços</span>
          <span onClick={() => scrollTo("app")}>App</span>
        </Nav>
      </Container>
    </Header>
  );
}
