import React from "react";
import { useNavigate } from "react-router-dom";
import "./corner.css";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Corner = () => {
  const navigate = useNavigate();
  return (
    <div className="student">
      <Card>
        <Card.Header>Hey you are at the rightspot!</Card.Header>
        <Card.Body>
          <Card.Text>FILL ALL THE DETAILS OF THE ITEMS FOUND HERE</Card.Text>
          <Button
            variant="primary"
            onClick={() => {
              navigate("/student/corner/lost");
            }}
          >
            Click here
          </Button>
          <Card.Text>CLICK HERE TO FIND ANY ITEMS THAT YOU MISSED!</Card.Text>
          <Button
            variant="primary"
            onClick={() => {
              navigate("/student/corner/found");
            }}
          >
            Click here
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Corner;
