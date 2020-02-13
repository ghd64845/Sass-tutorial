import React from "react";
import styled, { css } from "styled-components";

const Box = styled.div`
  /*props로 넣어준 값을 직접 전달해 줄 수 있습니다. */
  background: ${props => props.color || "blue"};
  padding: 1rem;
  display: flex;
  width: 1024px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Button = styled.button`
  background: #fff;
  color: #000;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;

  /* & 문자를 사용하여 Sass처럼 자기 자신 선택 가능*/
  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  /* 다음 코드는 inverted 값이 true일 때 특정 스탕리을 부여해 줍니다.*/
  ${props =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid #fff;
      color: #fff;
      &:hover {
        background: #fff;
        color: #000;
      }
    `};
  & + button {
    margin-left: 1rem;
  }
`;

const StyledComponent = () => {
  return (
    <Box color="#000">
      <Button>안녕하세요</Button>
      <Button inverted={true}>테두리만</Button>
    </Box>
  );
};

export default StyledComponent;
