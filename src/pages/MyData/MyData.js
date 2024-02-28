import React, { useEffect, useState } from "react";
import {
  BestLevel,
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
  NextContent,
  NextLevelDiv,
  NextLevelPic,
  PData,
  PercentBox,
  PercentZone,
  Price,
  Ptitle,
  SaleForMonth,
  Sorting,
  ToNext,
  ToNextDiv,
  ToNextImg,
  ToNextSub,
} from "../../components/MyDataStyle/MyDataComponent";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import bronze from "../../assets/icon/bronze.png";
import silver from "../../assets/icon/silver.png";
import gold from "../../assets/icon/gold.png";
import platinum from "../../assets/icon/platinum.png";
import nextBack from "../../assets/images/nextLevelBack.png";
import { MyDoughnutChart } from "../../components/MyDataStyle/MyDataChart";
import HeaderWhiteVer from "../../components/Header/HeaderWhiteVer";
import MemberLoad from "../../components/Utils/SessionStorage";
import MyDataLineChart from "../../components/MyDataStyle/MyDataLineChart";

function MyData(props) {
  const API_SERVER = process.env.REACT_APP_API_SERVER;
  const [myAvg, setmyAvg] = useState("");
  const [myCardForMonth, setmyCardForMonth] = useState([]);
  const [myCategoryView, setmyCategoryView] = useState([]);
  const [myCompare, setmyCompare] = useState([]);
  const [myLimit, setmyLimit] = useState([]);
  const [myNextLevel, setmyNextLevel] = useState([]);
  const [hicard, setHiCard] = useState("");
  const [leftPrice, setLeftPrice] = useState("");

  const options = [
    { value: "Newest", label: "Sort by Newest" },
    { value: "Highest", label: "Sort by Highest" },
  ];

  useEffect(() => {
    axios({
      method: "post",
      url: API_SERVER + "/getMyData.do",
      data: { memberId: "user3" },
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
        setLeftPrice(
          res.data.myLimit.limitedAmount - res.data.myLimit.historyAmount
        );
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
          <DataTitle>남은 금액 </DataTitle>

          <DataView>{new Intl.NumberFormat().format(leftPrice)}</DataView>

          <DataDesc>
            한도 현황 {new Intl.NumberFormat().format(myLimit.limitedAmount)}
          </DataDesc>
          <CardLimitPic image={hicard} />
        </LimitDiv>
        <LimitDiv>
          <DataTitle>평균사용량</DataTitle>{" "}
          <DataView>{new Intl.NumberFormat().format(myAvg)}</DataView>
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
          <NextContent>
            <NextLevelDiv>
              {myNextLevel.nextClass === "SILVER" && (
                <NextLevelPic level={silver} />
              )}
              {myNextLevel.nextClass === "GOLD" && (
                <NextLevelPic level={gold} />
              )}
              {myNextLevel.nextClass === "BRONZE" && (
                <NextLevelPic level={bronze} />
              )}
              {myNextLevel.nextClass === "PLATINUM" && (
                <NextLevelPic level={platinum} />
              )}
            </NextLevelDiv>

            <ToNextDiv>
              {myNextLevel.nextClass != null ? (
                <>
                  <ToNext>
                    {new Intl.NumberFormat().format(myNextLevel.toNextClass)}
                  </ToNext>
                  <ToNextSub>{myNextLevel.nextClass}까지 남은 금액</ToNextSub>
                </>
              ) : (
                <BestLevel />
              )}
            </ToNextDiv>
            <ForNow>
              <span style={{ width: "100%" }}>최근 3개월 총 사용 금액</span>
              <span>
                {new Intl.NumberFormat().format(myNextLevel.priceHasUsed)}
              </span>
            </ForNow>
          </NextContent>
        </LimitDiv>
      </LimitWrapper>
      <LimitWrapper>
        <SaleForMonth>
          <MonthHeading>
            <DataTitle>By 카드 포인트 현황</DataTitle>
          </MonthHeading>

          <CardDataListWrapper myCardForMonth={myCardForMonth} />
        </SaleForMonth>
        <CompareLastMonth>
          <DataDesc>지난 달 VS 이번 달</DataDesc>
          <DataView>
            {myCompare.moreThanUsed > 0 ? (
              <>
                {new Intl.NumberFormat().format(myCompare.moreThanUsed)}{" "}
                사용했습니다
              </>
            ) : (
              <>
                {" "}
                {new Intl.NumberFormat().format(myCompare.moreThanUsed * -1)} 덜
                사용했습니다{" "}
              </>
            )}
          </DataView>
          {myCompare.length === 0 ? null : (
            <MyDataLineChart compareData={myCompare}></MyDataLineChart>
          )}
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
