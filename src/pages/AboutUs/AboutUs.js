import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";
import chevronDown from "../../assets/images/AboutUs/chevrondown.png";
import banner from "../../assets/images/AboutUs/banner2.png";
import createimg from "../../assets/images/AboutUs/createImg.png";
import shareimg from "../../assets/images/AboutUs/shareImg.png";
import benefitimg from "../../assets/images/AboutUs/benefitsImg.png";
import blackvelvet from "../../assets/images/black_velvet.png";
import whitevelvet from "../../assets/images/white_velvet.png";
import midnightash from "../../assets/images/midnight_ash.png";
import blueholo from "../../assets/images/blue_holo.png";
import pinkholo from "../../assets/images/pink_holo.png";
import traffic from "../../assets/images/AboutUs/교통.png";
import phone from "../../assets/images/AboutUs/통신.png";
import airline from "../../assets/images/AboutUs/항공.png";
import util from "../../assets/images/AboutUs/공과금.png";
import subway from "../../assets/images/AboutUs/대중교통.png";
import movie from "../../assets/images/AboutUs/영화문화.png";
import hospital from "../../assets/images/AboutUs/병원약국.png";
import sports from "../../assets/images/AboutUs/레저스포츠.png";
import shopping from "../../assets/images/AboutUs/쇼핑.png";
import food from "../../assets/images/AboutUs/푸드.png";
import travel from "../../assets/images/AboutUs/여행.png";
import study from "../../assets/images/AboutUs/교육육아.png";
import sharemodal from "../../assets/images/AboutUs/sharemodal.png";
import sharemodal2 from "../../assets/images/AboutUs/sharemodal2.png";
import benefit1 from "../../assets/images/AboutUs/benefit1.png";
import benefit2 from "../../assets/images/AboutUs/benefit2.png";
import benefit3 from "../../assets/images/AboutUs/benefit3.png";
import benefit4 from "../../assets/images/AboutUs/benefit4.png";
import chevronDown1 from "../../assets/icon/chevronDown.png";
import chevronUp from "../../assets/icon/chevronUp.png";
import { animateScroll as scroll, Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { CreateButton } from "../../components/MainStyle/MainComponent";
import HeaderWhiteVer from "../../components/Header/HeaderWhiteVer";
import Slider from "react-infinite-logo-slider";
import Footer from "../../components/Footer/Footer";
import FAQ from "./FAQ";

const AboutUsDiv = styled.div`
  height: 565rem;
  position: relative;
  overflow: hidden;
  background-color: #000000;

  .background {
    box-sizing: border-box;
    width: 100%;
    height: 600rem;
    position: absolute;
    left: 0;
    top: 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  .banner {
    box-sizing: border-box;
    width: 100%;
    position: absolute;
    top: 10rem;
    align-items: center;
    display: flex;
    flex-direction: column;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
  }

  .chevronDown1 {
    position: relative;
    left: 49%;
    top: 58rem;
    width: 5rem;
    cursor: pointer;
  }

  .chevronDown2 {
    position: relative;
    left: 44.5%;
    top: 115rem;
    width: 5rem;
    cursor: pointer;
  }

  .chevronDown3 {
    position: relative;
    left: 39%;
    top: 175rem;
    width: 5rem;
    cursor: pointer;
  }

  .chevronDown4 {
    position: relative;
    left: 48.5%;
    top: 188rem;
    width: 5rem;
    cursor: pointer;
  }

  .chevronDown5 {
    position: relative;
    left: 48.5%;
    top: 258rem;
    width: 5rem;
    cursor: pointer;
  }

  .chevronDown6 {
    position: relative;
    left: 48.5%;
    top: 320rem;
    width: 5rem;
    cursor: pointer;
  }

  .chevronDown7 {
    position: relative;
    left: 43.5%;
    top: 380rem;
    width: 5rem;
    cursor: pointer;
  }

  .faqList {
    display: flex;
    position: absolute;
    top: 457rem;
    left: 28rem;
    flex-direction: column;
  }

  .title {
    margin: 0;
    color: #ccb88f;
    text-align: center;
    font-family: Poppins;
    font-size: 50px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 3rem;
  }
`;

const Banner = styled.div`
  box-sizing: border-box;
  position: absolute;
  left: 31.5rem;
  top: 33rem;
  display: flex;
  flex-direction: column;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  align-items: center;

  .title {
    margin: 0.5rem 0rem;
    font-size: 4rem;
    font-weight: 600;
    line-height: 0.97;
    color: #ffffff;
  }

  .subtitle {
    margin: 0.5rem 0rem;
    font-size: 4rem;
    font-weight: 600;
    line-height: 0.97;
    color: #ccb88f;
  }
`;

const Banner2 = styled.div`
  width: 100%;
  position: absolute;
  top: 69rem;

  img {
    height: 1000px;
  }

  .info {
    width: 750px;
    display: flex;
    position: absolute;
    top: 14rem;
    left: 10rem;
    flex-direction: column;
  }

  .title {
    display: flex;
    align-items: baseline;
    margin-bottom: 2rem;
  }

  .title1 {
    color: #fff;
    font-size: 55px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .title2 {
    margin-left: 1rem;
    color: #ccb88f;
    font-size: 90px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .subtitle1 {
    color: var(--naver-text, #fff);
    margin: 1rem 0rem;
    font-family: Poppins;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const Service = styled.div`
  width: 100%;
  height: 900px;
  background-color: #151515;
  display: flex;
  position: absolute;
  top: 130rem;

  .service {
    width: 1175px;
    position: relative;
    left: 16rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .title {
    display: flex;
    align-items: baseline;
    margin-bottom: 5rem;
    justify-content: center;
  }

  .title1 {
    color: #ccb88f;
    font-size: 55px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .title2 {
    color: #fff;
    font-size: 65px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 1rem;
  }

  .info {
    display: flex;
  }

  .frame {
    display: flex;
    width: 345px;
    height: 405.954px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-shrink: 0;
    border-radius: 20px;
    border: 3px solid #ccb88f;
    margin: 0rem 2.5rem;

    transition: transform 0.3s ease; /* Add transition for smooth animation */
    transform-origin: center; /* Set the transform origin for scaling */
  }

  .name {
    color: #ccb88f;
    text-align: center;
    font-family: Poppins;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0rem;
  }

  .text {
    color: #a0a0a0;
    text-align: center;
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0rem;
  }
`;

const Create = styled.div`
  width: 100%;
  display: flex;
  top: 185rem;
  position: relative;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  .create {
    display: flex;
    padding: 20px 0px;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .title {
    margin: 0;
    color: #ccb88f;
    text-align: center;
    font-family: Poppins;
    font-size: 50px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  .text1 {
    margin: 0;
    color: var(--naver-text, #fff);
    text-align: center;
    font-family: Poppins;
    font-size: 50px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .text2 {
    margin: 0;
    color: #a0a0a0;
    text-align: center;
    font-family: Poppins;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .card {
    display: flex;
    padding: 20px 0px;
    align-items: center;
    gap: 50px;
    animation: moveBanner 25s linear infinite;
  }

  .card img {
    width: 250px;
  }
`;

const Benefits = styled.div`
  width: 100%;
  height: 900px;
  background-color: #151515;
  display: flex;
  position: absolute;
  top: 390rem;
  align-items: center;
  justify-content: space-around;

  .benefits {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 80px;
  }

  .infoL {
    display: flex;
    width: 460px;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }

  .title {
    color: #ccb88f;
    text-align: center;
    font-family: Poppins;
    font-size: 50px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0;
  }

  .subtitle {
    display: flex;
    width: 460px;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
  }

  .text1 {
    color: var(--naver-text, #fff);
    font-family: Poppins;
    font-size: 50px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 1rem 0rem;
  }

  .text2 {
    color: #a0a0a0;
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
  }

  .infoR {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
  }

  .row {
    display: flex;
    flex-direction: row;
    gap: 30px;
  }
`;

const Share = styled.div`
  .section1 {
    display: flex;
    position: absolute;
    left: 4.5rem;
    top: 260rem;
  }

  .rec1 {
    width: 580px;
    height: 700px;
    flex-shrink: 0;
    background: #151515;
  }

  .info {
    display: flex;
    position: absolute;
    top: 5rem;
    left: 3.5rem;
    height: 285px;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    flex-shrink: 0;
  }

  .title {
    color: #ccb88f;
    text-align: center;
    font-family: Poppins;
    font-size: 50px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .subtitle {
    color: var(--naver-text, #fff);
    font-family: Poppins;
    font-size: 50px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .sharemodal {
    display: flex;
    position: absolute;
    top: 27rem;
    left: 15rem;
  }

  .section2 {
    display: flex;
    position: absolute;
    left: 50rem;
    top: 280rem;
  }

  .rec2 {
    width: 750px;
    height: 585px;
    flex-shrink: 0;
    background: #151515;
  }

  .sharemoda2 {
    display: flex;
    position: absolute;
    left: 13rem;
    top: -5rem;
    width: 600px;
  }

  .info2 {
    display: flex;
    position: absolute;
    top: 20rem;
    left: 13rem;
    width: 550px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 30px;
    flex-shrink: 0;
  }

  .title2 {
    color: var(--naver-text, #fff);
    font-family: Poppins;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .subtitle2 {
    color: #a0a0a0;
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .section3 {
    display: flex;
    position: absolute;
    left: 10rem;
    top: 330rem;
    align-items: center;
  }

  .rec3 {
    width: 1200px;
    height: 700px;
    display: flex;
    background: #151515;
  }

  .info3 {
    display: flex;
    position: absolute;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    left: 10rem;
  }

  .title3 {
    color: var(--naver-text, #fff);
    font-family: Poppins;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .subtitle3 {
    color: #a0a0a0;
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .benefitimg {
    display: flex;
    position: relative;
    top: 5rem;
    right: 30rem;
    width: 650px;
    justify-content: center;
    align-items: center;
    align-content: center;
    gap: 35px;
    flex-wrap: wrap;
  }
`;

function AboutUs(props) {
  const navigate = useNavigate();

  const accordions = [
    {
      question: "하이카드 발급 절차는 어떻게 되나요?",
      answer:
        "디자인 선정 후 필수 정보를 입력하고 본인인증 절차를 진행하시면, \n 심사 후 카드발급이 완료됩니다.",
    },
    {
      question: "혜택을 받을 수 있는 기준은 무엇인가요?",
      answer:
        "개별 바이 카드의 혜택 요건을 맞춰 바이 포인트 실적을 분배하시면 됩니다.\n 매월 말일을 기준으로 바이 포인트 적립액을 산정하여 다음 달 혜택을 제공합니다.",
    },
    {
      question: "하이카드 분실 시 처리 절차는 어떻게 되나요?",
      answer: "하이카드 분실신고 후 카드를 재발급받으시면 됩니다.",
    },
  ];

  const scrollToShare = () => {
    //scroll.scrollToBottom(); // 화면을 페이지의 맨 아래로 부드럽게 스크롤링합니다.
  };

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  const [isCreateHovered, setIsCreateHovered] = useState(false);
  const [isShareHovered, setIsShareHovered] = useState(false);
  const [isBenefitsHovered, setIsBenefitsHovered] = useState(false);

  const handleCreateMouseEnter = () => {
    setIsCreateHovered(true);
  };

  const handleCreateMouseLeave = () => {
    setIsCreateHovered(false);
  };

  const handleShareMouseEnter = () => {
    setIsShareHovered(true);
  };

  const handleShareMouseLeave = () => {
    setIsShareHovered(false);
  };

  const handleBenefitsMouseEnter = () => {
    setIsBenefitsHovered(true);
  };

  const handleBenefitsMouseLeave = () => {
    setIsBenefitsHovered(false);
  };

  return (
    <AboutUsDiv>
      <HeaderWhiteVer />
      <video
        className="banner"
        src="/videos/nasa2.mp4"
        muted
        autoPlay
        loop
      ></video>

      <Banner data-aos="fade-up">
        <p className="title">하나의 카드, 무한한 혜택</p>
        <p className="subtitle">Master Hi:Card</p>
        <CreateButton>
          <button
            onClick={() => {
              navigate("/hiCard");
            }}
          >
            Create New Card
          </button>
        </CreateButton>
      </Banner>
      <Link to="banner2" smooth={true} duration={500}>
        <img
          className="chevronDown1"
          src={chevronDown}
          alt="chevronDown"
          onClick={scrollToShare}
        />
      </Link>

      <Banner2 id="banner2">
        <img src={banner} alt="사진"></img>
        <div className="info" data-aos="fade-right">
          <div className="title">
            <span className="title1">WHAT’S </span>
            <span className="title2">Hi:Card</span>
          </div>

          <p className="subtitle1">
            지금껏 경험하지 못한 <br /> 쉽고 편리한 카드 서비스
          </p>
          <p className="subtitle1">
            단 하나의 카드로
            <br /> 다채로운 혜택을 경험하세요.
          </p>
          <p className="subtitle1">
            Hi:Card와 함께라면
            <br />
            당신의 일상이 새로워질 거예요.
          </p>
        </div>
      </Banner2>
      <Link to="service" smooth={true} duration={500}>
        <img
          className="chevronDown2"
          src={chevronDown}
          alt="chevronDown"
          onClick={scrollToShare}
        />
      </Link>

      <Service id="service">
        <div className="service">
          <div className="title" data-aos="zoom-in">
            <span className="title1">Hi:Card </span>
            <span className="title2">Service</span>
          </div>
          <div className="info" data-aos="zoom-in">
            <div
              onMouseEnter={handleCreateMouseEnter}
              onMouseLeave={handleCreateMouseLeave}
              style={{ transform: isCreateHovered ? "scale(1.1)" : "scale(1)" }}
              className="frame"
            >
              <img src={createimg} alt="create"></img>
              <p className="name">CREATE</p>
              <p className="text">
                지금 카드를 발급하고, <br /> 더 많은 혜택을 누리세요
              </p>
            </div>
            <div
              onMouseEnter={handleShareMouseEnter}
              onMouseLeave={handleShareMouseLeave}
              style={{ transform: isShareHovered ? "scale(1.1)" : "scale(1)" }}
              className="frame"
            >
              <img src={shareimg} alt="share"></img>
              <p className="name">SHARE</p>
              <p className="text">
                하이카드로 실적을 <br /> 효율적으로 분배해 보세요
              </p>
            </div>
            <div
              onMouseEnter={handleBenefitsMouseEnter}
              onMouseLeave={handleBenefitsMouseLeave}
              style={{
                transform: isBenefitsHovered ? "scale(1.1)" : "scale(1)",
              }}
              className="frame"
            >
              <img src={benefitimg} alt="benefits"></img>
              <p className="name"> BENEFITS</p>
              <p className="text">
                더 많은 혜택을 누리는 <br /> 새로운 경험을 만나보세요
              </p>
            </div>
          </div>
        </div>
      </Service>
      <Link to="create" smooth={true} duration={500}>
        <img
          className="chevronDown3"
          src={chevronDown}
          alt="chevronDown"
          onClick={scrollToShare}
        />
      </Link>

      <Create id="create" data-aos="fade-up">
        <div className="create">
          <p className="title">CREATE</p>
          <div className="info">
            <p className="text1">
              한번 더 새롭게 <br /> 다양해진 디자인
            </p>
            <p className="text2">
              내가 고르는 선택의 즐거움 <br />
              원하는 디자인과 기능을 선택할 수 있습니다.
            </p>
          </div>
        </div>
        <div className="card">
          <Slider
            width="100px"
            duration={30}
            pauseOnHover={true}
            blurBorders={false}
            blurBoderColor={"#fff"}
            style={{ display: "flex" }}
          >
            {/* <Slider.Slide style={{ marginRight: "50px" }}>
              <img src={blackvelvet} alt="blackvelvet" />
            </Slider.Slide> */}
            <Slider.Slide style={{ marginRight: "50px" }}>
              <img src={whitevelvet} alt="whitevelvet" />
            </Slider.Slide>
            <Slider.Slide style={{ marginRight: "50px" }}>
              <img src={midnightash} alt="midnightash" />
            </Slider.Slide>
            <Slider.Slide style={{ marginRight: "50px" }}>
              <img src={blueholo} alt="blueholo" />
            </Slider.Slide>
            <Slider.Slide style={{ marginRight: "50px" }}>
              <img src={pinkholo} alt="pinkholo" />
            </Slider.Slide>
          </Slider>
        </div>
      </Create>
      {/* <Link to="share1" smooth={true} duration={500}>
        <img
          className="chevronDown4"
          src={chevronDown}
          alt="chevronDown"
          onClick={scrollToShare}
        />
      </Link> */}

      <Share>
        <div id="share1" className="section2" data-aos="fade-up">
          <div className="rec2"></div>
          <img
            className="sharemoda2"
            src={sharemodal2}
            alt="share modal2"
            data-aos="fade-up"
          />
          <div className="info2" data-aos="fade-up">
            <div className="title2">
              받고 싶은 혜택에 맞춰 <br />
              자유롭게 실적을 관리하세요.
            </div>
            <div className="subtitle2">
              HI:Card에 쌓인 실적을 <br /> 본인이 원하는 By:Card에 분배하세요.
            </div>
          </div>
        </div>

        <div className="section1" data-aos="fade-up">
          <div className="rec1"></div>
          <div className="info" data-aos="fade-up">
            <div className="title">SHARE</div>
            <div className="subtitle">
              카드에 실적을 <br />
              얼마나 채워야하는지 <br />
              고민되신적 있나요?{" "}
            </div>
          </div>
          <img
            className="sharemodal"
            src={sharemodal}
            alt="share modal"
            data-aos="fade-up"
          />
        </div>

        {/* <Link to="share2" smooth={true} duration={500}>
          <img
            className="chevronDown5"
            src={chevronDown}
            alt="chevronDown"
            onClick={scrollToShare}
          />
        </Link> */}

        <div id="share2" className="section3" data-aos="fade-up">
          <div className="rec3"></div>
          <div className="info3" data-aos="fade-up">
            <div className="title3">
              내가 받을 수 있는 <br />
              혜택을 한눈에
            </div>
            <div className="subtitle3">
              이번달 사용 할 수 있는 <br />
              모든 혜텍을 보여주는 직관적인 화면 구성
            </div>
          </div>
          <div className="benefitimg">
            <img src={benefit1} alt="benefit1" data-aos="fade-up" />
            <img src={benefit2} alt="benefit2" data-aos="fade-up" />
            <img src={benefit3} alt="benefit3" data-aos="fade-up" />
            <img src={benefit4} alt="benefit4" data-aos="fade-up" />
          </div>
        </div>
      </Share>
      <Link to="benefits" smooth={true} duration={500}>
        <img
          className="chevronDown6"
          src={chevronDown}
          alt="chevronDown"
          onClick={scrollToShare}
        />
      </Link>

      <Benefits id="benefits">
        <div className="benefits">
          <div className="infoL" data-aos="fade-right">
            <p className="title">BENEFITS</p>
            <div className="subtitle">
              <p className="text1">
                단, 한장의 카드로 <br />
                모든 혜택을
              </p>
              <p className="text2">
                하나의 카드로 어디서나 간편하게 <br />
                일상의 유용한 혜택만 모아 사용해보세요.
              </p>
            </div>
          </div>
          <div className="infoR" data-aos="zoom-in">
            <div className="row">
              <img src={traffic} alt="교통" />
              <img src={phone} alt="통신" />
              <img src={airline} alt="항공" />
            </div>
            <div className="row">
              <img src={util} alt="공과금" />
              <img src={subway} alt="대중교통" />
              <img src={movie} alt="영화/문화" />
            </div>
            <div className="row">
              <img src={hospital} alt="병원/약국" />
              <img src={sports} alt="레저/스포츠" />
              <img src={shopping} alt="쇼핑" />
            </div>
            <div className="row">
              <img src={food} alt="푸드" />
              <img src={travel} alt="여행" />
              <img src={study} alt="교육/육아" />
            </div>
          </div>
        </div>
      </Benefits>
      {/* <Link to="faq" smooth={true} duration={500}>
        <img
          className="chevronDown7"
          src={chevronDown}
          alt="chevronDown"
          onClick={scrollToShare}
        />
      </Link> */}
      <div id="faq" className="faqList" data-aos="fade-up">
        <div className="title">FAQS</div>
        {accordions.map((accordion, index) => (
          <FAQ
            key={index}
            question={accordion.question}
            answer={accordion.answer.split("\n").map((sentence, idx) => (
              <p key={idx}>{sentence.trim()}</p>
            ))}
          />
        ))}
      </div>

      <Footer position="relative" top="455rem" />
    </AboutUsDiv>
  );
}

export default AboutUs;
