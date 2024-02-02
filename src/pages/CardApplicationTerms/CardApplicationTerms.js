import styled from "styled-components";
import close from "../../assets/images/close.png";

const ModalBody = styled.div`
  background-color: white;
  position: absolute;
  top: calc(50% - 400px);
  left: calc(50% - 450px);
  width: 800px;
  height: 700px;
  padding: 50px;
  border-radius: 20px;
`;

const ModalClose = styled.img`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

const ModalTitle = styled.div`
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const ModalSubTitle = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin: 30px 0px 10px 0px;
`;

const ApplicationTermContent = styled.div`
  font-size: 20px;
  height: 150px;
  overflow-y: auto;
  padding: 10px;
`;

const ApplicationTerm = styled.div`
  display: flex;
  font-size: 20px;
  padding: 15px 40px 15px 40px;
  margin: 20px 0 20px 0;
  border-radius: 40px;
  background-color: #efefef;
  justify-content: space-between;

  & > input {
    width: 22.67px;
  }
`;

const ApplicationButton = styled.div`
  text-align: center;

  & > button {
    font-size: 20px;
    padding: 15px 40px 15px 40px;
    border: 0;
    border-radius: 30px;
    background-color: black;
    color: white;
    cursor: pointer;
  }
`;

function CardApplicationTerms(props) {
  const closeModal = () => {
    let modal = document.getElementById("cardApplicationTerms");
    modal.style.visibility = "hidden";
  };

  return (
    <ModalBody>
      <ModalClose src={close} onClick={closeModal}></ModalClose>
      <div>
        <ModalTitle>약관 및 주요 안내사항</ModalTitle>
        <div>
          <ModalSubTitle>[필수] 약관 및 주요 안내사항 동의</ModalSubTitle>
          <ApplicationTermContent>
            주 마하카드 사 / 약관에 관한 내용으로 채울 예정정 주 마하카드 사 /
            약관에 관한 내용으로 채울 예정정 주 마하카드 사 / 약관에 관한
            내용으로 채울 예정정 주 마하카드 사 / 약관에 관한 내용으로 채울
            예정정 주 마하카드 사 / 약관에 관한 내용으로 채울 예정정 주 마하카드
            사 / 약관에 관한 내용으로 채울 예정정 주 마하카드 사 / 약관에 관한
            내용으로 채울 예정정 주 마하카드 사 / 약관에 관한 내용으로 채울
            예정정 주 마하카드 사 / 약관에 관한 내용으로 채울 예정정 주 마하카드
            사 / 약관에 관한 내용으로 채울 예정정 주 마하카드 사 / 약관에 관한
            내용으로 채울 예정정 주 마하카드 사 / 약관에 관한 내용으로 채울
            예정정 주 마하카드 사 / 약관에 관한 내용으로 채울 예정정 주 마하카드
            사 / 약관에 관한 내용으로 채울 예정정 주 마하카드 사 / 약관에 관한
            내용으로 채울 예정정 주 마하카드 사 / 약관에 관한 내용으로 채울
            예정정 주 마하카드 사 / 약관에 관한 내용으로 채울 예정정 주 마하카드
            사 / 약관에 관한 내용으로 채울 예정정 주 마하카드 사 / 약관에 관한
            내용으로 채울 예정정 주 마하카드 사 / 약관에 관한 내용으로 채울
            예정정
          </ApplicationTermContent>
        </div>
      </div>
      <div>
        <ModalSubTitle>카드 신청 약관 동의</ModalSubTitle>
        <ApplicationTerm>
          <span>[필수] 약관 및 주요 안내사항 동의</span>
          <input type="checkbox"></input>
        </ApplicationTerm>
        <ApplicationTerm>
          <span>[필수] 개인(신용)정보 동의</span>
          <input type="checkbox"></input>
        </ApplicationTerm>
        <ApplicationTerm>
          <span>[선택] 개인(신용)정보 동의</span>
          <input type="checkbox"></input>
        </ApplicationTerm>
        <ApplicationTerm>
          <span>[선택] 카드 신청/이용을 위한 동의</span>
          <input type="checkbox"></input>
        </ApplicationTerm>
        <ApplicationButton>
          <button>확인</button>
        </ApplicationButton>
      </div>
    </ModalBody>
  );
}

export default CardApplicationTerms;
