import React from "react";
import styled from "styled-components";

export default function MissionVisionValues() {
  return (
    <SectionContainer>
      <SectionTitle>Missão, Visão e Valores</SectionTitle>
      <ContentGrid>
        <Card>
          <CardTitle>Missão</CardTitle>
          <CardText>
            Conectar saberes e transformar carreiras, oferecendo conteúdo tecnológico acessível, prático e direto ao ponto, que prepare pessoas para o mercado de tecnologia.
          </CardText>
        </Card>
        <Card>
          <CardTitle>Visão</CardTitle>
          <CardText>
            Ser referência em educação tecnológica, criando uma ponte entre o conhecimento básico e avançado, e inspirando uma comunidade de aprendizagem contínua.
          </CardText>
        </Card>
        <Card>
          <CardTitle>Valores</CardTitle>
          <CardText>
            <li>Praticidade: Ensinar com exemplos reais e aplicáveis.</li>
            <li>Comunidade: Fomentar um ambiente colaborativo e inclusivo.</li>
            <li>Consistência: Garantir qualidade e regularidade no conteúdo.</li>
            <li>Inclusão: Tornar a tecnologia acessível para todos.</li>
          </CardText>
        </Card>
      </ContentGrid>
    </SectionContainer>
  );
}

const SectionContainer = styled.section`
  max-width: 100%;
  margin: 0 auto;
  height: 100dvh;
  padding: 6rem 2rem;
  text-align: center;
  color: white;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: var(--secondary-color);
  
  overflow: hidden;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: 3rem;
  font-weight: bold;
`;

const ContentGrid = styled.div`
  display: grid;
  gap: 2rem;
  z-index: 1;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
`;

const Card = styled.div`
  background-color: var(--primary-color);
  padding: 2em 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  border-radius: 1rem;
  
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);

  &:hover{
    scale: 1.05;
    transition: all 0.3s ease-in-out;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const CardText = styled.ul`
  list-style-type: disc;
  text-align: justify;
  li {
    margin-bottom: 1rem;
    font-size: 1.1rem;
    line-height: 1.5;
  }
`;
