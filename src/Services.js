import './Services.css';
import {Container, Row, Col, Card} from 'react-bootstrap';
import webdev from './media/img/webdev.png';
import webdev2 from './media/img/webdev2.png';
import softwareEng from './media/img/softwareengineer.png';


function Services() {
  return (
    <section id="Services" className="Services-Container">

      <div className="Services-Content">
        <Row>
          <Col xs={12} sm={12} md={12} lg={4} className="Service-Col">
            <Card className="pt-5 pb-5 service-card">
              <Card.Body className="service-card-body">
                <div className="mb-3"><img src={webdev} width="50" height="50" alt="web dev"></img></div>
                <Card.Title className='service-card-title'>Web Design & Development</Card.Title>
                
                <Card.Text className="text-muted service-text">
                 Clean, readable, modern designs - optimized for performance, SEO, and turning users to customers.
                </Card.Text>

              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={12} lg={4} className="Service-Col">
            <Card className="pt-5 pb-5 service-card">
              <Card.Body className="service-card-body">
              <div className="mb-3"><img src={webdev2} width="50" height="50" alt="web dev 2"></img></div>

                <Card.Title className='service-card-title'>Backend Development</Card.Title>
                
                <Card.Text className="text-muted service-text">
                  Creating clean, robust, and secure work for servers, applications, and databases such as database Design, endpoints, and API.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={12} lg={4} className="Service-Col">
            <Card className="pt-5 pb-5 service-card">
              <Card.Body className="service-card-body">
                <div className="mb-3"><img src={softwareEng} width="50" height="50" alt="web dev"></img></div>
                
                <Card.Title className='service-card-title'>Software Engineering</Card.Title>
                
                <Card.Text className="text-muted service-text">
                  Working on the latest technology stacks to design scalable and reliable software solutions for any business problems.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
  
    </section>
  );
}

export default Services;