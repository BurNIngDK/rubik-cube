import { Button as StyledButton } from "./styled";

export const Button = ({ handleOnClick, children, ...props }) => {
  return <StyledButton onClick={handleOnClick}>{children}</StyledButton>;
};
