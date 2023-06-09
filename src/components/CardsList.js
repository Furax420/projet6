// CardsList.js
import React from "react";
import Card from "./Card";
import data from "../data/data.json";
function CardsList() {
  return (
    <section className="cards-list">
      {data.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          cover={item.cover}
        />
      ))}
    </section>
  );
}

export default CardsList;
