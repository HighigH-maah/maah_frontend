import React, { useState } from "react";
import "./mycardlist.css";
import HeaderLogoutBtn from "../../components/Header/HeaderLogoutBtn";
import styled from "styled-components";

// function EmpList(props) {
//   const [empList, setEmpList] = useState([]);
//   //console.log(empList);
//   useEffect(() => {
//     axios({
//       method: "get",
//       url: "/rest/emp/list.do",
//     })
//       .then((response) => {
//         console.log(response.data);
//         setEmpList(response.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);
//   return (
//     <div>
//       <h2>Emp 목록</h2>
//       <EmpDisplay empList={empList}></EmpDisplay>
//     </div>
//   );
// }

// function EmpDisplay({ empList }) {
//   return (
//     <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>번호</th>
//           <th>이름</th>
//           <th>이메일</th>
//           <th>직업</th>
//           <th>부서</th>
//           <th>매니저</th>
//         </tr>
//       </thead>
//       <tbody>
//         {empList &&
//           empList.map((emp, seq) => (
//             <tr key={`id${seq}`}>
//               <td>
//                 <Link to={`/emp/detail/${emp.employeeId}`}>
//                   {emp.employeeId}
//                 </Link>
//               </td>
//               <td>{emp.firstName}</td>
//               <td>{emp.email}</td>
//               <td>{emp.jobId}</td>
//               <td>{emp.departmentId}</td>
//               <td>{emp.managerId}</td>
//             </tr>
//           ))}
//       </tbody>
//     </Table>
//   );
// }

// export default EmpList;

