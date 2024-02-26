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
import VirtualCardApply from "./VirtualCardApply";
import close from "../../assets/images/close.png";
import MyPaymentHistory from "./MyPaymentHistory";
import VirtualCardNumView from "./VirtualCardNumView";
import axios from "axios";
import HeaderLogoutBtn from "../../components/Header/HeaderLogoutBtn";
import Footer from "../../components/Footer/Footer";
import "../../assets/css/style.css";
import bronzeImg from "../../assets/images/Grade/bronze.png";
import silverImg from "../../assets/images/Grade/silver.png";
import goldImg from "../../assets/images/Grade/gold.png";
import platinumImg from "../../assets/images/Grade/platinum.png";
import logoImg from "../../assets/images/Logo/maah_small_logo.png";
import MyHiCardAccountChange from "./MyHiCardAccountChange";
import { useLocation } from "react-router-dom";
import MyHiCardInfoChangeModal from "./MyHiCardInfoChangeModal";
import MemberLoad from "../../components/Utils/SessionStorage";

const HiCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(180deg, #fffdfd 37.44%, #d7d7d7 100%);
  padding: 100px 0px;
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

export const HiCardDetailLeft = styled.div`
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
    white-space: nowrap;
    flex-shrink: 0;
}
  }

  .mileage {
    display: flex;
    font-size: 2.5rem;
    font-weight: 400;
    color: #000000;
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
    border: none;
    transition: box-shadow 0.3s ease;
  }

  button:hover {
    box-shadow: 11px 9px 5px 0px lightgray;
  }

  div {
    margin: 1rem 0rem 0rem 15rem;
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }

  .accountChange {
    margin-right: 2rem;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 500;
    color: #000000;
    white-space: nowrap;
    flex-shrink: 0;
    cursor: pointer;
  }

  .virtualCardApply {
    text-align: center;
    font-size: 1.2rem;
    font-weight: 500;
    color: #000000;
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

export const HiCardModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 0.5rem;
  z-index: 1000;
`;

export const ModalClose = styled.img`
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

function HiCard(props) {
  const API_SERVER = process.env.REACT_APP_API_SERVER;
  // useLocation 훅을 사용하여 현재 location 정보를 가져옴
  const location = useLocation();
  // state에서 memberHiNumber 값 가져오기
  const memberHiNumber = location.state && location.state.memberHiNumber;
  //const memberHiNumber = location.state;
  console.log(memberHiNumber); // memberHiNumber 값 확인

  const [hicardInfo, setHiCardInfo] = useState([]);
  const [hicardBenefitsInfo, setHiCardBenefitsInfo] = useState([]);
  const [virtualCardExistOrNot, setVirtualCardExistOrNot] = useState([]);
  const [isChange, setIsChange] = useState(false);

  const updateChange = () => {
    setIsChange(!isChange);
  };

  useEffect(() => {
    axios({
      method: "post",
      url: API_SERVER + `/getHiCardInfo.do`,
      data: { memberId: MemberLoad() },
    })
      .then((res) => {
        console.log(res.data);
        console.log("성공 성공 성공 성공 성공 성공");
        setHiCardInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
        console.log("실패 실패 실패 실패 실패 실패");
      });
  }, [API_SERVER, isChange]); // 두 번째 매개변수로 빈 배열을 전달하여 한 번만 실행되도록 설정

  useEffect(() => {
    axios({
      method: "post",
      url: API_SERVER + "/getHiCardBenefits.do",
      data: { memberId: MemberLoad() },
    })
      .then((res) => {
        console.log(res.data);
        console.log("성공 성공 성공 성공 성공 성공");
        setHiCardBenefitsInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
        console.log("실패 실패 실패 실패 실패 실패");
      });
  }, [API_SERVER]); // 두 번째 매개변수로 빈 배열을 전달하여 한 번만 실행되도록 설정

  useEffect(() => {
    axios({
      method: "post",
      url: API_SERVER + `/getVirtualCardExistOrNot.do`,
      data: { memberId: MemberLoad() },
    })
      .then((res) => {
        console.log(res.data);
        console.log("성공 성공 성공 성공 성공 성공");
        setVirtualCardExistOrNot(res.data);
      })
      .catch((err) => {
        console.log(err);
        console.log("실패 실패 실패 실패 실패 실패");
      });
  }, [API_SERVER]); // 두 번째 매개변수로 빈 배열을 전달하여 한 번만 실행되도록 설정

  if (memberHiNumber) {
    return (
      <HiCardDetail
        hicardInfo={hicardInfo}
        hicardBenefitsInfo={hicardBenefitsInfo}
        virtualCardExistOrNot={virtualCardExistOrNot}
        updateChange={updateChange}
      ></HiCardDetail>
    );
  }
}

function HiCardDetail({
  hicardInfo,
  hicardBenefitsInfo,
  virtualCardExistOrNot,
  setVirtualCardExistOrNot,
  updateChange,
}) {
  const [openAccordions, setOpenAccordions] = useState([]);
  const [isMyPaymentHistoryModalOpen, setIsMyPaymentHistoryModalOpen] =
    useState(false);
  const [isMyAccountChangeModalOpen, setIsMyAccountChangeModalOpen] =
    useState(false);
  const [isVirtualCardApplyModalOpen, setIsVirtualCardApplyModalOpen] =
    useState(false);
  const [isVirtualCardNumViewModalOpen, setIsVirtualCardNumViewModalOpen] =
    useState(false);

  const [isInfoChangeModalOpen, setIsInfoChangeModalOpen] = useState(false);

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

  const openVirtualCardApplyModal = () => {
    setIsVirtualCardApplyModalOpen(true);
  };

  const openVirtualCardNumViewModal = () => {
    setIsVirtualCardNumViewModalOpen(true);
  };

  const openIsInfoChangeModal = () => {
    setIsInfoChangeModalOpen(true);
  };

  const closeMyPaymentHistoryModal = () => {
    setIsMyPaymentHistoryModalOpen(false);
  };
  const closeMyAccountChangeModal = () => {
    setIsMyAccountChangeModalOpen(false);
  };
  const closeVirtualCardApplyModal = () => {
    setIsVirtualCardApplyModalOpen(false);
  };
  const closeVirtualCardNumViewModal = () => {
    setIsVirtualCardNumViewModalOpen(false);
  };

  const closeIsInfoChangeModal = () => {
    setIsInfoChangeModalOpen(false);
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
      // Add more cases for other benefit names and their corresponding images
      default:
        return logoImg;
    }
  }

  const accordions = hicardBenefitsInfo.map((benefitInfo, index) => ({
    image: getImageForBenefit(benefitInfo.benefitName),
    category: benefitInfo.benefitName,
    benefit: benefitInfo.byBenefitDesc,
    seeMoreBenefits: benefitInfo.byBenefitBody,
  }));

  return (
    <>
      <HeaderLogoutBtn></HeaderLogoutBtn>
      <HiCardDiv>
        <HiCardDetailOuterDiv>
          <HiCardDetailInnerDiv>
            <HiCardDetailLeft>
              <img
                src={hicardInfo.hiCardImageFrontPath}
                alt="하이카드 이미지"
              ></img>
            </HiCardDetailLeft>
            <HiCardDetailRight>
              <p className="name1">{hicardInfo.memberHiNickname}</p>
              <p className="name2">Hi:Card</p>

              <HiCardMileage>
                <div className="title">Hi:Mileage</div>
                <div className="mileage">
                  {hicardInfo.memberMileage
                    ? hicardInfo.memberMileage.toLocaleString("ko-KR")
                    : "0"}
                  M
                </div>
              </HiCardMileage>

              <HiCardGrade>
                <div>Hi:Credit Grade</div>
                {/* hicardInfo.classBenefitName에 따라 다른 이미지를 표시 */}
                {hicardInfo.classBenefitName === "BRONZE" && (
                  <img src={bronzeImg} alt="하이카드 등급 이미지"></img>
                )}
                {hicardInfo.classBenefitName === "SILVER" && (
                  <img src={silverImg} alt="하이카드 등급 이미지"></img>
                )}
                {hicardInfo.classBenefitName === "GOLD" && (
                  <img src={goldImg} alt="하이카드 등급 이미지"></img>
                )}
                {hicardInfo.classBenefitName === "PLATINUM" && (
                  <img src={platinumImg} alt="하이카드 등급 이미지"></img>
                )}
              </HiCardGrade>

              <HiCardBtn>
                <button onClick={openMyPaymentHistoryModal}>
                  나의 결제 이력
                </button>
                <div>
                  <p className="accountChange" onClick={openIsInfoChangeModal}>
                    카드정보변경
                  </p>
                  <p
                    className="accountChange"
                    onClick={openMyAccountChangeModal}
                  >
                    연결계좌변경
                  </p>
                  {/* <p
                    className="virtualCardApply"
                    onClick={openVirtualCardApplyModal}
                  >
                    가상 카드 발급신청
                  </p> */}
                  <p
                    className="virtualCardApply"
                    onClick={
                      virtualCardExistOrNot === 0
                        ? openVirtualCardApplyModal
                        : openVirtualCardNumViewModal
                    }
                  >
                    {virtualCardExistOrNot === 0
                      ? "가상 카드 발급신청"
                      : "가상 카드 번호조회"}
                  </p>
                </div>
                {/* <p onClick={openVirtualCardNumViewModal}>가상 카드 번호조회</p> */}
              </HiCardBtn>

              {/* MyPaymentHistory 모달 */}
              {isMyPaymentHistoryModalOpen && (
                <ModalBackground>
                  <HiCardModal>
                    <ModalClose
                      src={close}
                      clicked={isMyPaymentHistoryModalOpen.toString()}
                      onClick={closeMyPaymentHistoryModal}
                    ></ModalClose>
                    <MyPaymentHistory></MyPaymentHistory>
                  </HiCardModal>
                </ModalBackground>
              )}

              {/* MyAccountChange 모달 */}
              {isMyAccountChangeModalOpen && (
                <ModalBackground>
                  <HiCardModal>
                    <ModalClose
                      src={close}
                      clicked={isMyAccountChangeModalOpen.toString()}
                      onClick={closeMyAccountChangeModal}
                    ></ModalClose>
                    <MyHiCardAccountChange></MyHiCardAccountChange>
                  </HiCardModal>
                </ModalBackground>
              )}

              {/* MyInfoChange 모달 */}
              {isInfoChangeModalOpen && (
                <ModalBackground>
                  <HiCardModal>
                    <ModalClose
                      src={close}
                      clicked={isInfoChangeModalOpen.toString()}
                      onClick={closeIsInfoChangeModal}
                    ></ModalClose>
                    <MyHiCardInfoChangeModal
                      info={hicardInfo}
                      updateChange={updateChange}
                      closeIsInfoChangeModal={closeIsInfoChangeModal}
                    ></MyHiCardInfoChangeModal>
                  </HiCardModal>
                </ModalBackground>
              )}

              {/* VirtualCardApply 모달 */}
              {isVirtualCardApplyModalOpen && (
                <ModalBackground>
                  <HiCardModal>
                    <ModalClose
                      src={close}
                      clicked={isVirtualCardApplyModalOpen.toString()}
                      onClick={closeVirtualCardApplyModal}
                    ></ModalClose>
                    <VirtualCardApply></VirtualCardApply>
                  </HiCardModal>
                </ModalBackground>
              )}

              {/* VirtualCardNumView 모달 */}
              {isVirtualCardNumViewModalOpen && (
                <ModalBackground>
                  <HiCardModal>
                    <ModalClose
                      src={close}
                      clicked={isVirtualCardNumViewModalOpen.toString()}
                      onClick={closeVirtualCardNumViewModal}
                    ></ModalClose>
                    <VirtualCardNumView></VirtualCardNumView>
                  </HiCardModal>
                </ModalBackground>
              )}
            </HiCardDetailRight>
          </HiCardDetailInnerDiv>
          <HiCardLimit>
            <div className="cardLimit">
              최대한도{" "}
              {hicardInfo.cardApplyLimitAmount
                ? hicardInfo.cardApplyLimitAmount / 10000
                : "0"}
              만원
            </div>
            <div className="cardType">mastercard</div>
          </HiCardLimit>
        </HiCardDetailOuterDiv>

        {accordions.map((accordion, index) => (
          <div key={index}>
            <HiCardBenefits onClick={() => toggleAccordion(index)}>
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
            </HiCardBenefits>
            {openAccordions.includes(index) && (
              <HiCardBenefitsContent>
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
              </HiCardBenefitsContent>
            )}
          </div>
        ))}
      </HiCardDiv>
      <Footer position="relative" top="0rem"></Footer>
    </>
  );
}

export default HiCard;
