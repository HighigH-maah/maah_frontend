import React from "react";
import styled from "styled-components";
import lineBg from "../../assets/images/AboutUs/bg_line.png";
import starBg from "../../assets/images/AboutUs/star_bg.png";
import banner from "../../assets/images/AboutUs/aboutus_banner.png";
import share from "../../assets/images/AboutUs/share.png";

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
    //top: 16.3rem;
    align-items: center;
    display: flex;
    flex-direction: column;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

const Share = styled.div`
  width: 100rem;
  //height: 87.05rem;
  position: absolute;
  left: 15rem;
  top: 110rem;

  .top {
    margin-bottom: 5rem;
    width: 45rem;
  }

  .top .title {
    margin-bottom: 2.1rem;
    //width: 100%;
    // text-align: center;
    font-size: 5rem;
    font-weight: 400;
    line-height: 0.97;
    color: #ffffff;
    //font-family: Iceland, "Source Sans Pro";
    white-space: nowrap;
  }

  .top .subTitle {
    //max-width: 28.2rem;
    font-size: 5rem;
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
    height: 70rem;
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
    font-size: 4rem;
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

const BenefitList = styled.div`
  width: 113.4rem;
  height: 70.6rem;
  position: absolute;
  left: 15rem;
  top: 225.6rem;
  display: flex;
  align-items: center;

  .left {
    margin: 24.2rem 23.1rem 24.2rem 0rem;
    height: calc(100% - 48.4rem);
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
  }

  .left .title {
    margin-bottom: 3rem;
    //max-width: 18.3rem;
    font-size: 4rem;
    font-weight: 400;
    line-height: 1.5;
    color: #ffffff;
    //font-family: Poppins, "Source Sans Pro";
    flex-shrink: 0;
  }

  .left .subTitle {
    //max-width: 25.3rem;
    font-size: 2.4rem;
    font-weight: 400;
    line-height: 1.5;
    color: #ffffff;
    //font-family: Poppins, "Source Sans Pro";
    flex-shrink: 0;
  }

  .right {
    width: 65rem;
    height: 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
  }

  .right .top {
    margin-bottom: 3.5rem;
    width: 100%;
    display: flex;
    column-gap: 3.5rem;
    align-items: center;
    flex-shrink: 0;
  }
`;

function AboutUs(props) {
  return (
    <AboutUsDiv>
      <img className="background" src={lineBg} alt="lineBg" />
      <img className="background" src={starBg} alt="starBg" />
      <img className="banner" src={banner} alt="banner" />

      <Share>
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

      <BenefitList>
        <div className="left">
          <p class="title">
            내가 받을 수 있는
            <br />
            혜택을 한눈에
          </p>
          <p class="subTitle">
            이번달 사용 할 수 있는
            <br />
            모든 혜텍을 보여주는 직관적인 화면 구성
          </p>
        </div>
        <div className="right">
          <div className="top"></div>
        </div>
      </BenefitList>
    </AboutUsDiv>
  );
}

export default AboutUs;
