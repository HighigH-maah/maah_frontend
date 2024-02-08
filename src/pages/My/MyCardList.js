import React from "react";
import HeaderLogoutBtn from "../../components/Header/HeaderLogoutBtn";
import { BackImage, Mainback } from "../../components/Main/MainComponent";
import {
  Main,
  MyCardListBySection,
  MyCardListDiv,
  MyCardListHiSection,
} from "../../components/My/MyCardList";
import Footer from "../../components/Footer/Footer";

function MyCardList(props) {
  return (
    <MyCardListDiv>
      <Mainback>
        <BackImage>
          <HeaderLogoutBtn></HeaderLogoutBtn>
          <Main>
            <MyCardListHiSection></MyCardListHiSection>
            <MyCardListBySection></MyCardListBySection>
          </Main>
          <Footer position="relative" top="66.2rem"></Footer>
        </BackImage>
      </Mainback>
    </MyCardListDiv>
  );
}

export default MyCardList;
