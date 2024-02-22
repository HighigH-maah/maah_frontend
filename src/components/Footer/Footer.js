import React from "react";
import styled from "styled-components";
import MaahSmallLogo from "../../assets/images/Logo/maah_small_logo_white.png";

const FooterDiv = styled.div`
  box-sizing: border-box;
  padding: 2rem;
  width: 100%;
  backdrop-filter: blur(0.8rem);
  background-color: rgba(40, 52, 48, 0.2399999946);
`;

const FooterAllDiv = styled.div`
margin: 5rem 0rem;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
}
`;

const FooterTopMenu = styled.div`
  display: flex;
  align-items: flex-start;
  flex-shrink: 0;
`;

const LogoBox = styled.div`
  margin-right: 5rem;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`;

const FooterMenuBar = styled.div`
display: flex;
align-items: flex-start;
flex-shrink: 0;
}
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
  color: #ffffff;
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

function Footer({ position, top }) {
  return (
    <FooterDiv style={{ position, top }}>
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
              <FooterMenu>Create</FooterMenu>
              <FooterMenuDown>
                <FooterMenuDownP>Credits Cards</FooterMenuDownP>
                <FooterMenuDownP>Gift Cards</FooterMenuDownP>
                <FooterMenuDownP>Savings accounts</FooterMenuDownP>
                <FooterMenuDownP>NFT</FooterMenuDownP>
              </FooterMenuDown>
            </FooterMenuProducts>
            <FooterMenuUseful>
              <FooterMenu>Share</FooterMenu>
              <FooterMenuDown>
                <FooterMenuDownP>Free rewards</FooterMenuDownP>
                <FooterMenuDownP>Documentation</FooterMenuDownP>
                <FooterMenuDownP>Affiliate program</FooterMenuDownP>
              </FooterMenuDown>
            </FooterMenuUseful>
            <FooterMenuSocial>
              <FooterMenu>Benefit</FooterMenu>
              <FooterMenuDown>
                <FooterMenuDownP>Changelog</FooterMenuDownP>
                <FooterMenuDownP>License</FooterMenuDownP>
                <FooterMenuDownP>Site Maps</FooterMenuDownP>
                <FooterMenuDownP>News</FooterMenuDownP>
              </FooterMenuDown>
            </FooterMenuSocial>
          </FooterMenuBar>
        </FooterTopMenu>
      </FooterAllDiv>
    </FooterDiv>
  );
}

export default Footer;
