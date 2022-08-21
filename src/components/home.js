import "../App.css";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
const Header = () => {
  useEffect(() => {}, []);

  return (
    <Alert variant="info">
      <Alert.Heading>Hello,Welcome to your Account</Alert.Heading>

      <hr />
    </Alert>
  );
};

const LostAndFound = () => {
  const navigate = useNavigate();
  return (
    <div className="studentPage">
      <Card>
        <Card.Header>LOST AND FOUND CORNER</Card.Header>
        <Card.Body>
          <Card.Title>
            So, you’ve found an item and are not sure where you’re supposed to
            report it?
          </Card.Title>
          <Card.Text>
            A small help from you can mean the world to another!
          </Card.Text>
          <Button
            variant="primary"
            onClick={() => {
              navigate("/student/corner");
            }}
          >
            Take me there
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

const Campus = () => {
  const navigate = useNavigate();
  return (
    <div className="studentPage">
      <Card>
        <Card.Header>KEEP CAMPUS CLEAN!</Card.Header>
        <Card.Body>
          <Card.Title>Cleanliness is next to godliness they say!</Card.Title>
          <Card.Text>Click here to raise a query</Card.Text>
          <Button
            variant="primary"
            onClick={() => {
              navigate("/student/issue");
            }}
          >
            Your Query here!
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

const Canteen = () => {
  const navigate = useNavigate();
  return (
    <div className="mentorD">
      <Card>
        <Card.Header>CANTEEN</Card.Header>
        <Card.Body>
          <Card.Title>Get your orders ready at your class-door-step</Card.Title>
          <Card.Text>Place your orders before 1 hour</Card.Text>
          <Button
            variant="primary"
            onClick={() => {
              navigate("/mentor");
            }}
          >
            Order now
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

const Event = () => {
  //const navigate = useNavigate();
  return (
    <div className="assignMentor">
      <Card>
        <Card.Header>EVENT NOTIFICATIONS</Card.Header>
        <Card.Body>
          <Card.Title>KNOW MORE</Card.Title>
          <Card.Text>Any notification will appear here.</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export { LostAndFound, Header, Campus, Canteen, Event };
