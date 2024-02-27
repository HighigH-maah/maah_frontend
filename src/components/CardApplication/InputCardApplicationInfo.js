import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../assets/images/maah_logo.png";
import visa from "../../assets/images/Logo/visa_logo.png";
import gray from "../../assets/images/Logo/visa_logo_gray.png";
import silver from "../../assets/images/Grade/silver.png";
import bronze from "../../assets/images/Grade/bronze.png";
import arrow from "../../assets/images/select_arrow.png";
import CardLimit from "./CardLimit";
import axios from "axios";
import MemberLoad from "../Utils/SessionStorage";

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
  background-color: #5a5a5a;
`;

const ProcessStep = styled.span`
  display: inline-block;
  width: 90px;
  height: 20px;
  margin: 5px;
  border-radius: 10px;
  background-color: #cecdca;
`;

const MainWrap = styled.div`
  background-color: #fff;
  border-radius: 50px;
  margin: auto;
  padding: 50px;
  width: 1100px;
  height: 1130px;
  box-shadow: inset 1px 5px rgba(0, 0, 0, 0.2);
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
  background-color: #efefef;
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
  background-color: ${(props) =>
    props.region === "visa" ? "#F0F3FF" : "#F1F1F1"};
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
  background-color: ${(props) =>
    props.region === "maah" ? "#F4DFDF" : "#F1F1F1"};

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
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  margin: 10px 0;
  appearance: none;
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
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  visibility: hidden;
  overflow: hidden;
`;

function InputCardApplicationInfo({ setProcess, setCardApply, cardApply }) {
  const [cardRegion, setCardRegion] = useState("visa");
  const [englishName, setEnglishName] = useState("");
  const [account, setAccount] = useState(0);
  const [bankCode, setBankCode] = useState("");
  const [bankList, setBankList] = useState([]);
  const API_SERVER = process.env.REACT_APP_API_SERVER;

  const gotoPrev = () => {
    setProcess(3);
  };

  const selectRegion = (prop) => {
    setCardRegion(prop);
  };

  const displayModal = () => {
    if (englishName.length * account.length === 0) {
      alert("필수 정보를 입력해주세요");
    } else {
      // 계좌인증 함수 호출
      axios({
        method: "post",
        url: process.env.REACT_APP_API_SERVER + "/getAccountName.do",
        data: {
          memberId: MemberLoad(),
          bankCode: bankCode,
          bankName: account,
        },
      })
        .then((res) => {
          // if (res.data.accountChkYn === "Y") {
          //   // 인증 완료
          //   alert("인증 완료");
          //   setBankHorderYN(res.data.accountChkYn);
          // } else if (res.data.accountChkYn === "N") {
          //   alert("본인 명의 계좌 정보를 입력해주세요");
          // }
          // 성공 시 처리, 예를 들어 성공 메시지 표시 또는 사용자를 리디렉션할 수 있습니다.
          if (res.data.accountChkYn === "Y") {
            setCardApply({
              ...cardApply,
              cardApplyEngname: englishName,
              cardApplyIsTransport:
                document.getElementById("transport").checked,
              cardApplyIsInternational: cardRegion === "visa" ? true : false,
              bankCode: document.getElementById("bank").value,
              accountNumber: document.getElementById("account").value,
              cardApplyIsAccountVerify: true,
            });
            if (cardApply.type === "hi") {
              alert("계좌 인증 완료");
              setProcess(5);
            } else if (cardApply.type === "by") {
              let modal = document.getElementById("certification");
              modal.style.visibility = "visible";
            }
          } else {
            alert("계좌정보를 다시 입력해주세요.");
          }
        })
        .catch((err) => {
          console.log(err);
          console.log("계좌 인증 실패");
          // 오류 시 처리, 예를 들어 사용자에게 오류 메시지를 표시할 수 있습니다.
        });
    }
  };

  const changeHandler = (prop) => {
    switch (prop) {
      case "name":
        setEnglishName(
          document.getElementsByClassName("engName")[0].value +
            " " +
            document.getElementsByClassName("engName")[1].value
        );
        break;
      case "account":
        setAccount(document.getElementById("account").value);
        break;
      default:
        break;
    }
  };

  axios
    .get(API_SERVER + "/getCardApplyBankCode", {})
    .then(function (res) {
      setBankList(res.data);
    })
    .catch(function (error) {
      console.log(error);
    });

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
            <MainTitle>영문명 입력</MainTitle>
            <NameWrap>
              <div>&nbsp;여권과 동일하게 입력해주세요.</div>
              <NameBox>
                <div>
                  <div>영문 성</div>
                  <input
                    type="text"
                    className="engName"
                    onChange={() => {
                      changeHandler("name");
                    }}
                  ></input>
                </div>
                <div>
                  <div>영문 이름</div>
                  <input
                    type="text"
                    className="engName"
                    onChange={() => {
                      changeHandler("name");
                    }}
                  ></input>
                </div>
              </NameBox>
            </NameWrap>
          </div>
          <Traffic>
            <span>후불교통 기능 신청</span>
            <input id="transport" type="checkbox"></input>
          </Traffic>
          <ForeignPay>
            <MainTitle>해외 결제 여부</MainTitle>
            <VisaRegion
              region={cardRegion}
              for="visa"
              onClick={() => {
                selectRegion("visa");
              }}
            >
              <img alt="visa" src={cardRegion === "visa" ? visa : gray} />
              <div>국내외겸용</div>
            </VisaRegion>
            <MaahRegion
              region={cardRegion}
              for="maah"
              onClick={() => {
                selectRegion("maah");
              }}
            >
              <img alt="maah" src={cardRegion === "maah" ? bronze : silver} />
              <div>국내전용</div>
            </MaahRegion>
            <RegionRadio
              type="radio"
              checked
              name="payRegion"
              id="visa"
            ></RegionRadio>
            <RegionRadio type="radio" name="payRegion" id="maah"></RegionRadio>
          </ForeignPay>
          <div>
            <MainTitle>출금 계좌 정보</MainTitle>
            <AccountWrap>
              <div>본인 명의의 계좌만 입력 가능합니다</div>
              <SelectBank
                id="bank"
                onChange={(e) => setBankCode(e.target.value)}
              >
                {bankList.map((bank, index) => (
                  <option key={index} value={bank.bankCode}>
                    {bank.bankName}
                  </option>
                ))}
              </SelectBank>
              <input
                id="account"
                type="number"
                placeholder="계좌번호(- 제외)"
                onChange={(e) => {
                  setAccount(e.target.value);
                }}
              ></input>
            </AccountWrap>
          </div>
          <ButtonWrap>
            <button onClick={displayModal}>계좌인증</button>
            <button onClick={gotoPrev}>이전으로</button>
          </ButtonWrap>
        </MainWrap>
      </Background>

      <ModalWrap id="certification">
        <CardLimit
          setProcess={setProcess}
          setCardApply={setCardApply}
          cardApply={cardApply}
        />
      </ModalWrap>
    </>
  );
}

export default InputCardApplicationInfo;
