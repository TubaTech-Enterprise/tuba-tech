import styled from "styled-components";
import logo from "../../../assets/Logo_tubatech.png";
import Section from "../../../styles/Sections";
import WaveSeparator from "../../../components/WaveSeparator";
import BubblesOverlay from "../../../components/BubblesOverlay";

export default function AppSection() {
    return (
        <Section id="app">
        
            <BubblesOverlay />
            <Container>
                <TextContainer>
                    <Title>
                        Sabia que o app do <span>TubaTech</span> está em desenvolvimento?
                    </Title>
                    <Subtitle>Em breve disponível</Subtitle>
                </TextContainer>

                <ImageContainer>
                    <Logo src={logo} alt="Logo TubaTech" />
                </ImageContainer>

                <WaveSeparator />
            </Container>
        </Section>
    );
}

const Logo = styled.img`
  width: 100%;
  max-width: 420px;

  filter: brightness(1.2)
    drop-shadow(0 0 6px var(--primary-color))
    drop-shadow(0 0 14px var(--secondary-color));

  transition: transform 0.4s ease, filter 0.4s ease;

  &:hover {
    transform: scale(1.06) translateY(-12px);
    filter: brightness(1.5)
      drop-shadow(0 0 10px var(--primary-color))
      drop-shadow(0 0 24px var(--secondary-color));
  }
`;

const TextContainer = styled.div`
  max-width: 720px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  text-align: center;
`;

const Title = styled.h2`
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 800;
  color: #37b4be;

  span {
    color: var(--secondary-color);
  }
`;

const Subtitle = styled.h3`
  font-size: clamp(1rem, 2vw, 2rem);
  font-weight: 800;
  color: #ffffff;
  opacity: 0.85;
`;

const ImageContainer = styled.div`
  margin-top: 2.5rem;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  min-height: 100dvh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 2.5rem;
  padding-top: 3rem;
`;

const WaveWrapper = styled.div`
  width: 100%;
`;

