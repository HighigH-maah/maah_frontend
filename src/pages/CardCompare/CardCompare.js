import React from "react";
import kookmin from "../../assets/images/kookmin.png";
import shinhan from "../../assets/images/shinhan.png";
import hyundai from "../../assets/images/hyundai.png";
import { BackImage, Mainback } from "../../components/Main/MainComponent";
import {
  BtnDiv,
  CardExample,
  CategoryBtn,
  CategoryDiv,
  Company,
  CompanyBtn,
  FirstDiv,
  MaahBtn,
  SecondDiv,
  SelectDiv,
} from "../../components/CardCompare/CompareComponent";

function CardCompare(props) {
  return (
    <Mainback>
      <BackImage>
        <SelectDiv>
          <FirstDiv>
            <Company>
              <span>Card Company</span>
              <BtnDiv>
                <CompanyBtn>
                  <img src={kookmin} />
                  KB국민카드
                </CompanyBtn>
                <CompanyBtn>
                  <img src={shinhan} />
                  신한카드
                </CompanyBtn>
                <CompanyBtn>
                  {" "}
                  <img src={hyundai} />
                  현대카드
                </CompanyBtn>
                <CompanyBtn>하나은행</CompanyBtn>
                <CompanyBtn>하나은행</CompanyBtn>
              </BtnDiv>
            </Company>
            <Company>
              <span>Only Ma:ah</span>
              <MaahBtn>Ma:ah 카드 모아보기</MaahBtn>
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
                <CardExample>하나은행</CardExample>
              </BtnDiv>
            </Company>
          </SecondDiv>
        </SelectDiv>
      </BackImage>
    </Mainback>
  );
}

export default CardCompare;
