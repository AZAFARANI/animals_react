import { Link } from "react-router-dom";
import styled from "styled-components";

interface IWrapperProps {
  width?: string;
  height?: string;
}

export const Wrapper = styled.div`
  max-width: ${(props: IWrapperProps) => props.width || "100%"};
  height: ${(props: IWrapperProps) => props.height || "500"};

  padding: 20px 40px;
  border-radius: 5px;

  box-shadow: 3px 3px 3px #00000069;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #fefbf5;

  cursor: pointer;
`;

export const ImgWrapper = styled(Wrapper)`
  padding: 0;
  pointer-events: none;
  width: 90%;
`;

export const SingleAnimalWrapper = styled(Wrapper)``;
