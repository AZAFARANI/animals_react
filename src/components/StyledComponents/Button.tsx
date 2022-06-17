import styled from "styled-components";

interface IButtonProps {
  color?: string;
  background?: string;
}

export const Button = styled.button`
  color: ${(props: IButtonProps) => props.color || "black"};
  background-color: ${(props: IButtonProps) => props.background || "white"};
  padding: 8px 10px;

  border-radius: 5px;

  box-shadow: 3px 3px 3px #00000040;

  border: 1px solid white;
`;

export const ShowMoreButton = styled(Button)`
  background-color: #ffffff00;

  border: solid 2px black;
`;
