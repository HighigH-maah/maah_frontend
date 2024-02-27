import styled from "styled-components";
import shareBackground from "../../assets/images/share_bg.png";
import shareBackwings from "../../assets/images/share_back_wings.png";

export const ShareBack = styled.div`
  width: auto;
  height: auto;
  position: relative;
  background: linear-gradient(
    176deg,
    #181048 0.08%,
    #0f0932 0.09%,
    #1b463c 100%
  );
  background-size: auto 100%;
  padding: 0 10px;
`;

export const ShareMain = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url(${shareBackground});
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: -5rem;
`;

export const HiSection = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 15rem 0 0;
`;
export const HiTopper = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  box-sizing: border-box;
`;
export const HiTopTitle = styled.p`
  text-align: center;
  font-size: 60px;
  font-weight: 400;
  line-height: 0.97;
  color: #ffffff;
  margin-bottom: 3.8rem;

  white-space: nowrap;
  flex-shrink: 0;
`;
export const HiBotTitle = styled.p`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 1;
  color: #55534e;

  white-space: nowrap;
  flex-shrink: 0;
`;

export const HiBottom = styled.div`
  width: 100%;
  position: relative;
  flex-shrink: 0;
  margin: 5rem 15rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HiBottomWings = styled.div`
  width: 65vw;
  min-height: 52vw;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${shareBackwings});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const HiCardTypeName = styled.div`
  position: relative;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 0.97;
  letter-spacing: -0.1rem;
  color: #ffffff;
  bottom: 8px;

  white-space: nowrap;
  flex-shrink: 0;
  margin-bottom: 1rem;
`;

export const HiCardImg = styled.img`
  box-sizing: border-box;
  width: 232px;
  height: 351px;
  transition: all 0.15s linear;
  position: relative;
  border-radius: 12px;
  border: 1px solid #fff;
  transition: visibility 0.5s;
  &:hover {
    ~ div {
      visibility: visible;
    }
  }
`;

export const HiCardDesc = styled.div`
  box-sizing: border-box;
  width: 232px;
  height: 348px;
  position: absolute;
  top: 0;
  background-color: #fff;
  border-radius: 12px;
  border: 1px solid #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: linear-gradient(
    113deg,
    rgba(255, 255, 255, 0.37) 10.29%,
    rgba(255, 255, 255, 0) 100.35%
  );
  backdrop-filter: blur(20px);
  visibility: hidden;

  &:hover {
    visibility: visible;
    transition: visibility 0.5s;
  }

  > p {
    background: linear-gradient(92deg, #bfbdb7 7.01%, #f2efdf 72.28%);
    -webkit-background-clip: text; /* 웹킷 브라우저 지원 */
    -webkit-text-fill-color: transparent; /* 웹킷 브라우저 지원 */
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
`;

export const HiCardDescBox = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  > h3 {
    display: flex;
    align-items: center;
    gap: 5px;
    width: 90%;
    color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: -0.18px;
    margin: 0px;
  }
  > h3 img {
    width: 40px;
  }
  > h3 p {
    word-break: keep-all;
    margin: 5px;
  }
`;

export const ReverseButton = styled.button`
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
  bottom: 21px;
`;

export const ReverseIcon = styled.img`
  margin: auto;
  margin-top: 5px;
`;

export const LearnMore = styled.div`
  display: flex;
  width: 184px;
  height: 55px;
  padding: 5px 10px;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
  border-radius: 64px;
  background: linear-gradient(92deg, #9b988f 7.01%, #d8d3c5 72.28%);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-size: 20px;
  color: #fff;
  font-weight: 400;
  line-height: 24px;
  justify-content: center;
  cursor: pointer;
`;

export const BySection = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 0rem 0 10rem;
`;

export const ByTopper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: flex-end;
  margin-bottom: 6rem;
`;

export const ByTitle = styled.div`
  width: fit-content;
  position: relative;
  color: #fff;
  font-size: 60px;
  font-weight: 400;
  left: 50%;
  transform: translate(-50%, 0%);
`;

export const ByBottomArea = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 3rem;
  padding: 0 14rem;
  box-sizing: border-box;
`;

export const ByBottomCardArea = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content: flex-start;
  background: linear-gradient(
    113deg,
    rgba(255, 255, 255, 0.37) 10.29%,
    rgba(255, 255, 255, 0) 100.35%
  );
  border-radius: 2rem;
`;

export const ByBottomCardTitle = styled.div`
  color: #fff;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -1.2px;
  margin-bottom: 30px;
  position: absolute;
  top: 1%;
`;

export const ByBottomAdd = styled.div`
  width: 311px;
  height: 230px;
  transform: rotate(90deg);
  border-radius: 12px;
  border: 2px solid #fff;
  background: linear-gradient(
    113deg,
    rgba(255, 255, 255, 0.37) 10.29%,
    rgba(255, 255, 255, 0) 100.35%
  );
  backdrop-filter: blur(37.5px);
  position: absolute;
  top: 22%;
  > svg {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }
`;

export const ByBottomBtn = styled.div`
  display: flex;
  width: 150px;
  padding: 12px 24px;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  border-radius: 64px;
  background: linear-gradient(
    181deg,
    #030115 0.65%,
    rgba(254, 254, 254, 0.52) 54.65%,
    rgba(3, 1, 21, 0) 114.33%
  );
  color: var(--naver-text, #fff);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  position: absolute;
  top: 95%;
`;

export const ByBottomImg = styled.img`
  width: 230px;
  height: 311px;
  border-radius: 12px;
  border: 2px solid #fff;
  position: absolute;
  top: 12%;
`;

export const ByBottomDesc = styled.div`
  width: 230px;
  height: 311px;
  border-radius: 12px;
  border: 2px solid #fff;
  background: linear-gradient(
    113deg,
    rgba(0, 0, 0, 0.37) 10.29%,
    rgba(0, 0, 0, 0) 100.35%
  );
  backdrop-filter: blur(37.5px);
  position: absolute;
  top: 12%;
  // opacity: 0.7;
  z-index: 999;

  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.18px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  opacity: 0;
  transition: opacity 0.5s;

  &.toggle--checked {
    opacity: 1;
    transition: opacity 0.5s;
  }
`;

export const ByBottomDescBox = styled.div`
  display: flex;
  gap: 5px;
  width: 90%;
  align-items: center;
  justify-content: flex-start;

  > img {
    width: 40px;
  }
  > p {
    word-break: keep-all;
  }
`;
