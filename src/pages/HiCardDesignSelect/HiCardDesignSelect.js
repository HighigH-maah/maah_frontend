import styled from 'styled-components';
import './hicarddesignselect.css';
import blackVelvet from '../../assets/images/Black_velvet.png';
import whiteVelvet from '../../assets/images/White_velvet.png';

const SelectDesign = styled.div`
  background: linear-gradient(180deg, #fffdfd 37.44%, #d7d7d7 100%);
  padding: 200px 0px 200px 0px;
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
  margin-top: 30px;
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
  &:hover {
    transform: scale(1.12);
    transition: all 0.2s linear;
  }
`;

const CardName = styled.div`
  font-size: 25px;
  font-family: 'Iceland', sans-serif;
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
        </CardDesign>
        <CardDesign>
        <CardImageDiv>
          <CardImage src={whiteVelvet}></CardImage>
        </CardImageDiv>
          <CardName>White Velvet</CardName>
        </CardDesign>
      </CardList>
    </SelectDesign>
  );
}

export default HiCardDesignSelect;
