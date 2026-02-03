import styled, { keyframes } from "styled-components";
import HomeSection from "./components/Home";
import AboutSection from "./components/About";
import HeaderComponent from "../../components/Header";
import bg from "../../assets/background_tubatech.png";
import ServicesSection from "./components/Services";
import AppSection from "./components/App";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <HomeContainer>
      <HeaderComponent />

      <HomeSection />
      <AboutSection />
      <ServicesSection />
      <AppSection />
      <Footer />
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  
  background-image:
    linear-gradient(
      rgba(0,0,0,0.25),
      rgba(0,0,0,0.25)
    ),
    url(${bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;
