import React from "react";
import kookmin from "../../assets/images/kookmin.png";
import shinhan from "../../assets/images/shinhan.png";
import hyundai from "../../assets/images/hyundai.png";
import samsung from "../../assets/images/samsung.png";
import lotte from "../../assets/images/lotte.png";
import maahSmall from "../../assets/images/Maah_small.png";
import { BackImage, Mainback } from "../../components/Main/MainComponent";

import {
  Benefit,
  BenefitDiv,
  Btn,
  BtnDiv,
  CardDetailDiv,
  CardEvent,
  CardExample,
  CardImageDiv,
  CardList,
  CardTitle,
  CategoryBtn,
  CategoryDiv,
  Company,
  ConditionDiv,
  DetailBtnDiv,
  ExampleImage,
  FirstDiv,
  ListDiv,
  SecondDiv,
  SelectDiv,
} from "../../components/CardCompare/CompareComponent";
import HeaderLogoutBtn from "../../components/Header/HeaderLogoutBtn";
import Footer from "../../components/Footer/Footer";
import axios from "axios";

axios
  .post("/compare.do", {
    other_code: 1,
  })
  .then(function (res) {
    console.log(res.data);
  })
  .catch(function (error) {
    console.log(error);
  });

function CardCompare(props) {
  return (
    <Mainback>
      <BackImage>
        <HeaderLogoutBtn></HeaderLogoutBtn>
        <SelectDiv>
          <FirstDiv>
            <Company>
              <span>Card Company</span>
              <BtnDiv>
                <Btn image={shinhan} color={"#D6EBFF"} title={"신한카드"} />
                <Btn image={kookmin} color={"#FEFFCE"} title={"국민카드"} />
                <Btn image={hyundai} color={"#E6E6E6"} title={"현대카드"} />
                <Btn image={samsung} color={"#ffffff"} title={"삼성카드"} />
                <Btn image={lotte} color={"#ffecec"} title={"롯데카드"} />
              </BtnDiv>
            </Company>
            <Company>
              <span>Only Ma:ah</span>
              <Btn
                image={maahSmall}
                color={"#E6E6E6"}
                title={"Ma:ah 카드 모아보기"}
              />
            </Company>
            <Company>
              <span>Category</span>
              <CategoryDiv>
                <CategoryBtn>🚗 교통</CategoryBtn>
                <CategoryBtn>🛰️ 통신</CategoryBtn>
                <CategoryBtn>🛫 해외여행</CategoryBtn>
              </CategoryDiv>
              <CategoryDiv>
                <CategoryBtn>💵 공과금</CategoryBtn>
                <CategoryBtn>🏥 건강 및 생활</CategoryBtn>
                <CategoryBtn>🎈 문화 및 여가</CategoryBtn>
              </CategoryDiv>
            </Company>
          </FirstDiv>
          <SecondDiv>
            <Company>
              <span>Card </span>
              <BtnDiv>
                <CardExample>하나은행</CardExample>
                <CardExample>하나은행</CardExample>
                <CardExample>하나은행</CardExample>
                <CardExample>하나은행</CardExample>
              </BtnDiv>
            </Company>
          </SecondDiv>
        </SelectDiv>

        <ListDiv>
          <CardList>
            <CardImageDiv>
              <ExampleImage></ExampleImage>
            </CardImageDiv>
            <CardDetailDiv>
              <CardTitle>마하카드</CardTitle>
              <CardEvent>신규회원 연회비 캐쉬백 이벤트</CardEvent>
              <BenefitDiv>
                <Benefit>업종별 0.5~3% 적립</Benefit>|
                <Benefit>업종별 0.5~3% 적립</Benefit>|
                <Benefit>업종별 0.5~3% 적립</Benefit>
              </BenefitDiv>
              <ConditionDiv>
                <p>국내 전용 30,000원/해외겸용 30,000원</p>
                <p>전월 실적 50만원 이상</p>
              </ConditionDiv>
            </CardDetailDiv>
            <DetailBtnDiv>
              <button>자세히 보기</button>
            </DetailBtnDiv>
          </CardList>

          <CardList>
            <CardImageDiv>
              <ExampleImage></ExampleImage>
            </CardImageDiv>
            <CardDetailDiv>
              <CardTitle>마하카드</CardTitle>
              <CardEvent>신규회원 연회비 캐쉬백 이벤트</CardEvent>
              <BenefitDiv>
                <Benefit>업종별 0.5~3% 적립</Benefit>|
                <Benefit>업종별 0.5~3% 적립</Benefit>|
                <Benefit>업종별 0.5~3% 적립</Benefit>
              </BenefitDiv>
              <ConditionDiv>
                <p>국내 전용 30,000원/해외겸용 30,000원</p>
                <p>전월 실적 50만원 이상</p>
              </ConditionDiv>
            </CardDetailDiv>
            <DetailBtnDiv>
              <button>자세히 보기</button>
            </DetailBtnDiv>
          </CardList>

          <CardList>
            <CardImageDiv>
              <ExampleImage></ExampleImage>
            </CardImageDiv>
            <CardDetailDiv>
              <CardTitle>마하카드</CardTitle>
              <CardEvent>신규회원 연회비 캐쉬백 이벤트</CardEvent>
              <BenefitDiv>
                <Benefit>업종별 0.5~3% 적립</Benefit>|
                <Benefit>업종별 0.5~3% 적립</Benefit>|
                <Benefit>업종별 0.5~3% 적립</Benefit>
              </BenefitDiv>
              <ConditionDiv>
                <p>국내 전용 30,000원/해외겸용 30,000원</p>
                <p>전월 실적 50만원 이상</p>
              </ConditionDiv>
            </CardDetailDiv>
            <DetailBtnDiv>
              <button>자세히 보기</button>
            </DetailBtnDiv>
          </CardList>
        </ListDiv>
        <Footer position="relative" top="40rem"></Footer>
      </BackImage>
    </Mainback>
  );
}

export default CardCompare;
