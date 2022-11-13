import styled from "@emotion/styled";

export const H1 = styled.h1`
  color: #000;
  font-size: 7rem;
  margin: 0;
  margin-bottom: 20px;

  &.plus {
    color: #2a9d8f;
  }
  &.minus {
    color: #e63946;
  }
`;
export const H2 = styled.h2`
  font-size: 2rem;
  margin: 0;
  color: #556581;
`;

export const Button = styled.button`
  background: transparent;
  border: 2px solid white;
  text-align: center;
  font-size: 22px;
  border-radius: 15px;
  padding: 10px 25px;
  cursor: pointer;
  margin: 0 10px;
  transition: all 0.05s ease-in-out;

  &.minus {
    background-color: #e63946;
    color: #fff;
    box-shadow: 0 4px 0 darken(#e63946, 10%);
    border: 1px solid darken(#e63946, 15%);
  }

  &.plus {
    background-color: #2a9d8f;
    color: #fff;
    box-shadow: 0 4px 0 darken(#2a9d8f, 10%);
    border: 1px solid darken(#2a9d8f, 15%);
  }

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(2px);
    box-shadow: none;
  }
`;