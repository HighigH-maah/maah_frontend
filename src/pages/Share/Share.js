import { useState } from "react";
import React from "react";
import "../../assets/css/style.css";
import "./share.css";
import styled from "styled-components";
import axios from "axios";
import blackVelvetImg from "../../assets/images/black_velvet.png";
import blackVelvetBack from "../../assets/images/black_velvet_back.png";
import reverse from "../../assets/images/reverse.png";

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

  white-space: nowrap;
  flex-shrink: 0;
`;
const HiBotTitle = styled.p`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 1;
  color: #55534e;

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

  white-space: nowrap;
  flex-shrink: 0;
`;

const HiCardImg = styled.img`
  box-sizing: border-box;
  width: 200px;
  height: 300px;
`;

const ReverseButton = styled.button`
  position: relative;
  width: 42px;
  height: 42px;
  border-radius: 21px;
  border: 0;
  cursor: pointer;
  background: linear-gradient(
    0deg,
    rgba(128, 128, 128, 0.5),
    rgba(200, 200, 200, 0.5) 45%,
    rgba(128, 128, 128, 0.5)
  );
  bottom: 70px;
`;

const ReverseIcon = styled.img`
  margin: auto;
  margin-top: 5px;
`;

function Share(props) {
  const [blackVelvet, setBlackVelvet] = useState(true);

  const reverseCard = (prop) => {
    let cards = document.getElementsByClassName(prop);
    cards[0].style.transform = "rotateY(90deg)";
    setTimeout(function () {
      switch (prop) {
        case "blackVelvet":
          setBlackVelvet(!blackVelvet);
          break;
        default:
          break;
      }
      cards[0].style.transform = "rotateY(0deg)";
    }, 100);
  };

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
            <HiCardImg
              className="blackVelvet"
              src={blackVelvet ? blackVelvetImg : blackVelvetBack}
            ></HiCardImg>
            <ReverseButton
              type="button"
              onClick={() => {
                reverseCard("blackVelvet");
              }}
            >
              <ReverseIcon src={reverse}></ReverseIcon>
            </ReverseButton>
          </HiBottom>
        </HiSection>
      </ShareMain>
    </ShareBack>
  );
}

export default Share;
