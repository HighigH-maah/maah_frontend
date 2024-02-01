import React from "react";
import "./main.css";
import "../../assets/css/style.css";
import styled from "styled-components";
import mainBackground from "../../assets/images/main_bg.png";
import google from "../../assets/images/google.png";
import kakao from "../../assets/images/kakao.png";
import naver from "../../assets/images/naver.png";
import banner from "../../assets/images/banner.png";

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
  padding: 13vh 3% 0 3%;
  width: 100%;
  height: 90vh;
  & > div {
    display: inline-block;
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
  background: linear-gradient(180deg, #000000 37.44%, #8C8A83 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const LoginWelcome = styled.div`
  font-size: 2rem;
  background: linear-gradient(180deg, #000000 37.44%, #8C8A83 100%);
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
    background: linear-gradient(180deg, #7D796C 0%, #B4AD98 80%);
  }

  & > div > span {
    cursor: pointer;
    color: #999;
  }
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
                    <SocialButton><img src={google}></img></SocialButton>
                    <SocialButton><img src={naver}></img></SocialButton>
                    <SocialButton><img src={kakao}></img></SocialButton>
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
      </BackImage>
    </Mainback>
  );
}

export default Main2;