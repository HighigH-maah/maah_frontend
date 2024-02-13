import { useState } from "react";
import React from "react";
import "../../assets/css/style.css";
import "./share.css";
import styled from "styled-components";
import axios from "axios";
import blackVelvetImg from "../../assets/images/black_velvet.png";
import blackVelvetBack from "../../assets/images/black_velvet_back.png";
import reverse from "../../assets/images/reverse.png";

import ShareModal from "../../components/ShareStyle/ShareModal";
import {
  HiBotTitle,
  HiBottom,
  HiCardImg,
  HiCardTypeName,
  HiSection,
  HiTopTitle,
  HiTopper,
  ReverseButton,
  ReverseIcon,
  ShareBack,
  ShareMain,
} from "../../components/ShareStyle/ShareMainComponent";

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

function Share(props) {
  const [blackVelvet, setBlackVelvet] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const reverseCard = (prop) => {
    let cards = document.getElementsByClassName(prop);
    cards[0].style.transform = "rotateY(90deg)";
    setTimeout(function () {
      switch (prop) {
        case "blackVelvet":
          setBlackVelvet(!blackVelvet);
          break;
        default:
          break;
      }
      cards[0].style.transform = "rotateY(0deg)";
    }, 100);
  };

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
            <HiCardImg
              className="blackVelvet"
              src={blackVelvet ? blackVelvetImg : blackVelvetBack}
            ></HiCardImg>
            <ReverseButton
              type="button"
              onClick={() => {
                reverseCard("blackVelvet");
              }}
            >
              <ReverseIcon src={reverse}></ReverseIcon>
            </ReverseButton>
            <button onClick={openModal}>모달창 오픈</button>
          </HiBottom>
        </HiSection>
      </ShareMain>
      {isModalOpen ? (
        <ShareModal isOpen={isModalOpen} closeModal={closeModal} />
      ) : null}
    </ShareBack>
  );
}

export default Share;
