import { Link } from "react-router-dom";
import IAnimal from "../../models/IAnimal";
import { Button, ShowMoreButton } from "../StyledComponents/Button";
import { ImgWrapper, Wrapper } from "../StyledComponents/Wrapper";

interface IAnimalProps {
  animal: IAnimal;
}
export const Animal = (props: IAnimalProps) => {
  return (
    <>
      <Wrapper width="20%" height="500px">
        <Link to={"/" + props.animal.id}>
          <ImgWrapper width="100%" height="200px">
            <img src={props.animal.imageUrl}></img>
          </ImgWrapper>
          <h2>{props.animal.name}</h2>
          <p>{props.animal.shortDescription}</p>
          <ShowMoreButton>Visa mer</ShowMoreButton>
        </Link>
      </Wrapper>
    </>
  );
};
