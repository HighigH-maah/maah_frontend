import React from 'react';
import styled from "styled-components";

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

function CardApplicationTerm({ term }) {
  console.log({ term });
  switch({ term }.term ) {
    case 1:
      return (
        <div>
          <ModalSubTitle>[필수] 약관 및 주요 안내사항 동의</ModalSubTitle>
          <ApplicationTermContent>
            [필수] 약관 및 주요 안내사항 동의
            [필수] 약관 및 주요 안내사항 동의
            [필수] 약관 및 주요 안내사항 동의
            [필수] 약관 및 주요 안내사항 동의
            [필수] 약관 및 주요 안내사항 동의
            [필수] 약관 및 주요 안내사항 동의
            [필수] 약관 및 주요 안내사항 동의
            [필수] 약관 및 주요 안내사항 동의
            [필수] 약관 및 주요 안내사항 동의
          </ApplicationTermContent>
        </div>
      );
    case 2:
      return (
        <div>
          <ModalSubTitle>[필수] 개인(신용)정보 동의</ModalSubTitle>
          <ApplicationTermContent>
            [필수] 개인(신용)정보 동의
            [필수] 개인(신용)정보 동의
            [필수] 개인(신용)정보 동의
            [필수] 개인(신용)정보 동의
            [필수] 개인(신용)정보 동의
            [필수] 개인(신용)정보 동의
            [필수] 개인(신용)정보 동의
            [필수] 개인(신용)정보 동의
            [필수] 개인(신용)정보 동의
            [필수] 개인(신용)정보 동의
          </ApplicationTermContent>
        </div>
      );
    case 3:
      return (
        <div>
          <ModalSubTitle>[선택] 개인(신용)정보 동의</ModalSubTitle>
          <ApplicationTermContent>
           [선택] 개인(신용)정보 동의
           [선택] 개인(신용)정보 동의
           [선택] 개인(신용)정보 동의
           [선택] 개인(신용)정보 동의
           [선택] 개인(신용)정보 동의
           [선택] 개인(신용)정보 동의
           [선택] 개인(신용)정보 동의
           [선택] 개인(신용)정보 동의
           [선택] 개인(신용)정보 동의
          </ApplicationTermContent>
        </div>
      );
    case 4:
      return (
        <div>
          <ModalSubTitle>[선택] 카드 신청/이용을 위한 동의</ModalSubTitle>
          <ApplicationTermContent>
            [선택] 카드 신청/이용을 위한 동의
            [선택] 카드 신청/이용을 위한 동의
            [선택] 카드 신청/이용을 위한 동의
            [선택] 카드 신청/이용을 위한 동의
            [선택] 카드 신청/이용을 위한 동의
            [선택] 카드 신청/이용을 위한 동의
            [선택] 카드 신청/이용을 위한 동의
            [선택] 카드 신청/이용을 위한 동의
            [선택] 카드 신청/이용을 위한 동의
            [선택] 카드 신청/이용을 위한 동의
          </ApplicationTermContent>
        </div>
      );
    default:
      return (
        <></>
      );
  }
}

export default CardApplicationTerm;