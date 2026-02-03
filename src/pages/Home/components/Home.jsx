import styled from "styled-components";

import logo from "../../../assets/Logo_tubatech.png";
import Section from "../../../styles/Sections";

export default function HomeSection() {
    return (
        <Section id="home">
            <HomeContainer>
                <TextContainer>
                    <Title>O MAR NÃO ESTÁ PARA PEIXE! ENTÃO NADE COM OS TUBARÕES!</Title>
                    <Subtitle>QUER APRENDER MAIS SOBRE TECNOLOGIA?</Subtitle>
                    <ExploreButton>VEM PRA TUBATECH!</ExploreButton>
                </TextContainer>
                <ImageContainer>
                    <Logo src={logo} alt="logo-tubatech" />
                </ImageContainer>
            </HomeContainer>
        </Section>
    );
}

const Logo = styled.img`
    filter: brightness(1.2)
            drop-shadow(0 0 6px var(--primary-color))
            drop-shadow(0 0 12px var(--secondary-color));

    transition: all 0.3s ease;
    &:hover{
        filter: brightness(1.5)
                drop-shadow(0 0 6px var(--primary-color))
                drop-shadow(0 0 12px var(--secondary-color));
                transform: scale(1.05) translateY(-10px);
    }
`;


const ExploreButton = styled.button`
    background-color: #37b4be;
    color: black;
    border: none;
    padding: 10px 10px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
`;

const TextContainer = styled.div`
    max-width: 560px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
`;

const Title = styled.h2`
    font-size: clamp(1rem, 2vw, 1.5rem);
    font-weight: 700;
    font-size: 45px;
    text-align: left;
    color: #37b4be;
    width: 100%;
`;

const Subtitle = styled.h3`
    font-size: clamp(1rem, 2vw, 1.2rem);
    line-height: 1.6;
    text-align: left;
    color: #ffffff;
    width: 100%;

`;

const ImageContainer = styled.div`  
    width: 500px;
    img {
        width: 100%;
    }
`;

const HomeContainer = styled.div`
    height: 100dvh;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;