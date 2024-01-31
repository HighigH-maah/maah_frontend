import React from "react";
import styled from "styled-components";

const SignUp = styled.div`
  background: linear-gradient(180deg, #fffdfd 37.44%, #d7d7d7 100%);
  padding: 200px 0px 200px 0px;
  font-family: "M PLUS 1", sans-serif;
  text-align: center;
`;

const MainTitle = styled.div`
  margin: 0rem 0rem 5rem 0rem;
  font-size: 3rem;
  font-weight: 600;
  line-height: 1.5;
  color: #000000;
  font-family: M PLUS 1, "Source Sans Pro";
  white-space: nowrap;
  flex-shrink: 0;
`;

const EleBox = styled.div`
  margin: 0rem 0.004rem 3.4rem 0rem;
  width: calc(100% - 0.004rem);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: center;
`;

const Box1 = styled.p`
  margin-bottom: 1.8rem;
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.2125;
  color: #000000;
  font-family: M PLUS 1, "Source Sans Pro";
  white-space: nowrap;
  display: flex;
  align-items: baseline;
  flex-shrink: 0;
`;

const Box2 = styled.div`
  width: 520px;
`;

const EleName = styled.span``;

const Req = styled.span`
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.2125;
  color: #d70000;
  font-family: M PLUS 1, "Source Sans Pro";
`;

const InputBox = styled.input`
  width: 32rem;
  height: 7rem;
  box-shadow: inset 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  background-color: #f5f5f5;
  border-radius: 2rem;
  font-size: 3rem;
`;

function SignUp2(props) {
  return (
    <SignUp>
      <MainTitle>회원가입 기입 사항</MainTitle>
      <EleBox>
        <Box2>
          <Box1>
            <EleName>아이디</EleName>
            <Req>*</Req>
          </Box1>
          <InputBox></InputBox>
        </Box2>
      </EleBox>
    </SignUp>
  );
}

export default SignUp2;
