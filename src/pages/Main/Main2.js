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
    background: linear-gradient(180deg, #7d796c 0%, #b4ad98 80%);
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
`;
const CardImage = styled.img`
  width: 200px;
  height: 341px;
`;
const HiCard = ({ image }) => {
  return <CardImage src={image} alt="Card Image" />;
};

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
`;

const MaahSubTitle = styled.p`
  font-size: 1rem;
`;

const MaahSub = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
              마하의 오리지널리티를 담은 단 하나의 하이카드
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
        <MaahSection>
          <MaahTitle>하나의 카드, 그 이상 Hi:Card와 함께</MaahTitle>
          <MaahSub>
            <MaahSubTitle>
              복잡한 카드 고민은 그만, Hi:Card로 결제하세요
            </MaahSubTitle>
            <MaahSubTitle>
              디자인 커스텀부터 Share까지, Ma:ah에서 모든건 내 마음대로
            </MaahSubTitle>
            <CreateButton>
              <button>Ma:ah F&Q</button>
            </CreateButton>
          </MaahSub>
        </MaahSection>
      </BackImage>
    </Mainback>
  );
}

export default Main2;
