import React from "react";
import "./main.css";
import "../../assets/css/style.css";
import styled from "styled-components";
import mainBackground from "../../assets/images/main_bg.png";
import google from "../../assets/images/google.png";
import kakao from "../../assets/images/kakao.png";
import naver from "../../assets/images/naver.png";
import banner from "../../assets/images/banner.png";
import blackvelvet from "../../assets/images/Black_velvet.png";
import whitevelvet from "../../assets/images/White_velvet.png";
import abouthi from "../../assets/images/aboutHi.png";
import byCardGroup from "../../assets/images/ByCardGroup.png";

const Mainback = styled.div`
  background: linear-gradient(180deg, #fffdfd 37.44%, #c7c7c7 100%);
`;

const BackImage = styled.div`
  background-image: url(${mainBackground});
  background-size: cover;
  background-repeat: no-repeat;
  height: 5000px;
`;

const MainPage1 = styled.div`
  box-sizing: border-box;
  padding: 13vh 3% 0 3%;
  width: 100%;
  height: 90vh;
  display: flex;
  & > div {
    display: inline-block;
    vertical-align: top;
  }
`;

const HiCardSection = styled.div`
  box-sizing: border-box;
  padding: 13vh 3% 0 3%;
  width: 100%;
  height: 90vh;
  & > div {
    vertical-align: top;
  }
`;

const Banner = styled.div`
  margin-right: 2%;
  height: 100%;
  max-width: 80%;
`;

const EventBanner = styled.img`
  height: 75%;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 1%;
`;

const BannerPage = styled.div`
  text-align: center;
  & > span {
    display: inline-block;
    border-radius: 50%;
    margin: 5px 10px 5px 10px;
    cursor: pointer;
  }
`;

const SelectBanner = styled.span`
  width: 16px;
  height: 16px;
  background-color: black;
`;

const UnselectBanner = styled.span`
  width: 12px;
  height: 12px;
  background-color: gray;
`;

