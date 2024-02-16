import { useEffect, useState } from "react";
import React from "react";
import "../../assets/css/style.css";
import "./share.css";
import styled from "styled-components";
import axios from "axios";
import blackVelvetImg from "../../assets/images/black_velvet.png";
import whiteVelvetImg from "../../assets/images/white_velvet.png";
import nasa from "../../assets/images/nasa.png";
import blackVelvetBack from "../../assets/images/black_velvet_back.png";
import logoAirlineWhite from "../../assets/icon/airline_white.png";
import { ReactComponent as LearnMoreArrow } from "../../assets/images/Svg/LearnMoreArrow.svg";
import { ReactComponent as ShareCardAdd } from "../../assets/images/Svg/ShareCardAdd.svg";
import reverse from "../../assets/images/reverse.png";
import { selectIcon } from "../../assets/js/IconSelect";

import ShareModal from "../../components/ShareStyle/ShareModal";
import {
  BenefitToggleArea,
  ByBottomAdd,
  ByBottomArea,
  ByBottomBtn,
  ByBottomCardArea,
  ByBottomCardTitle,
  ByBottomDesc,
  ByBottomDescBox,
  ByBottomImg,
  BySection,
  ByTitle,
  ByTopper,
  HiBotTitle,
  HiBottom,
  HiBottomWings,
  HiCardDesc,
  HiCardDescBox,
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
import HeaderLogoutBtn from "../../components/Header/HeaderLogoutBtn";
import Footer from "../../components/Footer/Footer";
import { position } from "stylis";

function Share(props) {
  const [blackVelvet, setBlackVelvet] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOn, setisOn] = useState(false);
  const [card, setCard] = useState([]);

  useEffect(() => {
    console.log("effect 1번");

    axios
      .post("/getmemberHiCard.do", {
        memberId: "user3",
      })
      .then(function (res) {
        console.log(res.data);
        setCard(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

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
      <HeaderLogoutBtn />
      {/* header 하얀색 필요 */}
      <ShareMain>
        <HiSection>
          <HiTopper>
            <HiTopTitle>Ma:ah Share</HiTopTitle>
          </HiTopper>
          <HiBottom>
            <HiBottomWings>
              <HiCardTypeName>
                {card.hicard ? card.hicard.memberHiNickname : ""}
              </HiCardTypeName>
              <div style={{ position: "relative" }}>
                <HiCardImg
                  className="blackVelvet"
                  src={
                    card.hicard
                      ? blackVelvet
                        ? card.hicard.hiImageCode.hiCardImageFrontPath
                        : card.hicard.hiImageCode.hiCardImageRearPath
                      : null
                  }
                  onClick={openModal}
                ></HiCardImg>
                <HiCardDesc>
                  <HiCardDescBox>
                    <img src={selectIcon("8", "white")}></img>
                    <p>혜택내용</p>
                  </HiCardDescBox>
                </HiCardDesc>
              </div>
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
                <LearnMoreArrow />
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
            {card.bycard
              ? card.bycard.map((card, index) => (
                  <ByBottomCardArea key={index}>
                    <ByBottomCardTitle>
                      {card.memberCardByNickname}
                    </ByBottomCardTitle>
                    <ByBottomImg src={card.byCard.byImagePath}></ByBottomImg>
                    <ByBottomDesc
                      className={`${isOn ? "toggle--checked" : ""}`}
                    >
                      {card.byCard
                        ? card.byCard.benefitList.map((benefit, bIndex) => (
                            <ByBottomDescBox key={bIndex}>
                              <img
                                src={selectIcon(
                                  JSON.stringify(benefit.benefitCode),
                                  "white"
                                )}
                              ></img>
                              <p>{benefit.byBenefitDesc}</p>
                            </ByBottomDescBox>
                          ))
                        : ""}
                    </ByBottomDesc>
                    <ByBottomBtn>
                      Learn More
                      <LearnMoreArrow />
                    </ByBottomBtn>
                  </ByBottomCardArea>
                ))
              : ""}
            <ByBottomCardArea>
              <ByBottomAdd>
                <ShareCardAdd onClick={clickTest} />
              </ByBottomAdd>
            </ByBottomCardArea>
          </ByBottomArea>
        </BySection>
      </ShareMain>
      {isModalOpen ? (
        <ShareModal
          isOpen={isModalOpen}
          closeModal={closeModal}
          hiCard={card.hicard}
        />
      ) : null}
      <Footer />
    </ShareBack>
  );
}

export default Share;
