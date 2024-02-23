import React from "react";
import HeaderLogoutBtn from "../../components/Header/HeaderLogoutBtn";
import { Mainback } from "../../components/MainStyle/MainComponent";
import {
  ListBackImage,
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
        <ListBackImage>
          <HeaderLogoutBtn></HeaderLogoutBtn>
          <Main>
            <MyCardListHiSection></MyCardListHiSection>
            <MyCardListBySection></MyCardListBySection>
          </Main>
          <Footer></Footer>
        </ListBackImage>
      </Mainback>
    </MyCardListDiv>
  );
}

export default MyCardList;
