import IAnimal from "../models/IAnimal";
import { Button } from "./StyledComponents/Button";

interface IFeedAnimalProps {
  ChangeLastFed(animal: IAnimal): void;
  animal: IAnimal;
}

export const FeedAnimal = (props: IFeedAnimalProps) => {
  const handleClick = () => {
    let temp = { ...props.animal };
    temp.isFed = true;
    temp.lastFed = new Date().toISOString();

    props.ChangeLastFed(temp);
  };

  return (
    <>
      <Button onClick={handleClick} color="white" background="blue">
        Mata mig
      </Button>
    </>
  );
};
