import React from "react";
import styled from "styled-components";

const VirtualCardNumViewDiv = styled.div`
    box-sizing: border-box;
    padding: 2rem 2rem 2rem 2rem;
    width: 700px;
    display: flex;
    justify-content: center;
    box-shadow: inset 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25));
    background: linear-gradient(148.33deg, #f8f8f8 39.98%, #dedede 83.01%);
    border-radius: 2rem;

    .box1{
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
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
        width: 100%;
        align-items: center;
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
    }

    .cardInfo{
        width: 100%;
        display: flex;
        align-items: flex-start;
        flex-shrink: 0;
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
  return (
    <VirtualCardNumViewDiv>
      <div className="box1">
        <p>가상 카드 번호조회</p>
        <div className="box2">
          <div className="cardInfo">
            <p className="title">카드번호</p>
            <p className="num">1234-****-****-5678</p>
          </div>
          <div className="cardInfo">
            <p className="title">cvc</p>
            <p className="num">123</p>
          </div>
          <div className="cardInfo">
            <p className="title">유효기간</p>
            <p className="num">2024.02.07</p>
          </div>
        </div>
      </div>
    </VirtualCardNumViewDiv>
  );
}

export default VirtualCardNumView;
