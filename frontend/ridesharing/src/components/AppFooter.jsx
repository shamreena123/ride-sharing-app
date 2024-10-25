import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AppFooter = () => {
  return (<div >
    <footer className="footer" style={{backgroundColor:'black', color:'white'}}>
      <Container>
        <Row>
          <Col md={4}>
            <h5>Contact</h5>
            <p>Email: info@ridesharingapp.com</p>
            <p>Phone: +1234567890</p>
          </Col>
          <Col md={4}>
            <h5>Headquarters</h5>
            <p>Phagwara</p>
            <p>Jalandhar, Punjab, 144402</p>
          </Col>
          <Col md={4}>
            <h5>About Us</h5>
            <p>We provide the best ride-sharing services in town.</p>
          </Col>
        </Row>
      </Container>
    </footer>
    </div>
  );
};

export default AppFooter;
