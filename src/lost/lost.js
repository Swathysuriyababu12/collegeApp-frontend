import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Toast from "react-bootstrap/Toast";
import axios from "axios";
import "./corner.css";
const LostDetails = () => {
  const [item, setItem] = useState("");
  const [place, setPlace] = useState("");
  const [itemDesc, setItemDesc] = useState("");
  const [contact, setContact] = useState("");
  const [pic, setPic] = useState();
  const navigate = useNavigate();
  const postData = (e) => {
    e.preventDefault();

    var dataN = JSON.stringify({
      item: item,
      contact: contact,
      itemDesc: itemDesc,
      place: place,
      pic: pic,
    });

    var config = {
      method: "post",
      url: "https://collegeapiapp.herokuapp.com/api/user/lost",
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

  const postDetails = (pics) => {
    if (pics === undefined) {
      if (pics.type === "image/jpeg" || pics.type === "image/png") {
        const data = new FormData();
        data.append("file", pics);
        data.append("upload_preset", "streak");
        data.append("cloud_name", "dwustzgek");
        fetch("https://api.cloudinary.com/v1_1/dwustzgek/image/upload", {
          method: "post",
          body: data,
        })
          .then((res) => res.json())
          .then((data) => {
            setPic(data.url.toString());
            console.log(data.url.toString());
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        return (
          <Toast>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto"></strong>
              <small>1 mins ago</small>
            </Toast.Header>
            <Toast.Body>picture not uploaded.</Toast.Body>
          </Toast>
        );
      }
    }
  };

  return (
    <div className="sign">
      <form onSubmit={postData}>
        <h3>Fill up the details below</h3>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Item"
            value={item}
            onChange={(e) => {
              setItem(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label>Item description</label>
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
          <label>place where you found</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter place"
            value={place}
            onChange={(e) => {
              setPlace(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label>Enter your mobile/email</label>
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
        <div className="mb-3">
          <label>Picture of the item</label>
          <input
            type="file"
            className="form-control"
            placeholder="select file"
            value={pic}
            onChange={(e) => postDetails(e.target.files[0])}
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

export default LostDetails;
