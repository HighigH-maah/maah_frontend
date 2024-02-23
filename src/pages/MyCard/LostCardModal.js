import React from "react";
import "../../assets/css/style.css";
import styled from "styled-components";

const LostCardModalDiv = styled.div`
  width: 1000px;
  height: 800px;
  background: linear-gradient(180deg, #ffffff -0%, #ffffff 100%);
  border-radius: 2rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const LostCardCenterSection = styled.div`
  width: 31.4rem;
  height: 76.2rem;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const LostCardTop = styled.div`
  box-sizing: border-box;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`;

const LostCardTitle = styled.p`
  margin-bottom: 3rem;
  text-align: center;
  font-size: 3rem;
  font-weight: 600;
  line-height: 1.2125;
  color: #000000;
  font-family: M PLUS 1, "Source Sans Pro";
  white-space: nowrap;
  flex-shrink: 0;
`;

const LostCardSection = styled.div`
  box-sizing: border-box;
  padding-bottom: 1.1363rem;
  width: calc(100% - 0.3rem);
  align-items: center;
  display: flex;
  flex-direction: column;
  border-radius: 1.2rem;
  flex-shrink: 0;
`;

const LostCardImage = styled.img`
  margin-bottom: 1.5rem;
  box-sizing: border-box;

  height: 20rem;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 1.2rem;
  flex-shrink: 0;
`;

const LostCardName = styled.div`
  text-align: center;
  font-size: 2rem;
  font-weight: 400;
  line-height: 0.97;
  letter-spacing: -0.1rem;
  color: #000000;
  font-family: Iceland, "Source Sans Pro";
  white-space: nowrap;
  flex-shrink: 0;
`;

const LostCardInfoSection = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`;

const LostCardContent = styled.p`
  margin-bottom: 3rem;
  text-align: center;
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 0.97;
  letter-spacing: -0.16rem;
  color: #000000;
  font-family: M PLUS 1, "Source Sans Pro";
  white-space: nowrap;
  flex-shrink: 0;
`;

const LostCardTime = styled.p`
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  line-height: 0.97;
  letter-spacing: -0.1rem;
  color: #828282;
  font-family: M PLUS 1, "Source Sans Pro";
  white-space: nowrap;
  flex-shrink: 0;
`;

// const LostCardConfirmButton = styled.button`
//   margin: 0 4.65rem;
//   width: calc(100% - 9.3rem);
//   height: 6.5rem;
//   text-align: center;
//   font-size: 2rem;
//   font-weight: 600;
//   line-height: 1.2;
//   color: #ffffff;
//   font-family: Inter, "Source Sans Pro";
//   white-space: nowrap;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: #000000;
//   border-radius: 3rem;
//   flex-shrink: 0;
// `;

function LostCardModal({ selectedCard }) {
  const today = new Date();

  const formattedDate = `${today.getFullYear()}년 ${
    today.getMonth() + 1
  }월 ${today.getDate()}일`;

  return (
    <LostCardModalDiv>
      {/* <img class="item--Sxd" src="REPLACE_IMAGE:187:791" /> */}
      <LostCardCenterSection>
        <LostCardTop>
          <LostCardTitle>카드 분실 신고</LostCardTitle>
          <LostCardSection>
            <LostCardImage
              src={selectedCard.cardImageFrontPath}
              alt="카드 이미지"
            >
              {/* <div class="auto-group-varj-GTo">
                <img
                  class="paste-image-here-oid"
                  src="./assets/paste-image-here-ttu.png"
                />
                <div class="shape-vYM"></div>
                <p class="card-name-VE5">Card Name</p>
              </div>
              <div class="card-description-8nq">card description</div> */}
            </LostCardImage>
            <LostCardName>{selectedCard.memberCardNickname}</LostCardName>
          </LostCardSection>
        </LostCardTop>
        <LostCardInfoSection>
          <LostCardContent>정상적으로 정지 처리 되었습니다.</LostCardContent>
          <LostCardTime>{formattedDate} 기준</LostCardTime>
        </LostCardInfoSection>
        {/* <LostCardConfirmButton>확인</LostCardConfirmButton> */}
      </LostCardCenterSection>
    </LostCardModalDiv>
  );
}

export default LostCardModal;
