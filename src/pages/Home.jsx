import About from "../components/About";
import AboutTubaTech from "../components/AboutTubaTech";
import HeaderComponent from "../components/Header";
import MissionVisionValues from "../components/MissionVisionValues";
import { GlobalStyle } from "../GlobalStyles";
import styled from "styled-components";

export default function Home() {
    return (
        <>
            <GlobalStyle />
            <HomeContainer>
                <HeaderComponent />
                <AboutTubaTech />
                <MissionVisionValues />
                <About />

            </HomeContainer>
        </>
    )
}

const HomeContainer = styled.div`
    color: var(--text-color);
    background-color: var(--primary-color);
    padding: 0px;
    
    box-sizing: border-box;
    margin: 0px;
    width: 100%;
    display: block;
    overflow-x: hidden;
`;  