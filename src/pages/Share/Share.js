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

function Share(props) {
  const [blackVelvet, setBlackVelvet] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOn, setisOn] = useState(false);
  const [hiCard, setHiCard] = useState([]);

  useEffect(() => {
    console.log("effect 1번");

    axios
      .post("/getmemberHiCard.do", {
        memberId: "user3",
      })
      .then(function (res) {
        console.log(res.data);
        setHiCard(res.data);
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
                {hiCard ? hiCard.memberHiNickname : ""}
              </HiCardTypeName>
              <HiCardImg
                className="blackVelvet"
                src={
                  hiCard.hiImageCode
                    ? blackVelvet
                      ? hiCard.hiImageCode.hiCardImageFrontPath
                      : hiCard.hiImageCode.hiCardImageRearPath
                    : null
                }
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
            <ByBottomCardArea>
              <ByBottomCardTitle>the white</ByBottomCardTitle>
              <ByBottomImg src={whiteVelvetImg}></ByBottomImg>
              <ByBottomBtn>
                Learn More
                <LearnMoreArrow />
              </ByBottomBtn>
            </ByBottomCardArea>
            <ByBottomCardArea>
              <ByBottomCardTitle>the Black</ByBottomCardTitle>
              <ByBottomImg src={blackVelvetImg}></ByBottomImg>
              <ByBottomBtn>
                Learn More
                <LearnMoreArrow />
              </ByBottomBtn>
            </ByBottomCardArea>
            <ByBottomCardArea>
              <ByBottomCardTitle>the white</ByBottomCardTitle>
              <ByBottomImg src={nasa}></ByBottomImg>
              <ByBottomDesc className={`${isOn ? "toggle--checked" : ""}`}>
                <ByBottomDescBox>
                  <img src={selectIcon("9", "white")}></img>
                  <p>마트, 편의점 10% 할인</p>
                </ByBottomDescBox>
                <ByBottomDescBox>
                  <img src={selectIcon("5", "white")}></img>
                  <p>공과금 10% 할인</p>
                </ByBottomDescBox>
                <ByBottomDescBox>
                  <img src={selectIcon("10", "white")}></img>
                  <p>영화 5% 할인</p>
                </ByBottomDescBox>
              </ByBottomDesc>
              <ByBottomBtn>
                Learn More
                <LearnMoreArrow />
              </ByBottomBtn>
            </ByBottomCardArea>
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
          hiCard={hiCard}
        />
      ) : null}
      <Footer />
    </ShareBack>
  );
}

export default Share;
