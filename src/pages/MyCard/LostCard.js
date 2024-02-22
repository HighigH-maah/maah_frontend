import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HeaderLogoutBtn from "../../components/Header/HeaderLogoutBtn";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import LostCardModal from "./LostCardModal";
import close from "../../assets/images/close.png";
import MemberLoad from "../../components/Utils/SessionStorage";
import { ModalBackground } from "../ByCard/ByCard";
import { ModalClose } from "../MyHiCard/HiCard";

const LostCardDiv = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  align-items: center;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #fffdfd 37.44%, #d7d7d7 100%);
`;

const Div = styled.div`
  box-sizing: border-box;
  padding: 8rem 4.9rem 16.9rem 6.3rem;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`;

const LostCardTitle = styled.p`
  margin: 0rem 0rem 4.4rem 0rem;
  text-align: center;
  font-size: 6rem;
  font-weight: 600;
  line-height: 1.2125;
  color: #000000;
  font-family: M PLUS 1, "Source Sans Pro";
  white-space: nowrap;
  flex-shrink: 0;
`;

const LostCardUnderTitle = styled.p`
  margin: 0rem 0rem 4.9rem 0rem;
  text-align: center;
  font-size: 4rem;
  font-weight: 600;
  line-height: 0.97;
  color: #000000;
  font-family: M PLUS 1, "Source Sans Pro";
  white-space: nowrap;
  flex-shrink: 0;
`;

const LostCardMiddleSection = styled.div`
  margin-bottom: 20rem;
  border-radius: 1.2rem;
  flex-shrink: 0;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  position: relative;
  top: 10rem;
`;

// const LostCardMiddleLeftSection = styled.div`
//   box-sizing: border-box;
//   padding: 2.9rem 4.3rem 3rem 0rem;
//   height: 100%;
//   display: flex;
//   align-items: center;
//   flex-shrink: 0;
// `;

const LostCardImageBox = styled.div`
  margin-right: 3rem;
  box-sizing: border-box;
  padding-bottom: 0.6rem;
  width: 20rem;
  height: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  border-radius: 1.2rem;
  flex-shrink: 0;
`;

const LostCardImage = styled.img`
  margin-bottom: 1rem;
  box-sizing: border-box;
  width: 100%;
  height: 30rem;
  overflow: hidden;
  position: relative;
  align-items: center;
  display: flex;
  flex-direction: column;
  border-radius: 1.2rem;
  flex-shrink: 0;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover,
  &:focus,
  &.selected {
    transform: scale(1.05);
  }
`;

const LostCardName = styled.div`
  margin-right: 0.1rem;
  text-align: center;
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 0.97;
  letter-spacing: -0.1rem;
  color: #000000;
  font-family: Iceland, "Source Sans Pro";
  white-space: nowrap;
  flex-shrink: 0;
`;

const LostCardBottomSection = styled.div`
  margin: 0rem 37.1rem 0rem 37rem;
  width: calc(100% - 74.1rem);
  height: 17.3rem;
  border-radius: 3rem;
  flex-shrink: 0;
`;

const IdentityCheckBox = styled.div`
  box-sizing: border-box;
  padding: 0 3.7rem;
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  border-radius: 3rem;
`;

const IdentityCheckText = styled.p`
  margin-bottom: 5.9rem;
  text-align: center;
  font-size: 4rem;
  font-weight: 600;
  line-height: 1.2125;
  color: #000000;
  font-family: M PLUS 1, "Source Sans Pro";
  white-space: nowrap;
  flex-shrink: 0;
`;

const IdentityCheckButton = styled.button`
  margin: 0rem 5.7rem 0rem 2.6rem;
  height: 6rem;
  width: 12rem;
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.2;
  color: #ffffff;
  font-family: Inter, "Source Sans Pro";
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  border-radius: 3rem;
  flex-shrink: 0;
  cursor: pointer;
`;

export const LostCardModalSet = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 0.5rem;
  z-index: 1000;
