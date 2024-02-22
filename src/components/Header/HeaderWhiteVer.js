import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import maahbiglogowhite from "../../assets/images/Logo/maah_big_logo_white.png";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import MemberLoad from "../Utils/SessionStorage";

const HeaderDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  top: 3rem;
  justify-content: center;
  z-index: 10;
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
  color: rgb(100, 100, 100);
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 0.2rem rgb(100, 100, 100);
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
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 0.97;
  color: #ffffff;
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
  color: #ffffff;
  white-space: nowrap;
  flex-shrink: 0;

  &:hover {
    color: #808080;
  }
`;

const HeaderMenuCard = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 0.97;
  color: #ffffff;
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
  color: #ffffff;
  white-space: nowrap;
  flex-shrink: 0;

  &:hover {
    color: #808080;
  }
`;

const DropDown = styled.button`
  border: none;
  outline: none;
  position: relative;
  background: none;
  margin-right: 4.4rem;
`;

const ListContainer = styled.div`
  // border: 1px solid ${(props) => props.theme.borderColor};
  // background-color: ${(props) => props.theme.bgColor};
  // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 3px;
  margin-top: 7px;
  position: absolute;
  display: none;
  // ${DropDown}:active & {
  //   display: block;
  // }
  ${DropDown}:focus & {
    display: block;
  }
  ${DropDown}:hover & {
    display: block;
  }
`;

const Li = styled.li`
  list-style: none;
  margin-bottom: 0.7rem;

  &:hover {
    color: #ffffff;
  }
`;

const Ul = styled.ul`
  list-style: none;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  color: #666666;
  line-height: 22px;
  position: relative;
  left: -4rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

// const useDetectClose = (initialState) => {
//   const [isOpen, setIsOpen] = useState(initialState);
//   const ref = useRef(null);

//   const removeHandler = () => {
//     setIsOpen(!isOpen);
//   };

//   useEffect(() => {
//     const onClick = (e) => {
//       if (ref.current !== null && !ref.current.contains(e.target)) {
//         setIsOpen(!isOpen);
//       }
//     };
//     if (isOpen) {
//       window.addEventListener("click", onClick);
//     }

//     return () => {
//       window.removeEventListener("click", onClick);
//     };
//   }, [isOpen]);

//   return [isOpen, ref, removeHandler];
// };

function HeaderWhiteVer(props) {
  const [buttonText, setButtonText] = useState([]);
  const [member, setMember] = useState([]);

  const getMember = () => {
    axios({
      url: process.env.REACT_APP_API_SERVER + "/member.do",
      method: "post",
      data: { memberId: MemberLoad() },
    })
      .then((res) => {
        //console.log(res.data);
        setMember(res.data);
      })
      .catch((err) => {
        //console.log(err);
      });
  };

  // const activeStyle = {
  //   color: "blue",

  // };

  useEffect(() => {
    getMember();
  }, []);

  useEffect(() => {
    if (member && member.memberName) {
      setButtonText(`${member.memberName} 님`);
    }
  }, [member]);

  const handleMouseEnter = () => {
    setButtonText("LOGOUT");
  };

  const handleMouseLeave = () => {
    setButtonText(`${member.memberName} 님`);
  };

  return (
    <HeaderDiv>
      <HeaderLogoMenuDiv>
        <StyledLink to="../">
          <HeaderLogoImage src={maahbiglogowhite}></HeaderLogoImage>
        </StyledLink>
        <HeaderMenuBar>
          <StyledLink className={""} to="/myData">
            <DropDown>
              <HeaderMenuMy>
                My
                <ListContainer>
                  <Ul>
                    <Li>
                      <StyledLink to="/myData">마이데이터</StyledLink>
                    </Li>
                    <Li>
                      <StyledLink to="/myCardList">카드리스트</StyledLink>
                    </Li>
                  </Ul>
                </ListContainer>
              </HeaderMenuMy>
            </DropDown>
          </StyledLink>
          <StyledLink className={""} to="/share">
            <HeaderMenuShare>Share</HeaderMenuShare>
          </StyledLink>
          <StyledLink className={""} to="/cardcompare">
            <DropDown>
              <HeaderMenuCard>
                Card
                <ListContainer>
                  <Ul style={{ left: "-3rem" }}>
                    <Li>
                      <StyledLink to="/cardCompare">카드비교</StyledLink>
                    </Li>
                    <Li>
                      <StyledLink to="/hiCard">카드신청</StyledLink>
                    </Li>
                  </Ul>
                </ListContainer>
              </HeaderMenuCard>
            </DropDown>
          </StyledLink>
          <StyledLink className={""} to="/aboutUs">
            <HeaderMenuAbout>About us</HeaderMenuAbout>
          </StyledLink>
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

export default HeaderWhiteVer;
