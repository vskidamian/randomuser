import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 8px;
  background-color: rgba(227, 242, 253, 1);
  color: #1e88e5;
  font-size: 14px;
  line-height: 20px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  cursor: pointer;
  border: none;
  padding: 0.5rem 1rem;
  width: fit-content;
`;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...props }: ButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
