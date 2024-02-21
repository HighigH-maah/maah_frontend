import axios from "axios";
import { func } from "prop-types";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const MyGoalChangeDiv = styled.div`
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

  input {
    text-align: right;
    box-shadow: inset 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
    background-color: #f5f5f5;
    border-radius: 8px;
    padding: 4px;
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

function MyByCardGoalChange(props) {
  const API_SERVER = process.env.REACT_APP_API_SERVER;
  const [byInfo, setByInfo] = useState(() => props.info);
  useEffect(() => {
    console.log(props.info);
  }, [byInfo]);

  return (
    <ByCardGoalChange
      byInfo={byInfo}
      updateChange={props.updateChange}
    ></ByCardGoalChange>
  );
}

function ByCardGoalChange({ byInfo, updateChange }) {
  const [nickname, setNickname] = useState(byInfo.memberCardByNickname);
  const [byGoal, setByGoal] = useState(() => byInfo.memberByPointGoal);
  const [byRank, setByRank] = useState(() => byInfo.memberByRank);

  const cardInfoUpdate = () => {
    console.log(nickname);
    console.log(byGoal);
    console.log(byRank);

    axios
      .post(process.env.REACT_APP_API_SERVER + "/updateByCardInfo.do", {
        memberByNumber: byInfo.memberByNumber,
        memberByRank: byRank,
        memberByPointGoal: byGoal,
        memberCardByNickname: nickname,
      })
      .then(function (res) {
        console.log(res.data);
        if (res.data === 1) {
          updateChange();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <MyGoalChangeDiv>
      <div className="modalTitle">By:Card 정보 변경</div>
      <CurrentInfo>
        <p>변경정보 대상카드</p>
        <div className="currentCardInfoDiv">
          <div className="currentCardInfo">
            <p className="title">카드번호</p>
            <p className="value">{byInfo.memberByNumber}</p>
          </div>
          <div className="currentCardInfo">
            <p className="title">카드별명</p>
            <input
              type="text"
              className="value"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
          </div>
          <div className="currentCardInfo">
            <p className="title">목표 By:Point</p>
            <input
              type="number"
              className="value"
              value={byGoal}
              onChange={(e) => setByGoal(e.target.value)}
            />
          </div>
          <div className="accountChangeBtn" onClick={cardInfoUpdate}>
            카드정보변경
          </div>
        </div>
      </CurrentInfo>
    </MyGoalChangeDiv>
  );
}

export default MyByCardGoalChange;
