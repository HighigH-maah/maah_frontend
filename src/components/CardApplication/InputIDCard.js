import React, { useState } from 'react';
import styled from 'styled-components';
import logo from "../../assets/images/maah_logo.png";
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
  margin: 30px 0px;
`;

const InputWrap = styled.div`
  text-align: center;
  width: 360px;
  margin: 20px auto;

  & > label {
    position: absolute;
    right: calc(50% - 25px);
    top: 345px;
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
    box-shadow: 2px 2px 2px gray;
  }
  
  & > input {
    width: 0;
    height: 0;
    visibility: hidden;
  }
`;

const InfoWrap = styled.div`
  text-align: center;
`;

const InfoName = styled.span`
  display: inline-block;
  width: 140px;
  font-size: 20px;
  text-align: left;
  font-weight: bold;
`;

const InfoInput = styled.span`
  display: inline-block;
  width: 200px;
  padding: 7px;
  margin: 5px;
  border-radius: 10px;
  background-color: #ddd;

  & > input {
    font-size: 20px;
    background: none;
  }
`;

const Input = styled.input`
  width: 170px;
  
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

const InputNum1 = styled.input`
  width: 75px;
  appearance: none;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

const InputNum2 = styled.input`
  width: 90px;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

const Buttons = styled.div`
  margin: 40px;
  text-align: center;

  & > button {
    width: 200px;
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

function InputIDCard({setProcess}) {
  const [imagePath, setImagePath] = useState("");
  const [name, setName] = useState("한마음");
  const [personalNumber, setPersonalNumber] = useState("");
  const [issueDate, setIssuDate] = useState("");

  const gotoPrev = () => {
    setProcess(2)
  };

  const gotoNext = () => {
    if((name.length > 0 ? 1 : 0) * personalNumber.length * issueDate.length === 112) {
      setProcess(4);
    } else {
      alert('입력 정보를 다시 확인해주세요.');
    }
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

  const  changeHandler = (event) => {
    switch(event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'personalNum1':
        if(event.target.value.length > 6) {
          event.target.value = event.target.value.slice(0, 6);
        }
        setPersonalNumber(event.target.value + '-' + personalNumber.split('-')[1]);
        break;
      case 'personalNum2':
        if(event.target.value.length > 7) {
          event.target.value = event.target.value.slice(0, 7);
        }
        setPersonalNumber(personalNumber.split('-')[0] + '-' + event.target.value);
        break;
      case 'issueDate':
        if(event.target.value.length > 8) {
          event.target.value = event.target.value.slice(0, 8);
        }
        setIssuDate(event.target.value);
        break;
      default: 
        break;
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
              <InfoWrap>
                <div>
                  <InfoName>이름</InfoName>
                  <InfoInput>
                    <Input type="text" value={name} onChange={changeHandler} name='name'></Input>
                  </InfoInput>
                </div>
                <div>
                  <InfoName>주민등록번호</InfoName>
                  <InfoInput>
                    <InputNum1 type="number" disabled={personalNumber === ""} value={personalNumber === "" ? "" : personalNumber.split("-")[0]} onChange={changeHandler} name='personalNum1'></InputNum1>
                    <span>-</span>
                    <InputNum2 type="number" disabled={personalNumber === ""} value={personalNumber === "" ? "" : personalNumber.split("-")[1]} onChange={changeHandler} name='personalNum2'></InputNum2>
                  </InfoInput>
                </div>
                <div>
                  <InfoName>발급일자</InfoName>
                  <InfoInput>
                    <Input type="number" disabled={issueDate === ""} placeholder='ex)20240101' value={issueDate} onChange={changeHandler} name='issueDate'></Input>
                  </InfoInput>
                </div>
              </InfoWrap>
            </div>
            <Buttons>
              <button onClick={gotoPrev}>이전으로</button>
              <button onClick={gotoNext}>다음으로</button>
            </Buttons>
          </MainWrap>
        </Background>
    );
}

export default InputIDCard;