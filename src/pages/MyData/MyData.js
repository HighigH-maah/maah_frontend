import React, { useEffect, useState } from "react";
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
  DataTitleCategory,
  DataView,
  DataViewZone,
  ForNow,
  Level,
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
  ToNextImg,
  ToNextSub,
} from "../../components/MyDataStyle/MyDataComponent";
import HeaderLogoutBtn from "../../components/Header/HeaderLogoutBtn";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import blackvelvet from "../../assets/images/black_velvet.png";
import bronze from "../../assets/icon/bronze.png";
import silver from "../../assets/icon/silver.png";
import gold from "../../assets/icon/gold.png";
import platinum from "../../assets/icon/platinum.png";
import Select from "react-select";

import nextBack from "../../assets/images/nextLevelBack.png";
import {
  LineChart,
  MyDoughnutChart,
} from "../../components/MyDataStyle/MyDataChart";
import HeaderWhiteVer from "../../components/Header/HeaderWhiteVer";

function MyData(props) {
  const [myAvg, setmyAvg] = useState("");
  const [myCardForMonth, setmyCardForMonth] = useState([]);
  const [myCategoryView, setmyCategoryView] = useState([]);
  const [myCompare, setmyCompare] = useState([]);
  const [myLimit, setmyLimit] = useState([]);
  const [myNextLevel, setmyNextLevel] = useState([]);
  const [hicard, setHiCard] = useState("");

  const options = [
    { value: "Newest", label: "Sort by Newest" },
    { value: "Highest", label: "Sort by Highest" },
  ];

  useEffect(() => {
    axios
      .post("/getMyData.do", {
        memberId: "user2",
      })
      .then((res) => {
        console.log(res.data);
        setHiCard(res.data.myHiCardImage);
        setmyAvg(res.data.myAvg);
        setmyCardForMonth(res.data.myCardForMonth);
        setmyCategoryView(res.data.myCategoryView);
        setmyCompare(res.data.myCompare);
        setmyLimit(res.data.myLimit);
        setmyNextLevel(res.data.myNextLevel);
      })
      .catch(function (error) {});
  }, []);

  const CardDataListWrapper = ({ myCardForMonth }) => {
    return (
      <CardDataList>
        {myCardForMonth &&
          myCardForMonth.map((card, index) => (
            <CardInfoDesc key={index}>
              <CardSemiPic image={card.byCardImage} />
              <CardName>{card.byCardName}</CardName>
              <Price>{new Intl.NumberFormat().format(card.point)}</Price>
            </CardInfoDesc>
          ))}
      </CardDataList>
    );
  };

  return (
    <MyDataBack>
      <HeaderWhiteVer />
      <MyDataTitle>Ma:ah My Data</MyDataTitle>
      <LimitWrapper isFirst>
        <LimitDiv>
          <DataTitle>한도현황</DataTitle>
          <DataView>{myLimit.limitedAmount}</DataView>
          <DataDesc>남은 금액 {myLimit.historyAmount}</DataDesc>
          <CardLimitPic image={hicard} />
        </LimitDiv>
        <LimitDiv>
          <DataTitle>평균사용량</DataTitle> <DataView>{myAvg}</DataView>
          <DataDesc>2월까지의 평균 사용 금액</DataDesc>
          <LevelDiv>
            {myNextLevel.memberClass === "SILVER" && (
              <LevelPic level={silver} />
            )}
            {myNextLevel.memberClass === "GOLD" && <LevelPic level={gold} />}
            {myNextLevel.memberClass === "BRONZE" && (
              <LevelPic level={bronze} />
            )}
            {myNextLevel.memberClass === "PLATINUM" && (
              <LevelPic level={platinum} />
            )}
            <LevelTitle level={myNextLevel.memberClass}>
              {myNextLevel.memberClass}
            </LevelTitle>
          </LevelDiv>
        </LimitDiv>
        <LimitDiv>
          <img src={nextBack} alt={nextBack} />

          <ToNext>{myNextLevel.toNextClass}</ToNext>
          <ToNextSub>{myNextLevel.nextClass}까지 남은 금액</ToNextSub>

          <ForNow>
            <span>사용한 금액</span>
            <span>{myNextLevel.priceHasUsed}</span>
          </ForNow>
        </LimitDiv>
      </LimitWrapper>
      <LimitWrapper>
        <SaleForMonth>
          <MonthHeading>
            <DataTitle>By 카드 포인트 현황</DataTitle>
            {/* <Sorting>
              <Select options={options} />
            </Sorting> */}
          </MonthHeading>

          <CardDataListWrapper myCardForMonth={myCardForMonth} />
        </SaleForMonth>
        <CompareLastMonth>
          <DataDesc>저번달 VS 이번 달</DataDesc>
          <DataView>{myCompare.moreThanUsed} 사용했습니다</DataView>
          <LineChart compareData={myCompare}></LineChart>
        </CompareLastMonth>
      </LimitWrapper>
      <LimitWrapper isLast>
        <CategoryGraph>
          <DataTitleCategory>카테고리 비율</DataTitleCategory>
          <DataViewZone>
            <MyDoughnutChart myCategory={myCategoryView}></MyDoughnutChart>
          </DataViewZone>
        </CategoryGraph>
      </LimitWrapper>
      <Footer />
    </MyDataBack>
  );
}

export default MyData;
