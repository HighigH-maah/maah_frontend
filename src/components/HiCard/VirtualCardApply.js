import React, { useState } from "react";
import styled from "styled-components";
<<<<<<< Updated upstream
//import close from "../../assets/images/close.png";
=======
import close from "../../assets/images/close.png";
>>>>>>> Stashed changes

const VirtualCardApplyDiv = styled.div`
  //position: absolute;
  box-sizing: border-box;
  padding: 5rem 3rem 5rem 3rem;
  width: 1000px;
  align-items: center;
  display: flex;
  flex-direction: column;
  box-shadow: inset 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25));
  background: linear-gradient(180deg, #ffffff -0%, #ffffff 100%);
  border-radius: 2rem;

  .ModalTitle{
    margin-bottom: 5rem;
    text-align: center;
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 0;
    color: #000000;
    font-family: M PLUS 1, 'Source Sans Pro';
    white-space: nowrap;
    flex-shrink: 0;
  }
`;

<<<<<<< Updated upstream
// const ModalClose = styled.img`
//   position: absolute;
//   top: 20px;
//   right: 20px;
//   cursor: pointer;
// `;

const EleBox = styled.div`
  margin: 0rem 0rem 3rem 0rem;
  flex-shrink: 0;
  //align-items: center;
`;

const Box1 = styled.p`
  margin: 1rem 0rem;
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.2125;
  color: #000000;
  font-family: M PLUS 1, "Source Sans Pro";
  white-space: nowrap;
`;

const Box2 = styled.div`
  margin-bottom: 1rem;
  width: 100%;
  height: 7rem;
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

const TermBox = styled.div`
  margin-right: 2rem;
  width: 50rem;
  height: 7rem;
  box-shadow: inset 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  background-color: #f5f5f5;
  border-radius: 2rem;
  font-size: 2.5rem;
  color: #808080;

  .checkbox1 {
    position: relative;
    cursor: pointer;
    transform: scale(3);
    left: 45rem;
    bottom: 5.7rem;
  }

  .checkbox2 {
    position: relative;
    cursor: pointer;
    transform: scale(3);
    left: 54em;
    bottom: 5.7rem;
  }
`;

const TermContext = styled.p`
  margin: 2.3rem;
  font-size: 2rem;
  font-weight: 550;
  line-height: 1.2125;
  color: ${(props) => (props.isChecked ? "#000000" : "#808080")};
  font-family: M PLUS 1, "Source Sans Pro";
  white-space: nowrap;
  flex-shrink: 0;
`;

const TermCheckBtn = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 50rem;
  height: 5rem;
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.2;

  font-family: Inter, "Source Sans Pro";
  white-space: nowrap;
  color: ${(props) =>
    props.isChecked ? "#ffffff" : "#808080"}; // Change text color
  background-color: ${(props) =>
    props.isChecked ? "#000000" : "#ffffff"}; // Change background color
  border-radius: 2rem;
  flex-shrink: 0;

  &:hover {
    background-color: #000000;
    color: #ffffff;
  }

  span:checked + ${TermContext} {
    color: #000000;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50rem;
    height: 5rem;
    border-radius: 2rem;
  }
`;

const AuthCheckBtn = styled.button`
  margin-top: 10px;
  cursor: pointer;
  font-size: 2rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50rem;
  height: 5rem;
  border-radius: 2rem;
  background-color: #000000;
  color: #ffffff;
`;

const EleName = styled.span``;

function VirtualCardApply(props) {
  const [isTermChecked1, setTermChecked1] = useState(false);
  const [isTermChecked2, setTermChecked2] = useState(false);
  const [isAuthChecked, setAuthChecked] = useState(false); //본인인증

  const handleTermCheck1 = () => {
    setTermChecked1(!isTermChecked1);
    console.log("약관동의1 체크");
  };

  const handleTermCheck2 = () => {
    setTermChecked2(!isTermChecked2);
    console.log("약관동의2 체크");
  };

  const handleAllTermCheck = () => {
    const allChecked = !isTermChecked1 || !isTermChecked2;
    setTermChecked1(allChecked);
    setTermChecked2(allChecked);
    console.log("약관동의 전체 체크");
  };

  const handleAuthCheck = () => {
    // 본인 인증에 대한 로직을 여기에 추가합니다
    // 본인 인증이 완료되면 setAuthChecked(true)로 설정합니다
    setAuthChecked(true);
    console.log("본인인증 버튼 클릭");
=======
const ModalClose = styled.img`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

function VirtualCardApply(props) {
  const closeModal = () => {
    props.onClose();
>>>>>>> Stashed changes
  };

  return (
    <VirtualCardApplyDiv>
<<<<<<< Updated upstream
      {/* <ModalClose src={close}></ModalClose> */}
      <p className="ModalTitle">가상 카드 발급신청</p>

      <EleBox>
        <Box1>
          <EleName>서비스 이용약관 동의</EleName>
        </Box1>
        <Box2>
          <TermBox>
            <TermContext isChecked={isTermChecked1}>
              개인정보 필수적 수집 이용 동의서(필수)
            </TermContext>
            <input
              className="checkbox1"
              type="checkbox"
              checked={isTermChecked1}
              onChange={handleTermCheck1}
            ></input>
          </TermBox>
        </Box2>
        <Box2>
          <TermBox>
            <TermContext isChecked={isTermChecked2}>
              마하카드 해외온라인 안심결제 서비스(필수)
            </TermContext>
            <input
              className="checkbox2"
              type="checkbox"
              checked={isTermChecked2}
              onChange={handleTermCheck2}
            ></input>
          </TermBox>
        </Box2>
        <TermCheckBtn isChecked={isTermChecked1 && isTermChecked2}>
          <span onClick={handleAllTermCheck}>모두선택</span>
        </TermCheckBtn>
        {isTermChecked1 && isTermChecked2 && (
          <AuthCheckBtn onClick={handleAuthCheck}>본인인증</AuthCheckBtn>
        )}
      </EleBox>
=======
      <ModalClose src={close} onClick={closeModal}></ModalClose>
      <p>가상 카드 발급신청</p>
      <p>서비스 이용약관</p>
>>>>>>> Stashed changes
    </VirtualCardApplyDiv>
  );
}

export default VirtualCardApply;
