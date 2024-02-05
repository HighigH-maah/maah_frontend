import React from "react";
import styled from "styled-components";
import MaahSmallLogo from "../../assets/images/Logo/MaahSmallLogoWhite.png";

const FooterDiv = styled.div`
  box-sizing: border-box;
  padding: 4.8rem 1.7rem 4.7rem 2rem;
  width: 100%;
  height: 37.1rem;
  backdrop-filter: blur(0.8rem);
  background-color: rgba(40, 52, 48, 0.2399999946);
`;

const FooterAllDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const FooterTopMenu = styled.div`
  margin: 0rem 10rem 8.8rem 0rem;
  width: calc(100% - 10rem);
  display: flex;
  align-items: flex-start;
  flex-shrink: 0;
`;

const LogoBox = styled.div`
  margin-right: 14.6rem;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`;

const FooterMenuBar = styled.div`
  margin-top: 0.8rem;
  height: 16rem;
  display: flex;
  align-items: flex-start;
  flex-shrink: 0;
`;

const FooterLogoImage = styled.img`
  margin-bottom: 1rem;
  width: 8.4rem;
  height: 6.7rem;
  object-fit: cover;
  vertical-align: top;
  flex-shrink: 0;
`;

const FooterMain = styled.p`
  max-width: 27.8rem;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.048rem;
  color: #adb2b1;
  font-family: M PLUS 1, "Source Sans Pro";
  flex-shrink: 0;
`;

const FooterMenu = styled.p`
  margin-bottom: 1.6rem;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.5;
  color: #ffffff;
  font-family: M PLUS 1, "Source Sans Pro";
  white-space: nowrap;
`;

const FooterMenuAboutus = styled.div`
  margin-right: 11.3rem;
  width: 9.9rem;
  height: 100%;
  flex-shrink: 0;
`;

const FooterMenuProducts = styled.div`
  margin-right: 10.6rem;
  width: 10.6rem;
  height: 100%;
  flex-shrink: 0;
`;

const FooterMenuUseful = styled.div`
  margin-right: 9.6rem;
  width: 11.6rem;
  flex-shrink: 0;
`;

const FooterMenuSocial = styled.div`
  width: 8.3rem;
  height: 100%;
  flex-shrink: 0;
`;

const FooterMenuDownP = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.5;
  color: #adb2b1;
  font-family: M PLUS 1, "Source Sans Pro";
  white-space: nowrap;
  flex-shrink: 0;
`;

const FooterMenuDown = styled.div`
  width: 100%;
  row-gap: 0.8rem;
  display: flex;
  flex-direction: column;
`;

function Footer(props) {
  return (
    <FooterDiv>
      <FooterAllDiv>
        <FooterTopMenu>
          <LogoBox>
            <FooterLogoImage src={MaahSmallLogo}></FooterLogoImage>
            <FooterMain>단 하나의 카드, 그 이상 Ma:ah 와 함께</FooterMain>
          </LogoBox>
          <FooterMenuBar>
            <FooterMenuAboutus>
              <FooterMenu>About us</FooterMenu>
              <FooterMenuDown>
                <FooterMenuDownP>Investors</FooterMenuDownP>
                <FooterMenuDownP>Features</FooterMenuDownP>
                <FooterMenuDownP>Book a demo</FooterMenuDownP>
                <FooterMenuDownP>Security </FooterMenuDownP>
              </FooterMenuDown>
            </FooterMenuAboutus>
            <FooterMenuProducts>
              <FooterMenu>Products</FooterMenu>
              <FooterMenuDown>
                <FooterMenuDownP>Credits Cards</FooterMenuDownP>
                <FooterMenuDownP>Gift Cards</FooterMenuDownP>
                <FooterMenuDownP>Savings accounts</FooterMenuDownP>
                <FooterMenuDownP>NFT</FooterMenuDownP>
              </FooterMenuDown>
            </FooterMenuProducts>
            <FooterMenuUseful>
              <FooterMenu>Useful Links</FooterMenu>
              <FooterMenuDown>
                <FooterMenuDownP>Free rewards</FooterMenuDownP>
                <FooterMenuDownP>Documentation</FooterMenuDownP>
                <FooterMenuDownP>Affiliate program</FooterMenuDownP>
              </FooterMenuDown>
            </FooterMenuUseful>
            <FooterMenuSocial>
              <FooterMenu>Social</FooterMenu>
              <FooterMenuDown>
                <FooterMenuDownP>Changelog</FooterMenuDownP>
                <FooterMenuDownP>License</FooterMenuDownP>
                <FooterMenuDownP>Site Maps</FooterMenuDownP>
                <FooterMenuDownP>News</FooterMenuDownP>
              </FooterMenuDown>
            </FooterMenuSocial>
          </FooterMenuBar>
        </FooterTopMenu>
        <div class="frame-aaR">
          <p class="copyright-2023-doradesign-all-rights-reserved-wfs">
            copyright 2023 DoraDesign All Rights Reserved
          </p>
          <div class="group-11-Gi9">
            <p class="this-page-uses-cookies-see-cookies-details-here-2xD">
              This page uses cookies. See cookies details here{" "}
            </p>
            <img class="vector-5-wZP" src="REPLACE_IMAGE:2:2900" />
          </div>
        </div>
      </FooterAllDiv>
    </FooterDiv>
  );
}

export default Footer;
