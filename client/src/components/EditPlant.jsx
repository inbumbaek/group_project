import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const EditPlant = (props) => {
  const { id } = useParams();
  const [plantName, setPlantName] = useState("");
  const [plantLighting, setPlantLighting] = useState("");
  const [plantDescription, setPlantDescription] = useState("");
  const [plantPrice, setPlantPrice] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [sellerEmail, setSellerEmail] = useState("");

  const [errors, setErrors] = useState({});
  const [plantNotFound, setPlantNotFound] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/plant/${id}`)
      .then((response) => {
        setPlantName(response.data.name);
        setPlantLighting(response.data.lighting);
        setPlantDescription(response.data.description);
        setPlantPrice(response.data.price);
        setSellerName(response.data.sellerName);
        setSellerEmail(response.data.sellerEmail);
      })
      .catch((err) => {
        setPlantNotFound(`Plant not found using that ID`);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:8000/api/plant/${id}`, {
        name: plantName,
        lighting: plantLighting,
        description: plantDescription,
        price: plantPrice,
        sellerName: sellerName,
        sellerEmail: sellerEmail,
      })
      .then((response) => {
        navigate("/dashboard");
      })
      .catch((err) => {
        setErrors(err.response.data.err.errors);
      });
  };

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
          <h1>{plantName}</h1>
          <Link className="button-62" to="/dashboard">
            Home
          </Link>
          <button className = "btn btn-primary" onClick={logout}>Logout</button>
        </div>
        <form onSubmit={handleSubmit}>
          {plantNotFound ? (
            <p>
              {plantNotFound} <Link to="/plant/sell">Sell a Plant?</Link>
            </p>
          ) : null}
          <div className="bodyBox">
            <div>
              {/* <-------------PLANT NAME------------> */}

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Plant Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setPlantName(e.target.value)}
                  value={plantName}
                />
                {errors.name ? (
                  <p className="error-message">{errors.name.message}</p>
                ) : null}
              </div>
              {/* <-------------Lighting-SELECTIONS-----------> */}
              <div className="mb-3">
                <label htmlFor="lighting" className="form-label">
                  Cardinal Direction
                </label>
                <select
                  className="form-control"
                  onChange={(e) => setPlantLighting(e.target.value)}
                  value={plantLighting}
                >
                  <option value="">Select Cardinal Direction</option>
                  <option value="South">South</option>
                  <option value="West">West</option>
                  <option value="East">East</option>
                  <option value="North">North</option>
                </select>
                {errors.lighting ? (
                  <p className="error-message">{errors.lighting.message}</p>
                ) : null}
              </div>
              {/* <------------DESCRIPTION-----------> */}
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Care Instructions & Info
                </label>
                <textarea
                  className="form-control"
                  onChange={(e) => setPlantDescription(e.target.value)}
                  value={plantDescription}
                  placeholder="Remember to give your plant the proper care it deserves."
                />
                {errors.description ? (
                  <p className="error-message">{errors.description.message}</p>
                ) : null}
              </div>

              {/* <------------PRICE-----------> */}
              <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  Sale Price
                </label>
                <input
                  type="number"
                  className="form-control"
                  onChange={(e) =>
                    setPlantPrice(e.target.value)
                  }
                  value={plantPrice}
                />
                {errors.price ? (
                  <p className="error-message">{errors.price.message}</p>
                ) : null}
              </div>
              <br />
              <hr />
              {/* <------------SELLER'S CONTACT-----------> */}
              <div className="mb-3">
                <h4>Your Contact Information</h4>
                <label htmlFor="sellerName" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  //   onChange={(e) => setSellerName(e.target.value)}
                  value={sellerName}
                />
                {errors.sellerName ? (
                  <p className="error-message">{errors.sellerName.message}</p>
                ) : null}
              </div>
              <div className="mb-3">
                <label htmlFor="sellerEmail" className="form-label">
                  Email Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  //   onChange={(e) => setSellerEmail(e.target.value)}
                  value={sellerEmail}
                />
                {errors.sellerEmail ? (
                  <p className="error-message">{errors.sellerEmail.message}</p>
                ) : null}
              </div>
            </div>
          </div>
          <button type="submit" className="button-62">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPlant;
