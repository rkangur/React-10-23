import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import ContactUs from './pages/ContactUs.js';
import NotFound from './pages/NotFound';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Footer from "./pages/Footer.js";
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  const changeLangEn = () => {
    i18n.changeLanguage("en");
    localStorage.setItem("language", "en");
  }

  const changeLangEe = () => {
    i18n.changeLanguage("ee");
    localStorage.setItem("language", "ee");
  }

  return (
    <div className="App">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@700&display=swap');
      </style>

    <Navbar collapseOnSelect expand="lg" className="navBar">
          <Container>
            <Navbar.Brand as={Link} to="/">Kangur Photography</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"> 
                <Nav.Link as={Link} to="/about">{t("nav.about")}</Nav.Link>
                <Nav.Link as={Link} to="/portfolio">{t("nav.portfolio")}</Nav.Link>
                <Nav.Link as={Link} to="/contact">{t("nav.contact")}</Nav.Link>
              </Nav>
            </Navbar.Collapse>
              <Nav>
                  <img className='lang' src="/estonia.png" alt="" onClick={changeLangEe}/>
                  <img className='lang' src="/united-kingdom.png" alt="" onClick={changeLangEn}/>
              </Nav>
          </Container>
        </Navbar>
        
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
