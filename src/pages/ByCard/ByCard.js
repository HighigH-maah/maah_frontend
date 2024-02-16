import React, { useEffect, useState } from "react";
import styled from "styled-components";
import phoneImg from "../../assets/icon/phone.png";
import trafficImg from "../../assets/icon/traffic.png";
import foodImg from "../../assets/icon/food.png";
import utilitiesImg from "../../assets/icon/utilities.png";
import hospitalImg from "../../assets/icon/hospital.png";
import leisureImg from "../../assets/icon/leisure.png";
import shoppingImg from "../../assets/icon/shopping.png";
import studyImg from "../../assets/icon/study.png";
import oilingImg from "../../assets/icon/oiling.png";
import cultureImg from "../../assets/icon/culture.png";
import airlineImg from "../../assets/icon/airline.png";
import travelImg from "../../assets/icon/travel.png";
import chevronDown from "../../assets/icon/chevronDown.png";
import chevronUp from "../../assets/icon/chevronUp.png";

import close from "../../assets/images/close.png";
import MyPaymentHistory from "./MyPaymentHistory";

import axios from "axios";

import "../../assets/css/style.css";
import logoImg from "../../assets/images/Logo/maah_small_logo.png";
import Footer from "../../components/Footer/Footer";
import HeaderLogoutBtn from "../../components/Header/HeaderLogoutBtn";
import MyByCardAccountChange from "./MyByCardAccountChange";

const ByCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(180deg, #fffdfd 37.44%, #d7d7d7 100%);
  padding: 100px 0px;
`;

const ByCardDetailOuterDiv = styled.div`
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

const ByCardDetailInnerDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

export const ByCardDetailLeft = styled.div`
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

const ByCardDetailRight = styled.div`
  width: 36.5rem;
  height: 100%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;

  .name1 {
    margin-bottom: 1.5rem;
    font-size: 3rem;
    font-weight: 400;
    line-height: 0.5;
    color: #000000;
    white-space: nowrap;
    flex-shrink: 0;
  }

  .name2 {
    margin-bottom: 1.5rem;
    display: flex;
    font-size: 1.5rem;
    font-weight: 400;
    color: #000000;
    white-space: nowrap;
    flex-shrink: 0;
  }
`;

const ByCardPoint = styled.div`
margin: 0rem 0rem 2rem 0rem;
    width: 100%;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    justify-content: space-between;

  .title {
    display: flex;
    font-size: 2.5rem;
    font-weight: 400;
    letter-spacing: -0.018rem;
    color: #000000;
    white-space: nowrap;
    flex-shrink: 0;
}
  }

  .point {
    display: flex;
    font-size: 2.5rem;
    font-weight: 400;
    color: #000000;
    white-space: nowrap;
    flex-shrink: 0;
}
  }
`;

const ByBenefit = styled.div`
  margin: 0rem 0rem 2rem 0rem;
  width: 100%;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  justify-content: space-between;

  img {
    width: 80px;
    height: 80px;
  }

  div {
    display: flex;
    font-size: 2.5rem;
    font-weight: 400;
    letter-spacing: -0.018rem;
    color: #000000;
    white-space: nowrap;
    flex-shrink: 0;
  }
`;

const ByCardBtn = styled.div`
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
    cursor: pointer;
  }

  div {
    margin: 1rem 0rem 0rem 15rem;
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }

  .accountChange {
    text-align: center;
    font-size: 1.2rem;
    font-weight: 500;
    color: #000000;
    white-space: nowrap;
    flex-shrink: 0;
    cursor: pointer;
  }
`;

const ByCardLimit = styled.div`
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
    white-space: nowrap;
    flex-shrink: 0;
  }

  .cardType {
    display: flex;
    font-size: 1.6rem;
    font-weight: 400;
    color: #000000;
    white-space: nowrap;
    flex-shrink: 0;
  }
`;

const ByCardBenefits = styled.div`
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

const ByCardBenefitsContent = styled.div`
  box-sizing: border-box;
  padding: 3rem 12rem;
  width: 1500px;
  display: flex;
  position: relative;
  bottom: 55px;
  background: linear-gradient(180deg, #f0f0f0 -0%, #ffffff 100%);
  border-radius: 1rem;
  flex-direction: column;
  font-size: 24px;

  .benefitsTitle {
    font-weight: 600;
  }

  .benefitsText {
    text-align: left;
    margin-top: 1rem;
  }

  .benefitsText p {
    margin: 0.5rem 0;
  }
`;

