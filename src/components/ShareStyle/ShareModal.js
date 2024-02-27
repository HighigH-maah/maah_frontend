import {
  BackTitle,
  Benefit,
  BenefitDiv,
  BenefitList,
  BenefitTitle,
  HiCardPoint,
  HiCardRealPoint,
  HiImageSection,
  HiModalMid,
  HiModalTop,
  HiModalTopDiv,
  HiPointSection,
  InputWrapper,
  Modal,
  ModalCloseButton,
  PointWrapper,
  ReturnWrapper,
  ShareBackImage,
  ShareInput,
} from "./ShareComponent";
import blackVelvet from "../../assets/images/black_velvet.png";
import culture_white from "../../assets/icon/culture_white.png";
import { selectIcon } from "../../assets/js/IconSelect";
import { useEffect, useState } from "react";
import axios from "axios";
import MemberLoad from "../Utils/SessionStorage";
function ShareModal({ isOpen, closeModal, hiCard, openCard, updateChange }) {
  const [inputValue, setInputValue] = useState("");
  const [returnValue, setReturnValue] = useState("");
  const [hiPoint, setHiPoint] = useState("");
  const [byPoint, setByPoint] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleReturnChange = (e) => {
    setReturnValue(e.target.value);
  };

  const handleButtonClick = () => {
    console.log(inputValue);
    axios
      .post(process.env.REACT_APP_API_SERVER + "/updateByPoint.do", {
        memberId: MemberLoad(),
        byCardNumber: openCard.memberByNumber,
        amount: inputValue,
      })
      .then(function (res) {
        console.log(res.data);
        setInputValue("");
        setHiPoint(res.data.hiAmount);
        setByPoint(res.data.byAmount);
        updateChange();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleReturnClick = () => {
    console.log(returnValue);
    axios
      .post(process.env.REACT_APP_API_SERVER + "/returnByPoint.do", {
        memberId: MemberLoad(),
        byCardNumber: openCard.memberByNumber,
        amount: returnValue,
      })
      .then(function (res) {
        console.log(res.data);
        setReturnValue("");
        setHiPoint(res.data.hiAmount);
        setByPoint(res.data.byAmount);
        updateChange();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //순서 중요 setHi가 처음 값이랑 나중 값이랑 따로 먹어야해서 2번 썼음..
  useEffect(() => {
    setHiPoint(hiPoint);
    setByPoint(byPoint);
  }, [hiPoint, byPoint]);

  useEffect(() => {
    setHiPoint(hiCard.memberHiPoint);
    setByPoint(openCard.pointByAmount);
  }, []);

  return (
    <Modal isOpen={isOpen}>
      <ModalCloseButton onClick={closeModal}>Close</ModalCloseButton>
      <ShareBackImage />
      <HiModalTopDiv realpoint={hiCard ? hiPoint : 0} />
      <HiModalMid>
        <HiImageSection>
          {openCard ? openCard.memberCardByNickname : ""}
          <img
            src={openCard ? openCard.byCard.byImagePath : blackVelvet}
            name={blackVelvet}
            alt="바이카드 이미지"
          />
        </HiImageSection>
        <HiPointSection>
          <PointWrapper>
            <p>By:Card Point</p>
            <span>{byPoint}</span>
          </PointWrapper>
          <PointWrapper>
            <p>By:Point Goal</p>
            <span>{openCard.memberByPointGoal}</span>
          </PointWrapper>
          <InputWrapper>
            <input value={inputValue} onChange={handleInputChange} />
            <button onClick={handleButtonClick}>SHARE</button>
          </InputWrapper>
          <ReturnWrapper>
            <input value={returnValue} onChange={handleReturnChange} />
            <button onClick={handleReturnClick}>RETURN</button>
          </ReturnWrapper>
        </HiPointSection>
      </HiModalMid>
      <BenefitDiv>
        <BenefitTitle>By:Card Benefit</BenefitTitle>
        <BenefitList>
          {openCard
            ? openCard.byCard.benefitList.map((benefit, index) => (
                <Benefit
                  className={`${
                    benefit.byBenefitMinCondition < openCard.pointByAmount
                      ? "nextMonth"
                      : ""
                  }`}
                >
                  <img
                    src={selectIcon(
                      JSON.stringify(benefit.benefitCode),
                      "white"
                    )}
                    name={"culture_white"}
                    width={50}
                    height={50}
                  />
                  <p>{benefit.byBenefitDesc}</p>
                  <h6>전월 실적: {benefit.byBenefitMinCondition} 이상</h6>
                </Benefit>
              ))
            : ""}
        </BenefitList>
      </BenefitDiv>
    </Modal>
  );
}

export default ShareModal;
