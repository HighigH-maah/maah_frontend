import React, { useState } from "react";
import styled from "styled-components";
import cardImg from "./icon/HICard.png";
import cardGradeImg from "./icon/bronze.png";
import phoneImg from "./icon/phone.png";
import trafficImg from "./icon/traffic.png";
import foodImg from "./icon/food.png";
import utilitiesImg from "./icon/utilities.png";
import hospitalImg from "./icon/hospital.png";
import leisureImg from "./icon/leisure.png";
import shoppingImg from "./icon/shopping.png";
import studyImg from "./icon/study.png";
import oilingImg from "./icon/oiling.png";
import cultureImg from "./icon/culture.png";
import airlineImg from "./icon/airline.png";
import travelImg from "./icon/travel.png";

import chevronDown from "./icon/chevronDown.png";
import chevronUp from "./icon/chevronUp.png";
import VirtualCardApply from "./VirtualCardApply";

const HiCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(180deg, #fffdfd 37.44%, #d7d7d7 100%);
  padding: 100px 0px;
  font-family: "M PLUS 1", sans-serif;
`;

const HiCardDetailOuterDiv = styled.div`
  box-sizing: border-box;
  padding: 5rem 10rem 5rem 10rem;
  width: 1500px;
  //height: 700px;
  align-items: center;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #ffffff -0%, #f0f0f0 100%);
  border-radius: 1rem;
`;

const HiCardDetailInnerDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

const HiCardDetailLeft = styled.div`
  margin: 2rem 5rem 2rem 5rem;
  box-sizing: border-box;
  padding: 0rem 3rem 0rem 3rem;
  height: 28rem;
  background-color: rgba(217, 217, 217, 0.200000003);
  border-radius: 50rem;

  img {
    width: 100%;
    height: 100%;
  }
`;

const HiCardDetailRight = styled.div`
  width: 36.5rem;
  height: 100%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;

  .name1 {
    margin-bottom: 0rem;
    font-size: 3rem;
    font-weight: 400;
    line-height: 0.5;
    color: #000000;
    font-family: Iceland, "Source Sans Pro";
    white-space: nowrap;
    flex-shrink: 0;
  }

  .name2 {
    display: flex;
    font-size: 1.5rem;
    font-weight: 400;
    color: #000000;
    font-family: Iceland, "Source Sans Pro";
    white-space: nowrap;
    flex-shrink: 0;
  }
`;

const HiCardMileage = styled.div`
  margin: 0rem 0rem 2rem 0rem;
  width: 100%;
  display: flex;
  align-items: center;
  flex-shrink: 0;

  .title {
    margin-right: 10rem;
    display: flex;
    font-size: 2.5rem;
    font-weight: 400;
    letter-spacing: -0.018rem;
    color: #000000;
    font-family: Iceland,"Source Sans Pro";
    white-space: nowrap;
    flex-shrink: 0;
}
  }

  .mileage {
    display: flex;
    font-size: 2.5rem;
    font-weight: 400;
    color: #000000;
    font-family: Iceland,"Source Sans Pro";
    white-space: nowrap;
    flex-shrink: 0;
}
  }
`;

const HiCardGrade = styled.div`
  margin-bottom: 2rem;
  width: 100%;
  display: flex;
  align-items: center;
  flex-shrink: 0;

  div {
    margin-right: 4rem;
    display: flex;
    font-size: 2.5rem;
    font-weight: 400;
    color: #000000;
    font-family: Iceland, "Source Sans Pro";
    white-space: nowrap;
    flex-shrink: 0;
  }

  img {
    height: 7rem;
    object-fit: cover;
    vertical-align: top;
    flex-shrink: 0;
  }
`;

const HiCardBtn = styled.div`
  width: 100%;
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;

  button {
    width: 100%;
    height: 5rem;
    text-align: center;
    font-size: 1.8rem;
    font-weight: 400;
    color: #ffffff;
    font-family: Iceland, "Source Sans Pro";
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
      180deg,
      rgba(188, 185, 179, 0.8539999723) -0%,
      rgba(177, 172, 148, 0.9720500112) 34%,
      rgba(130, 127, 116, 0.8700000048) 98%
    );
    border-radius: 0.5rem;
    flex-shrink: 0;
  }

  div {
    margin: 0rem 0rem 0rem 15rem;
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }

  .accountChange {
    margin-right: 3rem;
    text-align: center;
    font-size: 1.3rem;
    font-weight: 400;
    color: #000000;
    font-family: Iceland, "Source Sans Pro";
    white-space: nowrap;
    flex-shrink: 0;
  }

  .virtualCardApply {
    text-align: center;
    font-size: 1.3rem;
    font-weight: 400;
    color: #000000;
    font-family: Iceland, "Source Sans Pro";
    white-space: nowrap;
    flex-shrink: 0;
    cursor: pointer;
  }
`;

const HiCardLimit = styled.div`
  margin: 5rem 25rem 0rem 25rem;
  display: flex;
  align-items: center;
  flex-shrink: 0;

  .cardLimit {
    margin-right: 15rem;
    display: flex;
    font-size: 1.6rem;
    font-weight: 400;
    color: #000000;
    font-family: Iceland, "Source Sans Pro";
    white-space: nowrap;
    flex-shrink: 0;
  }

  .cardType {
    display: flex;
    font-size: 1.6rem;
    font-weight: 400;
    color: #000000;
    font-family: Iceland, "Source Sans Pro";
    white-space: nowrap;
    flex-shrink: 0;
  }
