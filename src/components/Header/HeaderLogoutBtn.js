import React, { useState } from "react";
import styled from "styled-components";
import maahbiglogo from "../../assets/images/Logo/MaahBigLogo.png";

const HeaderDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  left: 7.5rem;
  top: 3rem;
`;

const HeaderLogoMenuDiv = styled.div`
  box-sizing: border-box;
  padding: 1.1rem 25.9rem 1.1rem 0rem;
  height: 4.8rem;
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

const HeaderLogoutButton = styled.button`
  width: 10rem;
  height: 4.8rem;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.200000003);
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 0.2rem rgba(0, 0, 0, 0.200000003);
  box-sizing: border-box;
  border-radius: 6.4rem;
  flex-shrink: 0;
  background: transparent;
`;

const HeaderLogoImage = styled.img`
  margin-right: 25.8rem;
  width: 16.3rem;
  height: 2.6rem;
  object-fit: cover;
  vertical-align: top;
  flex-shrink: 0;
`;

const HeaderMenuBar = styled.div`
  margin: 0.15rem 0rem 0.45rem 0rem;
  height: calc(100% - 0.6rem);
  display: flex;
  flex-shrink: 0;
  align-items: center;
`;

const HeaderMenuMy = styled.p`
  margin-right: 4.4rem;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 0.97;
  color: #000000;
  white-space: nowrap;
  flex-shrink: 0;
`;

const HeaderMenuShare = styled.p`
  margin-right: 4rem;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.2125;
  color: #000000;
  white-space: nowrap;
  flex-shrink: 0;
`;

const HeaderMenuCard = styled.p`
  margin-right: 4.6rem;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 0.97;
  color: #000000;
  white-space: nowrap;
  flex-shrink: 0;
`;

const HeaderMenuFaqs = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.2125;
  color: #000000;
  white-space: nowrap;
  flex-shrink: 0;
`;

function HeaderLogoutBtn(props) {
  const [buttonText, setButtonText] = useState("한마음 님");

  const handleMouseEnter = () => {
    setButtonText("LOGOUT");
  };

  const handleMouseLeave = () => {
    setButtonText("한마음 님");
  };

  return (
    <HeaderDiv>
      <HeaderLogoMenuDiv>
        <HeaderLogoImage src={maahbiglogo}></HeaderLogoImage>
        <HeaderMenuBar>
          <HeaderMenuMy>My</HeaderMenuMy>
          <HeaderMenuShare>Share</HeaderMenuShare>
          <HeaderMenuCard>Card</HeaderMenuCard>
          <HeaderMenuFaqs>FAQs</HeaderMenuFaqs>
        </HeaderMenuBar>
      </HeaderLogoMenuDiv>
      <HeaderLogoutButton
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {buttonText}
      </HeaderLogoutButton>
    </HeaderDiv>
  );
}

export default HeaderLogoutBtn;
