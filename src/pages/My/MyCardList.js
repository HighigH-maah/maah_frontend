import React from "react";
import HeaderLogoutBtn from "../../components/Header/HeaderLogoutBtn";
import { BackImage, Mainback } from "../../components/MainStyle/MainComponent";
import {
  Main,
  MyCardListBySection,
  MyCardListDiv,
  MyCardListHiSection,
} from "../../components/My/MyCardList";
import Footer from "../../components/Footer/Footer";
import "../../assets/css/style.css";

function MyCardList(props) {
  return (
    <MyCardListDiv>
      <Mainback>
        <BackImage>
          <HeaderLogoutBtn></HeaderLogoutBtn>
          <Main>
            <MyCardListHiSection></MyCardListHiSection>
            <MyCardListBySection></MyCardListBySection>
            <Footer position="relative" top="-20rem"></Footer>
          </Main>
        </BackImage>
      </Mainback>
    </MyCardListDiv>
  );
}

export default MyCardList;
