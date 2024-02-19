import React, { useState } from 'react';
import styled from 'styled-components';
import logo from "../../assets/images/maah_logo.png";
import x from "../../assets/icon/x_icon.png";
import { useNavigate } from 'react-router';
import DaumPostcode from 'react-daum-postcode';
import axios from 'axios';

const Background = styled.div`
  background: linear-gradient(180deg, #f1f1f1 37.44%, #b2b2b2 100%);
  padding-bottom: 110px;
`;

const BackLogo = styled.img`
  position: absolute;
  transform: rotate(90deg);
  top: 550px;
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

const MainWrap = styled.div`
  background-color: #fff;
  border-radius: 50px;
  margin: auto;
  padding: 50px;
  width: 1100px;
  height: 930px;
  box-shadow: inset 1px 5px rgba(0,0,0,0.2);
`;

const MainTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin: 20px 0px;
`;

const AddressWrap = styled.div`
  font-size: 25px;
  font-weight: 600;
  margin-top: 30px;

  & > div {
    width: 560px;
    margin: 30px auto 10px auto;
    padding: 0 20px 0 20px;
  }
`;

const ZoneCodeWrap = styled.div`
  display: flex;

  & > * {
    font-size: 20px;
    font-weight: 600;
    padding: 10px;
    width: 150px;
    margin-right: 20px;
    border: 0;
    border-radius: 10px;
  }

  & > input {
    background-color: #ECECEC;
    box-shadow: inset 0 4px 4px rgba(0,0,0,0.25);
  }

  & > input: focus {
    outline: none;
  }

  & > button {
    background-color: #000;
    color: #fff;
    cursor: pointer;
  }
`;

const AddressDetailWrap = styled.div`
  & > input {
    font-size: 20px;
    font-weight: 600;
    padding: 10px;
    margin-top: 20px;
    width: 500px;
    border-radius: 10px;
    background-color: #ECECEC;
    box-shadow: inset 0 4px 4px rgba(0,0,0,0.25);
  }

  & > input: focus {
    outline: none;
  }
`;

const HrLine = styled.hr`
  border: 1.5px solid #333;
  width: 600px;
  margin:  70px auto;
`;

const PasswordWrap = styled.div`
font-size: 25px;
font-weight: 600;
margin-top: 30px;

& > div {
  width: 560px;
  margin: 30px auto 10px auto;
  padding: 0 20px 0 20px;
}

& > div > div {
    font-size: 20px;
}

& input {
    font-size: 20px;
    border-bottom: 2px solid #000;
    padding: 1px;
    margin: 5px 0 10px 0;
}
`;

const ButtonWrap = styled.div`
  width: 550px;
  margin: 50px auto;

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
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  visibility: hidden;
  overflow: hidden;
`;

const ModalBody = styled.div`
  position: relative;
  background-color: #fff;
  width: 600px;
  margin: auto;
  top: calc(50vh - 200px);
  text-align: right;

  & > button {
    position: relative;
    margin: 10px;
    padding: 2px 2px 0px 2px;
    cursor: pointer;
    background-color: #fff;
    border: 0;
  }

  & > button > img {
    width: 15px;
    height: 15px;
  }
`;

const CompleteBody = styled.div`
  position: relative;
  background-color: #fff;
  box-shadow: inset 0 4px 0px rgba(0,0,0,0.4);
  width: 560px;
  height: 640px;
  padding: 40px 20px;
  border-radius: 20px;
  margin: auto;
  top: 100px;
  text-align: center;

  & > div {
    font-size: 40px;
    font-weight: 600;
    margin: 30px;
  }
`;

const Card = styled.div`
  font-size: 20px !important;

  & > img {
    width: 200px;
  }

  & > div {
    margin: 5px;
  }
`;

const ApplicationResult = styled.div`
  & > div {
    font-size: 30px;
  }

  & > span {
    display: block;
    font-size: 20px;
    margin-top: 10px;
  }

  & > button {
    padding: 10px;
    width: 200px;
    margin-top: 30px;
    border: 0;
    font-size: 20px;
    color: #fff;
    background-color: #000;
    font-weight: 600;
    border-radius: 30px;
    cursor: pointer;
  }
`;

