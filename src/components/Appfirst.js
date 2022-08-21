import "../App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Alert } from "react-bootstrap";
import SignUp from "./SignUp";
import Login from "./login";
import Admin from "./admin";

const Appfirst = () => {
  return (
    <>
      <div className="header">
        <Alert variant="info">
          <Alert.Heading>Welcome to XYZ college of Engineering</Alert.Heading>

          <hr />
        </Alert>
      </div>
      <div className="App">
        <SignUp />
        <div className="wrap">
          <Admin />
          <Login />
        </div>
      </div>
    </>
  );
};

export default Appfirst;
