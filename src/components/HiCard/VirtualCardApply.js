import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../../assets/images/maah_half_big_logo.png";

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

const VirtualCardNumViewDiv = styled.div`
    box-sizing: border-box;
    padding: 2rem 2rem 2rem 2rem;
    width: 700px;
    display: flex;
    justify-content: center;
    box-shadow: inset 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25));
    background: linear-gradient(148.33deg, #f8f8f8 39.98%, #dedede 83.01%);
    border-radius: 2rem;

    img{
      position: relative;
      right: 50px;
    }

    .box1{
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
        justify-content: space-evenly;
    }

    p{
        text-align: center;
        font-size: 1.5rem;
        font-weight: 600;
        color: #000000;
        font-family: M PLUS 1, 'Source Sans Pro';
        white-space: nowrap;
        flex-shrink: 0;
    }

    .box2{
        margin-top: 2rem;
        width: 100%;
        align-items: center;
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
    }

    .cardInfo{
      margin-bottom: 2rem;
      width: 100%;
      display: flex;
      align-items: flex-start;
      flex-shrink: 0;
      justify-content: space-between;
    }

    .title{
        margin-right: 9.9rem;
        font-size: 1.5rem;
        font-weight: 600;
        line-height: 1.2;
        color: #5b5b5b;
        font-family: M PLUS 1, 'Source Sans Pro';
        white-space: nowrap;
        flex-shrink: 0;
    }

    .num{
        font-size: 1.5rem;
        font-weight: 600;
        line-height: 0.97;
        color: #5b5b5b;
        font-family: M PLUS 1, 'Source Sans Pro';
        white-space: nowrap;
        flex-shrink: 0;
    }
`;

const EleName = styled.span``;

function VirtualCardApply() {
  const [modal, setModal] = useState(false);
  const [hiCardVirtualCardInfo, setHiCardVirtualCardInfo] = useState([]);

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
      <VirtualCardNumViewDiv>
        <Modal2 hiCardVirtualCardInfo={hiCardVirtualCardInfo}></Modal2>
      </VirtualCardNumViewDiv>
    );
  } else {
    return (
      <VirtualCardApplyDiv>
        <Modal1
          setModal={setModal}
          setHiCardVirtualCardInfo={setHiCardVirtualCardInfo}
        ></Modal1>
      </VirtualCardApplyDiv>
    );
  }
}

//만들어진 가상카드번호가 나온당
function Modal2({ hiCardVirtualCardInfo }) {
  return (
    <>
      <img src={logo} alt="마하로고"></img>
      <div className="box1">
        <p>가상 카드 번호조회</p>
        <div className="box2">
          <div className="cardInfo">
            <p className="title">카드번호</p>
            <p className="num">{hiCardVirtualCardInfo.tempHiNumber}</p>
          </div>
          <div className="cardInfo">
            <p className="title">cvc</p>
            <p className="num">{hiCardVirtualCardInfo.tempHiCvc}</p>
          </div>
          <div className="cardInfo">
            <p className="title">유효기간</p>
            <p className="num">
              {hiCardVirtualCardInfo.tempHiExpdate.slice(0, 10)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function Modal1({ setModal, setHiCardVirtualCardInfo }) {
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
            url: "/getCert.do",
            data: { imp_uid: rsp.imp_uid, memberId: "user3" },
          })
            .then((res) => {
              console.log(res.data);
              const certInfo = res.data;
              //본인인증 성공하면 가상카드번호 발급
              console.log(certInfo.certName);
              console.log(certInfo.memberName);
              if (certInfo.certName === certInfo.memberName) {
                axios({
                  method: "post",
                  url: "/getTempHiCard.do",
                  data: { memberId: "user3" },
                })
                  .then((res) => {
                    console.log(res.data);
                    console.log("가상카드발급 성공");
                    setHiCardVirtualCardInfo(res.data);
                    setModal(true);
                  })
                  .catch((err) => {
                    console.log(err);
                    console.log("가상카드발급 실패");
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
