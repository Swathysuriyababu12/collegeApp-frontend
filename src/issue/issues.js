import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import "../lost/corner.css";
const Issue = () => {
  const [item, setItem] = useState("");

  const [itemDesc, setItemDesc] = useState("");
  const [contact, setContact] = useState("");

  const navigate = useNavigate();
  const postData = (e) => {
    e.preventDefault();

    var dataN = JSON.stringify({
      complaint: itemDesc,
    });

    var config = {
      method: "post",
      url: "https://collegeapiapp.herokuapp.com/api/complaints/post",
      headers: {
        "Content-Type": "application/json",
      },
      data: dataN,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        navigate("/succes");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="sign">
      <form onSubmit={postData}>
        <h3>your complaints here</h3>
        <div className="mb-3">
          <label>name</label>
          <input
            type="text"
            className="form-control"
            placeholder="your name"
            value={item}
            onChange={(e) => {
              setItem(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label>Type your issue here</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter details"
            value={itemDesc}
            onChange={(e) => {
              setItemDesc(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label>Enter your mobile/email(optional)</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter contact"
            value={contact}
            onChange={(e) => {
              setContact(e.target.value);
            }}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Post details
          </button>
        </div>
      </form>
    </div>
  );
};

export default Issue;
