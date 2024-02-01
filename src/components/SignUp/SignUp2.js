import React, { useState } from "react";
import styled from "styled-components";

const SignUp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(180deg, #fffdfd 37.44%, #d7d7d7 100%);
  padding: 200px 0px 200px 0px;
  font-family: "M PLUS 1", sans-serif;
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
  align-items: center;
`;

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

const EleName = styled.span``;

const Req = styled.span`
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.2125;
  color: #d70000;
  font-family: M PLUS 1, "Source Sans Pro";
`;

const Box2 = styled.div`
  margin-bottom: 1rem;
  width: 100%;
  height: 7rem;
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

const InputBox = styled.input`
  margin-right: 2rem;
  width: 35rem;
  height: 7rem;
  box-shadow: inset 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  background-color: #f5f5f5;
  border-radius: 2rem;
  font-size: 3rem;
`;

const InputBox2 = styled.input`
  margin-right: 2rem;
  width: 50rem;
  height: 7rem;
  box-shadow: inset 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  background-color: #f5f5f5;
  border-radius: 2rem;
  font-size: 3rem;
`;

const DoubleCheckBtn = styled.button`
  width: 15rem;
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.2;
  color: #808080;
  font-family: Inter, "Source Sans Pro";
  white-space: nowrap;
  background-color: #ffffff;
  border-width: 5px;
  border-radius: 5rem;
  flex-shrink: 0;

  &:hover {
    background-color: #000000;
    color: #ffffff;
  }
`;

const AuthCheckBtn = styled.button`
  width: 15rem;
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.2;
  color: #808080;
  font-family: Inter, "Source Sans Pro";
  white-space: nowrap;
  background-color: #ffffff;
  border-width: 5px;
  border-radius: 5rem;
  flex-shrink: 0;

  &:hover {
    background-color: #000000;
    color: #ffffff;
  }
`;

const Notice = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.2125;
  color: #d70000;
  font-family: M PLUS 1, "Source Sans Pro";
  white-space: nowrap;
  flex-shrink: 0;
`;

const SuccessMessage = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.2125;
  color: #006400;
  font-family: M PLUS 1, "Source Sans Pro";
  white-space: nowrap;
  flex-shrink: 0;
`;

const SignUpBtn = styled.button`
  width: 52.5rem;
  height: 6.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.2;
  color: #ffffff;
  font-family: Inter, "Source Sans Pro";
  white-space: nowrap;
  background-color: #000000;
  border-radius: 3rem;
  flex-shrink: 0;
`;

const TermBox = styled.div`
  margin-right: 2rem;
  width: 45rem;
  height: 7rem;
  box-shadow: inset 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  background-color: #f5f5f5;
  border-radius: 2rem;
  font-size: 2.5rem;
  color: #808080;
`;

const TermContext = styled.p`
  margin: 2.3rem;
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.2125;
  color: #808080;
  font-family: M PLUS 1, "Source Sans Pro";
  white-space: nowrap;
  flex-shrink: 0;
`;

const TermCheckBtn = styled.button`
  width: 5rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.2;
  color: #808080;
  font-family: Inter, "Source Sans Pro";
  white-space: nowrap;
  background-color: #ffffff;
  border-width: 5px;
  border-radius: 5rem;
  flex-shrink: 0;

  &:hover {
    background-color: #000000;
    color: #ffffff;
  }
`;

function SignUp2(props) {
  const [isDuplicateChecked, setDuplicateChecked] = useState(false);
  const [isAuthChecked, setAuthChecked] = useState(false);

  const handleDuplicateCheck = () => {
    // 중복 확인에 대한 로직을 여기에 추가합니다
    // 예를 들어, API 호출 또는 일부 유효성 검사를 수행할 수 있습니다
    // 확인이 완료되면 setDuplicateChecked(true)로 설정합니다
    console.log("중복확인 버튼 클릭");
    setDuplicateChecked(true);
  };

  const handleAuthCheck = () => {
    // 본인 인증에 대한 로직을 여기에 추가합니다
    // 본인 인증이 완료되면 setAuthChecked(true)로 설정합니다
    setAuthChecked(true);
    console.log("본인인증 버튼 클릭");
  };

  const handleSignUp = () => {
    // 가입 프로세스에 대한 로직을 여기에 추가합니다
    // 중복 확인 및 본인 인증이 성공한 후 필요한 작업을 수행할 수 있습니다
    // 가입이 성공하면 다른 페이지로 이동하거나 성공 메시지를 표시할 수 있습니다
    console.log("가입 로직이 여기에 들어갑니다!");
  };

  return (
    <SignUp>
      <MainTitle>회원가입</MainTitle>

      <EleBox>
        <Box1>
          <EleName>아이디</EleName>
          <Req>*</Req>
        </Box1>
        <Box2>
          <InputBox></InputBox>
          <DoubleCheckBtn onClick={handleDuplicateCheck}>
            중복확인
          </DoubleCheckBtn>
        </Box2>
        <Notice>
          {isDuplicateChecked ? (
            <SuccessMessage>중복확인 완료!</SuccessMessage>
          ) : (
            <Notice>중복확인을 해주세요.</Notice>
          )}
        </Notice>
      </EleBox>

      <EleBox>
        <Box1>
          <EleName>비밀번호</EleName>
          <Req>*</Req>
        </Box1>
        <Box2>
          <InputBox2></InputBox2>
        </Box2>
      </EleBox>

      <EleBox>
        <Box1>
          <EleName>비밀번호 확인</EleName>
          <Req>*</Req>
        </Box1>
        <Box2>
          <InputBox2></InputBox2>
        </Box2>
        <Notice>동일한 비밀번호를 입력해주세요.</Notice>
      </EleBox>

      <EleBox>
        <Box1>
          <EleName>이름</EleName>
          <Req>*</Req>
        </Box1>
        <Box2>
          <InputBox></InputBox>
          <AuthCheckBtn onClick={handleAuthCheck}>본인인증</AuthCheckBtn>
        </Box2>
        <Notice>
          {isAuthChecked ? (
            <SuccessMessage>본인인증 완료!</SuccessMessage>
          ) : (
            <Notice>본명을 기입해주세요.</Notice>
          )}
        </Notice>
      </EleBox>

      <EleBox>
        <Box1>
          <EleName>생년월일</EleName>
          <Req>*</Req>
        </Box1>
        <Box2>
          <InputBox2></InputBox2>
        </Box2>
      </EleBox>

      <EleBox>
        <Box1>
          <EleName>전화번호</EleName>
          <Req>*</Req>
        </Box1>
        <Box2>
          <InputBox2></InputBox2>
        </Box2>
      </EleBox>

      <EleBox>
        <Box1>
          <EleName>이메일</EleName>
          <Req>*</Req>
        </Box1>
        <Box2>
          <InputBox2></InputBox2>
        </Box2>
      </EleBox>

      <EleBox>
        <Box1>
          <EleName>2차 비밀번호</EleName>
        </Box1>
        <Box2>
          <InputBox2></InputBox2>
        </Box2>
        <Notice>2차 비밀번호는 선택사항 입니다.</Notice>
      </EleBox>

      <EleBox>
        <Box1>
          <EleName>약관동의</EleName>
        </Box1>
        <Box2>
          <TermBox>
            <TermContext>온라인회원 이용약관(필수)</TermContext>
          </TermBox>
          <TermCheckBtn>체크박스</TermCheckBtn>
        </Box2>
        <Box2>
          <TermBox>
            <TermContext>개인정보 필수적 수집, 이용 동의서(필수)</TermContext>
          </TermBox>
          <TermCheckBtn>체크박스</TermCheckBtn>
        </Box2>
      </EleBox>

      <SignUpBtn onClick={handleSignUp}>가입하기</SignUpBtn>
    </SignUp>
  );
}

export default SignUp2;
