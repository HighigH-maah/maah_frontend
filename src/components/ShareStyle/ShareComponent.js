import styled from "styled-components";

export const Modal = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  display: block;
  position: relative;
  width: 1000px;
  height: 1769px;
  background: linear-gradient(
    180deg,
    #181048 0%,
    rgba(217, 217, 217, 0.74) 100%
  );
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  z-index: 999;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const HiCardPoint = styled.div`
  color: #fff;
  font-size: 80px;
  font-style: normal;
  font-weight: bolder;
  line-height: 100%;
`;
export const HiCardRealPoint = styled.div`
  background: linear-gradient(
    180deg,
    #002197 0%,
    rgba(255, 255, 255, 0.81) 63.5%,
    rgba(255, 255, 255, 0.81) 96%,
    rgba(255, 255, 255, 0.81) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  font-size: 100px;
  font-style: normal;
  font-weight: bolder;
  line-height: 100%; /* 100px */
`;

export const HiModalTop = styled.div`
  display: flex;
  font-weight: bolder;
  flex-direction: column;
  align-items: center;
`;

export const ShareBackImage = styled.image`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  position: relative;
`;

export const HiModalMid = styled.div`
  display: flex;
`;

export const HiImageSection = styled.div`
  color: white;
  gap: 1rem;
  display: flex;
  font-weight: bolder;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 50px;
  flex-direction: column;
  align-items: center;
`;

export const HiPointSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  gap: 2rem;
  justify-content: center;
`;

export const PointWrapper = styled.div`
  display: flex;
  color: white;
  gap: 4.3rem;
  font-size: 45px;
  font-style: normal;
  font-weight: bolder;
  line-height: 100%; /* 50px */

  & > span {
    background: linear-gradient(
      181deg,
      #002197 0.85%,
      rgba(255, 255, 255, 0.81) 48.92%,
      rgba(255, 255, 255, 0.81) 73.52%,
      #fff 76.54%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  color: #02358b;
  gap: 3rem;
  & > button {
    border-radius: 50px;
    background: linear-gradient(
      120deg,
      #fff 31.88%,
      rgba(255, 255, 255, 0.07) 103.62%,
      rgba(219, 233, 255, 0) 103.62%
    );
    color: #02358b;
    width: 176px;
    font-weight: bolder;
    border-color: lightgray;
    height: 97px;
    flex-shrink: 0;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

export const BenefitDiv = styled.div`
  border-radius: 20px;
  width: 900.187px;
  height: 652px;
  color: white;
  background: black;
  margin-top: 2rem;
  font-weight: bolder;
  font-size: 2rem;
`;

export const BenefitList = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5rem;
  position: relative;
  top: 4rem;
`;

export const Benefit = styled.div`
  display: flex;
  gap: 1rem;
  font-weight: 500;
`;

export const BenefitTitle = styled.p`
  display: flex;
  top: 2rem;
  position: relative;
  margin-left: 4rem;
`;

export const ShareInput = styled.input`
  width: 289px;
  height: 101px;
  flex-shrink: 0;
  background: linear-gradient(
    96deg,
    #fff 40.85%,
    rgba(238, 245, 255, 0.58) 76.39%,
    rgba(219, 233, 255, 0) 126.49%
  );
  border-radius: 20px;
  padding-left: 1rem;
  padding-left: 1rem;
  font-size: 1.5rem;
  border-radius: 20px;
  color: #02358b;
  cursor: pointer;
`;
