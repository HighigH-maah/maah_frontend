import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/style.css";
import { Element } from "react-scroll";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styled, { keyframes, css } from "styled-components";
import mainBackground from "../../assets/images/main_bg.png";
import blackvelvet from "../../assets/images/black_velvet.png";
import blackBack from "../../assets/images/black_back.png";
import whitevelvet from "../../assets/images/white_velvet.png";
import whiteBack from "../../assets/images/white_velvet_back.png";
import pinkholoBack from "../../assets/images/pink_holo_back.png";
import blueholoBack from "../../assets/images/blue_holo_back.png";
import midnightashBack from "../../assets/images/midnight_ash_back.png";
import abouthi from "../../assets/images/about_hi.png";
import byCardGroup from "../../assets/images/by_card_group.png";
import create from "../../assets/images/create.png";
import benefit from "../../assets/images/benefit.png";
import share from "../../assets/images/share.png";
import whymaah from "../../assets/images/why_maah.png";
import reverse from "../../assets/images/reverse.png";
import cardcheck from "../../assets/images/card_check.png";
import history from "../../assets/images/history.png";
import limit from "../../assets/images/limit.png";
import coupon from "../../assets/images/coupon.png";
import diamond from "../../assets/images/diamond.png";
import annotation from "../../assets/images/annotation_alert.png";
import nasa from "../../assets/images/nasa.png";
import star from "../../assets/images/star.png";
import universe from "../../assets/images/universe.png";
import eco from "../../assets/images/에코카드.png";
import union from "../../assets/images/union.png";
import stone from "../../assets/images/stone.png";
import shoot from "../../assets/images/shoot.png";
import dolls from "../../assets/images/dolls.png";
import midnightash from "../../assets/images/midnight_ash.png";
import blueholo from "../../assets/images/blue_holo.png";
import pinkholo from "../../assets/images/pink_holo.png";
import unionbanner from "../../assets/images/banner-union.png";
import nasabanner from "../../assets/images/banner-nasa.png";
import blackvelvetbanner from "../../assets/images/banner-blackvelvet.png";
import whitevelvetbanner from "../../assets/images/banner-whitevelvet.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Arrows = styled.div`
  position: absolute;
  top: 50%;
  width: 54%;
  display: flex;
  justify-content: space-between;
`;

const ArrowBase = styled.div`
  cursor: pointer;
  font-size: 2rem;
  color: white;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 50%;
