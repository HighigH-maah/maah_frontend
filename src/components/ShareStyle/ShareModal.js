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
function ShareModal({ isOpen, closeModal, hiCard }) {
  return (
    <Modal isOpen={isOpen}>
      <ModalCloseButton onClick={closeModal}>Close</ModalCloseButton>
      <ShareBackImage />
      <HiModalTopDiv realpoint={hiCard ? hiCard.memberHiPoint : 0} />
      <HiModalMid>
        <HiImageSection>
          {hiCard ? hiCard.memberHiNickname : ""}
          <img
            src={
              hiCard.hiImageCode
                ? blackVelvet
                  ? hiCard.hiImageCode.hiCardImageFrontPath
                  : hiCard.hiImageCode.hiCardImageRearPath
                : null
            }
            name={blackVelvet}
          />
        </HiImageSection>
        <HiPointSection>
          <PointWrapper>
            <p>By:Card Point</p>
            <span>4500P</span>
          </PointWrapper>
          <InputWrapper>
            <ShareInput />
            <button>SHARE</button>
          </InputWrapper>
        </HiPointSection>
      </HiModalMid>
      <BenefitDiv>
        <BenefitTitle>BenefitDiv</BenefitTitle>
        <BenefitList>
          <Benefit>
            <img
              src={culture_white}
              name={"culture_white"}
              width={50}
              height={50}
            />
            영화 55% 할인
          </Benefit>
          <Benefit>
            <img
              src={culture_white}
              name={"culture_white"}
              width={50}
              height={50}
            />
            영화 55% 할인
          </Benefit>
          <Benefit>
            <img
              src={culture_white}
              name={"culture_white"}
              width={50}
              height={50}
            />
            영화 55% 할인
          </Benefit>
        </BenefitList>
      </BenefitDiv>
    </Modal>
  );
}

export default ShareModal;
