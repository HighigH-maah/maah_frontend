import Tesseract from 'tesseract.js';
import { useState } from "react";

function InputIDCard() {
  const [imagePath, setImagePath] = useState("");
  const [result, setResult] = useState("");
 
  const handleChange = (event) => {
    const tempImagePath = URL.createObjectURL(event.target.files[0]);

    setImagePath(tempImagePath);

    Tesseract.recognize(
      tempImagePath, 
      'kor', 
      {logger: m => {}}
    ).catch (err => {
      console.error(err);
    }).then(({ data: { text } }) => { 
      setResult(text); 
    })
  }

  return (
    <div className="App">
      <main className="App-main">
        <h3>이미지 업로드</h3>
        <img src={imagePath} className="upload_img" alt='upload_img'/>
        <input type="file" onChange={handleChange}/>
        <h3>인식 결과</h3>
        {'분류중 >>'}
        <div className="text-box"><p>result: {result}</p></div>
      </main>
    </div>
  );
}

export default InputIDCard;