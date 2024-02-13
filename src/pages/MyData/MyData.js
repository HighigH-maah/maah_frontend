import React from "react";
import {
  CategoryGraph,
  CompareLastMonth,
  LimitDiv,
  LimitWrapper,
  MyDataBack,
  MyDataTitle,
  SaleForMonth,
} from "../../components/MyDataStyle/MyDataComponent";
import HeaderLogoutBtn from "../../components/Header/HeaderLogoutBtn";
import Footer from "../../components/Footer/Footer";
import axios from "axios";

function MyData(props) {
  axios
    .get("/getMyLimit.do")
    .then(function (res) {
      console.log(res.data);
    })
    .catch(function (error) {});
  return (
    <MyDataBack>
      <HeaderLogoutBtn />
      <MyDataTitle>Ma:ah My Data</MyDataTitle>
      <LimitWrapper isFirst>
        <LimitDiv>한도현황</LimitDiv>
        <LimitDiv>평균사용량</LimitDiv>
        <LimitDiv>남은 금액</LimitDiv>
      </LimitWrapper>
      <LimitWrapper>
        <SaleForMonth>월 별 카드 할인 금액</SaleForMonth>
        <CompareLastMonth>저번달 vs 이번달</CompareLastMonth>
      </LimitWrapper>
      <LimitWrapper isLast>
        <CategoryGraph>카테고리 비율</CategoryGraph>
      </LimitWrapper>
      <Footer />
    </MyDataBack>
  );
}

export default MyData;
