import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import styled from "styled-components";

import "react-datepicker/dist/react-datepicker.css";

const MyPaymentHistoryDiv = styled.div`
  box-sizing: border-box;
  padding: 5rem 3rem 5rem 3rem;
  width: 1000px;
  align-items: center;
  display: flex;
  flex-direction: column;
  box-shadow: inset 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25));
  background: linear-gradient(180deg, #ffffff -0%, #ffffff 100%);
  border-radius: 2rem;

  p{
    margin-bottom: 3rem;
    text-align: center;
    font-size: 2.5rem;
    font-weight: 600;
    color: #000000;
    font-family: Iceland,'Source Sans Pro';
    white-space: nowrap;
    flex-shrink: 0;
  }
`;

const Fillter = styled.div`
  box-sizing: border-box;
  padding: 0rem 0rem 1.5rem 44rem;
  width: 100%;
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`;

const Months = styled.div`
  margin-bottom: 1.5rem;
  height: 4rem;
  display: flex;
  column-gap: 2rem;
  align-items: center;
  flex-shrink: 0;

  div {
    width: 6rem;
    height: 100%;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 600;
    color: #000000;
    font-family: Iceland, "Source Sans Pro";
    white-space: nowrap;
    background-color: #ececec;
    border-radius: 3rem;
    flex-shrink: 0;
  }
`;

const Days = styled.div`
  //width: 100%;
  height: 3rem;
  display: flex;
  column-gap: 0.5rem;
  align-items: center;
  flex-shrink: 0;

  p {
    font-size: 2.5rem;
    font-weight: 400;
    color: #a9a8a8;
    font-family: Iceland, "Source Sans Pro";
    white-space: nowrap;
    flex-shrink: 0;
  }

  .datePicker {
    box-sizing: border-box;
    padding: 1rem;
    width: 9rem;
    border: solid 0.1rem #a9a8a8;
    font-size: 1rem;
    text-align: center;
    border-radius: 2rem;
  }
`;

const HistoryListBox = styled.div`
  box-sizing: border-box;
  padding: 1rem 4rem;
  width: 100%;
  height: 7rem;
  border: solid 0.1rem #d9d9d9;
  background-color: #ffffff;
  border-radius: 2rem;
  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  flex-shrink: 0;

  .contentName {
    margin: 0rem 45.9rem 0.1rem 0rem;
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.3;
    color: #000000;
    font-family: Inter, "Source Sans Pro";
    white-space: nowrap;
    flex-shrink: 0;
  }

  .box1 {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .box2 {
    height: 3rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .contentName {
    display: flex;
    align-items: center;
    margin: 0rem 30rem 0rem 0rem;
    font-size: 1.5rem;
    font-weight: 600;
    color: #000000;
    font-family: Inter, "Source Sans Pro";
    white-space: nowrap;
    flex-shrink: 0;
  }

  .contentPrice {
    margin: 0;
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 400;
    color: #0d1eaf;
    font-family: Iceland, "Source Sans Pro";
    white-space: nowrap;
    flex-shrink: 0;
  }

  .contentDate {
    margin: 0;
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.3;
    color: #000000;
    font-family: Iceland, "Source Sans Pro";
    white-space: nowrap;
    flex-shrink: 0;
  }
`;

function MyPaymentHistory(props) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <MyPaymentHistoryDiv>
      <p>나의 결제 이력</p>
      <Fillter>
        <Months>
          <div>3개월</div>
          <div>6개월</div>
          <div>12개월</div>
        </Months>
        <Days>
          <ReactDatePicker
            dateFormat="yyyy/MM/dd"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            minDate={new Date()}
            startDate={startDate}
            endDate={endDate}
            className="datePicker"
          />
          <p>-</p>
          <ReactDatePicker
            dateFormat="yyyy/MM/dd"
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            className="datePicker"
          />
        </Days>
      </Fillter>
      <HistoryListBox>
        <div className="box1">
          <div className="box2">
            <p className="contentName">스타벅스코리아</p>
            <p className="contentPrice">13500원</p>
          </div>

          <p className="contentDate">2024.01.29</p>
        </div>
      </HistoryListBox>
    </MyPaymentHistoryDiv>
  );
}

export default MyPaymentHistory;
