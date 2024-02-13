import React, { useState } from 'react';
import styled from 'styled-components';
import logo from "../../assets/images/maah_logo.png";
import visa from "../../assets/images/Logo/visa_logo.png";
import gray from "../../assets/images/Logo/visa_logo_gray.png";
import silver from "../../assets/images/Grade/silver.png";
import gold from "../../assets/images/Grade/gold.png";
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
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  margin: 20px 0px;
`;

function InputCardApplicationInfo(props) {
  const navigate = useNavigate();
  const [cardRegion, setCardRegion] = useState("visa");

  const gotoNext = () => {
    navigate("/cardApplication2", {})
  };

  const gotoPrev = () => {
    navigate("/hiCard", {})
  };

  const selectRegion = (prop) => {
    setCardRegion(prop);
  }

    return (
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
                </div>
                <div>
                    <span>후불교통 기능 신청</span>
                    <input type='checkbox'></input>
                </div>
                <div>
                    <MainTitle>
                        해외 결제 여부
                    </MainTitle>
                    <label for='visa' onClick={() => {selectRegion('visa')}}>
                        <img src={cardRegion === 'visa' ? visa : gray} />
                        <div>국내외겸용</div>
                    </label>
                    <label for='maah' onClick={() => {selectRegion('maah')}}>
                        <img src={cardRegion === 'maah' ? gold : silver} />
                        <div>국내전용</div>
                    </label>
                    <input type='radio' checked name='payRegion' id='visa'></input>
                    <input type='radio' name='payRegion' id='maah'></input>
                </div>
                <div>
                    <MainTitle>
                        출금 계좌 정보
                    </MainTitle>
                </div>
            </MainWrap>
        </Background>
    );
}

export default InputCardApplicationInfo;