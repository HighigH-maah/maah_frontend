import React, { useCallback, useState } from "react";
import {
  ByBottomArea,
  ByBottomCardArea,
  ByBottomCardTitle,
} from "./ShareMainComponent";
import update from "immutability-helper";
import ByBottomCard from "./ByBottomCard";

function ByBottomDragContainer(props) {
  const [cards, setCards] = useState([
    {
      id: 1,
      text: "11111",
    },
    {
      id: 2,
      text: "22222",
    },
    {
      id: 3,
      text: "33333",
    },
  ]);
  const moveCard = useCallback((dragIndex, hoverIndex) => {
    setCards((prevCards) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      })
    );
  }, []);
  const renderCard = useCallback((card, index) => {
    return (
      <ByBottomCard
        key={card.id}
        index={index}
        id={card.id}
        text={card.text}
        moveCard={moveCard}
      />
    );
  }, []);
  return (
    <ByBottomArea>
      {cards.map((card, index) => renderCard(card, index))}
    </ByBottomArea>
  );
}

export default ByBottomDragContainer;