function InputDestination({setProcess, setCardApply, cardApply}) {
  const navigate = useNavigate();
  const [zonecode, setZonecode] = useState();
  const [roadAddress, setRoadAddress] = useState();
  const [addressDetail, setAddressDetail] = useState("");
  const [viewModal, setViewModal] = useState(false);
  const [applicationComp, setApplicationComp] = useState(false);
  const [password, setPassword] = useState('1234');
  const [date, setDate] = useState();

  const gotoPrev = () => {
    setProcess(4);
  };

  const gotoHome = () => {
    console.log(cardApply);
    // navigate("/", {});
  }

  const complete = () => {
    setCardApply({
      ...cardApply,
      cardApplyAddress: '(' + zonecode + ') ' + roadAddress + ' ' + addressDetail,
      cardApplyDate: new Date(),
      cardApplyPassword: password
    });
    axios
    .post("/cardApply", {
      ...cardApply,
      cardApplyAddress: '(' + zonecode + ') ' + roadAddress + ' ' + addressDetail,
      cardApplyDate: new Date(),
      cardApplyPassword: password
    })
    .then(function (res) {
      console.log(res.data);
    })
    .catch(function (error) {
      console.log(error);
    });
    let modal = document.getElementById('address');
    setApplicationComp(true);
    modal.style.visibility = 'visible';
  }

  const displayModal = () => {
    let modal = document.getElementById('address');
    setViewModal(true);
    modal.style.visibility = 'visible';
  }

  const closeModal = () => {
    let modal = document.getElementById('address');
    modal.style.visibility = 'hidden';
    setViewModal(false);
  }

  const completeAddress = (data) => {
    let modal = document.getElementById('address');
    modal.style.visibility = 'hidden';
    setZonecode(data.zonecode);
    setRoadAddress(data.roadAddress);
    setViewModal(false);
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
                <CompleteStep></CompleteStep>
            </Process>
            
            <MainWrap>
                <div>
                    <MainTitle>
                        카드 배송 및 비밀번호 설정
                    </MainTitle>
                    <AddressWrap>
                      <div>카드 받는 곳</div>
                      <div>
                        <ZoneCodeWrap>
                          <input onClick={displayModal} type='number' value={zonecode} readOnly></input>
                          <button onClick={displayModal}>주소 찾기</button>
                        </ZoneCodeWrap>
                        <AddressDetailWrap>
                          <input type='text' value={roadAddress} readOnly onClick={displayModal}></input>
                          <input type='text' placeholder='(상세주소)' onChange={(e) => {setAddressDetail(e.target.value)}}></input>
                        </AddressDetailWrap>
                      </div>
                    </AddressWrap>
                </div>

                <HrLine />

                <PasswordWrap>
                    <div>카드 비밀번호 설정</div>
                    <div>
                        <div>카드 비밀번호</div>
                        <input type='password'></input>
                    </div>
                    <div>
                        <div>비밀번호 확인</div>
                        <input type='password'></input>
                    </div>
                </PasswordWrap>

                <ButtonWrap>
                  <button onClick={complete}>신청완료</button>
                  <button onClick={gotoPrev}>이전으로</button>
                </ButtonWrap>
            </MainWrap>
        </Background>

      <ModalWrap id="address">
        {viewModal ? 
        <ModalBody>
            <button onClick={closeModal}>
                <img src={x} alt='x'></img>
            </button>
            <DaumPostcode onComplete={(data) => {completeAddress(data)}}></DaumPostcode>
        </ModalBody> : null}
        {applicationComp ? 
        <CompleteBody>
            <div>카드 신청 완료</div>
            <Card>
                <img src='https://maah-s3.s3.ap-northeast-2.amazonaws.com/Cards/black_velvet.png' alt='card'></img>
                <div>BLACK VELVET</div>
            </Card>
            <ApplicationResult>
                <div>정상적으로 신청 되었습니다.</div>
                <span>{date.getFullYear()}.{date.getMonth() + 1}.{date.getDate()} {date.getHours()}:{date.getMinutes()} 기준</span>
                <button onClick={gotoHome}>확인</button>
            </ApplicationResult>
        </CompleteBody> : null}
      </ModalWrap>
      </>
    );
}

export default InputDestination;