import React from "react";
import styled from "styled-components";
import cardImg from "./HICard.png";

const HiCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(180deg, #fffdfd 37.44%, #d7d7d7 100%);
  padding: 100px 0px;
  font-family: "M PLUS 1", sans-serif;
`;

const HiCardDetailOuterDiv = styled.div`
  box-sizing: border-box;
  padding: 5rem 10rem 5rem 10rem;
  width: 1500px;
  height: 700px;
  align-items: center;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #ffffff -0%, #f0f0f0 100%);
  border-radius: 1rem;
`;

const HiCardDetailInnerDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

const HiCardDetailLeft = styled.div`
  margin: 2rem 5rem 2rem 5rem;
  box-sizing: border-box;
  padding: 0rem 3rem 0rem 3rem;
  height: 28rem;
  background-color: rgba(217, 217, 217, 0.200000003);
  border-radius: 50rem;

  img {
    width: 100%;
    height: 100%;
  }
`;

const HiCardDetailRight = styled.div`
  width: 36.5rem;
  height: 100%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
`;

const HiCardName = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;

  .name1 {
    margin-bottom: 1rem;
    font-size: 4rem;
    font-weight: 400;
    line-height: 0.5;
    color: #000000;
    font-family: Iceland, "Source Sans Pro";
    white-space: nowrap;
    flex-shrink: 0;
  }

  .name2 {
    display: flex;
    font-size: 1.5rem;
    font-weight: 400;
    color: #000000;
    font-family: Iceland, "Source Sans Pro";
    white-space: nowrap;
    flex-shrink: 0;
  }
`;

const HiCardDetails = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Box1 = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Mframe = styled.div`
  margin: 0rem 1.6rem 2rem 0rem;
  width: calc(100% - 1.6rem);
  display: flex;
  align-items: center;
  flex-shrink: 0;

  .mileageTitle {
    margin-right: 10.6rem;
    display: flex;
    font-size: 3.6rem;
    font-weight: 400;
    line-height: 0.6111111111;
    letter-spacing: -0.018rem;
    color: #000000;
    font-family: Iceland, 'Source Sans Pro';
    white-space: nowrap;
    flex-shrink: 0;
}
  }

  .mileage{
    display: flex;
    font-size: 3.6rem;
    font-weight: 400;
    line-height: 0.6111111111;
    letter-spacing: -0.018rem;
    color: #000000;
    font-family: Iceland, 'Source Sans Pro';
    white-space: nowrap;
    flex-shrink: 0;
}
  }
`;

const GFrame = styled.div`
margin-right: 0.8rem;
width: calc(100% - 0.8rem);
display: flex;
align-items: center;
flex-shrink: 0;
}

div {
  margin-right: 3rem;
  display: flex;
  font-size: 3.6rem;
  font-weight: 400;
  line-height: 0.6111111111;
  letter-spacing: -0.018rem;
  color: #000000;
  font-family: Iceland, 'Source Sans Pro';
  white-space: nowrap;
  flex-shrink: 0;
}

img {
  width: 11rem;
  height: 8rem;
  object-fit: cover;
  vertical-align: top;
  flex-shrink: 0;
}
`;

function HiCard(props) {
  return (
    <HiCardDiv>
      <HiCardDetailOuterDiv>
        <HiCardDetailInnerDiv>
          <HiCardDetailLeft>
            <img src={cardImg} alt="하이카드 이미지"></img>
          </HiCardDetailLeft>
          <HiCardDetailRight>
            <HiCardName>
              <p className="name1">Hi:Card</p>
              <p className="name2">하이카드</p>
            </HiCardName>
            {/* <HiCardDetails>
              <Box1>
                <Mframe>
                  <div className="mileageTitle">Hi:Mileage</div>
                  <div className="mileage">4500M</div>
                </Mframe>
                <GFrame>
                  <div>Hi:Credit Grade</div>
                  <img src="" alt="하이카드 등급 이미지"></img>
                </GFrame>
              </Box1>
            </HiCardDetails> */}
          </HiCardDetailRight>
        </HiCardDetailInnerDiv>
      </HiCardDetailOuterDiv>
    </HiCardDiv>
  );
}

export default HiCard;
