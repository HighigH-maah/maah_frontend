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
  BenefitToggleArea,
  ByBottomAdd,
  ByBottomArea,
  ByBottomCardArea,
  ByBottomCardTitle,
  BySection,
  ByTitle,
  ByTopper,
  HiBotTitle,
  HiBottom,
  HiBottomWings,
  HiCardImg,
  HiCardTypeName,
  HiSection,
  HiTopTitle,
  HiTopper,
  LearnMore,
  ReverseButton,
  ReverseIcon,
  ShareBack,
  ShareMain,
} from "../../components/ShareStyle/ShareMainComponent";
import { ToggleButton } from "../../components/ShareStyle/ShareToggleButton";

axios
  .post("/member.do", {
    memberId: "user3",
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
  const [isOn, setisOn] = useState(false);

  const toggleHandler = () => {
    setisOn(!isOn);
  };

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

  const clickTest = (props) => {
    console.log(props + "click");
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
            <HiBottomWings>
              <HiCardTypeName>X BOOST</HiCardTypeName>
              <HiCardImg
                className="blackVelvet"
                src={blackVelvet ? blackVelvetImg : blackVelvetBack}
                onClick={openModal}
              ></HiCardImg>
              <ReverseButton
                type="button"
                onClick={() => {
                  reverseCard("blackVelvet");
                }}
              >
                <ReverseIcon src={reverse}></ReverseIcon>
              </ReverseButton>
              <LearnMore>
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22.5"
                  height="16.5"
                  viewBox="0 0 25 20"
                  fill="none"
                >
                  <path
                    d="M1 9.69629H23.5M23.5 9.69629L16.5 18.1963M23.5 9.69629L16.5 1.69629"
                    stroke="#EFF8F0"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </LearnMore>
            </HiBottomWings>
          </HiBottom>
        </HiSection>
        <BySection>
          <ByTopper>
            <ByTitle>By:Card</ByTitle>
            <ToggleButton
              toggleHandler={toggleHandler}
              isOn={isOn}
            ></ToggleButton>
          </ByTopper>
          <ByBottomArea>
            <ByBottomCardArea>
              <div></div>
              <ByBottomAdd>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="52"
                  height="53"
                  viewBox="0 0 52 53"
                  fill="none"
                  onClick={clickTest}
                >
                  <path
                    d="M26 13.5504L26 26.1008M26 26.1008V38.6511M26 26.1008H38.5M26 26.1008H13.5M51 10.4128L51 41.789C51 46.9876 46.8027 51.2018 41.625 51.2018H10.375C5.19733 51.2018 1 46.9876 1 41.789V10.4128C1 5.21425 5.19733 1 10.375 1H41.625C46.8027 1 51 5.21425 51 10.4128Z"
                    stroke="url(#paint0_linear_42_1722)"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_42_1722"
                      x1="7"
                      y1="51.2018"
                      x2="72.6941"
                      y2="1.25527"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" />
                      <stop offset="1" stop-color="white" stop-opacity="0.18" />
                    </linearGradient>
                  </defs>
                </svg>
              </ByBottomAdd>
            </ByBottomCardArea>
            <ByBottomCardArea>
              <ByBottomCardTitle>the Blue</ByBottomCardTitle>
              <ByBottomAdd></ByBottomAdd>
            </ByBottomCardArea>
            <ByBottomCardArea>
              <ByBottomAdd></ByBottomAdd>
            </ByBottomCardArea>
            <ByBottomCardArea>
              <ByBottomAdd></ByBottomAdd>
            </ByBottomCardArea>
          </ByBottomArea>
        </BySection>
      </ShareMain>
      {isModalOpen ? (
        <ShareModal isOpen={isModalOpen} closeModal={closeModal} />
      ) : null}
    </ShareBack>
  );
}

export default Share;
