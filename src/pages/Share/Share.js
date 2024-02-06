import React from "react";
import "./share.css";
import styled from "styled-components";
//import axios from "axios";

// axios
//   .post("/member.do", {
//     member_id: "user3",
//   })
//   .then(function (res) {
//     console.log(res.data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

const ShareBack = styled.div`
  width: auto;
  height: auto;
  position: relative;
  background: linear-gradient(
    355.98deg,
    #181048 99.92%,
    #0e0831 99.93%,
    #1b463b 200%
  );
  background-size: auto 100%;
`;

const ShareMain = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const HiSection = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 15rem 0 10rem;
`;
const HiTopper = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  box-sizing: border-box;
`;
const HiTopTitle = styled.p`
  text-align: center;
  font-size: 6rem;
  font-weight: 400;
  line-height: 0.97;
  color: #ffffff;
  margin-bottom: 3.8rem;
  font-family: Iceland, "Source Sans Pro";
  white-space: nowrap;
  flex-shrink: 0;
`;
const HiBotTitle = styled.p`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 1;
  color: #55534e;
  font-family: Iceland, "Source Sans Pro";
  white-space: nowrap;
  flex-shrink: 0;
`;

const HiBottom = styled.div`
  width: 100%;
  position: relative;
  flex-shrink: 0;
  margin: 5rem 0 2rem;
`;
const HiCardTypeName = styled.div`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 0.97;
  letter-spacing: -0.1rem;
  color: #ffffff;
  font-family: Iceland, "Source Sans Pro";
  white-space: nowrap;
  flex-shrink: 0;
`;

function Share(props) {
  return (
    <ShareBack>
      <ShareMain>
        <HiSection>
          <HiTopper>
            <HiTopTitle>Ma:ah Share</HiTopTitle>
            <HiBotTitle>Hi:Card Name</HiBotTitle>
          </HiTopper>
          <HiBottom>
            <HiCardTypeName>X BOOST</HiCardTypeName>
          </HiBottom>
        </HiSection>
      </ShareMain>
    </ShareBack>
  );
}

export default Share;
