import React from "react";
import "./mycardlist.css";
import HeaderLogoutBtn from "../../components/Header/HeaderLogoutBtn";
import styled from "styled-components";
import { BackImage, Mainback } from "../../components/Main/MainComponent";
import gradeimg from "../../assets/images/Grade/bronze.png";

const MyCardListDiv = styled.div`
  width: 100%;
  height: 480rem;
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #fffdfd -0%, #b2b2b2 100%);
`;

const Main = styled.div`
  width: 100%;
  height: 317.789rem;
  position: relative;
  top: 15rem;
`;

const HiCardBox = styled.div`
  margin: 0rem 0rem 12rem 5rem;
  box-sizing: border-box;
  padding: 3.9rem 5.5rem 7.5rem 4.8rem;
  height: 38.8rem;
  display: flex;
  align-items: center;
  background: linear-gradient(
    280.43deg,
    #ffffff 18.1%,
    rgba(219, 219, 219, 0.5180130601) 47.23%,
    rgba(255, 255, 255, 0) 78.54%
  );
  border-radius: 3rem;
  width: 90%;
`;

const MyHiCardLeftSection = styled.div`
  margin-right: 2rem;
  margin-top: 2rem;
  width: 22.8rem;
  height: 100%;
  flex-shrink: 0;
`;

const MyHiCardShape = styled.div`
  margin-bottom: 3.3rem;
  box-sizing: border-box;
  padding: 1.3rem 4.9rem 1.2rem 5rem;
  width: 100%;
  height: 21.5rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  /* background-image: url("REPLACE_IMAGE:152:2759"); */
`;

const HiCard = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  background-color: #000000;
  border-radius: 1.2rem;
`;

const HiCardName = styled.p`
  width: 7.7rem;
  height: 1.9rem;
  position: absolute;
  left: 1.217rem;
  top: 1.218rem;
  font-size: 1.9rem;
  font-weight: 400;
  line-height: 0.97;
  letter-spacing: -0.076rem;
  color: #ffffff;
  /* font-family: Iceland, "Source Sans Pro"; */
  white-space: nowrap;
`;

const HiCardDescription = styled.div`
  width: 12.5rem;
  height: 2.2rem;
  position: absolute;
  left: -0.884rem;
  top: 15.5423rem;
  text-align: right;
  display: flex;
  font-size: 1.7rem;
  font-weight: 500;
  line-height: 1.2775;
  letter-spacing: -0.068rem;
  color: #ffffff;
  /* font-family: Space Grotesk, "Source Sans Pro"; */
  white-space: nowrap;
`;

const HiCardNoise = styled.div`
  opacity: 0.06;
  width: 12.9rem;
  height: 19rem;
  position: absolute;
  left: 0;
  top: 0;
  /* background-image: url("../assets/noise-vow.png"); */
  background-repeat: repeat;
  background-size: 100%;
`;

const HiCardNumber = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.1rem;
  font-weight: 600;
  line-height: 1.2125;
  color: #000000;
  /* font-family: Inter, "Source Sans Pro"; */
  white-space: nowrap;
`;

const MyHiCardCenterSection = styled.div`
  margin: 7rem 2rem 4.8rem 0rem;
  width: 28.5rem;
  flex-shrink: 0;
  border-right: solid 0.1rem #000000;
`;

const HicardTitle = styled.p`
  margin-bottom: 2rem;
  font-size: 3rem;
  font-weight: 400;
  line-height: 0.97;
  letter-spacing: -0.2rem;
  /* font-family: Iceland, "Source Sans Pro"; */
  white-space: nowrap;
`;
const HiCardLimit = styled.div`
  margin-bottom: 2.7rem;
  width: 100%;
  display: flex;
  align-items: center;
`;

const HiCardLimitTitle = styled.div`
  margin-right: 2rem;
  display: flex;
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.2125;
  color: #000000;
  /* font-family: Inter, "Source Sans Pro"; */
  white-space: nowrap;
  flex-shrink: 0;
`;

