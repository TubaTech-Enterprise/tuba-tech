// src/components/AboutTubaTech.jsx
import styled from "styled-components";

export default function AboutTubaTech() {
    return (
        <AboutSection>
            <ContentContainer>
                <Title>O que é a Tuba Tech?</Title>
                <Description>
                    A <strong>Tuba Tech</strong> é um projeto criado para <strong>conectar saberes e transformar carreiras</strong> na área de tecnologia.
                    Nosso objetivo é <strong>ensinar de forma prática e acessível</strong>, desde conceitos básicos até conteúdos mais avançados,
                    por meio de vídeos, artigos e eventos.
                </Description>
                <Description>
                    Aqui você encontra explicações claras, exemplos práticos e analogias simples para que qualquer pessoa consiga
                    <strong> entender e aplicar tecnologia no dia a dia</strong>.
                </Description>
                <Description>
                    Nosso foco é <strong>descomplicar o aprendizado</strong>, mostrando como cada conceito ou equipamento funciona, quando usar e como evoluir na sua carreira tecnológica.
                </Description>
            </ContentContainer>
        </AboutSection>
    );
}

const AboutSection = styled.section`
  width: 100%;
  height: 100dvh;
  padding: 6rem 2rem;
  background-color: var(--primary-color);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled.div`
  max-width: 900px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Title = styled.h2`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  text-align: center;
`;

const Description = styled.p`
  font-size: clamp(1rem, 2vw, 1.2rem);
  line-height: 1.6;
  text-align: justify;
`;
