import { useEffect, useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import reverse from "../../assets/images/reverse.png";
import prevArrow from "../../assets/images/prev_arrow.png";
import card1 from "../../assets/images/card1.png";
import card3 from "../../assets/images/card3.png";
import card4 from "../../assets/images/card4.png";
import card5 from "../../assets/images/card5.png";
import axios from "axios";

const StyledSlider = styled(Slider)`
  margin-left: 5%;
  width: 90%;
  position: relative;
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
`;

const CardDesign = styled.div`
  display: inline-block;
  width: 300px;
`;

const CardImageDiv = styled.div`
  display: flex;
  justify-content: center;
  height: 360px;
`;

const CardImage = styled.img`
  margin-top: 35px;
  width: 200px;
  height: 300px;
  transition: all 0.15s linear;
  cursor: pointer;
  &:hover {
    transform: scale(1.12) !important;
    transform-origin: bottom;
  }
`;

const CardName = styled.div`
  font-size: 25px;
`;

const ReverseButton = styled.button`
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
  bottom: 70px;
`;

const ReverseIcon = styled.img`
  margin: auto;
  margin-top: 5px;
`;

const Pre = styled.img`
  width: 40px;
  height: 40px;
  position: absolute;
`;

const NextTo = styled.img`
  width: 40px;
  height: 40px;
  position: absolute;
  transform: rotateY(180deg);
`;

export default function CardSlider() {
  const [cardStatus, setCardStatus] = useState([true, true, true, true, true]);
  const [hiCardImageList, setHiCardImageList] = useState([]);

  useEffect(() => {
    axios
    .post("/getHiCardImages", {member_id: "user3"})
    .then(function (res) {
      setHiCardImageList(res.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }, []);

  const applicationTerm = () => {
    let modal = document.getElementById("cardApplicationTerms");
    modal.style.visibility = "visible";
  };

  const reverseCard = (prop) => {
    let cards = document.getElementsByClassName('card');
    cards[prop].style.transform = "rotateY(90deg)";
    setTimeout(function () {
      cardStatus[prop] = !cardStatus[prop];
      setCardStatus([...cardStatus]);
      cards[prop].style.transform = "rotateY(0deg)";
    }, 150);
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    nextArrow: <NextTo src={prevArrow}></NextTo>,
    prevArrow: <Pre src={prevArrow}></Pre>,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <StyledSlider {...settings}>
      {hiCardImageList.map((card, index) => (
        <CardDesign key={index}>
          <CardImageDiv>
            <CardImage
              className='card'
              src={cardStatus[index] ? card.hiCardImageFrontPath : card.hiCardImageRearPath}
              onClick={() => {
                applicationTerm();
              }}
            ></CardImage>
          </CardImageDiv>
          <CardName>{card.hiCardImageName}</CardName>
          <ReverseButton
            type="button"
            onClick={() => {
              reverseCard(index);
            }}
          >
            <ReverseIcon src={reverse}></ReverseIcon>
          </ReverseButton>
        </CardDesign>
      ))}
      <CardDesign>
        <CardImageDiv>
          <CardImage
            className="card1"
            src={card1}
            onClick={() => {
              applicationTerm("card1");
            }}
          ></CardImage>
        </CardImageDiv>
        <CardName>Card1</CardName>
        <ReverseButton type="button"></ReverseButton>
      </CardDesign>
      <CardDesign>
        <CardImageDiv>
          <CardImage
            className="card2"
            src='https://maah-s3.s3.ap-northeast-2.amazonaws.com/card2.png'
            onClick={() => {
              applicationTerm("card2");
            }}
          ></CardImage>
        </CardImageDiv>
        <CardName>Card2</CardName>
        <ReverseButton type="button"></ReverseButton>
      </CardDesign>
      <CardDesign>
        <CardImageDiv>
          <CardImage
            className="card3"
            src={card3}
            onClick={() => {
              applicationTerm("card3");
            }}
          ></CardImage>
        </CardImageDiv>
        <CardName>Card3</CardName>
        <ReverseButton type="button"></ReverseButton>
      </CardDesign>
      <CardDesign>
        <CardImageDiv>
          <CardImage
            className="card4"
            src={card4}
            onClick={() => {
              applicationTerm("card4");
            }}
          ></CardImage>
        </CardImageDiv>
        <CardName>Card4</CardName>
        <ReverseButton type="button"></ReverseButton>
      </CardDesign>
      <CardDesign>
        <CardImageDiv>
          <CardImage
            className="card5"
            src={card5}
            onClick={() => {
              applicationTerm("card5");
            }}
          ></CardImage>
        </CardImageDiv>
        <CardName>Card5</CardName>
        <ReverseButton type="button"></ReverseButton>
      </CardDesign>
    </StyledSlider>
  );
}