`;

export const ArrowLeft = styled(ArrowBase)``;
export const ArrowRight = styled(ArrowBase)``;
const banners = [blackvelvetbanner, whitevelvetbanner, nasabanner, unionbanner];
export const TopSection = () => {
  const API_SERVER = process.env.REACT_APP_API_SERVER;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hicardCode, setHiCardCode] = useState(0);
  const [hicardNumber, setHicardNumber] = useState(0);
  const navigate = useNavigate();
  const handleBannerClick = (idx) => {
    clearInterval(interval); // Clear the interval to stop automatic sliding
    setCurrentSlide(idx);

    const clickedBannerPath = banners[idx];

    if (clickedBannerPath.includes("nasa")) {
      navigate(`/byCardDetail/${8}`);
    } else if (clickedBannerPath.includes("union")) {
      navigate(`/byCardDetail/${9}`);
    } else {
      axios
        .post(API_SERVER + "/getMemberInfo.do", {
          memberId: "user2",
        })
        .then(function (res) {
          console.log(res.data);
          setHiCardCode(res.data.hiCardImageCode);
          setHicardNumber(res.data.myHiNumber);

          if (
            (res.data.hiCardImageCode === 2 && idx === 1) ||
            (res.data.hiCardImageCode === 1 && idx === 0)
          ) {
            console.log("2번입니다", res.data.hiCardImageCode);
          } else {
            console.log("하이카드가 아예 없기땨문에 신청으로 넘어감");
            navigate("/hiCard");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    if (
      (hicardCode === 2 && currentSlide === 1) ||
      (hicardCode === 1 && currentSlide === 0)
    ) {
      navigate(`/myHiCardDetail/`, {
        state: {
          memberHiNumber: hicardNumber,
        },
      });
    }
  }, [hicardCode, currentSlide, hicardNumber, navigate]);

  const handleNextSlide = () => {
    const nextSlide = (currentSlide + 1) % banners.length;
    setCurrentSlide(nextSlide);
  };

  const handlePrevSlide = () => {
    const prevSlide = (currentSlide - 1 + banners.length) % banners.length;
    setCurrentSlide(prevSlide);
  };

  const interval = useEffect(() => {
    const intervalId = setInterval(handleNextSlide, 2000); // Adjust the interval as needed
    return () => clearInterval(intervalId); // Cleanup function to clear the interval
  }, [currentSlide]);

  return (
    <MainPage1>
      <Banner>
        <EventBanner
          src={banners[currentSlide]}
          className={currentSlide !== 0 ? "hidden" : ""}
          onClick={() => handleBannerClick(currentSlide)} // Apply the click handler here
        />
        <BannerPage>
          {banners.map((_, index) => (
            <span
              key={index}
              onClick={() => handleBannerClick(index)} // Click handler for the pagination dots
              className={currentSlide === index ? "selected" : ""}
            ></span>
          ))}
        </BannerPage>
        <Arrows>
          <ArrowLeft onClick={handlePrevSlide}>
            <FaChevronLeft />
          </ArrowLeft>
          <ArrowRight onClick={handleNextSlide}>
            <FaChevronRight />
          </ArrowRight>
        </Arrows>
      </Banner>

      <div>
        <NameSection name={"한마음"}></NameSection>
        <div>
          <SocialLogin>
            <SocialButtonBlock>
              <SocialBtnDiv>
                <Link to="/myCardList">
                  <SocialButton>
                    <img src={cardcheck}></img>
                  </SocialButton>
                </Link>
                <p>보유카드</p>
              </SocialBtnDiv>
              <SocialBtnDiv>
                <SocialButton>
                  <img src={history}></img>
                </SocialButton>
                <p>이용내역</p>
              </SocialBtnDiv>

              <SocialBtnDiv>
                <SocialButton>
                  <img src={limit}></img>
                </SocialButton>
                <p>이용한도</p>
              </SocialBtnDiv>

              <SocialBtnDiv>
                <SocialButton>
                  <img src={diamond}></img>
                </SocialButton>
                <p>포인트조회</p>
              </SocialBtnDiv>

              <SocialBtnDiv>
                <SocialButton>
                  <img src={coupon}></img>
                </SocialButton>
                <p>적립쿠폰</p>
              </SocialBtnDiv>
              <SocialBtnDiv>
                <Link to="/lostCard">
                  <SocialButton>
                    <img src={annotation}></img>
                  </SocialButton>
                </Link>
                <p>분실신고</p>
              </SocialBtnDiv>
            </SocialButtonBlock>
          </SocialLogin>
          <LoginButton>
            <span>비밀번호 변경</span>
          </LoginButton>
        </div>
      </div>
    </MainPage1>
  );
};

export const NameDiv = styled.div`
  margin-top: 1rem;
