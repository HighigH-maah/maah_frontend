import styled from 'styled-components';
import './hicarddesignselect.css';
import blackVelvet from '../../assets/images/Black_velvet.png';
import whiteVelvet from '../../assets/images/White_velvet.png';
import blackBack from '../../assets/images/black-back.png';
import whiteBack from '../../assets/images/white-back.png';
import reverse from '../../assets/images/reverse.png';
import { useState } from 'react';

const SelectDesign = styled.div`
  background: linear-gradient(180deg, #fffdfd 37.44%, #d7d7d7 100%);
  padding: 150px 0px 50px 0px;
  font-family: 'M PLUS 1', sans-serif;
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

const CardDesign = styled.div`
  display: inline-block;
  width: 300px;
`;

const CardImageDiv = styled.div`
  height: 325px;
`;

const CardImage = styled.img`
  width: 200px;
  height: 300px;
  transition: all 0.15s linear;
  transform: scale(1);
  cursor: pointer;
  &:hover {
    transform: scale(1.12) !important;
    transform-origin: bottom;
  }
`;

const CardName = styled.div`
  font-size: 25px;
  font-family: 'Iceland', sans-serif;
`;

const ReverseButton = styled.button`
  position: relative;
  width: 42px;
  height: 42px;
  border-radius: 21px;
  border: 0;
  cursor: pointer;
  background: linear-gradient(0deg, rgba(128, 128, 128, 0.5), rgba(200, 200, 200, 0.5) 45%, rgba(128, 128, 128, 0.5));
  bottom: 70px;
`;

const ReverseIcon = styled.img`
  margin-top: 5px;
`;

function HiCardDesignSelect() {

  const [black, setBlack] = useState(true);
  const [white, setWhite] = useState(true);

  const reverseCard = (prop) => {
    if(prop === "black") {
      let card = document.getElementById('blackValvet');
      card.style.transform = 'rotateY(90deg)';
      setTimeout(function() {
        card.style.transform = 'rotateY(0deg)';
        setBlack(!black);
      }, 100);
    } else if(prop === 'white') {
      let card = document.getElementById('whiteValvet');
      card.style.transform = 'rotateY(90deg)';
      setTimeout(function() {
        card.style.transform = 'rotateY(0deg)';
        setWhite(!white);
      }, 100);
    }
  }

  const applicationTerm = (prop) => {
    console.log(prop);
  }
  
  return (
    <SelectDesign>
      <MainTitle>Hi:Card 신청</MainTitle>
      <SubTitle>마음에 드는 디자인을 골라주세요</SubTitle>
      <CardList>
        <CardDesign>
          <CardImageDiv>
            <CardImage id='blackValvet' onClick={() => {applicationTerm('black')}} src={black ? blackVelvet : blackBack}></CardImage>
          </CardImageDiv>
          <CardName>Black Velvet</CardName>
          <ReverseButton type='button' onClick={() => {reverseCard('black')}}><ReverseIcon src={reverse}></ReverseIcon></ReverseButton>  
        </CardDesign>
        <CardDesign>
          <CardImageDiv>
            <CardImage id='whiteValvet' onClick={() => {applicationTerm('white')}} src={white ? whiteVelvet : whiteBack}></CardImage>
          </CardImageDiv>
          <CardName>White Velvet</CardName>
          <ReverseButton type='button' onClick={() => {reverseCard('white')}}><ReverseIcon src={reverse}></ReverseIcon></ReverseButton>
        </CardDesign>
      </CardList>
    </SelectDesign>
  );
}

export default HiCardDesignSelect;