import React, { useRef } from "react";
import {
  ByBottomBtn,
  ByBottomCardArea,
  ByBottomCardTitle,
  ByBottomDesc,
  ByBottomImg,
} from "./ShareMainComponent";
import { ReactComponent as LearnMoreArrow } from "../../assets/images/Svg/LearnMoreArrow.svg";

import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "../Drag/ItemTypes";
import { Link } from "react-router-dom";

function ByBottomCard({ id, index, moveCard, text }) {
  const ref = useRef(null);
  const [{ handlerId }, drop] = useDrop({
    accept: ItemTypes.ByCARD,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      //안바뀌는 경우 그냥 return
      if (dragIndex === hoverIndex) {
        return;
      }
      //스크린에서 사각형 결정
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      //수직 중간. 수평도 필요함
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      //마우스 위치 결정?
      const clientOffset = monitor.getClientOffset();
      //top부터 픽셀 얻기
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      // 마우스가 아이템을 절반 이상 넘어갔을 때만 수행
      // 아래로 내리는 경우 절반 판단
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // 위로 올리는 경우 절반 판단
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      //실제로 움직이기
      moveCard(dragIndex, hoverIndex);
      //인덱스 검색 성능 위함?
      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.ByCARD,
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0.5 : 1;
  drag(drop(ref));
  return (
    <ByBottomCardArea ref={ref} style={{ opacity }} data-handler-id={handlerId}>
      {/* 여기에 카드 내용 */}
      내용내용
      <ByBottomCardTitle>
        제목
        {text}
        {/* {card.memberCardByNickname} */}
      </ByBottomCardTitle>
      <ByBottomImg
        //   src={card.byCard.byImagePath}
        src={
          "https://maah-s3.s3.ap-northeast-2.amazonaws.com/Cards/sparkle.png"
        }
      ></ByBottomImg>
      <ByBottomDesc>혜택 내용</ByBottomDesc>
      <Link
        to="/myByCardDetail"
        //   state={{ memberByNumber: card.memberByNumber }}
        style={{
          textDecoration: "none",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ByBottomBtn>
          {text}Learn More
          <LearnMoreArrow />
        </ByBottomBtn>
      </Link>
    </ByBottomCardArea>
  );
}

export default ByBottomCard;
