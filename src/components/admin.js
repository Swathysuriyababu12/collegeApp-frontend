import React, { useState } from "react";

import "./sign.css";
import { useNavigate } from "react-router-dom";
const Admin = () => {
  //const UserContext = createContext();
  //const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();
  const [password, setPasword] = useState("");
  const [email, setEmail] = useState("");

  const postData = (e) => {
    e.preventDefault();
    var axios = require("axios");
    var data = JSON.stringify({
      email: email,
      password: password,
    });

    var config = {
      method: "post",
      url: "https://collegeapiapp.herokuapp.com/api/user/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        navigate("/admin");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="login">
      <form onSubmit={postData}>
        <h3>Admins log in here</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPasword(e.target.value)}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Admin;
