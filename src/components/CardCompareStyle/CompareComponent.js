import styled, { keyframes } from "styled-components";
import circle from "../../assets/images/circle.png";
import blackVelvet from "../../assets/images/black_velvet.png";
export const SelectDiv = styled.div`
  background: linear-gradient(180deg, #fff 0%, #f0f0f0 100%);
  position: relative;
  height: 522px;
  margin: 0 auto;
  color: black;
  display: flex;
  width: 1144px;
  gap: 2rem;
  border-radius: 30px;
  flex-direction: column;
  top: 8rem;
`;

export const Company = styled.div`
  gap: 1rem;
  font-weight: bolder;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const CardExample = styled.button`
  width: 250px;
  border: none;
  color: black;
  height: 40px;
  background: white;
  border-radius: 50px;
  box-shadow: 0px 4px 4px #0000004d;
  font-weight: bolder;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: black;
    color: white;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  & > span {
    font-size: 1rem;
  }
`;

export const DefaultCardDiv = styled.div``;

// export const DefaultCardDiv = () => {
//   return (
//     <CardList>
//       <CardImageDiv>
//         <ExampleImage></ExampleImage>
//       </CardImageDiv>
//       <CardDetailDiv>
//         <CardTitle>마하카드</CardTitle>
//         <CardEvent>신규회원 연회비 캐쉬백 이벤트</CardEvent>
//         <BenefitDiv>
//           <Benefit>업종별 0.5~3% 적립</Benefit>|
//           <Benefit>업종별 0.5~3% 적립</Benefit>|
//           <Benefit>업종별 0.5~3% 적립</Benefit>
//         </BenefitDiv>
//         <ConditionDiv>
//           <p>국내 전용 30,000원/해외겸용 30,000원</p>
//           <p>전월 실적 50만원 이상</p>
//         </ConditionDiv>
//       </CardDetailDiv>
//       <DetailBtnDiv>
//         <button>자세히 보기</button>
//       </DetailBtnDiv>
//     </CardList>
//   );
// };

export const Btn = ({
  image,
  color,
  title,
  isOnlyMaah,
  isCardCompany,
  isSelected,
  isCategory,
  onClick,
}) => {
  let imgWidth = 48;
  let imgHeight = 48;

  if (title === "현대카드") {
    imgWidth = 60;
    imgHeight = 12;
  }

  return (
    <BtnWrapper>
      <CompanyBtn
        color={color}
        isOnlyMaah={isOnlyMaah}
        isSelected={isSelected}
        onClick={onClick}
        isCategory={isCategory}
        isCardCompany={isCardCompany}
      >
        <img src={image} alt={title} width={imgWidth} height={imgHeight} />
      </CompanyBtn>
      <span>{title}</span>
    </BtnWrapper>
  );
};

export const CompanyBtn = styled.button`
  transition: box-shadow 0.3s ease;
  width: 80px;
  display: flex;
  border: none;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80px;
  color: ${(props) => (props.isSelected ? "#fff" : "black")};
  border-radius: 20px;
  background: ${(props) =>
    props.isSelected
      ? props.isCardCompany
        ? "gray"
        : props.isOnlyMaah
        ? "gray"
        : props.isCategory
        ? "#000000"
        : "black"
      : props.color || "#feffce"};
  &:hover {
    box-shadow: 0px 4px 4px gray;
  }
`;
export const BtnDiv = styled.div`
  display: flex;
  gap: 1rem;

  // width: 69rem;
  // flex-wrap: wrap;
`;

export const CategoryDiv = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const CategoryBtn = styled.button`
  width: 129px;
  background-color: white;
  cursor: pointer;
  border-radius: 50px;
  border: none;
  display: flex;
  height: 50px;
  font-weight: bolder;
  font-size: 1rem;
  box-shadow: 0px 4px 4px #0000004d;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease, color 0.3s ease;
  color: ${(props) => (props.isSelected ? "#fff" : "#000")};
  background-color: ${(props) => (props.isSelected ? "#000" : "#fff")};

  &:hover {
    background: black;
    color: white;
    box-shadow: 0px 4px 4px gray;
  }
`;

export const FirstDiv = styled.div`
  margin-left: 1rem;
  display: flex;
  flex-direction: row;
  width: 69rem;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  margin-top: 1rem;
`;

export const SecondDiv = styled.div`
  margin-left: 1rem;
  display: flex;
  flex-direction: row;
  width: 69rem;
  align-items: center;
  justify-content: flex-start;
`;

export const ListDiv = styled.div`
  display: flex;
  gap: 1rem;
  position: relative;
  top: 10rem;
  flex-direction: column;
  align-items: center;
`;
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const CardList = styled.div`
  width: 1144px;
  height: 324px;
  gap: 2rem;
  display: flex;
  flex-direction: row;
  background: linear-gradient(180deg, #fff 0%, #f0f0f0 100%);
  position: relative;
  margin: 0 auto;
  border-radius: 10px;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const ImageOverlay = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
`;
const CardImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 180px;
`;
export const ExampleImage = ({ image }) => {
  return (
    <ImageOverlay>
      <img src={circle} alt="Circle" width="200" height="200" />
      <CardImage src={image} alt={image} />
    </ImageOverlay>
  );
};

export const CardImageDiv = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`;

export const CardDetailDiv = styled.div`
  width: 526px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  justify-content: center;
`;

export const CardEvent = styled.div`
  background-color: #e6e6e6;
  border-radius: 20px;
  font-weight: bolder;
  font-size: 1rem;
  padding: 10px;
`;

export const Benefit = styled.div`
  font-weight: bolder;
`;

export const BenefitDiv = styled.div`
  gap: 3rem;
  display: flex;
  align-items: center;
`;

export const ConditionDiv = styled.div`
  display: flex;
  color: #696161;
  gap: 12.5rem;
`;

export const CardTitle = styled.div`
  font-weight: bolder;
  font-size: 2rem;
`;

export const DetailBtnDiv = styled.div`
  display: flex;

  & > button {
    font-weight: bolder;
    border: none;
    color: white;
    border-radius: 5px;
    margin-right: 2rem;
    background: linear-gradient(
      180deg,
      rgba(188, 186, 179, 0.85) 0%,
      rgba(177, 173, 149, 0.97) 34%,
      rgba(130, 128, 117, 0.87) 98%
    );
    margin-top: 2rem;
    width: 199px;
    height: 56px;
    cursor: pointer;
    transition: box-shadow 0.3s ease;
  }

  & > button:hover {
    box-shadow: 0px 4px 4px gray;
  }
`;
