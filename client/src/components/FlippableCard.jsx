import React, { useState } from "react";

const FlippableCard = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`flippable-card ${isFlipped ? "flipped" : ""}`}
      onClick={handleClick}
    >
      <div className="card-front">{frontContent}</div>
      <div className="card-back">{backContent}</div>
    </div>
  );
};

const FlippableCardContainer = () => {
  const cards = [
    { frontContent: "Card 1 Front", backContent: "Card 1 Back" },
    { frontContent: "Card 2 Front", backContent: "Card 2 Back" },
    { frontContent: "Card 3 Front", backContent: "Card 3 Back" },
    { frontContent: "Card 4 Front", backContent: "Card 4 Back" },
    { frontContent: "Card 5 Front", backContent: "Card 5 Back" },
    { frontContent: "Card 6 Front", backContent: "Card 6 Back" },
  ];

  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <FlippableCard
          key={index}
          frontContent={card.frontContent}
          backContent={card.backContent}
        />
      ))}
    </div>
  );
};

export default FlippableCardContainer;
