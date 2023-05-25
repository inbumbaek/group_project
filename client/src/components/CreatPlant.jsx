import "./Style.css";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CreatePlant = () => {
  const [name, setName] = useState("");
  const [lighting, setLighting] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [sellerEmail, setSellerEmail] = useState("");

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/plant", {
        name,
        lighting,
        description,
        price,
        sellerName,
        sellerEmail,
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
          <h1>What Plants are you selling?</h1>
          <div className="navBar1">
            <Link className="button-62" to="/dashboard">
              Home
            </Link>
            <button className="button-62" onClick={logout}>Logout</button>
          </div>
        </div>
        <hr />{" "}
        <form onSubmit={handleSubmit}>
          {/* <-------------PLANT NAME------------> */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Plant Name
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
              value={name}
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
              onChange={(e) => setLighting(e.target.value)}
              value={lighting}
            >
              <option value="">Select Lighting</option>
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
              onChange={(e) => setDescription(e.target.value)}
              value={description}
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
            <div className="input-group">
            <span className="input-group-text">$</span>
            <input
              type="number"
              className="form-control"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
            </div>
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
              onChange={(e) => setSellerName(e.target.value)}
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
              onChange={(e) => setSellerEmail(e.target.value)}
              value={sellerEmail}
            />
            {errors.sellerEmail ? (
              <p className="error-message">{errors.sellerEmail.message}</p>
            ) : null}
          </div>
          {/* <------------END OF INPUT FORM----------> */}
          <button type="submit" className="button-62">
            Sell Plant
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePlant;
