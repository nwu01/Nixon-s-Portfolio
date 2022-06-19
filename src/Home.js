import './Home.css';
import {Navbar, Nav, Container, NavDropdown,} from 'react-bootstrap';
import Typewriter from 'typewriter-effect';

import logo from './media/img/nixon_logo_black.png';
import logo2 from './media/img/nixon_logo_white.png';



function Home() {
  return (
    <div id="Home" className="Home-Container">
      <div className="Navbar-Container">
      <Navbar className="Navbar-Content" expand="lg" fixed="top">

        <Navbar.Brand href="#home">
          <img id="logo" alt="nixon" src={logo2}></img>
        </Navbar.Brand>

        <Nav className="me-auto" navbarScroll></Nav>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="toggler"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Services">Services</Nav.Link>
            <Nav.Link href="#Skills">Skills</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
            <Nav.Link href="#Footer">Media</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>

      <div className="Home-Content">
        <Typewriter
            onInit={(typewriter) => {
              // typewriter.typeString("Hi I'm <strong>Nixon Wu</strong>. ")
              // .pauseFor(1000)
              // typewriter.typeString("Software Developer.")
              // .start();
              typewriter
                .pauseFor(1000)
                .typeString("Hi I'm <strong class='typewriter-keywords'>Nixon Wu</strong>. I'm a <strong class='typewriter-keywords'>Software Developer</strong>.")
                .pauseFor(800)
                .deleteChars(19)
                .typeString("<strong class='typewriter-keywords'>Full Stack Developer</strong>.")
                .pauseFor(800)
                .deleteChars(21)
                .typeString("<strong class='typewriter-keywords'>Software Engineer</strong>.")
                .start();
             }}
        />
        {/* <img src={logo}></img>
        <img src={logo2}></img> */}


      </div>
    </div>
  );
}

export default Home;