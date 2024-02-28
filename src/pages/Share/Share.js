import { useCallback, useEffect, useRef, useState } from "react";
import React from "react";
import "../../assets/css/style.css";
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
  ByDragDesc,
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
import { Link, useNavigate } from "react-router-dom";
import MemberLoad from "../../components/Utils/SessionStorage";
import HeaderWhiteVer from "../../components/Header/HeaderWhiteVer";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ByBottomDragContainer from "../../components/ShareStyle/ByBottomDragContainer";
import { HiCardPoint } from "../../components/ShareStyle/ShareMainComponent";

function Share(props) {
  const [blackVelvet, setBlackVelvet] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOn, setisOn] = useState(false);
  const [card, setCard] = useState([]);
  const [hicardBene, setHicardBene] = useState([]);
  // const [memberBenefit, setMemberBenefit] = useState([]);
  const maxBenefitCount = 5; // 최대 출력 개수 설정
  const [openCard, setOpenCard] = useState({});
  const [byCardList, setByCardList] = useState([]);
  const hiEffect = useRef(0);
  const animation = useRef(true);
  const [isChange, setIsChange] = useState(false);
  const navigate = useNavigate();
  const API_SERVER = process.env.REACT_APP_API_SERVER;

  useEffect(() => {
    const hicard = document.getElementsByClassName("hiCard");
    const timer = setInterval(() => {
      if(hicard.length === 0) {
        clearInterval(timer);
      } else {
        if(animation.current) {
          hiEffect.current -= 1;
        } else {
          hiEffect.current += 1;
        }
        if(hiEffect.current > 0 || hiEffect.current < -1000) {
          animation.current = !animation.current;
        }
        console.log(hicard.length);
        hicard[0].style.top = hiEffect.current * 0.02 + "px";
      }
    }, 1);
  },[]);

  useEffect(() => {
    console.log("effect 1번");
    // setIsChange(false);

    axios
      .post(API_SERVER + "/getmemberHiCard.do", {
        memberId: MemberLoad(),
      })
      .then(function (res) {
        console.log("----", res.data);
        setByCardList(res.data.bycard);
        setCard(res.data);
        setHicardBene(res.data.hicard.memberBenefitList);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [isChange]);

  const toggleHandler = () => {
    setisOn(!isOn);
  };

  const openCardFunc = (card) => {
    setOpenCard(card);
  };

  const reverseCard = (prop) => {
    console.log(hicardBene);
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

  const insertHiBenefit = ({ props }) => {
    console.log(props);
  };

  const openModal = () => {
    console.log("byCardList", byCardList);
    setIsModalOpen(true);
    const element = document.getElementById("share_modal");
    console.log("ele", element);
    element.scrollIntoView();
    console.log(openCard);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // if (isChange === true) {
    //   navigate("/share");
    // }
  };

  const clickTest = (props) => {
    navigate("/myCardList");
  };

  // props는 readonly이기 때문에 자식 컴포넌트에서 바꾼 상태를 부모 컴포넌트에 전달하려면
  // 상태변화를 자식에서 직접 일으키는 것이 아니라
  // 부모의 코드 내에 상태변화를 일으키는 함수를 선언하고, 자식에 그 함수를 전달해서 해당 함수를 실행만 함으로써
  // 부모에 상태변화를 전달할 수 있다.
  const updateChange = () => {
    setIsChange(!isChange);
  };

  return (
    <ShareBack>
      <HeaderWhiteVer />
      {/* header 하얀색 필요 */}
      <ShareMain>
        <HiSection>
          <HiTopper>
            <HiTopTitle id={"share_modal"}>Ma:ah Share</HiTopTitle>
          </HiTopper>
          <HiBottom>
            <HiBottomWings>
              <HiCardPoint>
                Hi:Point {card.hicard ? card.hicard.memberHiPoint : ""}P
              </HiCardPoint>
              <HiCardTypeName>
                {card.hicard ? card.hicard.memberHiNickname : ""}
              </HiCardTypeName>
              <div className="hiCard" style={{ position: "relative" }}>
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
                <HiCardDesc className="blackVelvet">
                  <p>이 달의 혜택</p>
                  <HiCardDescBox>
                    {hicardBene ? (
                      hicardBene.map((benefit, index) => {
                        if (index >= maxBenefitCount) {
                          return null;
                        }
                        return (
                          <h3 key={index}>
                            <img
                              src={selectIcon(
                                JSON.stringify(benefit.intByBenefitCode),
                                "white"
                              )}
                              alt=""
                            />
                            <p>{benefit.byBenefitDesc}</p>
                          </h3>
                        );
                      })
                    ) : (
                      <div>전월 혜택 없음</div>
                    )}
                  </HiCardDescBox>
                </HiCardDesc>
              </div>
              <Link
                to="/myHiCardDetail"
                state={{
                  memberHiNumber: card.hicard
                    ? card.hicard.memberHiNumber
                    : null,
                }}
                style={{ textDecoration: "none" }}
              >
                <LearnMore>
                  Learn More
                  <LearnMoreArrow />
                </LearnMore>
              </Link>
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
            <ByDragDesc>drag&drop으로 순서를 변경할 수 있습니다</ByDragDesc>
          </ByTopper>
          <DndProvider backend={HTML5Backend}>
            <ByBottomDragContainer
              byCardList={byCardList}
              openCardFunc={openCardFunc}
              openModal={openModal}
              isOn={isOn}
              setisOn={setisOn}
            />
          </DndProvider>
        </BySection>
      </ShareMain>
      {isModalOpen ? (
        <ShareModal
          isOpen={isModalOpen}
          closeModal={closeModal}
          hiCard={card.hicard}
          openCard={openCard}
          updateChange={updateChange}
        />
      ) : null}
      <Footer />
    </ShareBack>
  );
}

export default Share;
