import React, { useState } from "react";
import styled from "styled-components";
import maahbiglogo from "../../assets/images/Logo/maah_big_logo.png";
import { Link } from "react-router-dom";

const HeaderDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  top: 3rem;
  justify-content: center;
`;

const HeaderLogoMenuDiv = styled.div`
  box-sizing: border-box;
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
  position: relative;
`;

const HeaderLogoImage = styled.img`
  width: 16.3rem;
  height: 2.6rem;
  object-fit: cover;
  vertical-align: top;
  flex-shrink: 0;
`;

const HeaderMenuBar = styled.div`
  margin: 0rem 15rem;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  position: relative;
`;

const HeaderMenuMy = styled.p`
  margin-right: 4.4rem;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 0.97;
  color: ${({ clicked }) => (clicked ? "#808080" : "#000000")};
  white-space: nowrap;
  flex-shrink: 0;

  &:hover {
    color: #808080;
  }
`;

const HeaderMenuShare = styled.p`
  margin-right: 4rem;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.2125;
  color: ${({ clicked }) => (clicked ? "#808080" : "#000000")};
  white-space: nowrap;
  flex-shrink: 0;

  &:hover {
    color: #808080;
  }
`;

const HeaderMenuCard = styled.p`
  margin-right: 4.6rem;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 0.97;
  color: ${({ clicked }) => (clicked ? "#808080" : "#000000")};
  white-space: nowrap;
  flex-shrink: 0;

  &:hover {
    color: #808080;
  }
`;

const HeaderMenuAbout = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.2125;
  color: ${({ clicked }) => (clicked ? "#808080" : "#000000")};
  white-space: nowrap;
  flex-shrink: 0;

  &:hover {
    color: #808080;
  }
`;

function HeaderLogoutBtn(props) {
  const [buttonText, setButtonText] = useState("한마음 님");

  const handleMouseEnter = () => {
    setButtonText("LOGOUT");
  };

  const handleMouseLeave = () => {
    setButtonText("한마음 님");
  };

  const [menuState, setMenuState] = useState({
    my: false,
    share: false,
    card: false,
    faqs: false,
  });

  const handleMenuClick = (menu) => {
    setMenuState({
      ...menuState,
      [menu]: !menuState[menu],
    });
  };

  return (
    <HeaderDiv>
      <HeaderLogoMenuDiv>
        <Link to="../" style={{ textDecoration: "none" }}>
          <HeaderLogoImage src={maahbiglogo}></HeaderLogoImage>
        </Link>
        <HeaderMenuBar>
          <Link to="" style={{ textDecoration: "none" }}>
            <HeaderMenuMy
              clicked={menuState.my}
              onClick={() => handleMenuClick("my")}
            >
              My
            </HeaderMenuMy>
          </Link>
          <Link to="/share" style={{ textDecoration: "none" }}>
            <HeaderMenuShare
              clicked={menuState.share}
              onClick={() => handleMenuClick("share")}
            >
              Share
            </HeaderMenuShare>
          </Link>
          <Link to="/cardcompare" style={{ textDecoration: "none" }}>
            <HeaderMenuCard
              clicked={menuState.card}
              onClick={() => handleMenuClick("card")}
            >
              Card
            </HeaderMenuCard>
          </Link>
          <Link to="" style={{ textDecoration: "none" }}>
            <HeaderMenuAbout
              clicked={menuState.about}
              onClick={() => handleMenuClick("about")}
            >
              About us
            </HeaderMenuAbout>
          </Link>
        </HeaderMenuBar>
        <HeaderLogoutButton
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {buttonText}
        </HeaderLogoutButton>
      </HeaderLogoMenuDiv>
    </HeaderDiv>
  );
}

export default HeaderLogoutBtn;
