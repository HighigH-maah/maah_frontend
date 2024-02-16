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
  DataViewZone,
  ForNow,
  LevelDiv,
  LevelPic,
  LevelTitle,
  LimitDiv,
  LimitWrapper,
  MonthHeading,
  MyDataBack,
  MyDataTitle,
  PData,
  PercentBox,
  PercentZone,
  Price,
  Ptitle,
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
import {
  LineChart,
  MyDoughnutChart,
} from "../../components/MyDataStyle/MyDataChart";

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
          <DataTitle>카테고리 비율</DataTitle>
          <DataViewZone>
            <MyDoughnutChart></MyDoughnutChart>
            <PercentZone>
              <PercentBox>
                <Ptitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="6"
                    viewBox="0 0 7 6"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_611_461)">
                      <circle cx="3.50879" cy="3" r="3" fill="#0E1456" />
                    </g>
                    <defs>
                      <clipPath id="clip0_611_461">
                        <rect
                          width="6"
                          height="6"
                          fill="white"
                          transform="translate(0.508789)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  교통
                </Ptitle>
                <PData>1.1K</PData>
              </PercentBox>
              <PercentBox>
                <Ptitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="6"
                    viewBox="0 0 7 6"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_611_561)">
                      <circle cx="3.50879" cy="3" r="3" fill="#B6C2FF" />
                    </g>
                    <defs>
                      <clipPath id="clip0_611_561">
                        <rect
                          width="6"
                          height="6"
                          fill="white"
                          transform="translate(0.508789)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  항공
                </Ptitle>
                <PData>1.1K</PData>
              </PercentBox>
              <PercentBox>
                <Ptitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="6"
                    viewBox="0 0 7 6"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_611_436)">
                      <circle cx="3.50879" cy="3" r="3" fill="#63A5B5" />
                    </g>
                    <defs>
                      <clipPath id="clip0_611_436">
                        <rect
                          width="6"
                          height="6"
                          fill="white"
                          transform="translate(0.508789)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  33
                </Ptitle>
                <PData>1.1K</PData>
              </PercentBox>
              <PercentBox>
                <Ptitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="6"
                    viewBox="0 0 7 6"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_611_572)">
                      <circle cx="3.50879" cy="3" r="3" fill="#D4BEFD" />
                    </g>
                    <defs>
                      <clipPath id="clip0_611_572">
                        <rect
                          width="6"
                          height="6"
                          fill="white"
                          transform="translate(0.508789)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  44
                </Ptitle>
                <PData>1.1K</PData>
              </PercentBox>
              <PercentBox>
                <Ptitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="6"
                    viewBox="0 0 6 6"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_611_553)">
                      <circle cx="3.00879" cy="3" r="3" fill="black" />
                    </g>
                    <defs>
                      <clipPath id="clip0_611_553">
                        <rect
                          width="6"
                          height="6"
                          fill="white"
                          transform="translate(0.00878906)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  55
                </Ptitle>
                <PData>1.1K</PData>
              </PercentBox>
              <PercentBox>
                <Ptitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="6"
                    viewBox="0 0 6 6"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_611_521)">
                      <circle cx="3.00879" cy="3" r="3" fill="#FF98E2" />
                    </g>
                    <defs>
                      <clipPath id="clip0_611_521">
                        <rect
                          width="6"
                          height="6"
                          fill="white"
                          transform="translate(0.00878906)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  기타
                </Ptitle>
                <PData>1.1K</PData>
              </PercentBox>
            </PercentZone>
          </DataViewZone>
        </CategoryGraph>
      </LimitWrapper>
      <Footer />
    </MyDataBack>
  );
}

export default MyData;
