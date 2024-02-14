import React, { useState } from 'react';
import styled from 'styled-components';
import logo from "../../assets/images/maah_logo.png";
import visa from "../../assets/images/Logo/visa_logo.png";
import gray from "../../assets/images/Logo/visa_logo_gray.png";
import silver from "../../assets/images/Grade/silver.png";
import bronze from "../../assets/images/Grade/bronze.png";
import arrow from "../../assets/images/select_arrow.png";
import { useNavigate } from 'react-router';

const Background = styled.div`
  background: linear-gradient(180deg, #f1f1f1 37.44%, #b2b2b2 100%);
  padding-bottom: 110px;
`;

const BackLogo = styled.img`
  position: absolute;
  transform: rotate(90deg);
  top: 600px;
  left: 75%;
  opacity: 0.2;
`;

const Process = styled.div`
  padding: 50px;
  text-align: center;
`;

const CompleteStep = styled.span`
  display: inline-block;
  width: 90px;
  height: 20px;
  margin: 5px;
  border-radius: 10px;
  background-color: #5A5A5A;
`;

const ProcessStep = styled.span`
  display: inline-block;
  width: 90px;
  height: 20px;
  margin: 5px;
  border-radius: 10px;
  background-color: #CECDCA;
`;

const MainWrap = styled.div`
  background-color: #fff;
  border-radius: 50px;
  margin: auto;
  padding: 50px;
  width: 1100px;
  height: 1030px;
  box-shadow: inset 1px 5px rgba(0,0,0,0.2);
`;

const MainTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin: 20px 0px;
`;

const NameWrap = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-top: 30px;

  & > div {
    width: 560px;
    margin: 10px auto 10px auto;
    padding: 0 20px 0 20px;
  }
`;

const NameBox = styled.div`
  text-align: center;

  & input {
    font-size: 20px;
    font-weight: 600;
    border-bottom: 2px solid black;
    padding: 10px 20px 10px 0px;
    margin-top: 10px;
  }

  & > div {
    display: inline-block;
    margin: 10px;
  }

  & > div > div {
    text-align: left;
  }
`;

const Traffic = styled.div`
  font-size: 20px;
  font-weight: 500;
  width: 440px;
  padding: 20px 30px;
  border-radius: 30px;
  background-color: #EFEFEF;
  display: flex;
  justify-content: space-between;
  margin: 40px auto 40px auto;
`;

const ForeignPay = styled.div`
  text-align: center;
`;

const VisaRegion = styled.label`
  display: inline-block;
  width: 140px;
  height: 70px;
  padding: 20px;
  border-radius: 20px;
  margin: 20px 40px 20px 40px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  vertical-align: top;
  background-color: ${(props) => props.region === 'visa' ? '#F0F3FF' : '#F1F1F1'};
  cursor: pointer;

  & > img {
    display: block;
    padding: 10px 0 10px 0;
    margin: auto;
  }
`;

const MaahRegion = styled.label`
  display: inline-block;
  width: 140px;
  height: 70px;
  padding: 20px;
  border-radius: 20px;
  margin: 20px 40px 20px 40px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  background-color: ${(props) => props.region === 'maah' ? '#F4DFDF' : '#F1F1F1'};

  & > img {
    height: 40px;
  }
`;

const RegionRadio = styled.input`
  display: block;
  width: 0;
  height: 0;
  visibility: hidden;
`;

const AccountWrap = styled.div`
  width: 600px;
  font-size: 20px;
  margin: auto;
  text-align: center;

  & > * {
    text-align: left;
    width: 100%;
    font-size: 20px;
  }

  & > div {
    margin-top: 30px;
  }

  & > input {
    padding: 10px 0;
    border-bottom: 3px solid #000;
    margin-top: 10px;
  }

  & > input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

const SelectBank = styled.select`
  font-weight: bold;
  padding: 12px 20px;
  border: 1px solid #D9D9D9;
  border-radius: 10px;
  margin: 10px 0;
  appearance:none;
  background: url(${arrow}) no-repeat right 20px center;
  background-size: 10px;
`;

const ButtonWrap = styled.div`
  width: 550px;
  margin: 30px auto;

  & > button {
    width: 550px;
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    padding: 20px;
    border-radius: 30px;
    border: 0;
    background-color: #000;
    color: #fff;
    margin: 10px 0;
    cursor: pointer;
  }
`;

const ModalWrap = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  visibility: hidden;
`;

function InputCardApplicationInfo(props) {
  const navigate = useNavigate();
  const [cardRegion, setCardRegion] = useState("visa");

  const gotoNext = () => {
    navigate("/cardApplicationModal", {})
  };

  const gotoPrev = () => {
    navigate("/cardApplication3", {})
  };

  const selectRegion = (prop) => {
    setCardRegion(prop);
  }

    return (
      <>
        <Background>
            <BackLogo src={logo}></BackLogo>
            <Process>
                <CompleteStep></CompleteStep>
                <CompleteStep></CompleteStep>
                <CompleteStep></CompleteStep>
                <CompleteStep></CompleteStep>
                <ProcessStep></ProcessStep>
            </Process>
            <MainWrap>
                <div>
                    <MainTitle>
                        영문명 입력
                    </MainTitle>
                    <NameWrap>
                      <div>&nbsp;여권과 동일하게 입력해주세요.</div>
                      <NameBox>
                        <div>
                          <div>영문 성</div>
                          <input type='text'></input>
                        </div>
                        <div>
                          <div>영문 이름</div>
                          <input type='text'></input>
                        </div>
                      </NameBox>
                    </NameWrap>
                </div>
                <Traffic>
                    <span>후불교통 기능 신청</span>
                    <input type='checkbox'></input>
                </Traffic>
                <ForeignPay>
                    <MainTitle>
                        해외 결제 여부
                    </MainTitle>
                    <VisaRegion region={cardRegion} for='visa' onClick={() => {selectRegion('visa')}}>
                        <img alt='visa' src={cardRegion === 'visa' ? visa : gray} />
                        <div>국내외겸용</div>
                    </VisaRegion>
                    <MaahRegion region={cardRegion} for='maah' onClick={() => {selectRegion('maah')}}>
                        <img alt='maah' src={cardRegion === 'maah' ? bronze : silver} />
                        <div>국내전용</div>
                    </MaahRegion>
                    <RegionRadio type='radio' checked name='payRegion' id='visa'></RegionRadio>
                    <RegionRadio type='radio' name='payRegion' id='maah'></RegionRadio>
                </ForeignPay>
                <div>
                    <MainTitle>
                        출금 계좌 정보
                    </MainTitle>
                    <AccountWrap>
                      <div>본인 명의의 계좌만 입력 가능합니다</div>
                      <SelectBank>
                        <option>우리은행</option>
                      </SelectBank>
                      <input type='number' placeholder='계좌번호(- 제외)'></input>
                    </AccountWrap>
                </div>
                <ButtonWrap>
                  <button>계좌인증</button>
                  <button onClick={gotoPrev}>이전으로</button>
                </ButtonWrap>
            </MainWrap>
        </Background>

      <ModalWrap>

      </ModalWrap>
      </>
    );
}

export default InputCardApplicationInfo;