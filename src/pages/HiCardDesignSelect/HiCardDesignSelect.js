import styled from "styled-components";
import CardApplicationTerms from "../CardApplicationTerms/CardApplicationTerms";
import CardSlider from "../../components/HiCardDesignSelect/CardSlider";
import HeaderLogoutBtn from "../../components/Header/HeaderLogoutBtn";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";

const SelectDesign = styled.div`
  background: linear-gradient(180deg, #fffdfd 37.44%, #d7d7d7 100%);
  padding: 150px 0px 145px 0px;
  text-align: center;
`;

const MainTitle = styled.div`
  font-size: 60px;
  font-weight: bold;
`;

const SubTitle = styled.div`
  font-size: 40px;
  font-weight: bold;
`;

const CardList = styled.div`
  margin-top: 50px;
`;

const ModalWrap = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  visibility: hidden;
`;

function HiCardDesignSelect() {
  const [card, setCard] = useState(0);

  return (
    <>
      <HeaderLogoutBtn></HeaderLogoutBtn>
      <SelectDesign>
        <MainTitle>Hi:Card 신청</MainTitle>
        <SubTitle>마음에 드는 디자인을 골라주세요</SubTitle>
        <CardList>
          <CardSlider setCard={setCard}></CardSlider>
        </CardList>
      </SelectDesign>
      <Footer></Footer>

      <ModalWrap id="cardApplicationTerms">
        <CardApplicationTerms card={card} type="hi"></CardApplicationTerms>
      </ModalWrap>
    </>
  );
}

export default HiCardDesignSelect;
