import styled from "styled-components";
import Section from "../../../styles/Sections";

export default function AboutSection() {
    return (
        <Section id="about">
            <Container>
                <Title>Sobre a <span>TUBATECH</span></Title>

                {/* Missão, Visão e Valores */}
                <AboutContent>

                    <AboutCard>
                        <h5>Missão</h5>
                        <p>
                            Conectar conhecimentos e transformar carreiras por meio de conteúdo tecnológico acessível, prático e direto, preparando pessoas para os desafios reais do mercado.
                        </p>
                    </AboutCard>

                    <AboutCard>
                        <h5>Visão</h5>
                        <p>
                            Ser referência em educação tecnológica, criando pontes entre o conhecimento básico e o avançado, e inspirando uma comunidade em constante evolução e aprendizado contínuo.
                        </p>
                    </AboutCard>

                    <AboutCard>
                        <h5>Valores</h5>
                        <ul>
                            <li><strong>Praticidade:</strong> Ensinar com exemplos reais e aplicáveis no dia a dia.</li>
                            <li><strong>Comunidade:</strong> Construir um ambiente colaborativo, inclusivo e inspirador.</li>
                            <li><strong>Consistência:</strong> Garantir qualidade, clareza e regularidade em todo o conteúdo.</li>
                            <li><strong>Inclusão:</strong> Tornar a tecnologia acessível e transformadora para todas as pessoas.</li>
                        </ul>
                    </AboutCard>
                </AboutContent>
            </Container>
        </Section>
    )
}

const Title = styled.h4`
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 700;
    text-align: center;
    margin-bottom: 3rem;

    span {
        color: var(--secondary-color);
    }
`;

const AboutContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: stretch;
    gap: 2rem;
    flex-wrap: wrap; /* Responsivo: passa os cards para linha abaixo em telas pequenas */
`;

const AboutCard = styled.div`
    background: linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.1));
    border-radius: 16px;
    padding: 2rem;
    width: 20%;
    min-width: 250px;
    min-height: 320px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
    transition: all 0.4s ease-in-out;
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);

    border: 2px solid transparent;
    h5 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color:  var(--secondary-color);
    }

    p, li {
        font-size: 1rem;
        line-height: 1.6;
        color: var(--text-color);
    }

    li {
        margin-bottom: 0.5rem;
    }

    &:hover {
        transform: translateY(-8px);
        
    border: 2px solid var(--secondary-color);
        box-shadow: 0 12px 24px rgba(0,0,0,0.15);
    }
`;

const Container = styled.div`
    width: 100%;
    padding: 4rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