const LoginTitle = styled.div`
  font-size: 4rem;
  background: linear-gradient(180deg, #000000 37.44%, #8c8a83 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const LoginWelcome = styled.div`
  font-size: 2rem;
  background: linear-gradient(180deg, #000000 37.44%, #8c8a83 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  margin-bottom: 10%;
`;

const LoginInput = styled.input`
  width: 69%;
  padding: 5%;
  font-size: 1.5rem;
  border: 3px solid #ccc;
  border-radius: 30px;
  margin-bottom: 5%;
`;

const SocialLogin = styled.div`
  margin-top: 5%;
  font-size: 2rem;
`;

const SocialButtonBlock = styled.div`
  width: 75%;
  text-align: center;
`;

const SocialButton = styled.button`
  width: 7rem;
  height: 5rem;
  margin: 0.5rem;
  border: 0;
  border-radius: 20px;
  background-color: #fff;
  cursor: pointer;

  & > img {
    width: 2em;
    height: 2em;
  }
`;

const CreateButton = styled.div`
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
    

    border-radius: 64px;
background: linear-gradient(92deg, #9B988F 7.01%, #D8D3C5 72.28%);
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }

  & > div > span {
    cursor: pointer;
    color: #999;
  }
`;
const LoginButton = styled.div`
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

  & > div > span {
    cursor: pointer;
    color: #999;
  }
`;

const HiCardTitle = styled.p`
  font-size: 3rem;
  font-weight: bolder;
`;

const HiCardTitleSection = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HiCardViewSection = styled.div`
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
const HiCardSubTitle = styled.p`
  font-size: 1rem;
  font-weight: bolder;
  background: linear-gradient(180deg, #504F4F 0%, rgba(129, 129, 129, 0.95) 100%);
  
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  & > span {
    background: linear-gradient(180deg, #A39D8A 0%, rgba(85, 83, 78, 0.99) 19.5%, rgba(221, 203, 150, 0.99) 38.5%, rgba(0, 0, 0, 0.95) 100%);

-webkit-background-clip: text;
-webkit-text-fill-color: transparent;

font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 25px;
  }
`;
const CardImage = styled.img`
  width: 200px;
  height: 341px;
`;

const ByCardImage = styled.img`
width:150px;
height:250px;`;
const HiCard = ({ image }) => {
  return <CardImage src={image} alt="Card Image" />;
};

const ByCard = ({image}) => {
  return <ByCardImage src={image} alt="Card Image" />;
}

const MaahSection = styled.div`
  border: 1px solid black;
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;

const MaahTitle = styled.div`
  font-size: 3rem;
  font-weight: bolder;
  width: 40%;
  & > span {
    background: linear-gradient(92deg, #000 4.63%, #201B0A 4.63%, rgba(176, 162, 120, 0.40) 18.79%, rgba(0, 0, 0, 0.83) 28.04%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;

font-size: 56px;
font-style: normal;
font-weight: 400;
line-height: 64px;
letter-spacing: -1.4px;
  }
`;

const ByCardTitle = styled.div`
font-size: 3rem;
  font-weight: bolder;
  width: 40%;
`;
const MaahSubTitle = styled.p`
  font-size: 1rem;
`;

const MaahSub = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const AboutMaah = styled.div`
display: flex;
position: relative;
top: 15rem;
`;

const ByCardSection = styled.div`
display: flex;
position: relative;

border:1px solid red;
gap: 1rem;
    display: flex;
    flex-direction: column;
`;

const ByCardSubTitle = styled.p`
font-size: 1rem;
font-weight: bolder;
width: 20%;
& > span {
  background: linear-gradient(180deg, #CBCBCB 0%, rgba(209, 209, 209, 0.99) 19.5%, rgba(243, 243, 243, 0.99) 38.5%, rgba(0, 0, 0, 0.95) 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;

font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 25px;
}
`;

const ByCardSectionDiv = styled.div`
display:flex;
position:relative;
top:26rem;
`;

const ByCardWrapper = styled.div`
display:flex;
gap: 2rem;
margin-right: 1rem;
flex-wrap: wrap;
`;

const WhySection = styled.div`
display:flex;
position: relative;
font-size:10rem;
    top: 40rem;
  background: linear-gradient(122deg, #B4AD98 43.17%, #FDFCFC 51.44%, #FFF 58.1%, #B1A990 71.42%, #6D6D6D 89.11%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
    `;


    const WhyBox = styled.div`
    position: relative;
    top: 50rem;
    color:white;
    display: flex;
width: 380px;
height: 346px;
padding: 32px 24px;
flex-direction: column;
align-items: center;
gap: 32px;
flex-shrink: 0;
border-radius: 25px;
background: linear-gradient(180deg, #000 0%, #503277 51.5%, #34204E 100%);

box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    `;
function Main2(props) {
  return (
    <Mainback>
      <BackImage>
        <MainPage1>
          <Banner>
            <EventBanner src={banner}></EventBanner>
            <BannerPage>
              <SelectBanner></SelectBanner>
              <UnselectBanner></UnselectBanner>
              <UnselectBanner></UnselectBanner>
              <UnselectBanner></UnselectBanner>
              <UnselectBanner></UnselectBanner>
            </BannerPage>
          </Banner>
          <div>
            <div>
              <LoginTitle>Login</LoginTitle>
              <LoginWelcome>Welcome to ma:ah Card</LoginWelcome>
            </div>
            <div>
              <LoginInput type="text" placeholder="ID"></LoginInput>
              <LoginInput type="password" placeholder="Password"></LoginInput>
              <SocialLogin>
                <div>Or continue with</div>
                <SocialButtonBlock>
                  <SocialButton>
                    <img src={google}></img>
                  </SocialButton>
                  <SocialButton>
                    <img src={naver}></img>
                  </SocialButton>
                  <SocialButton>
                    <img src={kakao}></img>
                  </SocialButton>
                </SocialButtonBlock>
              </SocialLogin>
              <LoginButton>
                <button>Log in</button>
                <div>
                  <span>아이디 찾기</span>
                  &nbsp;|&nbsp;
                  <span>비밀번호 찾기</span>
                </div>
              </LoginButton>
            </div>
          </div>
        </MainPage1>
        <HiCardSection>
          <HiCardTitleSection>
            <HiCardTitle>Master Hi:Card</HiCardTitle>
            <HiCardSubTitle>
              마하의 오리지널리티를 담은 단 하나의 <span>하이카드</span>
            </HiCardSubTitle>
            <CreateButton>
              <button>Create New Card</button>
            </CreateButton>
          </HiCardTitleSection>
          <HiCardViewSection>
            <HiCard image={blackvelvet}></HiCard>
            <HiCard image={whitevelvet}></HiCard>
            <HiCard image={blackvelvet}></HiCard>
            <HiCard image={blackvelvet}></HiCard>
            <HiCard image={blackvelvet}></HiCard>
          </HiCardViewSection>
        </HiCardSection>
        <AboutMaah>
        <MaahSection>
          <MaahTitle>하나의 카드, 그 이상 <span>Hi:Card</span>와 함께</MaahTitle>
          <MaahSub>
            <MaahSubTitle>
              복잡한 카드 고민은 그만, Hi:Card로 결제하세요
            </MaahSubTitle>
            <MaahSubTitle>
              디자인 커스텀부터 Share까지, Ma:ah에서 모든건 내 마음대로
            </MaahSubTitle>
            <CreateButton>
              <button style={{margin:0}}>Ma:ah F&Q</button>
            </CreateButton>
            
          </MaahSub>
          </MaahSection>
        
    <img src={abouthi} width="400"></img>
        
        </AboutMaah>
      
      <ByCardSectionDiv>
        <ByCardSection>
<img src={byCardGroup} width="300"/>
          <ByCardTitle>Best by Ma:ah By:Card</ByCardTitle>
        <ByCardSubTitle>바이카드에 대한 설명<span>By:Card</span></ByCardSubTitle><CreateButton>
              <button style={{margin:0}}>Create New By:Card</button>
            </CreateButton>
        </ByCardSection>
        <ByCardWrapper> <ByCard image={blackvelvet}></ByCard>
        <ByCard image={blackvelvet}></ByCard>
        <ByCard image={blackvelvet}></ByCard>
        <ByCard image={blackvelvet}></ByCard>
        <ByCard image={blackvelvet}></ByCard>
            <ByCard image={whitevelvet}></ByCard></ByCardWrapper>
            
        </ByCardSectionDiv>

        <WhySection>Why Ma:ah?</WhySection>
        <WhyBox>Create</WhyBox>
      </BackImage>
    </Mainback>
  );
}

export default Main2;
