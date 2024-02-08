import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../../assets/images/Maah_Half_big_logo.png";
import axios from "axios";

const VirtualCardNumViewDiv = styled.div`
    box-sizing: border-box;
    padding: 2rem 2rem 2rem 2rem;
    width: 700px;
    display: flex;
    justify-content: center;
    box-shadow: inset 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25));
    background: linear-gradient(148.33deg, #f8f8f8 39.98%, #dedede 83.01%);
    border-radius: 2rem;

    img{
      position: relative;
      right: 50px;
    }

    .box1{
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
        justify-content: space-evenly;
    }

    p{
        text-align: center;
        font-size: 1.5rem;
        font-weight: 600;
        color: #000000;
        font-family: M PLUS 1, 'Source Sans Pro';
        white-space: nowrap;
        flex-shrink: 0;
    }

    .box2{
        margin-top: 2rem;
        width: 100%;
        align-items: center;
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
    }

    .cardInfo{
      margin-bottom: 2rem;
      width: 100%;
      display: flex;
      align-items: flex-start;
      flex-shrink: 0;
      justify-content: space-between;
    }

    .title{
        margin-right: 9.9rem;
        font-size: 1.5rem;
        font-weight: 600;
        line-height: 1.2;
        color: #5b5b5b;
        font-family: M PLUS 1, 'Source Sans Pro';
        white-space: nowrap;
        flex-shrink: 0;
    }

    .num{
        font-size: 1.5rem;
        font-weight: 600;
        line-height: 0.97;
        color: #5b5b5b;
        font-family: M PLUS 1, 'Source Sans Pro';
        white-space: nowrap;
        flex-shrink: 0;
    }
`;

function VirtualCardNumView(props) {
  const [virtualCardInfo, setVirtualCardInfo] = useState([]);

  useEffect(() => {
    axios({
      method: "post",
      url: "/getTempCard.do",
      data: { memberId: "user3" },
    })
      .then((res) => {
        console.log(res.data);
        console.log("성공 성공 성공 성공 성공 성공");
        setVirtualCardInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
        console.log("실패 실패 실패 실패 실패 실패");
      });
  }, []); // 두 번째 매개변수로 빈 배열을 전달하여 한 번만 실행되도록 설정

  return <VirtualCardInfo virtualCardInfo={virtualCardInfo}></VirtualCardInfo>;
}

function VirtualCardInfo({ virtualCardInfo }) {
  return (
    <>
      {virtualCardInfo && virtualCardInfo.tempHiExpdate && (
        <VirtualCardNumViewDiv>
          <img src={logo} alt="마하로고"></img>
          <div className="box1">
            <p>가상 카드 번호조회</p>
            <div className="box2">
              <div className="cardInfo">
                <p className="title">카드번호</p>
                <p className="num">{virtualCardInfo.tempHiNumber}</p>
              </div>
              <div className="cardInfo">
                <p className="title">cvc</p>
                <p className="num">{virtualCardInfo.tempHiCvc}</p>
              </div>
              <div className="cardInfo">
                <p className="title">유효기간</p>
                <p className="num">
                  {virtualCardInfo.tempHiExpdate.slice(0, 10)}
                </p>
              </div>
            </div>
          </div>
        </VirtualCardNumViewDiv>
      )}
    </>
  );
}

export default VirtualCardNumView;
