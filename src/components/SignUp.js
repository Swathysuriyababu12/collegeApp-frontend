import React, { useState } from "react";
//import { Link, useNavigate } from "react-router-dom";
//import axios from "axios";
import "./sign.css";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [year, setYear] = useState("");
  const [dept, setDept] = useState("");
  const [roll, setRoll] = useState("");
  //const navigate = useNavigate();

  const postData = (e) => {
    e.preventDefault();
    var axios = require("axios");
    var data = JSON.stringify({
      name: name,
      email: email,
      year: year,
      dept: dept,
      rollNumber: roll,
      password: password,
    });

    var config = {
      method: "post",
      url: "https://collegeapiapp.herokuapp.com/api/user/register",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="sign">
      <form onSubmit={postData}>
        <h3>New User? Sign up here</h3>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label>Select year</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter year"
            value={year}
            onChange={(e) => {
              setYear(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label>Department</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter dept"
            value={dept}
            onChange={(e) => {
              setDept(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label>Roll</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter roll number"
            value={roll}
            onChange={(e) => {
              setRoll(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          {/* Already registered <Link to="/login">sign in?</Link> */}
        </p>
      </form>
    </div>
  );
};

export default SignUp;
