import React, { useCallback, useEffect, useState } from "react";
import {
  ByBottomAdd,
  ByBottomArea,
  ByBottomCardArea,
  ByBottomCardTitle,
} from "./ShareMainComponent";
import { ReactComponent as ShareCardAdd } from "../../assets/images/Svg/ShareCardAdd.svg";
import ByBottomCard from "./ByBottomCard";
import { useNavigate } from "react-router";

function ByBottomDragContainer({
  byCardList,
  openCardFunc,
  openModal,
  isOn,
  setisOn,
}) {
  const [cards, setCards] = useState(byCardList);
  useEffect(() => {
    setCards(byCardList);
  }, [byCardList]);
  const navigate = useNavigate();
  // console.log("1차" + isOn);
  const [newOn, setNewOn] = useState(true);
  useEffect(() => {
    setNewOn(!newOn);
  }, [isOn]);
  // console.log("바깥 콘솔" + newOn);

  const moveCard = useCallback((dragIndex, hoverIndex) => {
    setCards((prevCards) => {
      const newCards = [...prevCards];
      const draggedCard = newCards[dragIndex];

      newCards.splice(dragIndex, 1);
      newCards.splice(hoverIndex, 0, draggedCard);
      console.log("카드 움직임");
      //이 자리에서 백으로 넘기면 되겠다.

      //axios
      return newCards;
    });
  }, []);
  const renderCard = useCallback((card, index, newOn) => {
    return (
      <ByBottomCard
        index={index}
        key={index}
        id={card.memberByNumber}
        moveCard={moveCard}
        openCardFunc={openCardFunc}
        openModal={openModal}
        card={card}
        isOn={newOn}
        setisOn={setisOn}
      />
    );
  }, []);

  const clickTest = (props) => {
    navigate("/myCardList");
  };
  return (
    <ByBottomArea>
      {cards ? cards.map((card, index) => renderCard(card, index, newOn)) : ""}
      <ByBottomCardArea style={{ background: "none" }}>
        <ByBottomAdd>
          <ShareCardAdd onClick={clickTest}></ShareCardAdd>
        </ByBottomAdd>
      </ByBottomCardArea>
    </ByBottomArea>
  );
}

export default ByBottomDragContainer;
