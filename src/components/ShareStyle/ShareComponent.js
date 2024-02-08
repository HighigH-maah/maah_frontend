import styled from "styled-components";

export const Modal = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: fixed;
  top: 50%;
  width: 1000px;
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
`;

export const PointWrapper = styled.div`
  display: flex;
  color: white;

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
`;
