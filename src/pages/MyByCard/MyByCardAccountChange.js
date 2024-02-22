import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MemberLoad from "../../components/Utils/SessionStorage";
//import axios from "axios";

const MyAccountChangeDiv = styled.div`
    box-sizing: border-box;
    padding: 3rem;
    width: 1000px;
    align-items: center;
    display: flex;
    flex-direction: column;
    box-shadow: inset 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25));
    background: linear-gradient(180deg, #ffffff -0%, #ffffff 100%);
    border-radius: 2rem;

.modalTitle {
    margin-bottom: 3rem;
    text-align: center;
    font-size: 2.5rem;
    font-weight: 600;
    color: #000000;
    font-family: Iceland,'Source Sans Pro';
    white-space: nowrap;
    display: flex;
    align-items: baseline;
    flex-shrink: 0;
}
`;

const CurrentInfo = styled.div`
  margin-bottom: 3rem;

  p {
    font-size: 1.5rem;
    font-weight: 600;
    color: #000000;
    font-family: M PLUS 1, "Source Sans Pro";
    white-space: nowrap;
  }

  .currentCardInfoDiv {
    width: 500px;
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  .currentCardInfo {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    justify-content: space-between;
  }

  .title {
    font-size: 1.2rem;
    font-weight: 600;
    color: #5b5b5b;
    font-family: M PLUS 1, "Source Sans Pro";
    white-space: nowrap;
    flex-shrink: 0;
  }

  .value {
    font-size: 1.2rem;
    font-weight: 600;
    color: #5b5b5b;
    font-family: M PLUS 1, "Source Sans Pro";
    white-space: nowrap;
    flex-shrink: 0;
  }
`;

const ChangeInfo = styled.div`
  p {
    font-size: 1.5rem;
    font-weight: 600;
    color: #000000;
    font-family: M PLUS 1, "Source Sans Pro";
    white-space: nowrap;
  }

  .changeCardInfoDiv {
    width: 500px;
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  .currentCardInfo {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    justify-content: space-between;
  }

  .title {
    font-size: 1.2rem;
    font-weight: 600;
    color: #5b5b5b;
    font-family: M PLUS 1, "Source Sans Pro";
    white-space: nowrap;
    flex-shrink: 0;
  }

  .value {
    font-size: 1.2rem;
    font-weight: 600;
    color: #5b5b5b;
    font-family: M PLUS 1, "Source Sans Pro";
    white-space: nowrap;
    flex-shrink: 0;
  }

  .selectbox {
    width: 200px;
    height: 40px;
    border-radius: 10px;
    font-size: 1.2rem;
    font-weight: 600;
    color: #5b5b5b;
    font-family: M PLUS 1, "Source Sans Pro";
    white-space: nowrap;
    flex-shrink: 0;
  }

  .accountChangeBtn {
    margin-top: 1rem;
    width: 100%;
    height: 3.5rem;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 600;
    color: #ffffff;
    font-family: Inter, "Source Sans Pro";
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000000;
    border-radius: 5rem;
    flex-shrink: 0;
  }
`;

const InputBox = styled.input`
  width: 250px;
  height: 40px;
  box-shadow: inset 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  background-color: #f5f5f5;
  border-radius: 10px;
  font-size: 20px;
`;

// axios
//   .post("/member.do", {
//     member_id: "user3",
//   })
//   .then(function (res) {
//     console.log(res.data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

function MyByCardAccountChange({ byCardData, memberByNumber }) {
  const API_SERVER = process.env.REACT_APP_API_SERVER;
  const [byCardAccountInfo, setByCardAccountInfo] = useState([]);
  const [bankInfo, setBankInfo] = useState([]);

  useEffect(() => {
    axios({
      method: "post",
      url: process.env.REACT_APP_API_SERVER + "/getByCardAccountInfo.do",
      data: {
        memberId: MemberLoad(),
        memberByNumber: memberByNumber,
      },
    })
      .then((res) => {
        console.log(res.data);
        console.log("성공 성공 성공 성공 성공 성공");
        setByCardAccountInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
        console.log("실패 실패 실패 실패 실패 실패");
      });
  }, [API_SERVER, memberByNumber]); // 두 번째 매개변수로 빈 배열을 전달하여 한 번만 실행되도록 설정

  useEffect(() => {
    axios({
      method: "get",
      url: process.env.REACT_APP_API_SERVER + "/getBankName.do",
    })
      .then((res) => {
        console.log(res.data);
        console.log("성공 성공 성공 성공 성공 성공");
        setBankInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
        console.log("실패 실패 실패 실패 실패 실패");
      });
  }, [API_SERVER]); // 두 번째 매개변수로 빈 배열을 전달하여 한 번만 실행되도록 설정

  return (
    <ByCardAccountChange
      byCardAccountInfo={byCardAccountInfo}
      bankInfo={bankInfo}
      byCardData={byCardData}
      memberByNumber={memberByNumber}
    ></ByCardAccountChange>
  );
}

