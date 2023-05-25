import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const DetailPlant = (props) => {
  const [plant, setPlant] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/plant/" + id)
      .then((res) => {
        console.log(res.data);
        setPlant(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const logout = () => {
    axios.post('http://localhost:8000/api/logout', {}, {withCredentials:true})
    .then((res) => {
        navigate('/')
    })
    .catch((err) => {
        console.log(err);
    })
}

  return (
    <div className="show-details-container">
      <div className="show-details">
        <div className="navBar">
          <div className="navBar-PlantName">
            <div>
              <img src="../images/PlantIcon1.png" alt="Plant Icon" />
            </div>
            <h1 style={{ marginLeft: "10px" }}> {plant.name}</h1>
          </div>
          <div className="navBar1">
            <Link className="button-62" to="/dashboard">
            Home
            </Link>
            <button className="button-62" onClick={logout}>Logout</button>
          </div>
        </div>

        <div>
          <h5>
            {" "}
            <img
              src="../images/Sun.png"
              alt="Plant Icon"
              style={{ width: "40px", height: "40px" }}
            />{" "}
            {plant.lighting} | ${plant.price}
          </h5>
          <hr />
          <h5>Care Instructions & Info:</h5>
          <p>{plant.description}</p>
          <hr />
          <h5>Seller's Contact:</h5>
          <h5 className="show-description">Name: {plant.sellerName}</h5>
          <h5 className="show-description">Email: {plant.sellerEmail}</h5>
          <hr />
          <div className="edit-buttons">
            <div>
              <Link to={`/plant/${plant._id}/edit`} className="button-62">
                Edit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailPlant;
