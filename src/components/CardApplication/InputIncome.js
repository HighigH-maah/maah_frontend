import React, { useState } from 'react';
import styled from 'styled-components';
import logo from "../../assets/images/maah_logo.png";
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
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  margin: 20px 0px;
`;

const InputBox = styled.div`
  width: 450px;
  margin: 50px auto;
`;

const SubTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  margin-bottom: 10px;
`;

const IncomeOptions = styled.select`
  font-size: 15px;
  font-weight: bold;
  padding: 12px 20px;
  width: 450px;
  border: 1px solid #D9D9D9;
  border-radius: 10px;
  appearance:none;
  background: url(${arrow}) no-repeat right 20px center;
  background-size: 10px;
`;

const IncomeComment = styled.div`
  font-size: 14px;
  margin: 3px;
`;

const Line = styled.hr`
  border: 2px solid black;
  border-radius: 2px;
  margin: 30px;
`;

const InquireTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 32px;
`;

const InquireContact = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-left: 29px;

  & > div {
    margin: 4px;
  }
`;

const Buttons = styled.div`
  margin: 32px;
  text-align: center;

  & > button {
    width: 300px;
    height: 60px;
    margin: 20px;
    border-radius: 35px;
    font-size: 20px;
    font-weight: bold;
    color: white;
    background-color: black;
    cursor: pointer;
  }
`;

function InputIncome({setProcess, setCardApply, cardApply}) {
  const navigate = useNavigate();
  const [annualIncome, setAnnualIncome] = useState(cardApply.cardApplyAnnualIncome === '' ? '0' : cardApply.cardApplyAnnualIncome);
  const [creditPoint, setCreditPoint] = useState(cardApply.cardApplyCreditPoint === '' ? '500' : cardApply.cardApplyCreditPoint);
  const [payDate, setPayDate] = useState(cardApply.cardApplyPaydate === '' ? '5' : cardApply.cardApplyPaydate);
  const [sourceFund, setSourceFund] = useState(cardApply.cardApplySourceFund === '' ? '근로' : cardApply.cardApplySourceFund);
  const [purpose, setPurpose] = useState(cardApply.cardApplyPurpose === '' ? '생활' : cardApply.cardApplyPurpose);

  const gotoNext = () => {
    setCardApply({
      ...cardApply,
      cardApplyAnnualIncome: annualIncome,
      cardApplyCreditPoint: creditPoint,
      cardApplyPaydate: payDate,
      cardApplySourceFund: sourceFund,
      cardApplyPurpose: purpose
    })
    setProcess(2);
  };

  const gotoPrev = () => {
    navigate("/hiCard", {})
  };

  const changeHandler = (event, changeFunction) => {
    changeFunction(event.target.value);
  }

    return (
        <Background>
            <BackLogo src={logo}></BackLogo>
            <Process>
                <CompleteStep></CompleteStep>
                <ProcessStep></ProcessStep>
                <ProcessStep></ProcessStep>
                <ProcessStep></ProcessStep>
                <ProcessStep></ProcessStep>
            </Process>
            <MainWrap>
                <div>
                    <MainTitle>
                        소득 관련 필수 기입 사항
                    </MainTitle>
                    <InputBox>
                        <SubTitle>연간소득</SubTitle>
                        <IncomeOptions onChange={(event) => {changeHandler(event, setAnnualIncome)}}>
                            <option value='0'>5천만원 미만</option>
                            <option value='5000'>5천만원 이상 ~ 1억원 미만</option>
                            <option value='10000'>1억원 이상</option>
                        </IncomeOptions>
                    </InputBox>
                    <InputBox>
                        <SubTitle>신용점수</SubTitle>
                        <IncomeOptions onChange={(event) => {changeHandler(event, setCreditPoint)}}>
                            <option value='500'>500점 미만</option>
                            <option value='1000'>500점 이상</option>
                        </IncomeOptions>
                        <IncomeComment>신용점수는 0 ~ 1000점으로 구성되며, 예상 점수대를 선택해주세요</IncomeComment>
                    </InputBox>
                    <InputBox>
                        <SubTitle>카드 이용대금 결제일</SubTitle>
                        <IncomeOptions onChange={(event) => {changeHandler(event, setPayDate)}}>
                            <option value='1'>1일</option>
                            <option value='5'>5일</option>
                            <option value='25'>10일</option>
                            <option value='15'>15일</option>
                            <option value='25'>20일</option>
                            <option value='25'>25일</option>
                            <option value='29'>말일</option>
                        </IncomeOptions>
                        <IncomeComment>전월 말일까지의 실적이 해당월에 청구됩니다</IncomeComment>
                    </InputBox>
                    <InputBox>
                        <SubTitle>자금 원천</SubTitle>
                        <IncomeOptions onChange={(event) => {changeHandler(event, setSourceFund)}}>
                            <option value='근로'>근로 소득</option>
                            <option value='사업'>사업 소득</option>
                            <option value='보조금'>보조금</option>
                            <option value='후원금'>후원금</option>
                            <option value='기타'>기타</option>
                        </IncomeOptions>
                    </InputBox>
                    <InputBox>
                        <SubTitle>거래 목적</SubTitle>
                        <IncomeOptions onChange={(event) => {changeHandler(event, setPurpose)}}>
                            <option value='생활'>생활비</option>
                            <option value='공과금'>공과금</option>
                            <option value='사업'>사업</option>
                            <option value='기타'>기타</option>
                        </IncomeOptions>
                    </InputBox>
                </div>
                <Line/>
                <div>
                    <InquireTitle>
                        Ma:aH 카드 관련 문의처
                    </InquireTitle>
                    <InquireContact>
                        <div>홈페이지 : FAQ &gt; 고객상담</div>
                        <div>고객센터 : 1588-8282</div>
                    </InquireContact>
                </div>
                <Buttons>
                    <button onClick={gotoPrev}>취소</button>
                    <button onClick={gotoNext}>확인</button>
                </Buttons>
            </MainWrap>
        </Background>
    );
}

export default InputIncome;