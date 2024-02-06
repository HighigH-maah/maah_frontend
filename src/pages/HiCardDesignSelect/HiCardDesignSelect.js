import styled from "styled-components";
import CardApplicationTerms from "../CardApplicationTerms/CardApplicationTerms";
import SimpleSlider from "./SimpleSlider";

const SelectDesign = styled.div`
  background: linear-gradient(180deg, #fffdfd 37.44%, #d7d7d7 100%);
  padding: 150px 0px 50px 0px;
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

  return (
    <>
      <SelectDesign>
        <MainTitle>Hi:Card 신청</MainTitle>
        <SubTitle>마음에 드는 디자인을 골라주세요</SubTitle>
        <CardList>
          <SimpleSlider></SimpleSlider>
        </CardList>
      </SelectDesign>
      <ModalWrap id="cardApplicationTerms">
        <CardApplicationTerms></CardApplicationTerms>
      </ModalWrap>
    </>
  );
}

export default HiCardDesignSelect;
