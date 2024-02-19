import styled from 'styled-components';
import { useState } from 'react';

const ModalBody = styled.div`
  position: relative;
  height: 320px;
  width: 720px;
  padding: 40px;
  border-radius: 30px;
  background-color: #fff;
  text-align: center;
  margin: auto;
  top: calc(50vh - 200px);
`;

const ModalTitle = styled.div`
  font-size: 40px;
  font-weight: bold;
  padding: 20px;
  margin-bottom: 20px;
`;

const ModalContent = styled.div`
  font-size: 20px;
  font-weight: 600;
  width: 500px;
  margin: auto;
  text-align: left;

  & > input {
    font-size: 20px;
    font-weight: 600;
    padding: 20px 0 10px 0;
    margin-bottom: 10px;
    width: 100%;
    border-bottom: 2px solid #000;
  }

  & > span {
    display: block;
    font-size: 15px;
    color: red;
  }

  & > button {
    width: 100%;
    padding: 20px;
    margin-top: 25px;
    border-radius: 30px;
    border: 0;
    background-color: #000;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
  }
`;

function CardLimit({setProcess, setCardApply, cardApply}) {
  const [limitAmount, setLimitAmount] = useState(0);

  const gotoNext = () => {
    setCardApply({
      ...cardApply,
      cardApplyLimitAmount: limitAmount
    });
    if(limitAmount > 0) {
      setProcess(5);
    } else {
      alert("한도를 올바르게 입력해주세요");
    }
  };

  const changeHandler = (e) => {
    setLimitAmount(e.target.value);
  }

    return (
    <ModalBody>
        <ModalTitle>계좌 인증 완료</ModalTitle>
        <ModalContent>
        <div>카드 이용 한도를 입력해주세요</div>
        <input type='number' placeholder='최소 200만원 / 최대 500만원' onChange={changeHandler}></input>
        <span>실제 한도는 심사 결과에 따라 달라질 수 있습니다</span>
        <button onClick={gotoNext}>확인</button>
        </ModalContent>
    </ModalBody>
    );
}

export default CardLimit;