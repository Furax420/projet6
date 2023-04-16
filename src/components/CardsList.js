// CardsList.js
import React from "react";
import Card from "./Card";
import data from "./data.json";
function CardsList() {
  return (
    <div className="cards-list">
      {data.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          cover={item.cover}
        />
      ))}
    </div>
  );
}

export default CardsList;
