import React from 'react';
import styled from 'styled-components';
import logo from "../../assets/images/maah_logo.png";

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
  height: 1100px;
`;

const MainTitle = styled.div`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  margin: 20px 0px;
`;

const InputBox = styled.div`
  width: 450px;
  margin: 30px auto;
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
  padding: 7px 20px;
  width: 450px;
`;

const IncomeComment = styled.div`
  font-size: 14px;
  margin: 3px;
`;

function InputIncome(props) {

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
                    <input type='file'></input>
                    <InputBox>
                        <SubTitle>연간소득</SubTitle>
                        <IncomeOptions>
                            <option>5천만원 이상 ~ 1억원 미만</option>
                            <option>1억원 이상</option>
                        </IncomeOptions>
                    </InputBox>
                    <InputBox>
                        <SubTitle>신용점수</SubTitle>
                        <IncomeOptions>
                            <option>500점 미만</option>
                            <option>500점 이상</option>
                        </IncomeOptions>
                        <IncomeComment>신용점수는 0 ~ 1000점으로 구성되며, 예상 점수대를 선택해주세요</IncomeComment>
                    </InputBox>
                    <InputBox>
                        <SubTitle>카드 이용대금 결제일</SubTitle>
                        <IncomeOptions>
                            <option>5일</option>
                            <option>15일</option>
                            <option>25일</option>
                        </IncomeOptions>
                        <IncomeComment>전월 말일까지의 실적이 해당월에 청구됩니다</IncomeComment>
                    </InputBox>
                    <InputBox>
                        <SubTitle>자금 원천</SubTitle>
                        <IncomeOptions>
                            <option>근로 소득</option>
                            <option>사업 소득</option>
                            <option>근로 소득</option>
                        </IncomeOptions>
                    </InputBox>
                    <InputBox>
                        <SubTitle>거래 목적</SubTitle>
                        <IncomeOptions>
                            <option>생활비</option>
                        </IncomeOptions>
                    </InputBox>
                </div>
                <hr/>
                <div>
                    <div>
                        Ma:aH 카드 관련 문의처
                    </div>
                    <div>
                        <div>홈페이지 : FAQ &gt; 고객상담</div>
                        <div>고객센터 : 1588-8282</div>
                    </div>
                </div>
                <div>
                    <button>확인</button>
                    <button>취소</button>
                </div>
            </MainWrap>
        </Background>
    );
}

export default InputIncome;