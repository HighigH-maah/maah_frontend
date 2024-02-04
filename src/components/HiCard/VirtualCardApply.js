import React from "react";
import styled from "styled-components";

const VirtualCardApplyDiv = styled.div`
box-sizing: border-box;
    padding: 5rem 3rem 5rem 3rem;
    width: 1000px;
    align-items: center;
    display: flex;
    flex-direction: column;
    box-shadow: inset 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25));
    background: linear-gradient(180deg, #ffffff -0%, #ffffff 100%);
    border-radius: 2rem;
}
`;

function VirtualCardApply(props) {
  return (
    <VirtualCardApplyDiv>
      <p>가상 카드 발급신청</p>
      <p>서비스 이용약관</p>
    </VirtualCardApplyDiv>
  );
}

export default VirtualCardApply;
