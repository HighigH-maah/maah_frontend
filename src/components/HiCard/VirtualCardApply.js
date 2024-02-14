import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
//import close from "../../assets/images/close.png";

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
    font-size: 2rem;
    font-weight: 600;
    line-height: 0;
    color: #000000;
    font-family: M PLUS 1, 'Source Sans Pro';
    white-space: nowrap;
    flex-shrink: 0;
  }
`;

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
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.2125;
  color: #000000;
  font-family: M PLUS 1, "Source Sans Pro";
  white-space: nowrap;
`;

const Box2 = styled.div`
  width: 100%;
  height: 7rem;
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

const TermBox = styled.div`
  margin-right: 2rem;
  width: 50rem;
  height: 5rem;
  box-shadow: inset 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  background-color: #f5f5f5;
  border-radius: 2rem;
  font-size: 2.5rem;
  color: #808080;

  .checkbox1 {
    position: relative;
    cursor: pointer;
    transform: scale(2);
    left: 45rem;
    bottom: 4.5rem;
  }

  .checkbox2 {
    position: relative;
    cursor: pointer;
    transform: scale(2);
    left: 54em;
    bottom: 4.5rem;
  }
`;

const TermContext = styled.p`
  margin: 1.8rem;
  font-size: 1.5rem;
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
  height: 4.5rem;
  font-size: 1.5rem;
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
  font-size: 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50rem;
  height: 4.5rem;
  border-radius: 2rem;
  background-color: #000000;
  color: #ffffff;
`;

const EleName = styled.span``;

function VirtualCardApply(props) {
  const [modal, setModal] = useState(false);

  useEffect(() => {
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

  if (modal) {
    return (
      <VirtualCardApplyDiv>
        <Modal2></Modal2>
      </VirtualCardApplyDiv>
    );
  } else {
    return (
      <VirtualCardApplyDiv>
        <Modal1 setModal={setModal}></Modal1>
      </VirtualCardApplyDiv>
    );
  }
}

//만들어진 가상카드번호가 나온당
function Modal2() {
  return (
    <>
      <div>123</div>
    </>
  );
}

function Modal1({ setModal }) {
  const [isTermChecked1, setTermChecked1] = useState(false);
  const [isTermChecked2, setTermChecked2] = useState(false);

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
    // 본인 인증에
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
            url: "/getCert.do",
            data: { imp_uid: rsp.imp_uid, memberId: "user3" },
          })
            .then((res) => {
              console.log(res.data);
              setModal(true);
            })
            .catch((err) => {
              console.log(err);
              console.log("실패 실패 실패 실패 실패 실패");
            });
        }
      }
    );
  };

  return (
    <>
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
    </>
  );
}

export default VirtualCardApply;
