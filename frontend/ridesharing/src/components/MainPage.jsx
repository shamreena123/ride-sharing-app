import React from 'react';
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './MainPage.css'; 
import AppNavbar from './AppNavbar'; 
import AppFooter from './AppFooter'; 

const MainPage = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <AppNavbar/>

      <Carousel>
        <Carousel.Item>
          <img className="slide" src="taxi1.jpg" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="slide" src="taxi2.jpg" alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="slide" src="taxi3.jpg" alt="Third slide" />
        </Carousel.Item>
      </Carousel>

      <Container className="my-5">
        <Row>
          <Col md={4}>
            <div className="ride-option">
              <img src="bike.jpg" alt="Bike Ride" />
              <h5>Bike Ride</h5>
            </div>
          </Col>
          <Col md={4}>
            <div className="ride-option">
              <img src="car.jpg" alt="Car Ride" />
              <h5>Car Ride</h5>
            </div>
          </Col>
          <Col md={4}>
            <div className="ride-option">
              <img src="auto.jpg" alt="Auto Ride" />
              <h5>Auto Ride</h5>
            </div>
          </Col>
        </Row>
        <Link to="/book-ride" style={{ textDecoration: 'none' }}> 
          <Button 
            variant="warning" 
            className="mt-4 d-block mx-auto" 
            style={{ width: '50%', height: '60px' }}
          > 
            Book your ride!
          </Button>
          </Link>
      </Container>

      <AppFooter /> 
    </div>
  );
};

export default MainPage;
