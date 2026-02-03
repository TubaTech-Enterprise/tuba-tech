import styled from "styled-components";
import Section from "../../../styles/Sections";

export default function ServicesSection() {

    const descriptions = [
        { title: "Desenvolvimento", description: "Criação e personalização de soluções digitais para atender às necessidades do seu negócio." },
        { title: "Treinamentos", description: "Voltados à formação e atualização técnica, com foco em ambientes reais de mercado." },
        { title: "Infraestrutura", description: " Incluindo planejamento, implantação e organização de redes e ambientes corporativos." },
        { title: "Suporte Técnico", description: "Com manutenção preventiva e corretiva de equipamentos, garantindo a continuidade das operações." }
    ]

    return (
        <Section id="services">
            <Container>

                <TopRow>
                    <Title>
                        <span className="first">Alguns</span>
                        <span className="second">Serviços</span>
                    </Title>
                    <Subtitle>
                        A TUBATECH atua na capacitação técnica e na prestação de serviços em Tecnologia da Informação, oferecendo soluções práticas e eficientes para empresas e profissionais.
                    </Subtitle>
                </TopRow>
                <MidRow>
                    {descriptions.map((description, index) => (
                        <ServiceDetail key={index} title={description.title} description={description.description} />
                    ))}
                </MidRow>
            </Container>
        </Section>
    );
}

export function ServiceDetail({ title, description }) {
    return (
        <DetailContainer>
            <DetailTitle>{title}</DetailTitle>
            <DetailDescription>{description}</DetailDescription>
        </DetailContainer>
    )
}

const Subtitle = styled.div`
    font-size: clamp(0.9rem, 2.5vw, 1.1rem);
    font-weight: 400;
    color: var(--text-color);
    text-align: center;
    margin: 2rem 0;
`;

const DetailContainer = styled.div`
    color: var(--text-color);
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 20%;
    min-width: 300px;
    padding: 2rem;
    position: relative;
    border: solid 2px transparent;

    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #02060F1A;
            filter: blur(30px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
        top: 0px;
        left: 0px;
    }

    transition: all 0.4s ease-in-out;

    &:hover {
    border: solid 2px var(--secondary-color);
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0,0,0,0.15);
    }
`;

const DetailTitle = styled.h3`
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: var(--secondary-color);
`;

const DetailDescription = styled.p`
  font-size: clamp(0.9rem, 1.5vw, 1.1rem);
  line-height: 1.6;
  color: var(--text-color);
`;


const Container = styled.div`
    width: 100%;
    min-height: 100dvh;
    display: flex;
    color: var(--text-color);
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    padding: 2.1rem 0;
`;

const MidRow = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem;
`;

const TopRow = styled.div`
width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;


const Title = styled.h1`
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 700;
  text-align: center;
  display: flex;
  gap: 1rem;

  span.first {
    color: #fff; 
  }

  span.second {
    color: var(--secondary-color);
  }
`;
