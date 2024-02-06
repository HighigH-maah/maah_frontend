import React, { useState } from "react";
import kookmin from "../../assets/images/kookmin.png";
import shinhan from "../../assets/images/shinhan.png";
import hyundai from "../../assets/images/hyundai.png";
import samsung from "../../assets/images/samsung.png";
import lotte from "../../assets/images/lotte.png";
import maahSmall from "../../assets/images/maah_small.png";
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

function CardCompare(props) {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedMaah, setSelectedMaah] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [byCard, setByCard] = useState([]);

  const handleCompanyClick = (company) => {
    setSelectedCompany(company);
    console.log(company);
  };

  const handleMaahClick = async () => {
    axios
      .get("/allbycards.do", {})
      .then(function (res) {
        console.log(res.data);
        setByCard(res.data);
        setSelectedMaah(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    console.log(category);
  };

  return (
    <Mainback>
      <BackImage>
        <HeaderLogoutBtn></HeaderLogoutBtn>
        <SelectDiv>
          <FirstDiv>
            <Company>
              <span>Card Company</span>
              <BtnDiv>
                <Btn
                  image={shinhan}
                  color={"#D6EBFF"}
                  title={"신한카드"}
                  isCardCompany={true}
                  onClick={() => handleCompanyClick("shinhan")}
                  isSelected={selectedCompany === "shinhan"}
                />
                <Btn
                  image={kookmin}
                  color={"#FEFFCE"}
                  title={"국민카드"}
                  isCardCompany={true}
                  onClick={() => handleCompanyClick("kookmin")}
                  isSelected={selectedCompany === "kookmin"}
                />
                <Btn
                  image={hyundai}
                  color={"#E6E6E6"}
                  title={"현대카드"}
                  isCardCompany={true}
                  onClick={() => handleCompanyClick("hyundai")}
                  isSelected={selectedCompany === "hyundai"}
                />
                <Btn
                  image={samsung}
                  color={"#c8efff"}
                  title={"삼성카드"}
                  isCardCompany={true}
                  onClick={() => handleCompanyClick("samsung")}
                  isSelected={selectedCompany === "samsung"}
                />
                <Btn
                  image={lotte}
                  color={"#ffecec"}
                  title={"롯데카드"}
                  isCardCompany={true}
                  onClick={() => handleCompanyClick("lotte")}
                  isSelected={selectedCompany === "lotte"}
                />
              </BtnDiv>
            </Company>
            <Company>
              <span>Only Ma:ah</span>
              <Btn
                image={maahSmall}
                color={"#E6E6E6"}
                title={"Ma:ah 카드 모아보기"}
                isOnlyMaah={true}
                onClick={handleMaahClick}
                isSelected={selectedMaah}
              />
            </Company>
            <Company>
              <span>Category</span>
              <CategoryDiv>
                <CategoryBtn
                  isCategory={true}
                  onClick={() => handleCategoryClick("transport")}
                  isSelected={selectedCategory === "transport"}
                >
                  🚗 교통
                </CategoryBtn>
                <CategoryBtn
                  isCategory={true}
                  onClick={() => handleCategoryClick("communication")}
                  isSelected={selectedCategory === "communication"}
                >
                  🛰️ 통신
                </CategoryBtn>
                <CategoryBtn
                  isCategory={true}
                  onClick={() => handleCategoryClick("abroad")}
                  isSelected={selectedCategory === "abroad"}
                >
                  🛫 해외여행
                </CategoryBtn>
              </CategoryDiv>
              <CategoryDiv>
                <CategoryBtn
                  isCategory={true}
                  onClick={() => handleCategoryClick("utilities")}
                  isSelected={selectedCategory === "utilities"}
                >
                  💵 공과금
                </CategoryBtn>
                <CategoryBtn
                  isCategory={true}
                  onClick={() => handleCategoryClick("healthandliving")}
                  isSelected={selectedCategory === "healthandliving"}
                >
                  🏥 건강 및 생활
                </CategoryBtn>
                <CategoryBtn
                  isCategory={true}
                  onClick={() => handleCategoryClick("cultureandleisure")}
                  isSelected={selectedCategory === "cultureandleisure"}
                >
                  🎈 문화 및 여가
                </CategoryBtn>
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
          {selectedMaah ? (
            byCard.map((card, index) => (
              <CardList key={index}>
                <CardImageDiv>
                  <ExampleImage></ExampleImage>
                </CardImageDiv>
                <CardDetailDiv>
                  <CardTitle>{card.byName}</CardTitle>
                  <CardEvent>{card.event}</CardEvent>
                  {/* Add other dynamic data rendering here */}
                </CardDetailDiv>
                <DetailBtnDiv>
                  <button>자세히 보기</button>
                </DetailBtnDiv>
              </CardList>
            ))
          ) : (
            // Render a default state when "Ma:ah 카드 모아보기" is not selected
            <CardList>
              <CardImageDiv>
                <ExampleImage></ExampleImage>
              </CardImageDiv>
              <CardDetailDiv>
                <CardTitle>Default Card Title</CardTitle>
                <CardEvent>Default Card Event</CardEvent>
                {/* Add other default state rendering here */}
              </CardDetailDiv>
              <DetailBtnDiv>
                <button>자세히 보기</button>
              </DetailBtnDiv>
            </CardList>
          )}
        </ListDiv>
        {/* <CardList data={selectedMaah ? byCard : []}>
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
        </ListDiv> */}
        <Footer position="relative" top="40rem"></Footer>
      </BackImage>
    </Mainback>
  );
}

export default CardCompare;
