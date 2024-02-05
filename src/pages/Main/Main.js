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

function Main(props) {
  return (
    <Mainback>
      <BackImage>
        <TopSection></TopSection>
        <FirstSection></FirstSection>
        <AboutMaahContent></AboutMaahContent>
        <ThirdSection></ThirdSection>
        <FourthSection></FourthSection>
      </BackImage>
    </Mainback>
  );
}

export default Main;