const HiCardAmout = styled.div`
  text-align: right;
  display: flex;
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.2125;
  color: #000000;
  /* font-family: Inter, "Source Sans Pro"; */
  white-space: nowrap;
  flex-shrink: 0;
`;
const HiCardUse = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const HiCardUseTitle = styled.div`
  margin-right: 2rem;
  display: flex;
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.2125;
  color: #930000;
  /* font-family: Inter, "Source Sans Pro"; */
  white-space: nowrap;
  flex-shrink: 0;
`;

const MyHiCardRightSection = styled.div`
  margin-top: 3.3rem;
  width: 33rem;
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`;

const HiCardInfo = styled.div`
  box-sizing: border-box;
  padding-bottom: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`;

const HiCardPoint = styled.div`
  margin: 0rem 0.1rem 2rem 0rem;
  width: calc(100% - 0.1rem);
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

const HiCardPointTitle = styled.div`
  margin-right: 6rem;
  display: flex;
  font-size: 2.3rem;
  font-weight: 400;
  line-height: 0.6111111111;
  letter-spacing: -0.018rem;
  color: #000000;
  /* font-family: Iceland, "Source Sans Pro"; */
  white-space: nowrap;
  flex-shrink: 0;
`;

const HicardPointScore = styled.div`
  display: flex;
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 0.6111111111;
  letter-spacing: -0.018rem;
  color: #000000;
  /* font-family: Iceland, "Source Sans Pro"; */
  white-space: nowrap;
  flex-shrink: 0;
`;

const HiCardGrade = styled.div`
  margin-right: 0.8rem;
  width: calc(100% - 0.8rem);
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

const HiCardGradeTitle = styled.div`
  margin-right: 3rem;
  display: flex;
  font-size: 2.3rem;
  font-weight: 400;
  line-height: 0.6111111111;
  letter-spacing: -0.018rem;
  color: #000000;
  /* font-family: Iceland, "Source Sans Pro"; */
  white-space: nowrap;
  flex-shrink: 0;
`;

const HiCardGradeImage = styled.img`
  width: 9rem;
  height: 6rem;
  object-fit: cover;
  vertical-align: top;
  flex-shrink: 0;
`;

const BottomButtonDiv = styled.div`
  width: 100%;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`;

const LinkButton = styled.button`
  margin-bottom: 1rem;
  width: 28rem;
  height: 5rem;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 0.97;
  letter-spacing: -0.036rem;
  color: #ffffff;
  /* font-family: Iceland, "Source Sans Pro"; */
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    180deg,
    rgba(188, 185, 179, 0.8539999723) -0%,
    rgba(177, 172, 148, 0.9720500112) 34%,
    rgba(130, 127, 116, 0.8700000048) 98%
  );
  border-radius: 0.5rem;
  flex-shrink: 0;
  border: none;
`;

const ButtonUnderLine = styled.div`
  margin: 0rem 0rem 0rem 8rem;
  width: calc(100% - 13rem);
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

const AccountChange = styled.p`
  margin-right: 3rem;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 0.97;
  letter-spacing: -0.026rem;
  color: #000000;
  /* font-family: Iceland, "Source Sans Pro"; */
  white-space: nowrap;
  flex-shrink: 0;
`;

const TempCardNumber = styled.div`
  text-align: center;
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 0.97;
  letter-spacing: -0.026rem;
  color: #000000;
  /* font-family: Iceland, "Source Sans Pro"; */
  white-space: nowrap;
  flex-shrink: 0;
`;

const ByCardGroup = styled.div`
  margin: 0rem 0rem 95.701rem 0rem;
  width: 100%;
  row-gap: 7.6rem;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const ByCardBox = styled.div`
  box-sizing: border-box;
  padding: 3.3rem 9.6rem 5.6rem 5.2rem;
  width: 90%;
  height: 32.4rem;
  background: linear-gradient(
    280.43deg,
    #ffffff 18.1%,
    rgba(219, 219, 219, 0.5180130601) 47.23%,
    rgba(255, 255, 255, 0) 78.54%
  );
  border-radius: 3rem;
  flex-shrink: 0;
`;

const MyByCardLeftSection = styled.div`
  width: 15.4rem;
  height: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  margin-top: 2rem;
`;

