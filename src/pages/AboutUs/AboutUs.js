import React, { useRef } from "react";
import styled from "styled-components";
import lineBg from "../../assets/images/AboutUs/bg_line.png";
import starBg from "../../assets/images/AboutUs/star_bg.png";
import share from "../../assets/images/AboutUs/share.png";
import chevronDown from "../../assets/icon/chevronDown.png";
import { animateScroll as scroll, Link } from "react-scroll";

const AboutUsDiv = styled.div`
  width: 100%;
  height: 600rem;
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
    align-items: center;
    display: flex;
    flex-direction: column;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

const Banner = styled.div`
  box-sizing: border-box;
  position: absolute;
  left: 7rem;
  top: 21rem;
  display: flex;
  flex-direction: column;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;

  .info1 {
    margin: 0.5rem 0rem;
    font-size: 4rem;
    font-weight: 600;
    line-height: 0.97;
    color: #ffffff;
  }

  .info2 {
    margin: 0.5rem 0rem;
    font-size: 2rem;
    font-weight: 400;
    line-height: 0.97;
    color: #ffffff;
  }

  img {
    position: relative;
    left: 43rem;
    top: 17rem;
    width: 7rem;
    cursor: pointer;
  }
`;

const Share = styled.div`
  width: 100rem;
  //height: 87.05rem;
  position: absolute;
  left: 7rem;
  top: 70rem;

  .top {
    margin-bottom: 5rem;
    width: 45rem;
  }

  .top .title {
    margin-bottom: 2.1rem;
    //width: 100%;
    // text-align: center;
    font-size: 4rem;
    font-weight: 400;
    line-height: 0.97;
    color: #ffffff;
    //font-family: Iceland, "Source Sans Pro";
    white-space: nowrap;
  }

  .top .subTitle {
    //max-width: 28.2rem;
    font-size: 3rem;
    font-weight: 400;
    line-height: 1.5;
    color: #ffffff;
    //font-family: Poppins, "Source Sans Pro";
  }

  .bottom {
    //margin-left: 2.95rem;
    //width: calc(100% - 2.95rem);
    //height: 50.7rem;
    display: flex;
    align-items: center;
  }

  .bottom .shareimg {
    margin-right: 15rem;
    //width: 52.5rem;
    height: 40rem;
    object-fit: cover;
    vertical-align: top;
    flex-shrink: 0;
  }

  .bottom .bottom_right {
    margin: 14.35rem 0rem 14.15rem 0rem;
    height: calc(100% - 28.5rem);
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
  }

  .bottom .bottom_right .info1 {
    margin-bottom: 3rem;
    //max-width: 29.8rem;
    font-size: 3rem;
    font-weight: 400;
    line-height: 1.5;
    color: #ffffff;
    //font-family: Poppins, "Source Sans Pro";
    flex-shrink: 0;
  }

  .bottom .bottom_right .info2 {
    //max-width: 27.6rem;
    font-size: 2.4rem;
    font-weight: 400;
    line-height: 1.5;
    color: #ffffff;
    //font-family: Poppins, "Source Sans Pro";
    flex-shrink: 0;
  }
`;

function AboutUs(props) {
  const scrollToShare = () => {
    //scroll.scrollToBottom(); // 화면을 페이지의 맨 아래로 부드럽게 스크롤링합니다.
  };
  return (
    <AboutUsDiv>
      {/* <img className="background" src={lineBg} alt="lineBg" /> */}
      <img className="background" src={starBg} alt="starBg" />
      <video
        className="banner"
        src="/videos/nasa.mp4"
        muted
        autoPlay
        loop
      ></video>

      <Banner>
        <p className="info1">최고의 가치를 고객과 함께하는</p>
        <p className="info1">Master Hi:Card</p>
        <p className="info2">이제껏 경험 못 했던 쉽고 편리한 카드 서비스</p>
        <p className="info2">
          Hi:Card와 함께라면 당신의 일상이 새로워질 거예요.
        </p>
        <Link to="shareSection" smooth={true} duration={500}>
          <img src={chevronDown} alt="chevronDown" onClick={scrollToShare} />
        </Link>
      </Banner>

      <Share id="shareSection">
        <div className="top">
          <p className="title">Share</p>
          <p className="subTitle">
            카드에 실적을
            <br />
            얼마나 채워야하는지
            <br />
            고민되신적 있나요?
          </p>
        </div>
        <div className="bottom">
          <img className="shareimg" src={share} alt="share" />
          <div className="bottom_right">
            <p class="info1">
              받고 싶은 헤택에 맞춰
              <br />
              자유롭게 실적을 관리하세요.
            </p>
            <p class="info2">
              HI:Card에 쌓인 실적을
              <br />
              본인이 원하는 By:Card에 분배하세요.
            </p>
          </div>
        </div>
      </Share>
    </AboutUsDiv>
  );
}

export default AboutUs;
