import './App.css';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import Header from './header/Header';
import ContentIntro from './content/sectionIntro/ContentIntro';
import SectionProfile from './content/sectionProfile/SectionProfile';
import SectionContent from './content/sectionContent/SectionContent';
import Footer from './footer/Footer';

function App() {
  return (
    <AppBG className="App">
      <HeaderBG>
          <Container>
              <Header />
              <ContentIntro />
          </Container>
      </HeaderBG>
      <SectionProfile />
      <SectionContent />
      <Footer />
    </AppBG>
  );
}

const AppBG = styled.div`
  height: 100%;
  width: 100%;
`

const HeaderBG = styled.div`
    height: 100%;
    margin: 0 auto;
    background: url('images/Picture_Hero.png') no-repeat center center; 
    background-size: cover;
`

export default App;
