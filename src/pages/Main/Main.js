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
} from "../../components/Main/MainComponent";
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
      <Footer position="relative"></Footer>
    </Mainback>
  );
}

export default Main;
