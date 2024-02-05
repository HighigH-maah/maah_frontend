import { useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import blackVelvet from "../../assets/images/Black_velvet.png";
import whiteVelvet from "../../assets/images/White_velvet.png";
import blackBack from "../../assets/images/black-back.png";
import whiteBack from "../../assets/images/white-back.png";
import reverse from "../../assets/images/reverse.png";


const CardDesign = styled.div`
  display: inline-block;
  width: 300px;
`;

const CardImageDiv = styled.div`
  height: 325px;
`;

const CardImage = styled.img`
  width: 200px;
  height: 300px;
  transition: all 0.15s linear;
  transform: scale(1);
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
  margin-top: 5px;
`;

export default function SimpleSlider() {
    const [black, setBlack] = useState(true);
    const [white, setWhite] = useState(true);

    const applicationTerm = (prop) => {
    let modal = document.getElementById("cardApplicationTerms");
    console.log(modal);
    modal.style.visibility = "visible";
    };

    const reverseCard = (prop) => {
        if (prop === "black") {
          let card = document.getElementById("blackValvet");
          card.style.transform = "rotateY(90deg)";
          setTimeout(function () {
            card.style.transform = "rotateY(0deg)";
            setBlack(!black);
          }, 100);
        } else if (prop === "white") {
          let card = document.getElementById("whiteValvet");
          card.style.transform = "rotateY(90deg)";
          setTimeout(function () {
            card.style.transform = "rotateY(0deg)";
            setWhite(!white);
          }, 100);
        }
      };
      var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <Slider {...settings}>
        <CardDesign>
        <CardImageDiv>
            <CardImage
            id="blackValvet"
            onClick={() => {
                applicationTerm("black");
            }}
            src={black ? blackVelvet : blackBack}
            ></CardImage>
        </CardImageDiv>
        <CardName>Black Velvet</CardName>
        <ReverseButton
            type="button"
            onClick={() => {
            reverseCard("black");
            }}
        >
            <ReverseIcon src={reverse}></ReverseIcon>
        </ReverseButton>
        </CardDesign>
        <CardDesign>
        <CardImageDiv>
            <CardImage
            id="whiteValvet"
            onClick={() => {
                applicationTerm("white");
            }}
            src={white ? whiteVelvet : whiteBack}
            ></CardImage>
        </CardImageDiv>
        <CardName>White Velvet</CardName>
        <ReverseButton
            type="button"
            onClick={() => {
            reverseCard("white");
            }}
        >
            <ReverseIcon src={reverse}></ReverseIcon>
        </ReverseButton>
        </CardDesign>
        <CardDesign>
        <CardImageDiv>
            <CardImage
            id="blackValvet"
            onClick={() => {
                applicationTerm("black");
            }}
            src={black ? blackVelvet : blackBack}
            ></CardImage>
        </CardImageDiv>
        <CardName>Black Velvet</CardName>
        <ReverseButton
            type="button"
            onClick={() => {
            reverseCard("black");
            }}
        >
            <ReverseIcon src={reverse}></ReverseIcon>
        </ReverseButton>
        </CardDesign>
        <CardDesign>
        <CardImageDiv>
            <CardImage
            id="whiteValvet"
            onClick={() => {
                applicationTerm("white");
            }}
            src={white ? whiteVelvet : whiteBack}
            ></CardImage>
        </CardImageDiv>
        <CardName>White Velvet</CardName>
        <ReverseButton
            type="button"
            onClick={() => {
            reverseCard("white");
            }}
        >
            <ReverseIcon src={reverse}></ReverseIcon>
        </ReverseButton>
        </CardDesign>
        <CardDesign>
        <CardImageDiv>
            <CardImage
            id="whiteValvet"
            onClick={() => {
                applicationTerm("white");
            }}
            src={white ? whiteVelvet : whiteBack}
            ></CardImage>
        </CardImageDiv>
        <CardName>White Velvet</CardName>
        <ReverseButton
            type="button"
            onClick={() => {
            reverseCard("white");
            }}
        >
            <ReverseIcon src={reverse}></ReverseIcon>
        </ReverseButton>
        </CardDesign>
        <CardDesign>
        <CardImageDiv>
            <CardImage
            id="whiteValvet"
            onClick={() => {
                applicationTerm("white");
            }}
            src={white ? whiteVelvet : whiteBack}
            ></CardImage>
        </CardImageDiv>
        <CardName>White Velvet</CardName>
        <ReverseButton
            type="button"
            onClick={() => {
            reverseCard("white");
            }}
        >
            <ReverseIcon src={reverse}></ReverseIcon>
        </ReverseButton>
        </CardDesign>
    </Slider>
  );
}