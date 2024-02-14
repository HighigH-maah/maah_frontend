import React from "react";
import "./lostcard.css";
import styled from "styled-components";
import HeaderLogoutBtn from "../../components/Header/HeaderLogoutBtn";
import Footer from "../../components/Footer/Footer";

const LostCardDiv = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  align-items: center;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #fffdfd 37.44%, #d7d7d7 100%);
`;

const Div = styled.div`
  box-sizing: border-box;
  padding: 8rem 4.9rem 16.9rem 6.3rem;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`;

const LostCardTitle = styled.p`
  margin: 0rem 0rem 4.4rem 1.7rem;
  text-align: center;
  font-size: 6rem;
  font-weight: 600;
  line-height: 1.2125;
  color: #000000;
  font-family: M PLUS 1, "Source Sans Pro";
  white-space: nowrap;
  flex-shrink: 0;
`;

const LostCardUnderTitle = styled.p`
  margin: 0rem 0rem 4.9rem 3.2rem;
  text-align: center;
  font-size: 4rem;
  font-weight: 600;
  line-height: 0.97;
  color: #000000;
  font-family: M PLUS 1, "Source Sans Pro";
  white-space: nowrap;
  flex-shrink: 0;
`;

const LostCardMiddleSection = styled.div`
  margin-bottom: 20rem;
  border-radius: 1.2rem;
  flex-shrink: 0;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  position: relative;
  top: 10rem;
`;

// const LostCardMiddleLeftSection = styled.div`
//   box-sizing: border-box;
//   padding: 2.9rem 4.3rem 3rem 0rem;
//   height: 100%;
//   display: flex;
//   align-items: center;
//   flex-shrink: 0;
// `;

const LostCardImageBox = styled.div`
  margin-right: 3rem;
  box-sizing: border-box;
  padding-bottom: 0.6rem;
  width: 20rem;
  height: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  border-radius: 1.2rem;
  flex-shrink: 0;
`;

const LostCardImage = styled.div`
  margin-bottom: 1rem;
  box-sizing: border-box;
  padding-bottom: 1.9385rem;
  width: 100%;
  height: 30rem;
  overflow: hidden;
  position: relative;
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: #000000;
  border-radius: 1.2rem;
  flex-shrink: 0;
  cursor: pointer;
  transition: transform 0.3s ease-in-out; // 부드러운 효과를 위한 transition 추가

  &:hover,
  &:focus {
    transform: scale(1.05); // 호버 혹은 선택되었을 때 크기 증가
  }
`;

const LostCardName = styled.div`
  margin-right: 0.1rem;
  text-align: center;
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 0.97;
  letter-spacing: -0.1rem;
  color: #000000;
  font-family: Iceland, "Source Sans Pro";
  white-space: nowrap;
  flex-shrink: 0;
`;

const LostCardBottomSection = styled.div`
  margin: 0rem 37.1rem 0rem 37rem;
  width: calc(100% - 74.1rem);
  height: 17.3rem;
  border-radius: 3rem;
  flex-shrink: 0;
`;

const IdentityCheckBox = styled.div`
  box-sizing: border-box;
  padding: 0 3.7rem;
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  border-radius: 3rem;
`;

const IdentityCheckText = styled.p`
  margin-bottom: 5.9rem;
  text-align: center;
  font-size: 4rem;
  font-weight: 600;
  line-height: 1.2125;
  color: #000000;
  font-family: M PLUS 1, "Source Sans Pro";
  white-space: nowrap;
  flex-shrink: 0;
`;

const IdentityCheckButton = styled.button`
  margin: 0rem 5.7rem 0rem 2.6rem;
  height: 6rem;
  width: 12rem;
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.2;
  color: #ffffff;
  font-family: Inter, "Source Sans Pro";
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  border-radius: 3rem;
  flex-shrink: 0;
  cursor: pointer;
`;

function LostCard(props) {
  return (
    <LostCardDiv>
      <HeaderLogoutBtn></HeaderLogoutBtn>
      <Div>
        <LostCardTitle>카드 분실 신고</LostCardTitle>
        <LostCardUnderTitle>분실한 카드를 선택해주세요</LostCardUnderTitle>
        <LostCardMiddleSection>
          {/* <LostCardMiddleLeftSection> */}
          <LostCardImageBox>
            <LostCardImage>
              {/* <div class="auto-group-dsr5-wLq">
                <img
                    class="paste-image-here-tG5"
                    src="./assets/paste-image-here-fU1.png"
                  />
                <div class="shape-9xh"></div>
                <p class="card-name-Dhf">Card Name</p>
              </div>
              <div class="card-description-tYu">card description</div> */}
            </LostCardImage>
            <LostCardName>the Pink</LostCardName>
          </LostCardImageBox>
          {/* <div class="group-1000003020-uD7">
              <div class="cards-vertical-duo">
                <img class="shape-BAd" src="REPLACE_IMAGE:I187:699;19:6230" />
                <p class="card-name-HUZ">Card Name</p>
                <div class="card-description-MzD">card description</div>
                <div class="noise-4dj"></div>
              </div>
              <p class="the-blue-Lr9">the Blue</p>
            </div> */}
          {/* </LostCardMiddleLeftSection> */}
          {/* <div class="group-1000003024-ebw">
            <div class="cards-vertical-zA1">
              <div class="auto-group-qysf-hKK">
                <img
                  class="paste-image-here-dTs"
                  src="./assets/paste-image-here.png"
                />
                <div class="shape-Lt5"></div>
                <p class="card-name-pYM">Card Name</p>
              </div>
              <div class="card-description-Kk1">card description</div>
            </div>
            <p class="x-boost-SJq">X BOOST</p>
          </div>
          <div class="auto-group-6x9w-7fs">
            <div class="group-1000003022-33j">
              <div class="cards-vertical-Xjb">
                <img class="shape-5WD" src="REPLACE_IMAGE:I187:702;19:6230" />
                <p class="card-name-1em">Card Name</p>
                <div class="card-description-ip5">card description</div>
                <div class="noise-CjF"></div>
              </div>
              <p class="the-blue-6Zj">the Blue</p>
            </div>
            <div class="group-1000003023-Lys">
              <div class="cards-vertical-tkV">
                <div class="auto-group-hy1w-p8M">
                  <img
                    class="paste-image-here-N9s"
                    src="./assets/paste-image-here-Bpq.png"
                  />
                  <div class="shape-FzM"></div>
                  <p class="card-name-7Wm">Card Name</p>
                </div>
                <div class="card-description-27w">card description</div>
              </div>
              <p class="x-boost-uSd">X BOOST</p>
            </div>
          </div> */}
        </LostCardMiddleSection>
        <LostCardBottomSection>
          <IdentityCheckBox>
            <IdentityCheckText>본인인증을 진행해 주세요</IdentityCheckText>
            <IdentityCheckButton>본인인증</IdentityCheckButton>
          </IdentityCheckBox>
        </LostCardBottomSection>
      </Div>
      <Footer></Footer>
    </LostCardDiv>
  );
}

export default LostCard;