const MyByCardShape = styled.div`
  margin-bottom: 1.7rem;
  box-sizing: border-box;
  padding: 0.9rem 3.3rem 0.8rem 3.4rem;
  width: 100%;
  height: 14.5rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  /* background-image: url("REPLACE_IMAGE:152:2124"); */
  flex-shrink: 0;
`;

const ByCard = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  background-color: #000000;
  border-radius: 1.2rem;
`;

const ByCardNoise = styled.div`
  opacity: 0.06;
  width: 8.7rem;
  height: 12.8rem;
  position: absolute;
  left: 0;
  top: 0;
  /* background-image: url("../assets/noise-Fcy.png"); */
  background-repeat: repeat;
  background-size: 100%;
`;

const ByCardDescription = styled.div`
  width: 12.5rem;
  height: 2.2rem;
  position: absolute;
  left: -4.6915rem;
  top: 9.777rem;
  text-align: right;
  display: flex;
  font-size: 1.7rem;
  font-weight: 500;
  line-height: 1.2775;
  letter-spacing: -0.068rem;
  color: #ffffff;
  /* font-family: Space Grotesk, "Source Sans Pro"; */
  white-space: nowrap;
`;

const ByCardName = styled.div`
  width: 7.7rem;
  height: 1.9rem;
  position: absolute;
  left: 0.8208rem;
  top: 0.8205rem;
  font-size: 1.9rem;
  font-weight: 400;
  line-height: 0.97;
  letter-spacing: -0.076rem;
  color: #ffffff;
  /* font-family: Iceland, "Source Sans Pro"; */
  white-space: nowrap;
`;

const ByCardNumberPart = styled.div`
  margin: 0 2.75rem;
  width: calc(100% - 5.5rem);
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`;

const ByCardNumberName = styled.div`
  margin-bottom: 0.7rem;
  text-align: center;
  font-size: 3rem;
  font-weight: 400;
  line-height: 1.3333333333;
  color: #000000;
  /* font-family: Iceland, "Source Sans Pro"; */
  white-space: nowrap;
  flex-shrink: 0;
`;

const ByCardNumber = styled.div`
  margin-right: 0.9rem;
  font-size: 2.1rem;
  font-weight: 600;
  line-height: 1.2125;
  color: #000000;
  /* font-family: Inter, "Source Sans Pro"; */
  white-space: nowrap;
  flex-shrink: 0;