const Category = styled.div`
  box-sizing: border-box;
  height: 100%;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  justify-content: space-between;

  .icon {
    margin-right: 3rem;
    width: 5rem;
    height: 5rem;
    object-fit: contain;
    display: flex;
    flex-basis: 100px;
    vertical-align: top;
    flex-shrink: 0;
    justify-content: flex-start;
  }

  .catagory {
    font-size: 2.5rem;
    font-weight: 400;
    color: #2d2d2d;
    white-space: nowrap;
    display: flex;
    flex-shrink: 0;
    flex-basis: 250px;
    justify-content: flex-start;
  }

  .catagoryBenefits {
    margin-right: 20rem;
    font-size: 2.5rem;
    font-weight: 400;
    color: #6d6d6d;
    white-space: nowrap;
    flex-shrink: 0;
    flex-basis: 500px;
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

const ByCardModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 0.5rem;
  z-index: 1000;
`;

const ModalClose = styled.img`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 투명한 검은색 배경 */
  z-index: 1000; /* 모달보다 뒤에 위치 */
`;

function ByCard(props) {
  const [bycardInfo, setByCardInfo] = useState([]);
  const [bycardBenefitsInfo, setByCardBenefitsInfo] = useState([]);

  useEffect(() => {
    axios({
      method: "post",
      url: `/getAllByCardInfo.do`,
      data: { memberId: "user3" },
    })
      .then((res) => {
        console.log(res.data);
        console.log("성공 성공 성공 성공 성공 성공");
        setByCardInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
        console.log("실패 실패 실패 실패 실패 실패");
      });
  }, []); // 두 번째 매개변수로 빈 배열을 전달하여 한 번만 실행되도록 설정

  useEffect(() => {
    axios({
      method: "post",
      url: "/getAllByCardBenefits.do",
      data: { memberId: "user3" },
    })
      .then((res) => {
        const cardId = 8;
        console.log(res.data);
        console.log(res.data[cardId][0].byBenefitDesc);
        for (let i = 0; i < res.data[cardId].length; i++) {
          console.log(res.data[cardId][i]);
        }
        console.log("성공 성공 성공 성공 성공 성공");
        setByCardBenefitsInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
        console.log("실패 실패 실패 실패 실패 실패");
      });
  }, []); // 두 번째 매개변수로 빈 배열을 전달하여 한 번만 실행되도록 설정

  return (
    <ByCardDetail
      bycardInfo={bycardInfo}
      bycardBenefitsInfo={bycardBenefitsInfo}
    ></ByCardDetail>
  );
}

