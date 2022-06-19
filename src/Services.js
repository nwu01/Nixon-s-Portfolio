import './Services.css';
import {Container, Row, Col, Card} from 'react-bootstrap';
import webdev from './media/img/webdev.png';
import webdev2 from './media/img/webdev2.png';
import softwareEng from './media/img/softwareengineer.png';


function Services() {
  return (
    <div id="Services" className="Services-Container">

      <div className="Services-Content">
        <Row>
          <Col xs={12} sm={12} md={6} lg={4} className="mb-2">
            <Card className="pt-5 pb-5 service-card">
              <Card.Body>
                <div className="mb-3"><img src={webdev} width="50" height="50" alt="web dev"></img></div>
                <Card.Title>Web Design & Development</Card.Title>
                
                <Card.Text className="text-muted">
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>

              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} className="mb-2">
            <Card className="pt-5 pb-5 service-card">
              <Card.Body>
              <div className="mb-3"><img src={webdev2} width="50" height="50" alt="web dev 2"></img></div>

                <Card.Title>Backend Development</Card.Title>
                
                <Card.Text className="text-muted">
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} className="mb-2">
            <Card className="pt-5 pb-5 service-card">
              <Card.Body >
                <div className="mb-3"><img src={softwareEng} width="50" height="50" alt="web dev"></img></div>
                
                <Card.Title className="mb-2">Software Engineering</Card.Title>
                
                <Card.Text className="text-muted">
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
  
    </div>
  );
}

export default Services;