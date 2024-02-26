import React from "react";
import "../../assets/css/style.css";
import {
  Mainback,
  BackImage,
  AboutMaahContent,
  FirstSection,
  ThirdSection,
  FourthSection,
  TopSection,
} from "../../components/MainStyle/MainComponent";
import HeaderLogoutBtn from "../../components/Header/HeaderLogoutBtn";
import Footer from "../../components/Footer/Footer";

function Main(props) {
  return (
    <Mainback>
      <BackImage>
        <HeaderLogoutBtn></HeaderLogoutBtn>
        <TopSection></TopSection>
        <FirstSection></FirstSection>
        <AboutMaahContent></AboutMaahContent>
        <ThirdSection></ThirdSection>
        <FourthSection></FourthSection>
      </BackImage>
      <Footer position="relative" top="42.8rem"></Footer>
    </Mainback>
  );
}

export default Main;