function ByCardDetail({ bycardInfo, bycardBenefitsInfo }) {
  const [openAccordions, setOpenAccordions] = useState([]);
  const [isMyPaymentHistoryModalOpen, setIsMyPaymentHistoryModalOpen] =
    useState(false);
  const [isMyAccountChangeModalOpen, setIsMyAccountChangeModalOpen] =
    useState(false);

  const toggleAccordion = (index) => {
    if (openAccordions.includes(index)) {
      // If accordion is open, close it
      setOpenAccordions(openAccordions.filter((item) => item !== index));
    } else {
      // If accordion is closed, open it
      setOpenAccordions([...openAccordions, index]);
    }
  };

  const openMyPaymentHistoryModal = () => {
    setIsMyPaymentHistoryModalOpen(true);
  };

  const openMyAccountChangeModal = () => {
    setIsMyAccountChangeModalOpen(true);
  };

  const closeMyPaymentHistoryModal = () => {
    setIsMyPaymentHistoryModalOpen(false);
  };
  const closeMyAccountChangeModal = () => {
    setIsMyAccountChangeModalOpen(false);
  };

  function getImageForBenefit(benefitName) {
    //benefitName = benefitName.replaceAll(" ", "");
    switch (benefitName) {
      case "통신":
        return phoneImg;
      case "대중교통":
        return trafficImg;
      case "푸드":
        return foodImg;
      case "공과금":
        return utilitiesImg;
      case "병원/약국":
        return hospitalImg;
      case "교육/육아":
        return studyImg;
      case "레저/스포츠":
        return leisureImg;
      case "쇼핑":
        return shoppingImg;
      case "영화/문화":
        return cultureImg;
      case "항공":
        return airlineImg;
      case "여행":
        return travelImg;
      case "교통":
        return oilingImg;
      default:
        return logoImg;
    }
  }

  const accordions = bycardBenefitsInfo[8]
    ? bycardBenefitsInfo[8].map((bycardBenefits, index) => ({
        image: getImageForBenefit(bycardBenefits.benefitName),
        category: bycardBenefits.benefitName,
        benefit: bycardBenefits.byBenefitDesc,
        seeMoreBenefits: bycardBenefits.byBenefitBody,
      }))
    : [];

  return (
    <>
      <HeaderLogoutBtn></HeaderLogoutBtn>
      <ByCardDiv>
        {bycardInfo[8] &&
          bycardInfo[8].map((bycardInfo, index) => (
            <ByCardDetailOuterDiv>
              <ByCardDetailInnerDiv>
                <ByCardDetailLeft>
                  <img src={bycardInfo.byImagePath} alt="바이카드 이미지"></img>
                </ByCardDetailLeft>
                <ByCardDetailRight>
                  <p className="name1">{bycardInfo.byName}</p>
                  <p className="name2">{bycardInfo.memberCardByNickname}</p>

                  <ByCardPoint>
                    <div className="title">By:Card Point</div>
                    <div className="point">
                      {bycardInfo.pointByAmount
                        ? bycardInfo.pointByAmount.toLocaleString("ko-KR")
                        : ""}
                      P
                    </div>
                  </ByCardPoint>

                  {bycardBenefitsInfo[8] &&
                    bycardBenefitsInfo[8].map((bycardBenefits, index) => (
                      <ByBenefit key={index}>
                        <img
                          src={getImageForBenefit(bycardBenefits.benefitName)}
                          alt="아이콘이미지"
                        ></img>
                        <div>{bycardBenefits.byBenefitDesc}</div>
                      </ByBenefit>
                    ))}
                  <ByCardBtn>
                    <button onClick={openMyPaymentHistoryModal}>
                      나의 결제 이력
                    </button>
                    <div>
                      <p
                        className="accountChange"
                        onClick={openMyAccountChangeModal}
                      >
                        연결계좌변경
                      </p>
                    </div>
                  </ByCardBtn>

                  {/* MyPaymentHistory 모달 */}
                  {isMyPaymentHistoryModalOpen && (
                    <ModalBackground>
                      <ByCardModal>
                        <ModalClose
                          src={close}
                          clicked={isMyPaymentHistoryModalOpen.toString()}
                          onClick={closeMyPaymentHistoryModal}
                        ></ModalClose>
                        <MyPaymentHistory></MyPaymentHistory>
                      </ByCardModal>
                    </ModalBackground>
                  )}

                  {/* MyAccountChange 모달 */}
                  {isMyAccountChangeModalOpen && (
                    <ModalBackground>
                      <ByCardModal>
                        <ModalClose
                          src={close}
                          clicked={isMyAccountChangeModalOpen.toString()}
                          onClick={closeMyAccountChangeModal}
                        ></ModalClose>
                        <MyByCardAccountChange></MyByCardAccountChange>
                      </ByCardModal>
                    </ModalBackground>
                  )}
                </ByCardDetailRight>
              </ByCardDetailInnerDiv>
              <ByCardLimit>
                <div className="cardLimit">
                  전월실적{" "}
                  {bycardInfo.byBenefitMinCondition
                    ? bycardInfo.byBenefitMinCondition.toLocaleString("ko-KR")
                    : ""}
                  원 이상
                </div>
                <div className="cardType">mastercard</div>
              </ByCardLimit>
            </ByCardDetailOuterDiv>
          ))}

        {accordions.map((accordion, index) => (
          <div key={index}>
            <ByCardBenefits onClick={() => toggleAccordion(index)}>
              <Category>
                <img
                  className="icon"
                  src={accordion.image ? accordion.image : null}
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
            </ByCardBenefits>
            {openAccordions.includes(index) && (
              <ByCardBenefitsContent>
                <p className="benefitsTitle">{accordion.benefit}</p>
                {accordion.seeMoreBenefits && (
                  <div className="benefitsText">
                    {accordion.seeMoreBenefits
                      .split("\n")
                      .map((text, index) => (
                        <p key={index}>{text}</p>
                      ))}
                  </div>
                )}
              </ByCardBenefitsContent>
            )}
          </div>
        ))}
      </ByCardDiv>
      <Footer position="relative" top="0rem"></Footer>
    </>
  );
}

export default ByCard;
