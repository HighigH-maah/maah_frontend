import styled from 'styled-components';
import './hicarddesignselect.css';
import blackVelvet from '../../assets/images/Black_velvet.png';
import whiteVelvet from '../../assets/images/White_velvet.png';
import reverse from '../../assets/images/reverse.png';

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
  &:hover {
    transform: scale(1.12);
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
  return (
    <SelectDesign>
      <MainTitle>Hi:Card 신청</MainTitle>
      <SubTitle>마음에 드는 디자인을 골라주세요</SubTitle>
      <CardList>
        <CardDesign>
          <CardImageDiv>
            <CardImage src={blackVelvet}></CardImage>
          </CardImageDiv>
          <CardName>Black Velvet</CardName>
          <ReverseButton><ReverseIcon src={reverse}></ReverseIcon></ReverseButton>  
        </CardDesign>
        <CardDesign>
        <CardImageDiv>
          <CardImage src={whiteVelvet}></CardImage>
        </CardImageDiv>
          <CardName>White Velvet</CardName>
          <ReverseButton><ReverseIcon src={reverse}></ReverseIcon></ReverseButton>
        </CardDesign>
      </CardList>
    </SelectDesign>
  );
}

export default HiCardDesignSelect;
