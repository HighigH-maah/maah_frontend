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
  ShareBackImage,
  ShareInput,
} from "./ShareComponent";
import blackVelvet from "../../assets/images/black_velvet.png";
import culture_white from "../../assets/icon/culture_white.png";
import { selectIcon } from "../../assets/js/IconSelect";
import { useEffect, useState } from "react";
import axios from "axios";
function ShareModal({ isOpen, closeModal, hiCard, openCard, setIsChange }) {
  const [inputValue, setInputValue] = useState("");
  const [hiPoint, setHiPoint] = useState("");
  const [byPoint, setByPoint] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    console.log(inputValue);
    axios
      .post(process.env.REACT_APP_API_SERVER + "/updateByPoint.do", {
        memberId: "user3",
        byCardNumber: openCard.memberByNumber,
        amount: inputValue,
      })
      .then(function (res) {
        console.log(res.data);
        setInputValue("");
        setHiPoint(res.data.hiAmount);
        setByPoint(res.data.byAmount);
        setIsChange(true);
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
          />
        </HiImageSection>
        <HiPointSection>
          <PointWrapper>
            <p>By:Card Point</p>
            <span>{byPoint}</span>
          </PointWrapper>
          <InputWrapper>
            <input value={inputValue} onChange={handleInputChange} />
            <button onClick={handleButtonClick}>SHARE</button>
          </InputWrapper>
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