function ByCardAccountChange({
  byCardAccountInfo,
  bankInfo,
  byCardData,
  memberByNumber,
}) {
  const [selectedBankCode, setSelectedBankCode] = useState("");
  const [newAccountNumber, setNewAccountNumber] = useState("");
  const [isAccountVerified, setIsAccountVerified] = useState(false);

  const handleAccountCheck = () => {
    // 유효성 검사 예제: 필드가 비어있는지 확인
    if (!selectedBankCode || !newAccountNumber) {
      alert("모두 입력하세요.");
      return;
    }

    // 서버로 계좌 인증 및 등록을 수행하기 위한 요청
    axios({
      method: "post",
      url: process.env.REACT_APP_API_SERVER + "/getAccountName.do",
      data: {
        memberId: MemberLoad(),
        bankCode: selectedBankCode,
        bankName: newAccountNumber,
      },
    })
      .then((res) => {
        console.log(res.data);
        console.log("계좌 인증 및 등록 성공");

        if (res.data.accountChkYn === "Y") {
          // 인증 완료
          alert("인증 완료!");
          // 버튼을 '등록'으로 변경하거나 다른 처리 수행
          setIsAccountVerified(true);
        } else if (res.data.accountChkYn === "N") {
          // 본인명의 계좌를 입력해주세요
          alert("본인명의 계좌 정보를 입력해주세요");
          // 필요에 따라 추가적인 처리 수행
        }
        // 성공 시 처리, 예를 들어 성공 메시지 표시 또는 사용자를 리디렉션할 수 있습니다.
      })
      .catch((err) => {
        console.log(err);
        console.log("계좌 인증 및 등록 실패");
        // 오류 시 처리, 예를 들어 사용자에게 오류 메시지를 표시할 수 있습니다.
      });
  };

  // 등록 로직 수행
  const handleRegistration = () => {
    //const [isHi, setIsHi] = useState(false);

    alert("등록 버튼이 눌렸습니다.");
    const data = {
      memberId: MemberLoad(),
      bankCode: selectedBankCode,
      bankName: newAccountNumber,
      cardNumber: byCardData.memberByNumber,
    };
    console.log(data);
    axios({
      method: "put",
      url: process.env.REACT_APP_API_SERVER + "/updateByAccount.do",
      data,
    })
      .then((res) => {
        alert("변경 성공!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <MyAccountChangeDiv>
      <div className="modalTitle">By:Card 연결 계좌 변경</div>

      <CurrentInfo>
        <p>변경정보 대상카드</p>
        <div className="currentCardInfoDiv">
          <div className="currentCardInfo">
            <p className="title">현재 결제은행</p>
            <p className="value">{byCardAccountInfo.bankName}</p>
          </div>
          <div className="currentCardInfo">
            <p className="title">현재 계좌번호</p>
            <p className="value">{byCardAccountInfo.memberByAccountNumber}</p>
          </div>
          <div className="currentCardInfo">
            <p className="title">카드번호</p>
            <p className="value">{memberByNumber}</p>
          </div>
        </div>
      </CurrentInfo>

      <ChangeInfo>
        <p>변경하실 결제은행</p>
        <div className="changeCardInfoDiv">
          <div className="currentCardInfo">
            <p className="title">은행명</p>
            <label>
              <select
                className="selectbox"
                onChange={(e) => setSelectedBankCode(e.target.value)}
              >
                {bankInfo &&
                  bankInfo.map((board, index) => (
                    <option key={index} value={board.bankCode}>
                      {board.bankName}
                    </option>
                  ))}
              </select>
            </label>
          </div>
          <div className="currentCardInfo">
            <p className="title">계좌번호</p>
            <InputBox
              placeholder="계좌번호를 입력하세요."
              onChange={(e) => setNewAccountNumber(e.target.value)}
            ></InputBox>
          </div>
          <div
            className="accountChangeBtn"
            onClick={
              isAccountVerified ? handleRegistration : handleAccountCheck
            }
          >
            {isAccountVerified ? "등록" : "계좌인증"}
          </div>
        </div>
      </ChangeInfo>
    </MyAccountChangeDiv>
  );
}

export default MyByCardAccountChange;
