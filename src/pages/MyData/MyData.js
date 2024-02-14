import React, { useState } from "react";
import {
  CardDataList,
  CardInfoDesc,
  CardLimitPic,
  CardName,
  CardSemiPic,
  CategoryGraph,
  CompareLastMonth,
  DataDesc,
  DataTitle,
  DataView,
  ForNow,
  LevelDiv,
  LevelPic,
  LevelTitle,
  LimitDiv,
  LimitWrapper,
  MonthHeading,
  MyDataBack,
  MyDataTitle,
  Price,
  SaleForMonth,
  Sorting,
  ToNext,
  ToNextSub,
} from "../../components/MyDataStyle/MyDataComponent";
import HeaderLogoutBtn from "../../components/Header/HeaderLogoutBtn";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import blackvelvet from "../../assets/images/black_velvet.png";
import bronze from "../../assets/icon/bronze.png";
import Select from "react-select";
import LineChart from "../../components/MyDataStyle/MyDataChart";

function MyData(props) {
  const options = [
    { value: "Newest", label: "Sort by Newest" },
    { value: "Highest", label: "Sort by Highest" },
  ];
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
        <LimitDiv>
          <DataTitle>한도현황</DataTitle>
          <DataView>150,000</DataView>
          <DataDesc>남은 금액 110,000</DataDesc>
          <CardLimitPic image={blackvelvet} />
        </LimitDiv>
        <LimitDiv>
          <DataTitle>평균사용량</DataTitle> <DataView>150,000</DataView>
          <DataDesc>1월까지의 평균 사용 금액</DataDesc>
          <LevelDiv>
            <LevelPic level={bronze} />
            <LevelTitle>bronze</LevelTitle>
          </LevelDiv>
        </LimitDiv>
        <LimitDiv>
          <ToNext>20,0000</ToNext>
          <ToNextSub>Silver까지 남은 금액</ToNextSub>

          <ForNow>
            현재 사용 금액 <span>50,000</span>
          </ForNow>
        </LimitDiv>
      </LimitWrapper>
      <LimitWrapper>
        <SaleForMonth>
          <MonthHeading>
            <DataTitle>월 별 카드 할인 금액</DataTitle>
            <Sorting>
              <Select options={options} />
            </Sorting>
          </MonthHeading>

          <CardDataList>
            <CardInfoDesc>
              <CardSemiPic image={blackvelvet} />
              <CardName>The Blue</CardName>
              <Price>210,000</Price>
            </CardInfoDesc>

            <CardInfoDesc>
              <CardSemiPic image={blackvelvet} />
              <CardName>The Blue</CardName>
              <Price>210,000</Price>
            </CardInfoDesc>

            <CardInfoDesc>
              <CardSemiPic image={blackvelvet} />
              <CardName>The Blue</CardName>
              <Price>210,000</Price>
            </CardInfoDesc>

            <CardInfoDesc>
              <CardSemiPic image={blackvelvet} />
              <CardName>The Blue</CardName>
              <Price>210,000</Price>
            </CardInfoDesc>

            <CardInfoDesc>
              <CardSemiPic image={blackvelvet} />
              <CardName>The Blue</CardName>
              <Price>210,000</Price>
            </CardInfoDesc>

            <CardInfoDesc>
              <CardSemiPic image={blackvelvet} />
              <CardName>The Blue</CardName>
              <Price>210,000</Price>
            </CardInfoDesc>

            <CardInfoDesc>
              <CardSemiPic image={blackvelvet} />
              <CardName>The Blue</CardName>
              <Price>210,000</Price>
            </CardInfoDesc>

            <CardInfoDesc>
              <CardSemiPic image={blackvelvet} />
              <CardName>The Blue</CardName>
              <Price>210,000</Price>
            </CardInfoDesc>

            <CardInfoDesc>
              <CardSemiPic image={blackvelvet} />
              <CardName>The Blue</CardName>
              <Price>210,000</Price>
            </CardInfoDesc>
          </CardDataList>
        </SaleForMonth>
        <CompareLastMonth>
          <DataDesc>저번달 VS 이번 달</DataDesc>
          <DataView>150,000 사용했습니다</DataView>
          <LineChart></LineChart>
        </CompareLastMonth>
      </LimitWrapper>
      <LimitWrapper isLast>
        <CategoryGraph>
          <DataTitle>카테고리 비율</DataTitle>{" "}
        </CategoryGraph>
      </LimitWrapper>
      <Footer />
    </MyDataBack>
  );
}

export default MyData;