`;

function MyCardList(props) {
  return (
    <MyCardListDiv>
      <Mainback>
        <BackImage>
          <HeaderLogoutBtn></HeaderLogoutBtn>
          <Main>
            <HiCardBox>
              <MyHiCardLeftSection>
                <MyHiCardShape>
                  <HiCard>
                    {/* <img class="shape-3g9" src="REPLACE_IMAGE:I152:2760;19:6230" /> */}
                    <HiCardName>Card Name</HiCardName>
                    <HiCardDescription>card description</HiCardDescription>
                    <HiCardNoise></HiCardNoise>
                  </HiCard>
                </MyHiCardShape>
                <HiCardNumber>5***-****-****-770*</HiCardNumber>
              </MyHiCardLeftSection>
              <MyHiCardCenterSection>
                <HicardTitle>Hi:Card</HicardTitle>
                <HiCardLimit>
                  <HiCardLimitTitle>이번 달 사용한도</HiCardLimitTitle>
                  <HiCardAmout>2,500,000 원</HiCardAmout>
                </HiCardLimit>
                <HiCardUse>
                  <HiCardUseTitle>이번 달 사용금액</HiCardUseTitle>
                  <HiCardAmout>1,234,000 원</HiCardAmout>
                </HiCardUse>
              </MyHiCardCenterSection>
              <MyHiCardRightSection>
                <HiCardInfo>
                  <HiCardPoint>
                    <HiCardPointTitle>Hi:Card Point</HiCardPointTitle>
                    <HicardPointScore>4500P</HicardPointScore>
                  </HiCardPoint>
                  <HiCardGrade>
                    <HiCardGradeTitle>Hi:Credit Grade</HiCardGradeTitle>
                    <HiCardGradeImage src={gradeimg}></HiCardGradeImage>
                  </HiCardGrade>
                </HiCardInfo>
                <BottomButtonDiv>
                  <LinkButton>나의 결제 이력</LinkButton>
                  <ButtonUnderLine>
                    <AccountChange>연결계좌변경</AccountChange>
                    <TempCardNumber>가상 카드번호 생성</TempCardNumber>
                  </ButtonUnderLine>
                </BottomButtonDiv>
              </MyHiCardRightSection>
            </HiCardBox>
            <ByCardGroup>
              <ByCardBox>
                <div class="group-1000003117-HJD">
                  <MyByCardLeftSection>
                    <MyByCardShape>
                      <ByCard>
                        {/* <img
                      class="shape-4TP"
                      src="REPLACE_IMAGE:I152:2125;19:6230"
                    /> */}
                        <ByCardName>Card Name</ByCardName>
                        <ByCardDescription>card description</ByCardDescription>
                        <ByCardNoise></ByCardNoise>
                      </ByCard>
                    </MyByCardShape>
                    <ByCardNumberPart>
                      <ByCardNumberName>The Blue</ByCardNumberName>
                      <ByCardNumber>570*</ByCardNumber>
                    </ByCardNumberPart>
                  </MyByCardLeftSection>
                  <div class="auto-group-p6hk-Czq">
                    <div class="auto-group-w9tz-XGR">
                      <div class="group-1000003122-ftR">
                        <div class="item-053--BLy">업종별 0.5%~3% 적립</div>
                        <div class="item-5--tmB">온라인 간편 결제 5% 적립</div>
                        <div class="item-3--1L1">해외 가맹점 3% 적립</div>
                        <p class="item-50--7P3">전월실적 50만원 이상</p>
                      </div>
                      <p class="my-by-card-oWm">My By:Card</p>
                    </div>
                    <div class="auto-group-mekx-HRw">
                      <div class="frame-1000005727-cUD">
                        <div class="by-card-point-in9">By:Card Point</div>
                        <div class="p-2Xw">4500P</div>
                      </div>
                      <div class="frame-1000005709-N61">
                        <div class="frame-3-6Xo">하이카드 제외</div>
                        <div class="frame-1000005732-iZB">
                          <p class="item--RiV">연결계좌변경</p>
                          <p class="item--WV3">분실신고/해지</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ByCardBox>

              <div class="group-1000003124-YrR">
                <div class="group-1000003117-HJD">
                  <div class="auto-group-rwko-pow">
                    <div class="group-1000003119-B8h">
                      <div class="cards-vertical-hsj">
                        {/* <img
                      class="shape-4TP"
                      src="REPLACE_IMAGE:I152:2125;19:6230"
                    /> */}
                        <p class="card-name-n8V">Card Name</p>
                        <div class="card-description-GJZ">card description</div>
                        <div class="noise-mFK"></div>
                      </div>
                    </div>
                    <div class="group-1000003121-2h3">
                      <p class="the-blue-ycH">The Blue</p>
                      <p class="item-570-JuT">570*</p>
                    </div>
                  </div>
                  <div class="auto-group-p6hk-Czq">
                    <div class="auto-group-w9tz-XGR">
                      <div class="group-1000003122-ftR">
                        <div class="item-053--BLy">업종별 0.5%~3% 적립</div>
                        <div class="item-5--tmB">온라인 간편 결제 5% 적립</div>
                        <div class="item-3--1L1">해외 가맹점 3% 적립</div>
                        <p class="item-50--7P3">전월실적 50만원 이상</p>
                      </div>
                    </div>
                    <div class="auto-group-mekx-HRw">
                      <div class="frame-1000005727-cUD">
                        <div class="by-card-point-in9">이번달 사용금액</div>
                        <div class="p-2Xw">4500P</div>
                      </div>
                      <div class="frame-1000005709-N61">
                        <div class="frame-3-6Xo">하이카드 추가</div>
                        <div class="frame-1000005732-iZB">
                          <p class="item--RiV">연결계좌변경</p>
                          <p class="item--WV3">분실신고/해지</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ByCardGroup>
          </Main>
        </BackImage>
      </Mainback>
    </MyCardListDiv>
  );
}

export default MyCardList;
