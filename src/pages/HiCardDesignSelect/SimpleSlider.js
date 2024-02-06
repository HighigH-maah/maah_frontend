import { useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import blackVelvetImg from "../../assets/images/black_velvet.png";
import blackVelvetBack from "../../assets/images/black_velvet_back.png";
import whiteVelvetImg from "../../assets/images/white_velvet.png";
import whiteVelvetBack from "../../assets/images/white_velvet_back.png";
import midnightAshImg from "../../assets/images/midnight_ash.png";
import midnightAshBack from "../../assets/images/midnight_ash_back.png";
import blueHoloImg from "../../assets/images/blue_holo.png";
import blueHoloBack from "../../assets/images/blue_holo_back.png";
import pinkHoloImg from "../../assets/images/pink_holo.png";
import pinkHoloBack from "../../assets/images/pink_holo_back.png";
import reverse from "../../assets/images/reverse.png";
import prevArrow from "../../assets/images/prev_arrow.png";
import card1 from "../../assets/images/card1.png";
import card2 from "../../assets/images/card2.png";
import card3 from "../../assets/images/card3.png";
import card4 from "../../assets/images/card4.png";
import card5 from "../../assets/images/card5.png";

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

export default function SimpleSlider() {
  const [blackVelvet, setBlackVelvet] = useState(true);
  const [whiteVelvet, setWhiteVelvet] = useState(true);
  const [midnightAsh, setMidnightAsh] = useState(true);
  const [blueHolo, setBlueHolo] = useState(true);
  const [pinkHolo, setPinkHolo] = useState(true);

  const applicationTerm = (prop) => {
    let modal = document.getElementById("cardApplicationTerms");
    modal.style.visibility = "visible";
  };

  const reverseCard = (prop) => {
    let cards = document.getElementsByClassName(prop);
    cards[0].style.transform = "rotateY(90deg)";
    setTimeout(function () {
      switch (prop) {
        case "blackVelvet":
          setBlackVelvet(!blackVelvet);
          break;
        case "whiteVelvet":
          setWhiteVelvet(!whiteVelvet);
          break;
        case "midnightAsh":
          setMidnightAsh(!midnightAsh);
          break;
        case "blueHolo":
          setBlueHolo(!blueHolo);
          break;
        case "pinkHolo":
          setPinkHolo(!pinkHolo);
          break;
        default:
          break;
      }
      cards[0].style.transform = "rotateY(0deg)";
    }, 100);
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
      <CardDesign>
        <CardImageDiv>
          <CardImage
            className="blackVelvet"
            src={blackVelvet ? blackVelvetImg : blackVelvetBack}
            onClick={() => {
              applicationTerm("blackVelvet");
            }}
          ></CardImage>
        </CardImageDiv>
        <CardName>Black Velvet</CardName>
        <ReverseButton
          type="button"
          onClick={() => {
            reverseCard("blackVelvet");
          }}
        >
          <ReverseIcon src={reverse}></ReverseIcon>
        </ReverseButton>
      </CardDesign>
      <CardDesign>
        <CardImageDiv>
          <CardImage
            className="whiteVelvet"
            src={whiteVelvet ? whiteVelvetImg : whiteVelvetBack}
            onClick={() => {
              applicationTerm("whiteVelvet");
            }}
          ></CardImage>
        </CardImageDiv>
        <CardName>White Velvet</CardName>
        <ReverseButton
          type="button"
          onClick={() => {
            reverseCard("whiteVelvet");
          }}
        >
          <ReverseIcon src={reverse}></ReverseIcon>
        </ReverseButton>
      </CardDesign>
      <CardDesign>
        <CardImageDiv>
          <CardImage
            className="midnightAsh"
            src={midnightAsh ? midnightAshImg : midnightAshBack}
            onClick={() => {
              applicationTerm("midnightAsh");
            }}
          ></CardImage>
        </CardImageDiv>
        <CardName>Midnight Ash</CardName>
        <ReverseButton
          type="button"
          onClick={() => {
            reverseCard("midnightAsh");
          }}
        >
          <ReverseIcon src={reverse}></ReverseIcon>
        </ReverseButton>
      </CardDesign>
      <CardDesign>
        <CardImageDiv>
          <CardImage
            className="blueHolo"
            src={blueHolo ? blueHoloImg : blueHoloBack}
            onClick={() => {
              applicationTerm("blueHolo");
            }}
          ></CardImage>
        </CardImageDiv>
        <CardName>Blue Holo</CardName>
        <ReverseButton
          type="button"
          onClick={() => {
            reverseCard("blueHolo");
          }}
        >
          <ReverseIcon src={reverse}></ReverseIcon>
        </ReverseButton>
      </CardDesign>
      <CardDesign>
        <CardImageDiv>
          <CardImage
            className="pinkHolo"
            src={pinkHolo ? pinkHoloImg : pinkHoloBack}
            onClick={() => {
              applicationTerm("pinkHolo");
            }}
          ></CardImage>
        </CardImageDiv>
        <CardName>Pink Holo</CardName>
        <ReverseButton
          type="button"
          onClick={() => {
            reverseCard("pinkHolo");
          }}
        >
          <ReverseIcon src={reverse}></ReverseIcon>
        </ReverseButton>
      </CardDesign>
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
            src={card2}
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
