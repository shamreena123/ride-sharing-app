import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import './AppNavbar.css';
import { FaUserCircle } from 'react-icons/fa';

const AppNavbar = () => {
  const [user, setUser] = useState(null); 
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
  };

  return (
    <Navbar bg="warning" variant="dark" expand="lg">
      <Container>
        <div style={{ width: '12%' }}>
          <Navbar.Brand as={Link} to="/">RideStorm</Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div style={{ width: '20%' }}>
            <Nav className="me-auto">
              <NavDropdown title="Menu" id="basic-nav-dropdown" className="dropdown">
                <NavDropdown.Item as={Link} to="/book-ride">Book Your Ride</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/about">About</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/contact">Contact Us</NavDropdown.Item>
                {user && (
                  <NavDropdown.Item as={Link} to="/my-orders">My Orders</NavDropdown.Item>
                )}
              </NavDropdown>
            </Nav>
          </div>
          <Nav>
            {user ? (
              <NavDropdown title={<FaUserCircle style={{ color: 'white', marginLeft: '90%', width: '3%' }} />} id="profile-nav-dropdown" align="end">
                <NavDropdown.ItemText>
                  <strong>{user.name}</strong>
                  <br />
                  {user.email}
                </NavDropdown.ItemText>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <div style={{ marginLeft: '65%', display: 'flex' }}>
                <Link style={{ width: '10%', padding: '0 25% 0 25%' }} to="/login" className="nav-link">Login</Link>
                <Link style={{ width: '10%', padding: '0 25% 0 25%' }} to="/register" className="nav-link">Signup</Link>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;



