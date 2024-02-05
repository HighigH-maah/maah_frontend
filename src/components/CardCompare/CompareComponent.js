import styled from "styled-components";
import circle from "../../assets/images/circle.png";
import blackVelvet from "../../assets/images/Black_velvet.png";
export const SelectDiv = styled.div`
  background-color: lightgray;
  position: relative;
  height: 380px;
  margin: 0 auto;
  color: black;
  display: flex;
  width: 1144px;
  gap: 2rem;
  border-radius: 30px;
  flex-direction: column;
  top: 5rem;
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

export const Btn = ({ image, color, title }) => {
  let imgWidth = 48;
  let imgHeight = 48;

  if (title === "현대카드") {
    imgWidth = 60;
    imgHeight = 12;
  }

  return (
    <BtnWrapper>
      <CompanyBtn color={color}>
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
  color: black;
  border-radius: 20px;
  background-color: ${(props) => props.color || "#feffce"};

  &:hover {
    box-shadow: 0px 4px 4px gray;
  }
`;
export const BtnDiv = styled.div`
  display: flex;
  gap: 1rem;
`;

export const CategoryDiv = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const CategoryBtn = styled.div`
  width: 129px;
  background-color: white;
  cursor: pointer;
  border-radius: 50px;
  display: flex;
  height: 50px;
  font-size: 1rem;
  box-shadow: 0px 4px 4px #0000004d;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;

  &:hover {
    background: black;
    color: white;
  }
`;

export const FirstDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 69rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
`;

export const SecondDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 69rem;
  justify-content: center;
  align-items: center;
`;

export const ListDiv = styled.div`
  display: flex;
  gap: 1rem;
  position: relative;
  top: 10rem;
  flex-direction: column;
  align-items: center;
`;

export const CardList = styled.div`
  width: 1144px;
  height: 324px;
  gap: 2rem;
  display: flex;
  flex-direction: row;
  background-color: white;
  position: relative;
  margin: 0 auto;
  border-radius: 10px;
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
export const ExampleImage = () => {
  return (
    <ImageOverlay>
      <img src={circle} alt="Circle" width="200" height="200" />
      <CardImage src={blackVelvet} alt="Black Velvet" />
    </ImageOverlay>
  );
};

export const CardImageDiv = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`;

export const CardDetailDiv = styled.div`
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
  color: lightgray;
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
    border-radius: 5px;
    margin-right: 2rem;
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
