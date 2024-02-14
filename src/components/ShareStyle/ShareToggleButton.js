import styled from "styled-components";

const ToggleContainer = styled.div`
  position: relative;

  left: 65%;

  cursor: pointer;

  > .toggle-container {
    width: 120px;
    height: 55px;
    border-radius: 35px;
    background: linear-gradient(
      180deg,
      #eee 0%,
      rgba(80, 80, 80, 0.71) 50%,
      rgba(255, 255, 255, 0.09) 93.5%,
      rgba(239, 239, 237, 0) 100%
    );
    transition: 0.5s;
  }
  //.toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현
  > .toggle--checked {
    background: linear-gradient(
      180deg,
      #999 0%,
      rgba(60, 60, 60, 0.71) 50%,
      rgba(220, 220, 220, 0.09) 93.5%,
      rgba(120, 120, 120, 0) 100%
    );
    transition: 0.5s;
  }

  > .toggle-circle {
    position: absolute;
    top: 10%;
    left: 3%;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background-color: rgb(255, 254, 255);
    transition: 0.5s;
    //.toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현
  }
  > .toggle--checked {
    left: 60%;
    transition: 0.5s;
  }

  > .toggle-desc {
    position: absolute;
    top: 25%;
    left: 50%;
    transition: 0.5s;
  }
  > .toggle--ondesc {
    left: 10%;
    transition: 0.5s;
  }
`;

const Desc = styled.div`
  //설명 부분의 CSS를 구현
  position: relative;
  top: 30%;
  text-align: center;
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  transition: 0.5s;
`;

export const ToggleButton = ({ toggleHandler, isOn }) => {
  return (
    <>
      <ToggleContainer
        // 클릭하면 토글이 켜진 상태(isOn)를 boolean 타입으로 변경하는 메소드가 실행
        onClick={toggleHandler}
      >
        {/* 아래에 div 엘리먼트 2개가 있다. 각각의 클래스를 'toggle-container', 'toggle-circle' 로 지정 */}
        {/* Toggle Switch가 ON인 상태일 경우에만 toggle--checked 클래스를 div 엘리먼트 2개에 모두 추가. 조건부 스타일링을 활용*/}
        <div
          className={`toggle-container ${isOn ? "toggle--checked" : null}`}
        />
        <div className={`toggle-circle ${isOn ? "toggle--checked" : null}`} />
        <div className={`toggle-desc ${isOn ? "toggle--ondesc" : null}`}>
          {isOn === false ? <Desc>Card</Desc> : <Desc>Desc</Desc>}
        </div>
      </ToggleContainer>
      {/* Desc 컴포넌트를 활용*/}
      {/* Toggle Switch가 ON인 상태일 경우에 Desc 컴포넌트 내부의 텍스트를 'Toggle Switch ON'으로, 그렇지 않은 경우 'Toggle Switch OFF'. 조건부 렌더링을 활용. */}
    </>
  );
};