`;

export const NameSection = ({ name }) => {
  return (
    <NameDiv>
      <LoginTitle>{name} 님</LoginTitle>
      <LoginWelcome>Welcome to ma:ah Card</LoginWelcome>
    </NameDiv>
  );
};
export const FirstSection = () => {
  const navigate = useNavigate();
  return (
    <HiCardSection>
      <HiCardTitleSection>
        <HiCardTitle>Master Hi:Card</HiCardTitle>
        <HiCardSubTitle>
          마하의 오리지널리티를 담은 단 하나의 <span>하이카드</span>
        </HiCardSubTitle>
        <CreateButton>
          <button
            onClick={() => {
              navigate("/hiCard");
            }}
          >
            Create New Card
          </button>
        </CreateButton>
      </HiCardTitleSection>
      <HiCardViewSection>
        <HiCard image={blackvelvet} name={"Black Velvet"}></HiCard>
        <HiCard image={whitevelvet} name={"White Velvet"}></HiCard>
        <HiCard image={midnightash} name={"Midnight Ash"}></HiCard>
        <HiCard image={blueholo} name={"Blue holo"}></HiCard>
        <HiCard image={pinkholo} name={"Pink holo"}></HiCard>
      </HiCardViewSection>
    </HiCardSection>
  );
};

export const ThirdSection = () => {
  const navigate = useNavigate();
  return (
    <ByCardSectionDiv>
      <ByCardSection>
        <img src={byCardGroup} width="300" />
        <ByCardTitle>Best by Ma:ah By:Card</ByCardTitle>
        <ByCardSubTitle>
          Ma:ah만의 혜택으로 비교해보세요 <span>By:Card</span>
        </ByCardSubTitle>
        <CreateButton>
          <button
            style={{ margin: 0 }}
            onClick={() => {
              navigate("/cardCompare");
            }}
          >
            Go to Card Compare
          </button>
        </CreateButton>
      </ByCardSection>
      <ByCardWrapper>
        <ByCard image={nasa} name={"Nasa"}></ByCard>
        <ByCard image={star} name={"Star"}></ByCard>
        <ByCard image={universe} name={"Universe"}></ByCard>
        <ByCard image={eco} name={"Eco"}></ByCard>
        <ByCard image={union} name={"Union"}></ByCard>
        <ByCard image={stone} name={"Stone"}></ByCard>
        <ByCard image={shoot} name={"Shoot"}></ByCard>
        <ByCard image={dolls} name={"Dolls"}></ByCard>
      </ByCardWrapper>
    </ByCardSectionDiv>
  );
};

export const FourthSection = () => {
  const navigate = useNavigate();
  return (
    <WhySection>
      <WhyImage image={whymaah} />
      <WhyBoxSection>
        <WhyBox>
          <img src={create} />
          Create
          <p>
            Ma:ah에서 Hi:Card를 발급 받고, 커스텀하세요 타 회사 카드를 Ma:ah
            카드와 비교하고 더 좋은 카드가 무엇인지 고민하세요
          </p>
          <span
            onClick={() => {
              navigate("/hiCard");
            }}
          >
            Get Started
          </span>
        </WhyBox>
        <WhyBox>
          <img src={share} />
          Share
          <p>
            Hi:Card 를 당신만의 By:Card로 그룹화하세요 Hi:Card의 결제 이력을
            바탕으로 원하는 카드에 원하는 만큼 혜택을 공유하세요
          </p>
          <span
            onClick={() => {
              navigate("/share");
            }}
          >
            Ma:ah Share
          </span>
        </WhyBox>
        <WhyBox>
          <img src={benefit} />
          Benefit<p>Ma:ah Share를 통해 늘어난 혜택을 만끽하세요</p>
          <span
            onClick={() => {
              navigate("/myData");
            }}
          >
            My:Data
          </span>
        </WhyBox>
      </WhyBoxSection>
    </WhySection>
  );
};

export const Mainback = styled.div`
  background: linear-gradient(180deg, #fffdfd 37.44%, #c7c7c7 100%);
`;

export const BackImage = styled.div`
  background-image: url(${mainBackground});
  background-size: cover;
  background-repeat: no-repeat;
  height: 520vh;
`;

export const MainPage1 = styled.div`
  box-sizing: border-box;
  padding: 13vh 3% 0 3%;
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: flex-end;
  & > div {
    display: inline-block;
    vertical-align: top;
  }
`;

export const HiCardSection = styled.div`
  box-sizing: border-box;
  padding: 13vh 3% 0 3%;
  width: 100%;
  height: 90vh;
  & > div {
    vertical-align: top;
  }
`;

export const Banner = styled.div`
  margin-right: 2%;
  height: 100%;
  max-width: 80%;
`;

export const EventBanner = styled.img`
  height: 75%;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 1%;
  opacity: 1; // Set initial opacity to 1
  transition: opacity 1s ease-in-out;
`;
export const BannerPage = styled.div`
  text-align: center;
  & > span {
    display: inline-block;
    border-radius: 50%;
    margin: 5px 10px 5px 10px;
    cursor: pointer;
  }
`;

export const SelectBanner = styled.span`
  width: 16px;
  height: 16px;
  background-color: black;
`;

export const UnselectBanner = styled.span`
  width: 12px;
  height: 12px;
  background-color: gray;
`;

export const LoginTitle = styled.div`
  font-size: 2.5rem;
  background: linear-gradient(180deg, #000000 37.44%, #8c8a83 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

export const LoginWelcome = styled.div`
  font-size: 2rem;
  background: linear-gradient(180deg, #000000 37.44%, #8c8a83 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  margin-bottom: 10%;
`;

export const SocialLogin = styled.div`
  margin-top: 5%;
  font-size: 2rem;
`;

export const SocialButtonBlock = styled.div`
  display: flex;
  width: 50%;
  text-align: center;
  flex-wrap: wrap;
`;

export const SocialButton = styled.button`
  width: 76px;
  height: 70px;
  margin: 0.5rem;
  border: 0;
  border-radius: 20px;
  background-color: #fff;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow: 4px 4px 1px 0px gray;
  }

  & > img {
    width: 2em;
    height: 2em;
  }
`;

export const CreateButton = styled.div`
  margin-top: 1rem;
  height: 2rem;
  width: 80%;
  text-align: right;
  & > button {
    cursor: pointer;
    padding: 1.5%;
    font-size: 1rem;
    font-weight: 600;
    color: white;
    display: flex;
    border: 0;
    margin: 0 auto;
    border-radius: 3rem;

    padding: 16px 32px;
    align-items: center;
    gap: 16px;
    transition: box-shadow 0.3s ease;

    border-radius: 64px;
    background: linear-gradient(92deg, #9b988f 7.01%, #d8d3c5 72.28%);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }

  & > button:hover {
    box-shadow: 4px 6px 7px 0px gray;
  }
  & > div > span {
    cursor: pointer;
    color: #999;
  }
`;
export const LoginButton = styled.div`
  height: 10rem;
  width: 80%;
  text-align: right;

  & > button {
    width: 55%;
    padding: 5%;
    font-size: 2rem;
    font-weight: 600;
    color: white;
    margin: 3rem 0 2rem 0;
    border: 0;
    border-radius: 20px;
    background: linear-gradient(180deg, #7d796c 0%, #b4ad98 80%);
  }

  & > span {
    margin-top: 2rem;
    margin-left: 11rem;
    position: relative;
    display: flex;
    cursor: pointer;
    color: #999;
    transition: text-shadow 0.3s ease;
  }

  & > span:hover {
    text-shadow: 0px 1px 9px #0000004f;
  }
`;

export const HiCardTitle = styled.p`
  font-size: 3rem;
  font-weight: bolder;
`;

export const HiCardTitleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HiCardViewSection = styled.div`
  margin: 0 auto;
  width: 80%;
  height: 20%;
  gap: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  position: relative;
  top: 12rem;
`;
export const HiCardSubTitle = styled.p`
  font-size: 1rem;
  font-weight: bolder;
  background: linear-gradient(
    180deg,
    #504f4f 0%,
    rgba(129, 129, 129, 0.95) 100%
  );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  & > span {
    background: linear-gradient(
      180deg,
      #a39d8a 0%,
      rgba(85, 83, 78, 0.99) 19.5%,
      rgba(221, 203, 150, 0.99) 38.5%,
      rgba(0, 0, 0, 0.95) 100%
    );

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 25px;
  }
`;
export const CardImage = styled.img`
  width: 200px;
  height: 341px;
  transition: all 0.15s linear;
  transform: scale(1);
  cursor: pointer;
  &:hover {
    transform: scale(1.12) !important;
    transform-origin: bottom;
  }
`;

export const ByCardImage = styled.img`
  width: 186px;
  height: 282px;
`;
export const WhyTitleImage = styled.img`
  margin: 0 auto;
  width: 697px;
  height: 386px;
`;

export const ReverseIcon = styled.img`
  margin-top: 5px;
  margin: 0 auto;
`;

export const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardName = styled.p`
  font-weight: bolder;
  margin-top: 1rem;
`;

export const ReverseButton = styled.button`
  position: relative;
  width: 42px;
  height: 42px;
  border-radius: 21px;
  border: 0;
  cursor: pointer;
  background: linear-gradient(
    0deg,
    rgba(128, 128, 128, 0.5),
    rgba(200, 200, 200, 0.5) 45%,
    rgba(128, 128, 128, 0.5)
  );
  bottom: 1rem;
`;
export const HiCard = ({ image, name }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleReverseClick = () => {
    setIsFlipped(!isFlipped);
  };

  const cardImages = {
    "Black Velvet": { front: blackvelvet, back: blackBack },
    "White Velvet": { front: whitevelvet, back: whiteBack },
    "Midnight Ash": { front: midnightash, back: midnightashBack },
    "Blue holo": { front: blueholo, back: blueholoBack },
    "Pink holo": { front: pinkholo, back: pinkholoBack },
  };

  const { front: frontImage, back: backImage } = cardImages[name] || {
    front: image,
    back: reverse,
  };

  return (
    <CardDiv>
      <CardImage
        src={isFlipped ? backImage : frontImage}
        alt={isFlipped ? "Reverse Card Image" : "Card Image"}
        style={{ transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      />
      <ReverseButton type="button" onClick={handleReverseClick}>
        <ReverseIcon src={reverse} alt="Reverse Icon" />
      </ReverseButton>
      <CardName>{name}</CardName>
    </CardDiv>
  );
};
export const ByCard = ({ image, name }) => {
  return (
    <CardDiv>
      <ByCardImage src={image} alt="Card Image" />
      <CardName>{name}</CardName>
    </CardDiv>
  );
};

export const WhyImage = ({ image }) => {
  return <WhyTitleImage src={image} alt="Why Maah" />;
};

export const MaahSection = styled.div`
  display: flex;
  gap: 1rem;
  margin-left: 5rem;
  flex-direction: column;
`;

export const MaahTitle = styled.div`
  font-size: 3rem;
  font-weight: bolder;
  width: 60%;
  & > span {
    background: linear-gradient(
      92deg,
      #000 4.63%,
      #201b0a 4.63%,
      rgba(176, 162, 120, 0.4) 18.79%,
      rgba(0, 0, 0, 0.83) 28.04%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 56px;
    font-weight: bolder;
    line-height: 64px;
    letter-spacing: -1.4px;
  }
`;

export const ByCardTitle = styled.div`
  font-size: 3rem;
  font-weight: bolder;
  width: 40%;
`;
export const MaahSubTitle = styled.p`
  font-size: 1rem;
  font-weight: bolder;
`;

export const MaahSub = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const AboutMaah = styled.div`
  display: flex;
  position: relative;
  top: 15rem;
  justify-content: space-between;
`;

export const ByCardSection = styled.div`
  display: flex;
  position: relative;
  gap: 1rem;
  display: flex;
  margin-left: 5rem;
  flex-direction: column;
`;

export const ByCardSubTitle = styled.p`
  font-size: 1rem;
  font-weight: bolder;
  width: 20%;
  & > span {
    background: linear-gradient(
      180deg,
      #cbcbcb 0%,
      rgba(209, 209, 209, 0.99) 19.5%,
      rgba(243, 243, 243, 0.99) 38.5%,
      rgba(0, 0, 0, 0.95) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 25px;
  }
`;

export const ByCardSectionDiv = styled.div`
  display: flex;
  position: relative;
  top: 26rem;
`;

export const ByCardWrapper = styled.div`
  display: flex;
  gap: 2rem;
  width: 65%;
  margin-right: 1rem;
  margin-left: 3rem;
  flex-wrap: wrap;
`;

export const WhySection = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  top: 40rem;
`;

export const WhyBox = styled.div`
  position: relative;
  font-size: 2rem;
  color: white;
  display: flex;
  width: 380px;
  height: 346px;
  padding: 32px 24px;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  flex-shrink: 0;
  border-radius: 25px;
  background: linear-gradient(180deg, #000 0%, #503277 51.5%, #34204e 100%);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  transition: background 0.3s ease;
  & > p {
    height: 100px;
    width: 100%;
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  & > span {
    cursor: pointer;
    font-size: 1.2rem;
    color: #b982ff;
    position: relative;
    transition: text-shadow 0.3s ease;
  }
  & > span:hover {
    text-shadow: 0px 0px 5px;
  }
`;

export const WhyBoxSection = styled.div`
  display: flex;

  gap: 5rem;
  margin-top: 5rem;
  align-items: center;
  justify-content: center;
`;

export const SocialBtnDiv = styled.div`
  display: flex;
  flex-direction: column;

  & > p {
    font-size: 1rem;
  }
`;

export const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const ImageContainer = styled.div`
  width: 700px;
  margin: 50px 0;
  opacity: 0;
  animation: ${({ visible }) =>
    visible
      ? css`
          ${fadeInRight} 1s ease-out forwards
        `
      : "none"};
`;

export const ImageFadeInRight = styled.img`
  width: 700px;
  opacity: 0;
  animation: ${({ visible }) =>
    visible
      ? css`
          ${fadeInRight} 1s ease-out forwards
        `
      : "none"};
`;

export const AboutMaahContent = () => {
  const [visible, setVisible] = useState(false);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleIntersection = (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setVisible(true);
      }
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <AboutMaah>
      <Element name="aboutSection" />
      <MaahSection ref={containerRef}>
        <MaahTitle>
          하나의 카드, 그 이상 <span>Hi:Card</span>와 함께
        </MaahTitle>
        <MaahSub>
          <MaahSubTitle>
            복잡한 카드 고민은 그만, Hi:Card로 결제하세요
          </MaahSubTitle>
          <MaahSubTitle>
            디자인 커스텀부터 Share까지, Ma:ah에서 모든건 내 마음대로
          </MaahSubTitle>
          <CreateButton>
            <button
              style={{ margin: 0 }}
              onClick={() => {
                navigate("/aboutUs");
              }}
            >
              About Ma:ah
            </button>
          </CreateButton>
        </MaahSub>
      </MaahSection>
      <ImageContainer visible={visible}>
        <ImageFadeInRight visible={visible} src={abouthi} alt="AboutHi" />
      </ImageContainer>
    </AboutMaah>
  );
};