`;

function LostCard(props) {
  const [lostCardChooseList, setLostCardChooseList] = useState([]);
  const [selectedCard, setSelectedCard] = useState("");
  const [isLostCardModalOpen, setIsLostCardModalOpen] = useState(false);

  const closeLostCardModal = () => {
    setIsLostCardModalOpen(false);
    window.location.reload();
  };

  const getlostCardChooseList = () => {
    axios({
      url: process.env.REACT_APP_API_SERVER + "/getlostCardChooseList.do",
      method: "post",
      data: { memberId: MemberLoad() },
    })
      .then((res) => {
        //console.log(res.data);
        setLostCardChooseList(res.data);
      })
      .catch((err) => {
        //onsole.log(err);
      });
  };

  const handleAuthCheck = () => {
    // 본인 인증
    const { IMP } = window;
    IMP.init("imp72857613");

    IMP.certification(
      {
        pg: "MIIiasTest",
        merchant_uid: `mid_${new Date().getTime()}`,
      },
      function (rsp) {
        if (rsp.success) {
          console.log("success");
          console.log(rsp);

          axios({
            method: "post",
            url: process.env.REACT_APP_API_SERVER + "/getCert.do",
            data: { imp_uid: rsp.imp_uid, memberId: MemberLoad() },
          })
            .then((res) => {
              console.log(res.data);
              const certInfo = res.data;
              //본인인증 성공하면 분실신고 성공
              console.log(certInfo.certName);
              console.log(certInfo.memberName);
              if (certInfo.certName === certInfo.memberName) {
                // memberCardNumber를 이용하여 성공 시 실행할 로직을 작성합니다.
                axios({
                  method: process.env.REACT_APP_API_SERVER + "post",
                  url: "/reportLost.do",
                  data: {
                    memberId: MemberLoad(),
                    memberCardNumber: selectedCard.memberCardNumber,
                  },
                })
                  .then((res) => {
                    console.log(res.data);
                    console.log("분실신고 성공");
                    setIsLostCardModalOpen(true);
                  })
                  .catch((err) => {
                    console.log(err);
                    console.log("분실신고 실패");
                  });
              } else {
                console.log("본인인증 실패");
                alert("본인인증을 다시 해주세요.");
              }
            })
            .catch((err) => {
              console.log(err);
              console.log("실패 실패 실패 실패 실패 실패");
            });
        }
      }
    );
  };

  const handleImageClick = (selectedCard, index) => {
    console.log(
      index.target,
      "선택한 카드의 memberCardNumber:",
      selectedCard.memberCardNumber
    );
    let cardList = document.getElementsByClassName("paste-image-here-tG5");
    for (let i = 0; i < cardList.length; i++) {
      if (index.target === cardList[i]) {
        cardList[i].style.transform = "scale(1.05)";
        cardList[i].style.boxShadow = "0 0 60px rgba(0, 0, 0, 0.7)";
      } else {
        cardList[i].style.transform = "";
        cardList[i].style.boxShadow = "";
      }
    }
    // 여기서 memberCardNumber 값을 다른 함수나 API 호출 등에 사용할 수 있습니다.
    // 원하는 동작을 수행하세요.
    setSelectedCard(selectedCard);
  };

  useEffect(() => {
    getlostCardChooseList();
    const jquery = document.createElement("script");
    jquery.src = "http://code.jquery.com/jquery-1.12.4.min.js";
    const iamport = document.createElement("script");
    iamport.src = "http://cdn.iamport.kr/js/iamport.payment-1.1.8.js";
    document.head.appendChild(jquery);
    document.head.appendChild(iamport);
    return () => {
      document.head.removeChild(jquery);
      document.head.removeChild(iamport);
    };
  }, []);

  return (
    <LostCardDiv>
      <HeaderLogoutBtn></HeaderLogoutBtn>
      <Div>
        <LostCardTitle>카드 분실 신고</LostCardTitle>
        <LostCardUnderTitle>분실한 카드를 선택해주세요</LostCardUnderTitle>
        <LostCardMiddleSection>
          {Array.isArray(lostCardChooseList) &&
            lostCardChooseList.map((lostCardChooseList, index) => (
              <LostCardImageList
                key={index}
                lostCardChooseList={lostCardChooseList}
                handleImageClick={handleImageClick} // handleImageClick 함수를 전달합니다.
                index={index}
              />
            ))}
        </LostCardMiddleSection>
        <LostCardBottomSection>
          <IdentityCheckBox>
            <IdentityCheckText>본인인증을 진행해 주세요</IdentityCheckText>
            <IdentityCheckButton onClick={handleAuthCheck}>
              본인인증
            </IdentityCheckButton>
          </IdentityCheckBox>
        </LostCardBottomSection>
        {isLostCardModalOpen && (
          <ModalBackground>
            <LostCardModalSet>
              <ModalClose
                src={close}
                clicked={isLostCardModalOpen.toString()}
                onClick={closeLostCardModal}
              ></ModalClose>
              <LostCardModal selectedCard={selectedCard}></LostCardModal>
            </LostCardModalSet>
          </ModalBackground>
        )}
      </Div>
      <Footer position="relative"></Footer>
    </LostCardDiv>
  );
}

const LostCardImageList = ({ lostCardChooseList, handleImageClick, index }) => {
  const handleClick = (index) => {
    handleImageClick(lostCardChooseList, index);
  };

  return (
    <LostCardImageBox onClick={handleClick}>
      <LostCardImage
        className="paste-image-here-tG5"
        src={lostCardChooseList.cardImageFrontPath}
        alt="카드 이미지"
      ></LostCardImage>
      <LostCardName>{lostCardChooseList.memberCardNickname}</LostCardName>
    </LostCardImageBox>
  );
};

export default LostCard;
