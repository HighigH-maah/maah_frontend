import React, { useState } from "react";
import kookmin from "../../assets/images/kookmin.png";
import shinhan from "../../assets/images/shinhan.png";
import hyundai from "../../assets/images/hyundai.png";
import samsung from "../../assets/images/samsung.png";
import lotte from "../../assets/images/lotte.png";
import maahSmall from "../../assets/images/maah_small.png";
import { BackImage, Mainback } from "../../components/MainStyle/MainComponent";

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
} from "../../components/CardCompareStyle/CompareComponent";
import HeaderLogoutBtn from "../../components/Header/HeaderLogoutBtn";
import Footer from "../../components/Footer/Footer";
import axios from "axios";

function CardCompare(props) {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedMaah, setSelectedMaah] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [benefitList, setBenefitList] = useState([]);

  const [byCard, setByCard] = useState([]);
  const [otherCard, setOtherCard] = useState([]);

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
        setBenefitList(res.data.benefitList);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleCategoryClick = (categoryClicked) => {
    setSelectedCategory(categoryClicked);
    console.log(categoryClicked);

    axios
      .post("/selectByCondition.do", {
        bankName: selectedCompany,
        category: categoryClicked,
      })
      .then(function (res) {
        console.log(res.data);
        setOtherCard(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
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
                  onClick={() => handleCompanyClick("신한카드")}
                  isSelected={selectedCompany === "신한카드"}
                />
                <Btn
                  image={kookmin}
                  color={"#FEFFCE"}
                  title={"국민카드"}
                  isCardCompany={true}
                  onClick={() => handleCompanyClick("KB국민카드")}
                  isSelected={selectedCompany === "KB국민카드"}
                />
                <Btn
                  image={hyundai}
                  color={"#E6E6E6"}
                  title={"현대카드"}
                  isCardCompany={true}
                  onClick={() => handleCompanyClick("현대카드")}
                  isSelected={selectedCompany === "현대카드"}
                />
                <Btn
                  image={samsung}
                  color={"#c8efff"}
                  title={"삼성카드"}
                  isCardCompany={true}
                  onClick={() => handleCompanyClick("삼성카드")}
                  isSelected={selectedCompany === "삼성카드"}
                />
                <Btn
                  image={lotte}
                  color={"#ffecec"}
                  title={"롯데카드"}
                  isCardCompany={true}
                  onClick={() => handleCompanyClick("롯데카드")}
                  isSelected={selectedCompany === "롯데카드"}
                />
              </BtnDiv>
            </Company>
            <Company>
              <span>Only Ma:ah</span>
              <Btn
                image={maahSmall}
                color={
                  "linear-gradient(180deg, #C6C6C6 0%, rgba(207, 198, 170, 0.00) 100%)"
                }
                title={"Ma:ah 카드 모아보기"}
                isOnlyMaah={true}
                onClick={handleMaahClick}
                isSelected={selectedMaah}
              />
            </Company>
            <Company style={{ marginLeft: "1rem" }}>
              <span>Category</span>
              <CategoryDiv>
                <CategoryBtn
                  isCategory={true}
                  onClick={() => handleCategoryClick(13)}
                  isSelected={selectedCategory === 13}
                >
                  🚗 교통
                </CategoryBtn>
                <CategoryBtn
                  isCategory={true}
                  onClick={() => handleCategoryClick(2)}
                  isSelected={selectedCategory === 2}
                >
                  🛰️ 통신
                </CategoryBtn>
                <CategoryBtn
                  isCategory={true}
                  onClick={() => handleCategoryClick(11)}
                  isSelected={selectedCategory === 11}
                >
                  🛫 항공
                </CategoryBtn>
              </CategoryDiv>
              <CategoryDiv>
                <CategoryBtn
                  isCategory={true}
                  onClick={() => handleCategoryClick(5)}
                  isSelected={selectedCategory === 5}
                >
                  💵 공과금
                </CategoryBtn>
                <CategoryBtn
                  isCategory={true}
                  onClick={() => handleCategoryClick(3)}
                  isSelected={selectedCategory === 3}
                >
                  🚏 대중교통
                </CategoryBtn>
                <CategoryBtn
                  isCategory={true}
                  onClick={() => handleCategoryClick(10)}
                  isSelected={selectedCategory === 10}
                >
                  🎈 영화/문화
                </CategoryBtn>
              </CategoryDiv>

              <CategoryDiv>
                <CategoryBtn
                  isCategory={true}
                  onClick={() => handleCategoryClick(6)}
                  isSelected={selectedCategory === 6}
                >
                  💊 병원/약국
                </CategoryBtn>
                <CategoryBtn
                  isCategory={true}
                  onClick={() => handleCategoryClick(8)}
                  isSelected={selectedCategory === 8}
                >
                  🤺 레저/스포츠
                </CategoryBtn>
                <CategoryBtn
                  isCategory={true}
                  onClick={() => handleCategoryClick(9)}
                  isSelected={selectedCategory === 9}
                >
                  🛍️ 쇼핑
                </CategoryBtn>
              </CategoryDiv>

              <CategoryDiv>
                <CategoryBtn
                  isCategory={true}
                  onClick={() => handleCategoryClick(4)}
                  isSelected={selectedCategory === 4}
                >
                  🥘 푸드
                </CategoryBtn>
                <CategoryBtn
                  isCategory={true}
                  onClick={() => handleCategoryClick(12)}
                  isSelected={selectedCategory === 12}
                >
                  🧳 여행
                </CategoryBtn>
                <CategoryBtn
                  isCategory={true}
                  onClick={() => handleCategoryClick(7)}
                  isSelected={selectedCategory === 7}
                >
                  👩‍🍼 교육/육아
                </CategoryBtn>
              </CategoryDiv>
            </Company>
          </FirstDiv>
          <SecondDiv>
            <Company>
              <span>Card </span>
              <BtnDiv>
                {otherCard.map((other, index) => (
                  <CardExample key={index}>{other.otherName}</CardExample>
                ))}
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
                  {card.byCategoryList && card.byCategoryList.length > 0 ? (
                    <CardEvent>
                      {card.byCategoryList.some(
                        (category) => category.trim() === "전체"
                      )
                        ? "All Categories"
                        : card.byCategoryList.join(" | ")}
                    </CardEvent>
                  ) : (
                    <CardEvent>All Categories</CardEvent>
                  )}
                  <BenefitDiv>
                    {card.benefitList && card.benefitList.length > 0 ? (
                      card.benefitList
                        .slice(0, 3)
                        .map((benefit, idx) => (
                          <Benefit key={idx}>{benefit}</Benefit>
                        ))
                    ) : (
                      <Benefit>기본 By:Card</Benefit>
                    )}
                  </BenefitDiv>
                  <ConditionDiv>
                    <p>최소한도 {card.byMinLimit}원</p>
                    <p>교통카드 {card.byIsTransport ? "가능" : "불가능"}</p>
                  </ConditionDiv>
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
