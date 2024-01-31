import React from "react";
import "./signup.css";

function SignUp(props) {
  return (
    <div class="item-2-zPw">
      <div class="auto-group-pnpp-ZbT">
        <div class="auto-group-mwk1-2sf">
          <img
            class="maahhalfbiglogo-3-LtM"
            alt="maah 로고"
            src="../assets/images/maahLogo.png"
          />
          <div class="group-1000003230-ee9">
            <p class="item--9jK">회원가입 기입 사항</p>
            <div class="group-1000003229-Rgq">
              <div class="group-1000003158-9sj">
                <p class="item--4jo">
                  <span class="item--4jo-sub-0">아이디</span>
                  <span class="item--4jo-sub-1">*</span>
                </p>
                <div class="auto-group-xigu-NnR">
                  <div class="group-1000003150-6iR">
                    <div class="rectangle-34624655-puK"></div>
                  </div>
                  <div class="group-1000003159-KLH">중복확인</div>
                </div>
                <p class="item--x8M">중복확인을 해주세요.</p>
              </div>
              <div class="group-1000003159-oPs">
                <p class="item--9Cq">
                  <span class="item--9Cq-sub-0">비밀번호</span>
                  <span class="item--9Cq-sub-1">*</span>
                </p>
                <div class="group-1000003150-JV3">
                  <div class="rectangle-34624655-TMw"></div>
                </div>
              </div>
              <div class="group-1000003151-AGM">
                <p class="item--WLD">
                  <span class="item--WLD-sub-0">비밀번호 확인</span>
                  <span class="item--WLD-sub-1">*</span>
                </p>
                <div class="group-1000003150-CMT">
                  <div class="rectangle-34624655-MEM"></div>
                </div>
                <p class="item--eUM">동일한 비밀번호를 입력해주세요.</p>
              </div>
              <div class="group-1000003158-X2M">
                <p class="item--2jo">
                  <span class="item--2jo-sub-0">이름</span>
                  <span class="item--2jo-sub-1">*</span>
                </p>
                <div class="auto-group-kt81-NSH">
                  <div class="group-1000003150-uh7">
                    <div class="rectangle-34624655-rsF"></div>
                  </div>
                  <div class="group-1000003159-9bT">본인인증</div>
                </div>
                <p class="item--byF">본명을 기입해주세요.</p>
              </div>
              <div class="group-1000003152-Jcm">
                <p class="item--34Z">
                  <span class="item--34Z-sub-0">생년월일</span>
                  <span class="item--34Z-sub-1">*</span>
                </p>
                <div class="group-1000003150-ngM">
                  <div class="rectangle-34624655-kdB"></div>
                </div>
              </div>
              <div class="group-1000003152-fEM">
                <p class="item--cfP">
                  <span class="item--cfP-sub-0">전화번호</span>
                  <span class="item--cfP-sub-1">*</span>
                </p>
                <div class="group-1000003150-Rcq">
                  <div class="rectangle-34624655-bGR"></div>
                </div>
              </div>
              <div class="group-1000003156-qRf">
                <p class="item--nbo">
                  <span class="item--nbo-sub-0">이메일</span>
                  <span class="item--nbo-sub-1">*</span>
                </p>
                <div class="group-1000003150-ywB">
                  <div class="rectangle-34624655-9am"></div>
                </div>
              </div>
              <div class="group-1000003157-pB7">
                <p class="item-2--9jB">2차 비밀번호</p>
                <div class="group-1000003150-3pZ">
                  <div class="rectangle-34624655-a3o"></div>
                </div>
                <p class="item-2--5WM">2차 비밀번호는 선택사항 입니다.</p>
              </div>
            </div>
            <div class="group-1000003238-ZgR">
              <p class="item--iZK">약관동의</p>
              <div class="group-1000003217-3Lh">
                <div class="group-1000003142-ZK3">
                  <p class="item--7bT">온라인회원 이용약관(필수)</p>
                  {/* <img class="circle-1-oDP" src="./assets/circle-1.png"/> */}
                </div>
              </div>
              <div class="group-1000003230-1KT">
                <div class="group-1000003142-8Q5">
                  <p class="item--gwP">
                    개인정보 필수적 수집, 이용 동의서(필수)
                  </p>
                  {/* <img class="circle-1-Mnd" src="./assets/circle-1-Vx9.png"/> */}
                </div>
              </div>
            </div>
            <div class="group-1000003159-S3P">가입하기</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
