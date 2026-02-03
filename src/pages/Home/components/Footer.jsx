import styled from "styled-components";
import logo from "../../../assets/Logo_tubatech.png";
import scrollTo from "../../../utils/scrollTo";

export default function Footer() {
    return (
        <FooterContainer>
            <Content>
                <Brand>
                    <img src={logo} alt="TubaTech" />
                    <span>TUBATECH</span>
                </Brand>

                <Nav>
                    <span onClick={() => scrollTo("home")}>Início</span>
                    <span onClick={() => scrollTo("about")}>Sobre</span>
                    <span onClick={() => scrollTo("services")}>Serviços</span>
                    <span onClick={() => scrollTo("app")}>App</span>
                </Nav>
            </Content>

            <Divider />

            <Copy>
                © {new Date().getFullYear()} TubaTech. Todos os direitos reservados.
            </Copy>
        </FooterContainer>
    );
}

const FooterContainer = styled.footer`
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(10, 10, 15, 0.95),
    rgba(5, 5, 10, 1)
  );
  
  padding: 3rem 1.5rem 2rem;
  color: #ffffff;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  img {
    width: 100px;
    filter: brightness(1.2)
      drop-shadow(0 0 6px var(--primary-color));
  }

  span {
    font-weight: 800;
    letter-spacing: 1px;
    color: #37b4be;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;

  span {
    cursor: pointer;
    font-size: 0.9rem;
    color: #cceef1;
    transition: color 0.2s ease;

    &:hover {
      color: #ffffff;
    }
  }

  @media (max-width: 768px) {
    gap: 1.2rem;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  margin: 2rem 0 1.5rem;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(55, 180, 190, 0.5),
    transparent
  );
`;

const Copy = styled.p`
  text-align: center;
  font-size: 0.85rem;
  opacity: 0.7;
`;
