import React, { useState } from 'react';
import styled from 'styled-components';
import logo from "../../assets/images/maah_logo.png";
import { useNavigate } from 'react-router';
import Tesseract from 'tesseract.js';
import grayBack from "../../assets/images/gray_back.jpg";

const Background = styled.div`
  background: linear-gradient(180deg, #f1f1f1 37.44%, #b2b2b2 100%);
  min-height: 100vh;
`;

const BackLogo = styled.img`
  position: absolute;
  transform: rotate(90deg);
  top: 400px;
  left: 75%;
  opacity: 0.2;
`;

const Process = styled.div`
  padding: 50px;
  text-align: center;
`;

const CompleteStep = styled.span`
  display: inline-block;
  width: 90px;
  height: 20px;
  margin: 5px;
  border-radius: 10px;
  background-color: #5A5A5A;
`;

const ProcessStep = styled.span`
  display: inline-block;
  width: 90px;
  height: 20px;
  margin: 5px;
  border-radius: 10px;
  background-color: #CECDCA;
`;

const MainWrap = styled.div`
  background-color: #fff;
  border-radius: 50px;
  margin: auto;
  padding: 50px;
  width: 1100px;
  height: 600px;
  box-shadow: inset 1px 5px rgba(0,0,0,0.2);
`;

const MainTitle = styled.div`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  margin: 20px 0px;
`;

const InputWrap = styled.div`
  text-align: center;
  width: 360px;
  margin: auto;

  & > label {
    position: absolute;
    right: calc(50% - 25px);
    top: 320px;
    font-size: 50px;
    width: 50px;
    height: 50px;
    border: 3px solid transparent;
    border-radius: 10px;
    background-image: linear-gradient(#ddd, #ddd), linear-gradient(92deg, #000000 7.01%, #9b988f 72.28%);
    background-origin: border-box;
    background-clip: content-box, border-box;
    cursor: pointer;
    visibility: ${(props) => props.image === "" ? "visible" : "hidden"};
  }

  &:hover > label {
    visibility: visible;
  }

  & > label:hover {
    background-image: linear-gradient(#fff, #fff), linear-gradient(92deg, #000000 7.01%, #9b988f 72.28%);
  }

  & > label > span {
    background: linear-gradient(92deg, #000000 7.01%, #9b988f 72.28%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  & > img {
    width: 355px;
    height: 205px;
    border-radius: 10px;
  }
  
  & > input {
    width: 0;
    height: 0;
    visibility: hidden;
  }
`;

const Buttons = styled.div`
  margin: 32px;
  text-align: center;

  & > button {
    width: 60%;
    height: 70px;
    margin: 5px;
    border-radius: 35px;
    font-size: 20px;
    font-weight: bold;
    color: white;
    background-color: black;
    cursor: pointer;
  }
`;

function InputIDCard(props) {
  const navigate = useNavigate();
  const [imagePath, setImagePath] = useState("");
  const [name, setName] = useState("한마음");
  const [personalNumber, setPersonalNumber] = useState("");
  const [issueDate, setIssuDate] = useState("");

  const gotoPrev = () => {
    navigate("/cardApplication", {})
  };

  const gotoNext = () => {
    navigate("/cardApplication3", {})
  };
 
  const handleChange = (event) => {
    if(event.target.files.length > 0) {
      const tempImagePath = URL.createObjectURL(event.target.files[0]);
      setImagePath(tempImagePath);

      Tesseract.recognize(
        tempImagePath, 
        'kor', 
        {logger: m => {}}
      ).catch (err => {
        console.error(err);
      }).then(({ data: { text } }) => { 
        setName(text.split("\n")[2].split(" ")[0]);
        setPersonalNumber(text.split("\n")[5].slice(0, 14));

        let date = '';
        let array = text.split("\n")[10].replaceAll(" ", "").split(".");
        for(let i = 0; i < 3; i++) {
          if(array[i].length < 2) {
            date += '0' + array[i];
          } else {
            date += array[i];
          }
        }
        setIssuDate(date);
      })
    }
  }
    return (
        <Background>
            <BackLogo src={logo}></BackLogo>
            <Process>
                <CompleteStep></CompleteStep>
                <CompleteStep></CompleteStep>
                <CompleteStep></CompleteStep>
                <ProcessStep></ProcessStep>
                <ProcessStep></ProcessStep>
            </Process>
            <MainWrap>
            <div>
              <MainTitle>
                신분증을 확인하고 진행해주세요
              </MainTitle>
              <InputWrap image={imagePath}>
                <img src={imagePath === "" ? grayBack : imagePath} className="upload_img" alt='upload_img'/>
                <label for="idCard">
                  <span>+</span>
                </label>
                <input type="file" onChange={handleChange} id='idCard'/>
              </InputWrap>
              <div>
                <div>
                  <span>이름</span><input type="text" value={name}></input>
                </div>
                <div>
                  <span>주민등록번호</span>
                  <input type="text" value={personalNumber === "" ? "" : personalNumber.split("-")[0]}></input>
                  <span>-</span>
                  <input type="text" value={personalNumber === "" ? "" : personalNumber.split("-")[1]}></input>
                </div>
                <div>
                  <span>발급일자</span>
                  <input type="text" placeholder='ex)20240101' value={issueDate}></input>
                </div>
              </div>
            </div>
            <Buttons>
                    <button onClick={gotoNext}>본인인증</button>
                    <button onClick={gotoPrev}>이전으로</button>
                </Buttons>
            </MainWrap>
        </Background>
    );
}

export default InputIDCard;