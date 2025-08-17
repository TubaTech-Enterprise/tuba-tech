import styled from "styled-components";

export default function About() {
    return (
        <AboutContainer>
            <CenterContainer>
                <AboutContent>
                    <h1>Sobre Nós</h1>
                    <p>
                        O TUBATECH é um projeto criado para conectar saberes, transformar carreiras e ensinar você a mergulhar no mercado de tecnologia. Nossa missão é tornar o aprendizado acessível, prático e direto ao ponto, ajudando iniciantes e profissionais a evoluir de forma consistente.
                    </p>
                    <p>
                        No Debian Day, os fundadores do TUBATECH, Hugo Fernandes e Guilherme Dias, apresentaram como criar oportunidades no mercado de tecnologia utilizando o Debian como aliado principal, mostrando que a prática é tão importante quanto a teoria.
                    </p>
                </AboutContent>
                <ImageContainer>
                    <img src="/src/assets/Logo_tubatech.png" alt="" />
                </ImageContainer>
            </CenterContainer>
        </AboutContainer>
    )
}

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;

    img {
        width: 700px;
    }
`;

const CenterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5rem;
`;

const AboutContent = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    text-align: justify;
    
    width: 30%;
    
    h1 {
        font-size: 5rem;
    }

    p { 
        font-size: 1.1rem;
        margin-bottom: 1rem;
    }

`;

const AboutContainer = styled.section`
    width: 100%;
    min-height: 100dvh;
    flex-direction:  column;
    background-color: var(--primary-color);
`;