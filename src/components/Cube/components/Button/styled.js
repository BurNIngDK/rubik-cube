import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";

const pressAnimation = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  }
  50% {
    transform: scale(0.92);
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  }
`;

export const Button = styled.button`
  width: 100px;
  margin: 10px;
  padding: 12px 24px;
  font-size: 18px;
  font-weight: bold;
  color: white;
  background-color: #6c5ce7;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  outline: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.25);
  }

  &:focus {
    outline: none;
  }

  &:active {
    animation: ${pressAnimation} 0.4s ease;
    background-color: #4b42f5;
  }
`;
