import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
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

function MyAccountChange(props) {
  const [hiCardAccountInfo, setHiCardAccountInfo] = useState([]);
  const [bankInfo, setBankInfo] = useState([]);

  useEffect(() => {
    axios({
      method: "post",
      url: "/getAccountInfo.do",
      data: { memberId: "user3" },
    })
      .then((res) => {
        console.log(res.data);
        console.log("성공 성공 성공 성공 성공 성공");
        setHiCardAccountInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
        console.log("실패 실패 실패 실패 실패 실패");
      });
  }, []); // 두 번째 매개변수로 빈 배열을 전달하여 한 번만 실행되도록 설정

  useEffect(() => {
    axios({
      method: "get",
      url: "/getBankName.do",
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
  }, []); // 두 번째 매개변수로 빈 배열을 전달하여 한 번만 실행되도록 설정

  return (
    <HiCardAccountChnage
      hiCardAccountInfo={hiCardAccountInfo}
      bankInfo={bankInfo}
    ></HiCardAccountChnage>
  );
}

function HiCardAccountChnage({ hiCardAccountInfo, bankInfo }) {
  return (
    <MyAccountChangeDiv>
      <div className="modalTitle">Hi:Card 연결 계좌 변경</div>

      <CurrentInfo>
        <p>변경정보 대상카드</p>
        <div className="currentCardInfoDiv">
          <div className="currentCardInfo">
            <p className="title">현재 결제은행</p>
            <p className="value">{hiCardAccountInfo.bankName}</p>
          </div>
          <div className="currentCardInfo">
            <p className="title">현재 계좌번호</p>
            <p className="value">{hiCardAccountInfo.memberHiAccountNumber}</p>
          </div>
          <div className="currentCardInfo">
            <p className="title">카드번호</p>
            <p className="value">{hiCardAccountInfo.memberHiNumber}</p>
          </div>
        </div>
      </CurrentInfo>

      <ChangeInfo>
        <p>변경하실 결제은행</p>
        <div className="changeCardInfoDiv">
          <div className="currentCardInfo">
            <p className="title">은행명</p>
            <label>
              <select className="selectbox">
                {bankInfo &&
                  bankInfo.map((board, index) => (
                    <option key={index}>{board.bankName}</option>
                  ))}
              </select>
            </label>
          </div>
          <div className="currentCardInfo">
            <p className="title">계좌번호</p>
            <InputBox placeholder="계좌번호를 입력하세요."></InputBox>
          </div>
          <div className="accountChangeBtn">계좌인증 및 등록</div>
        </div>
      </ChangeInfo>
    </MyAccountChangeDiv>
  );
}

export default MyAccountChange;