function MyCardList(props) {
  const [myCardList, setMyCardList] = useState([]);
  console.log(myCardList);
  return (
    <div class="my--m5o">
      <HeaderLogoutBtn></HeaderLogoutBtn>
      <div class="main-FLy">
        <div class="hi-card-Ayj">
          <div class="auto-group-nwqu-5L1">
            <div class="auto-group-1fdp-pYV">
              <div class="cards-vertical-i85">
                {/* <img class="shape-3g9" src="REPLACE_IMAGE:I152:2760;19:6230" /> */}
                <p class="card-name-AVs">Card Name</p>
                <div class="card-description-TUy">card description</div>
                <div class="noise-jSV"></div>
              </div>
            </div>
            <div class="item-5-770-cWH">5***-****-****-770*</div>
          </div>
          <div class="hi-card-info-F3T">
            <p class="hi-card-YYM">Hi:Card</p>
            <div class="auto-group-98ud-fN5">
              <div class="item--cYD">이번 달 사용한도</div>
              <div class="item-2500000--WtV">2,500,000 원</div>
            </div>
            <div class="auto-group-1uhb-269">
              <div class="item--Y4V">이번 달 사용금액</div>
              <div class="item-1234000--uZF">1,234,000 원</div>
            </div>
          </div>
          <div class="line-1-R1o"></div>
          <div class="hi-card-point-jYH">
            <div class="auto-group-gcbf-5c9">
              <div class="point-EV3">
                <div class="hi-card-point-y5F">Hi:Card Point</div>
                <div class="p-5ty">4500P</div>
              </div>
              <div class="grade-p5s">
                <div class="hi-credit-grade-NNH">Hi:Credit Grade</div>
                {/* <img
                  class="maahlogobronze-HEM"
                  src="./assets/maahlogobronze.png"
                /> */}
              </div>
            </div>
            <div class="frame-1000005709-DNu">
              <div class="frame-3-B4q">나의 결제 이력</div>
              <div class="frame-1000005732-E37">
                <p class="item--kn9">연결계좌변경</p>
                <p class="item--TwT">가상 카드번호 생성</p>
              </div>
            </div>
          </div>
        </div>
        <div class="by-card-group-eW9">
          <div class="group-1000003124-YrR">
            <div class="group-1000003117-HJD">
              <div class="auto-group-rwko-pow">
                <div class="group-1000003119-B8h">
                  <div class="cards-vertical-hsj">
                    {/* <img
                      class="shape-4TP"
                      src="REPLACE_IMAGE:I152:2125;19:6230"
                    /> */}
                    <p class="card-name-n8V">Card Name</p>
                    <div class="card-description-GJZ">card description</div>
                    <div class="noise-mFK"></div>
                  </div>
                </div>
                <div class="group-1000003121-2h3">
                  <p class="the-blue-ycH">The Blue</p>
                  <p class="item-570-JuT">570*</p>
                </div>
              </div>
              <div class="auto-group-p6hk-Czq">
                <div class="auto-group-w9tz-XGR">
                  <div class="group-1000003122-ftR">
                    <div class="item-053--BLy">업종별 0.5%~3% 적립</div>
                    <div class="item-5--tmB">온라인 간편 결제 5% 적립</div>
                    <div class="item-3--1L1">해외 가맹점 3% 적립</div>
                    <p class="item-50--7P3">전월실적 50만원 이상</p>
                  </div>
                  <p class="my-by-card-oWm">My By:Card</p>
                </div>
                <div class="auto-group-mekx-HRw">
                  <div class="frame-1000005727-cUD">
                    <div class="by-card-point-in9">By:Card Point</div>
                    <div class="p-2Xw">4500P</div>
                  </div>
                  <div class="frame-1000005709-N61">
                    <div class="frame-3-6Xo">하이카드 제외</div>
                    <div class="frame-1000005732-iZB">
                      <p class="item--RiV">연결계좌변경</p>
                      <p class="item--WV3">분실신고/해지</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="group-1000003128-vof">
            <div class="group-1000003117-dCH">
              <div class="auto-group-2vwv-ymw">
                <div class="group-1000003119-WG5">
                  <div class="cards-vertical-Rtq">
                    {/* <img
                      class="shape-amj"
                      src="REPLACE_IMAGE:I159:2234;19:6230"
                    /> */}
                    <p class="card-name-Hg9">Card Name</p>
                    <div class="card-description-ZtZ">card description</div>
                    <div class="noise-1kZ"></div>
                  </div>
                </div>
                <div class="group-1000003121-WhK">
                  <p class="the-blue-Fuo">The Blue</p>
                  <p class="item-570-Pm7">570*</p>
                </div>
              </div>
              <div class="auto-group-a4rr-Hbb">
                <div class="auto-group-j9qw-prR">
                  <div class="group-1000003122-aah">
                    <div class="item-053--Cry">업종별 0.5%~3% 적립</div>
                    <div class="item-5--Kwb">온라인 간편 결제 5% 적립</div>
                    <div class="item-3--E2y">해외 가맹점 3% 적립</div>
                    <p class="item-50--vwP">전월실적 50만원 이상</p>
                  </div>
                  <p class="my-by-card-ESH">My By:Card</p>
                </div>
                <div class="auto-group-tqts-M17">
                  <div class="frame-1000005727-H9f">
                    <div class="by-card-point-bRF">By:Card Point</div>
                    <div class="p-Kc9">4500P</div>
                  </div>
                  <div class="frame-1000005709-s7s">
                    <div class="frame-3-poo">하이카드 제외</div>
                    <div class="frame-1000005732-TLy">
                      <p class="item--zLu">연결계좌변경</p>
                      <p class="item--3KB">분실신고/해지</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="group-1000003127-sJD">
            <div class="group-1000003117-E8m">
              <div class="auto-group-s5hf-MjB">
                <div class="group-1000003119-Uoo">
                  <div class="cards-vertical-or5">
                    {/* <img
                      class="shape-Yof"
                      src="REPLACE_IMAGE:I157:2877;19:6230"
                    /> */}
                    <p class="card-name-UhK">Card Name</p>
                    <div class="card-description-Brd">card description</div>
                    <div class="noise-tFF"></div>
                  </div>
                </div>
                <div class="group-1000003121-BVF">
                  <p class="the-blue-jFs">The Blue</p>
                  <p class="item-570-q41">570*</p>
                </div>
              </div>
              <div class="group-1000003122-a1b">
                <div class="item-053--g4d">업종별 0.5%~3% 적립</div>
                <div class="item-5--Pzd">온라인 간편 결제 5% 적립</div>
                <div class="item-3--KNV">해외 가맹점 3% 적립</div>
                <p class="item-50--eff">전월실적 50만원 이상</p>
              </div>
              <div class="auto-group-y9hx-9sK">
                <div class="item-1234000--JER">
                  이번달 사용 금액 1,234,000 원
                </div>
                <div class="frame-1000005709-NVB">
                  <div class="frame-3-Xss">하이카드 추가</div>
                  <div class="frame-1000005732-YY5">
                    <p class="item--s4Z">연결계좌변경</p>
                    <p class="item--MEd">분실신고/해지</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <img class="star-img-at5" src="REPLACE_IMAGE:150:2232" />
        <img class="star-img-tNy" src="REPLACE_IMAGE:150:2231" /> */}
      </div>
    </div>
  );
}

export default MyCardList;
