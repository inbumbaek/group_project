import "../App.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


const Dashboard = () => {
  const [allPlants, setAllPlants] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/plant")
      .then((response) => {
        setAllPlants(response.data);
      })
      .catch((err) => {});
  }, []);

  const handleDelete = (idFromBelow) => {
    axios
      .delete(`http://localhost:8000/api/plant/${idFromBelow}`)
      .then((response) => {
        const updatedPlants = allPlants.filter(
          (plant) => plant._id !== idFromBelow
        );
        setAllPlants(updatedPlants);
      })
      .catch((err) => {});
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
    <div className="dashboard-container">
      <div className="dashboard">
        {/* --------------------NAV BAR--------------------------------------- */}

        <div className="navBar-welcome">
          <div className="img-welcome">
            <div>
              <img
                src="../images/RealPlant1.jpg"
                alt="Plant Icon"
                className="DashboardImage"
              />
            </div>
            <div>
              <h1>Sell your Plants here!</h1>
              <p>Plant gonna make people Happy.</p>
              <Link to="/plant/new" className="button-62">
                Sell your Plant
              </Link>
            </div>
          </div>
        </div>
        {/* ------------------------TABLE---------------------------------- */}
        <table className="table table-bordered table-hover mt-3">
          <thead>
            <tr>
              <th>Plants</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {allPlants.map((plant, index) => {
              return (
                <tr key={plant._id}>
                  <td>
                    <img
                      src="../images/PlantIcon1.png"
                      alt="Plant Icon"
                      style={{ width: "40px", height: "40px" }}
                    />{" "}
                    {plant.name}
                  </td>
                  <td>${plant.price.toFixed(2)}</td>
                  <td>
                    <a href={`/plant/${plant._id}`}>
                      <img
                        src="../images/Info.png"
                        alt="Clickable Image"
                        style={{ width: "40px", height: "40px" }}
                      />
                    </a>
                    <Link
                      className="button-62"
                      onClick={() => handleDelete(plant._id)}
                      style={{ marginRight: "10px" }}
                    >
                      Buy Plant
                    </Link>

                    <Link to={`/plant/${plant._id}/edit`} className="button-62">
                      Edit
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* ----------CARD---------- */}
      <div className="flex-container">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="../images/d-4.jpg" />

              <p className="title">Brussel's Dwarf Hawaiian </p>
              <p>Flip Me!</p>
            </div>
            <div className="flip-card-back">
              <p>
                Heptapleurum arboricola is a flowering plant in the family
                Araliaceae, native to Taiwan and Hainan Province, China.
              </p>
            </div>
          </div>
        </div>
        {/* ----------CARD---------- */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="../images/d-2.jpg" />
              <p className="title">Cathedral Window Haworthia</p>
              <p>Flip Me!</p>
            </div>
            <div className="flip-card-back">
              <p>
                Haworthia cymbiformis is a species of the genus Haworthia in the
                family Asphodelaceae, endemic to the Eastern Cape Province in
                South Africa.
              </p>
            </div>
          </div>
        </div>
        {/* ----------CARD---------- */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="../images/d-1.jpg" />

              <p className="title">Haworthia limifolia Marloth</p>
              <p>Flip Me! </p>
            </div>
            <div className="flip-card-back">
              <p>
                Aristaloe is a genus of evergreen flowering perennial plants in
                the family Asphodelaceae from Southern Africa. Its sole species
                is Aristaloe aristata, known as guinea-fowl aloe or lace aloe
              </p>
            </div>
          </div>
        </div>
        {/* ----------CARD---------- */}
      </div>
      <br/>
      <button className="button-62" onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
