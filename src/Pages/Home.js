//This is home page, It will contains all the sections require in this page.

//Import all the require sections here
// import HeroSection from "../Sections/Hero/index";
import HeroSection from '../Sections/HeroSection/index';
// import Summary from '../Sections/Summary/index';
import About from "../Sections/About/index";
import Services from "../Sections/Services/index";
import Testimonials from "../Sections/Testimonials/index";
import Contact from "../Sections/Contact/index";
import styled from "styled-components";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* position: relative; */
`;

const Home = () => {
  return (
    <Container>
      <HeroSection />
      {/* <Summary/> */}
      {/* <HeroSection /> */}
      <About />
      <Services />
      <Testimonials />
      <Contact />
    </Container>
  );
};

export default Home;
