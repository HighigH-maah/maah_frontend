import React, { useState } from "react";
import styled from "styled-components";
import chevronDown from "../../assets/icon/chevronDown.png";
import chevronUp from "../../assets/icon/chevronUp.png";

const FAQContainer = styled.div`
  margin: 1rem 0;
  width: 80rem;
`;

const Question = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #f0f0f0;
  border-radius: 1rem;
  cursor: pointer;
`;

const ChevronIcon = styled.img`
  width: 2rem;
  height: 2rem;
`;

const Answer = styled.div`
  padding: 1rem;
  background-color: #ffffff;
  border-radius: 1rem;
  margin-top: 1rem;
`;

const FAQ = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <FAQContainer>
      <Question onClick={toggleAccordion}>
        <p className="question">{question}</p>
        <ChevronIcon src={isOpen ? chevronUp : chevronDown} alt="chevronIcon" />
      </Question>
      {isOpen && <Answer>{answer}</Answer>}
    </FAQContainer>
  );
};

export default FAQ;
