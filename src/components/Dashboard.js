import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import '../styles/Dashboard.css';

const Dashboard = () => {
  return (
    <Container fluid>
      <Row className="mt-4">
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Total Users</Card.Title>
              <Card.Text>100</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Total Sales</Card.Title>
              <Card.Text>$5000</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Pending Orders</Card.Title>
              <Card.Text>15</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
