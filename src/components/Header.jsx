import styled from "styled-components";
import { Link } from "react-router-dom";

export default function HeaderComponent() {
    return (
        <HeaderContainer>
            <BackgroundLayer />
            <CenterContainer>
                <ImageContainer>
                    <img src="/src/assets/Logo_tubatech.png" alt="" />
                </ImageContainer>
                <HeaderContent>
                    <h1>TubaTech</h1>
                    <p>Tecnologia e Redes, do básico ao avançado.</p>
                </HeaderContent>
            </CenterContainer>
        </HeaderContainer >
    );
}

const ImageContainer = styled.div`  
    position: absolute;
    opacity: 0.2;
    z-index: 0;
`;

const HeaderContainer = styled.header`
    width: 100%;
    min-height: 100dvh;
    height: 100dvh;
    overflow-x: hidden;
    background-color: var(--primary-color);
`;

const BackgroundLayer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/src/assets/bg-tech.jpg');
    background-size: cover;
    background-position: center;
    filter: blur(6px);
`;

const CenterContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;    
    width: 100%;
    max-width: 1200px;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    overflow: hidden;
`;

const HeaderContent = styled.div`
    flex: 1 1 300px;
    background-color: rgba(255, 255, 255, 0.2);
    padding: clamp(1rem, 15vw, 15rem);
    border-radius: 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--primary-color);
    color: white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    z-index: 1;

    h1 {
        font-size: clamp(1.8rem, 4vw, 6.5rem);
        margin-bottom: 0.5rem;
    }

    p {
        font-size: clamp(1rem, 2vw, 1.2rem);
        margin-bottom: 1.5rem;
        width: fit-content;

        &::after {
            content: '';
            position: relative;
            height: 2px;
            width: 100%;
            display: block;
            border-radius: 5px;
            background-color: white;
        }
    }
`;
