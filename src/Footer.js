import './Footer.css';
import {Container, Row, Col} from 'react-bootstrap';
import linkedin from './media/img/icons8-linkedin-circled-50.png';

function Footer() {
  return (
    <div id="Footer" className="Footer-Container">
      <Container className="Footer-Content">

        <Row className="Footer-row gx-0 mt-2 text-white" style={{fontSize:"14px"}}>
            <Col md={{ span: 3, offset: 0 }}>{``}</Col>
            <Col md={{ span: 6, offset: 0 }} className="sm-col-list">
                <ul className="footer-sm">
                    <li>
                        <a href="https://github.com/nwu01"><i class="fab fa-github icon"></i></a>
                    </li>

                    <li>
                        <a href="https://www.linkedin.com/in/nixonwu/"><i class="fab fa-linkedin-in icon"></i></a>
                    </li>

                </ul>
            </Col>
            <Col md={{ span: 3, offset: 0 }}>{``}</Col>
        </Row>


        <Row className="Footer-row gx-0 mt-2 text-white" style={{fontSize:"14px"}}>
            <Col md={{ span: 3, offset: 0 }}>{``}</Col>
            <Col md={{ span: 6, offset: 0 }}>&copy; 2022 All rights reserved. Nixon Wu.</Col>
            <Col md={{ span: 3, offset: 0 }}>{``}</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;