`;

const HiCardBenefits = styled.div`
  margin: 1rem 0rem;
  box-sizing: border-box;
  padding: 3rem;
  width: 1500px;
  height: 10rem;
  display: flex;
  align-items: center;
  background: linear-gradient(180deg, #ffffff -0%, #f0f0f0 100%);
  border-radius: 1rem;
  cursor: pointer;
`;

const HiCardBenefitsContent = styled.div`
  box-sizing: border-box;
  padding: 1rem;
  width: 1500px;
  display: flex;
  position: relative;
  bottom: 55px;
  align-items: center;
  background: linear-gradient(180deg, #f0f0f0 -0%, #ffffff 100%);
  border-radius: 1rem;
`;

const Category = styled.div`
  box-sizing: border-box;
  height: 100%;
  display: flex;
  align-items: center;
  flex-shrink: 0;

  .icon {
    margin: 0rem 5rem;
    width: 5rem;
    height: 5rem;
    object-fit: contain;
    vertical-align: top;
    flex-shrink: 0;
  }

  .catagory {
    margin-right: 10rem;
    font-size: 2.5rem;
    font-weight: 400;
    color: #2d2d2d;
    font-family: Iceland, "Source Sans Pro";
    white-space: nowrap;
    flex-shrink: 0;
  }

  .catagoryBenefits {
    margin-right: 20rem;
    font-size: 2.5rem;
    font-weight: 400;
    color: #6d6d6d;
    font-family: Iceland, "Source Sans Pro";
    white-space: nowrap;
    flex-shrink: 0;
  }

  .chevronIcon {
    margin-left: 10rem;
    width: 2rem;
    height: 2rem;
    object-fit: contain;
    vertical-align: top;
    flex-shrink: 0;
  }
`;

const HiCardModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem;
  background: #fff;
  border-radius: 0.5rem;
  z-index: 1000;
`;

function HiCard(props) {
  const [openAccordions, setOpenAccordions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleAccordion = (index) => {
    if (openAccordions.includes(index)) {
      // If accordion is open, close it
      setOpenAccordions(openAccordions.filter((item) => item !== index));
    } else {
      // If accordion is closed, open it
      setOpenAccordions([...openAccordions, index]);
    }
  };

  const accordions = [
    {
      image: phoneImg,
      category: "통신",
      benefit: "통신요금 10% 할인",
    },
    {
      image: trafficImg,
      category: "교통",
      benefit: "대중교통 10% 할인",
    },
    {
      image: foodImg,
      category: "푸드",
      benefit: "마켓컬리 10% 할인",
    },
    {
      image: utilitiesImg,
      category: "공금",
      benefit: "마켓컬리 10% 할인",
    },
    {
      image: hospitalImg,
      category: "병원",
      benefit: "마켓컬리 10% 할인",
    },
    {
      image: leisureImg,
      category: "레저",
      benefit: "마켓컬리 10% 할인",
    },
    {
      image: shoppingImg,
      category: "쇼핑",
      benefit: "마켓컬리 10% 할인",
    },
    {
      image: studyImg,
      category: "교육",
      benefit: "마켓컬리 10% 할인",
    },
    {
      image: oilingImg,
      category: "주유",
      benefit: "마켓컬리 10% 할인",
    },
    {
      image: cultureImg,
      category: "문화",
      benefit: "마켓컬리 10% 할인",
    },
    {
      image: airlineImg,
      category: "항공",
      benefit: "마켓컬리 10% 할인",
    },
    {
      image: travelImg,
      category: "여행",
      benefit: "마켓컬리 10% 할인",
    },
    // Add more accordions as needed
  ];

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <HiCardDiv>
      <HiCardDetailOuterDiv>
        <HiCardDetailInnerDiv>
          <HiCardDetailLeft>
            <img src={cardImg} alt="하이카드 이미지"></img>
          </HiCardDetailLeft>
          <HiCardDetailRight>
            <p className="name1">Hi:Card</p>
            <p className="name2">하이카드</p>

            <HiCardMileage>
              <div className="title">Hi:Mileage</div>
              <div className="mileage">4500M</div>
            </HiCardMileage>

            <HiCardGrade>
              <div>Hi:Credit Grade</div>
              <img src={cardGradeImg} alt="하이카드 등급 이미지"></img>
            </HiCardGrade>

            <HiCardBtn>
              <button>나의 결제 이력</button>
              <div>
                <p className="accountChange">연결계좌변경</p>
                <p className="virtualCardApply" onClick={openModal}>
                  가상 카드 발급신청
                </p>
              </div>
            </HiCardBtn>

            {/* Modal */}
            {isModalOpen && (
              <HiCardModal>
                {/* Add the content for your modal here */}
                <p>Modal Content</p>
                <button onClick={closeModal}>Close Modal</button>
                <VirtualCardApply></VirtualCardApply>
              </HiCardModal>
            )}
          </HiCardDetailRight>
        </HiCardDetailInnerDiv>
        <HiCardLimit>
          <div className="cardLimit">최대한도 100만원</div>
          <div className="cardType">mastercard</div>
        </HiCardLimit>
      </HiCardDetailOuterDiv>

      {accordions.map((accordion, index) => (
        <div key={index}>
          <HiCardBenefits onClick={() => toggleAccordion(index)}>
            <Category>
              <img
                className="icon"
                src={accordion.image}
                alt="카테고리 아이콘 이미지"
              ></img>
              <p className="catagory">{accordion.category}</p>
              <p className="catagoryBenefits">{accordion.benefit}</p>
              <img
                className="chevronIcon"
                src={openAccordions.includes(index) ? chevronUp : chevronDown}
                alt="chevronIcon"
              ></img>
            </Category>
          </HiCardBenefits>
          {openAccordions.includes(index) && (
            <HiCardBenefitsContent>
              {/* Additional Content to show when accordion is open */}
              <p>{accordion.benefit}</p>
              {/* ... more content */}
            </HiCardBenefitsContent>
          )}
        </div>
      ))}
    </HiCardDiv>
  );
}

export default HiCard;
