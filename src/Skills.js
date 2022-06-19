import './Skills.css';
import {Container, Row, Col, Card} from 'react-bootstrap';




// Language
import java from './media/img/icons8-java-480.png';
import cSharp from './media/img/icons8-c-sharp-logo-480.png';
import javascript from './media/img/icons8-javascript-480.png';
import html from './media/img/icons8-html-480.png';
import sql from './media/img/icons8-sql-96.png';


// Frameworks
import react from './media/img/icons8-react-native-480.png';
import nodejs from './media/img/icons8-nodejs-480.png';
import bootstrap from './media/img/icons8-bootstrap-480.png';

// Cloud
import azure from './media/img/icons8-azure-480.png';
import firebase from './media/img/icons8-firebase-480.png';
import heroku from './media/img/icons8-heroku-480.png';

// Tools
import git from './media/img/icons8-git-480.png';
import github from './media/img/icons8-github-384.png';
import postman from './media/img/icons8-postman-96.png';
import mongodb from './media/img/icons8-mongodb-480.png';

// xs < 576
// sm >= 576
// md => 768
// lg => 992
// xl > 1200
function Skills() {
  return (
    <div id="Skills" className="Skills-Container">

      <div className="Skills-Content">
        
        <Row style={{justifyContent:'center'}}>   
          <Col xs={12} sm={12} md={12} lg={6} xl={6} className="skill-card-container mb-2">
            <Card className="pt-5 pb-5 skill-card">
              <Card.Body>
              <Card.Title className="skill-title">Web & Software</Card.Title>
                <Row>

                  <Col>
                    <div className="mb-3">
                      <img className="skill-icon" src={java} width="75" height="75" alt="web dev"></img>
                    </div>
                    <Card.Title className="icon-name">Java</Card.Title>
                  </Col>

                  <Col>
                    <div className="mb-3">
                      <img className="skill-icon" src={cSharp} width="75" height="75" alt="web dev"></img>
                    </div>
                    <Card.Title className="icon-name">C#</Card.Title>
                  </Col>

                  <Col>
                    <div className="mb-3">
                      <img className="skill-icon" src={javascript} width="75" height="75" alt="web dev"></img>
                    </div>
                    <Card.Title className="icon-name">JavaScript</Card.Title>
                  </Col>

                  <Col>
                    <div className="mb-3">
                      <img className="skill-icon" src={html} width="75" height="75" alt="web dev"></img>
                    </div>
                    <Card.Title className="icon-name">HTML</Card.Title>
                  </Col>

                  <Col>
                    <div className="mb-3">
                      <img className="skill-icon" src={sql} width="75" height="75" alt="web dev"></img>
                    </div>
                    <Card.Title className="icon-name">SQL</Card.Title>
                  </Col>

                  {/* <Col>
                    <div className="mb-3">
                      <img className="skill-icon" src={rstudio} width="75" height="75" alt="web dev"></img>
                    </div>
                    <Card.Title className="icon-name">RStudio</Card.Title>
                  </Col> */}

                  
                </Row>

              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={12} md={12} lg={6} xl={6} className="skill-card-container mb-2">
            <Card className="pt-5 pb-5 skill-card">
              <Card.Body>
              <Card.Title className="skill-title">Frameworks/Libraries</Card.Title>
              <Row>
                  <Col>
                    <div className="mb-3">
                      <img className="skill-icon" src={react} width="75" height="75" alt="web dev"></img>
                    </div>
                    <Card.Title className="icon-name">React</Card.Title>
                  </Col>
                  <Col>
                    <div className="mb-3">
                      <img className="skill-icon" src={nodejs} width="75" height="75" alt="web dev"></img>
                    </div>
                    <Card.Title className="icon-name">Node</Card.Title>
                  </Col>
                  <Col>
                    <div className="mb-3">
                      <img className="skill-icon" src={bootstrap} width="75" height="75" alt="web dev"></img>
                    </div>
                    <Card.Title className="icon-name">Bootstrap</Card.Title>
                  </Col>
                </Row>
        
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={12} md={12} lg={6} xl={6} className="skill-card-container mb-2">
            <Card className="pt-5 pb-5 skill-card">
              <Card.Body>
              <Card.Title className="skill-title">Cloud Services</Card.Title>
              <Row>
                  <Col>
                    <div className="mb-3">
                      <img className="skill-icon" src={azure} width="75" height="75" alt="web dev"></img>
                    </div>
                    <Card.Title className="icon-name">Azure</Card.Title>
                  </Col>
                  <Col>
                    <div className="mb-3">
                      <img className="skill-icon" src={heroku} width="75" height="75" alt="web dev"></img>
                    </div>
                    <Card.Title className="icon-name">Heroku</Card.Title>
                  </Col>
                  <Col>
                    <div className="mb-3">
                      <img className="skill-icon" src={firebase} width="75" height="75" alt="web dev"></img>
                    </div>
                    <Card.Title className="icon-name">Firebase</Card.Title>
                  </Col>
                </Row>

              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={12} md={12} lg={6} xl={6} className="skill-card-container mb-2">
            <Card className="pt-5 pb-5 skill-card">
              <Card.Body>
              <Card.Title className="skill-title">Development Tools</Card.Title>
              <Row>
                  <Col>
                    <div className="mb-3">
                      <img className="skill-icon" src={git} width="75" height="75" alt="web dev"></img>
                    </div>
                    <Card.Title className="icon-name">Git</Card.Title>
                  </Col>
                  <Col>
                    <div className="mb-3">
                      <img className="skill-icon" src={github} width="75" height="75" alt="web dev"></img>
                    </div>
                    <Card.Title className="icon-name">GitHub</Card.Title>
                  </Col>
                  <Col>
                    <div className="mb-3">
                      <img className="skill-icon" src={postman} width="75" height="75" alt="web dev"></img>
                    </div>
                    <Card.Title className="icon-name">Postman</Card.Title>
                  </Col>
                  <Col>
                    <div className="mb-3">
                      <img className="skill-icon" src={mongodb} width="75" height="75" alt="web dev"></img>
                    </div>
                    <Card.Title className="icon-name">MongoDB</Card.Title>
                  </Col>
                </Row>

              </Card.Body>
            </Card>
          </Col>

        </Row>

      </div>
      
    </div>
  );
}

export default Skills;