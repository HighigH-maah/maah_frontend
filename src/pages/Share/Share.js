import React, { useState } from "react";
import "./share.css";
import styled from "styled-components";
import axios from "axios";

import shareback from "../../assets/images/share-modal-back.png";
import blackvelvet from "../../assets/images/black_velvet.png";
import {
  HiCardPoint,
  HiCardRealPoint,
  HiImageSection,
  HiModalMid,
  HiModalTop,
  HiPointSection,
  InputWrapper,
  Modal,
  ModalCloseButton,
  PointWrapper,
  ShareBackImage,
} from "../../components/ShareStyle/ShareComponent";

axios
  .post("/member.do", {
    member_id: "user3",
  })
  .then(function (res) {
    console.log(res.data);
  })
  .catch(function (error) {
    console.log(error);
  });

const ShareBack = styled.div`
  width: auto;
  height: auto;
  position: relative;
  background: linear-gradient(
    355.98deg,
    #181048 99.92%,
    #0e0831 99.93%,
    #1b463b 200%
  );
  background-size: auto 100%;
`;

const ShareMain = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const HiSection = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 15rem 0 10rem;
`;
const HiTopper = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  box-sizing: border-box;
`;
const HiTopTitle = styled.p`
  text-align: center;
  font-size: 6rem;
  font-weight: 400;
  line-height: 0.97;
  color: #ffffff;
  margin-bottom: 3.8rem;
  font-family: Iceland, "Source Sans Pro";
  white-space: nowrap;
  flex-shrink: 0;
`;
const HiBotTitle = styled.p`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 1;
  color: #55534e;
  font-family: Iceland, "Source Sans Pro";
  white-space: nowrap;
  flex-shrink: 0;
`;

const HiBottom = styled.div`
  width: 100%;
  position: relative;
  flex-shrink: 0;
  margin: 5rem 0 2rem;
`;
const HiCardTypeName = styled.div`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 0.97;
  letter-spacing: -0.1rem;
  color: #ffffff;
  font-family: Iceland, "Source Sans Pro";
  white-space: nowrap;
  flex-shrink: 0;
`;

const HiCardImg = styled.div`
  box-sizing: border-box;
`;

function Share(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <ShareBack>
      <ShareMain>
        <HiSection>
          <HiTopper>
            <HiTopTitle>Ma:ah Share</HiTopTitle>
            <HiBotTitle>Hi:Card Name</HiBotTitle>
          </HiTopper>
          <HiBottom>
            <HiCardTypeName>X BOOST</HiCardTypeName>
            <HiCardImg></HiCardImg>
            <button onClick={openModal}>모달창 오픈</button>
          </HiBottom>
        </HiSection>
      </ShareMain>
      <Modal isOpen={isModalOpen}>
        <ModalCloseButton onClick={closeModal}>닫기</ModalCloseButton>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="900"
          height="2"
          viewBox="0 0 900 2"
          fill="none"
        >
          <path opacity="0.4" d="M0 1L900 1" stroke="white" />
        </svg>
        <ShareBackImage />
        <HiModalTop>
          <HiCardPoint>HiCard Point</HiCardPoint>
          <HiCardRealPoint>5000P</HiCardRealPoint>
        </HiModalTop>
        <img src={shareback} name={shareback} />
        <HiModalMid>
          <HiImageSection>
            The Blue
            <img src={blackvelvet} name={blackvelvet} />
          </HiImageSection>
          <HiPointSection>
            <PointWrapper>
              <p>By:Card Point</p>
              <span>4500P</span>
            </PointWrapper>
            <InputWrapper>
              <input value="" placeholder="point" />
              <button>Share</button>
            </InputWrapper>
          </HiPointSection>
        </HiModalMid>
        <p>This is the modal content.</p>
      </Modal>
    </ShareBack>
  );
}

export default Share;
