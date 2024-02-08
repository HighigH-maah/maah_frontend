import styled from "styled-components";
import close from "../../assets/images/close.png";
import CardApplicationTerm from "../../components/CardApplicationTerms/CardApplicationTerm";
import { useState } from "react";
import { Link } from "react-router-dom";

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

function CardApplicationTerms() {
  const [term, setTerm] = useState(1);

  const closeModal = () => {
    let modal = document.getElementById("cardApplicationTerms");
    let terms = document.getElementsByClassName("application-term");
    modal.style.visibility = "hidden";
    setTerm(1);
    for(let i = 0; i < terms.length; i++) {
      terms[i].checked = false;
    }
  };

  return (
    <ModalBody>
      <ModalClose src={close} onClick={closeModal}></ModalClose>
      <div>
        <ModalTitle>약관 및 주요 안내사항</ModalTitle>
        <CardApplicationTerm term={ term } ></CardApplicationTerm>
      </div>
      <div>
        <ModalSubTitle>카드 신청 약관 동의</ModalSubTitle>
        <ApplicationTerm>
          <span>[필수] 약관 및 주요 안내사항 동의</span>
          <input className="application-term" type="checkbox" onClick={() => {
            setTerm(1);
          }}></input>
        </ApplicationTerm>
        <ApplicationTerm>
          <span>[필수] 개인(신용)정보 동의</span>
          <input className="application-term" type="checkbox" onClick={() => {
            setTerm(2);
          }}></input>
        </ApplicationTerm>
        <ApplicationTerm>
          <span>[선택] 개인(신용)정보 동의</span>
          <input className="application-term" type="checkbox" onClick={() => {
            setTerm(3);
          }}></input>
        </ApplicationTerm>
        <ApplicationTerm>
          <span>[선택] 카드 신청/이용을 위한 동의</span>
          <input className="application-term" type="checkbox" onClick={() => {
            setTerm(4);
          }}></input>
        </ApplicationTerm>
        <ApplicationButton>
          <button><Link to="/cardApplication">확인</Link></button>
        </ApplicationButton>
      </div>
    </ModalBody>
  );
}

export default CardApplicationTerms;
