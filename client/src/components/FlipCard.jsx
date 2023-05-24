import React from "react";

const FlipCard = () => {
  return (
    <div className="container">
      {/* ----------CARD---------- */}
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
              the family Asphodelaceae from Southern Africa. Its sole species is
              Aristaloe aristata, known as guinea-fowl aloe or lace aloe
            </p>
          </div>
        </div>
      </div>
      {/* ----------CARD---------- */}
    </div>
  );
};

export default FlipCard;
