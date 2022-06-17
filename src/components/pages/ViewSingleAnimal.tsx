import { isValidInputTimeValue } from "@testing-library/user-event/dist/utils";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IAnimal from "../../models/IAnimal";
import { FeedAnimal } from "../FeedAnimal";
import {
  ImgWrapper,
  SingleAnimalWrapper,
  Wrapper,
} from "../StyledComponents/Wrapper";

import { Animals } from "./Animals";

export const ViewSingleAnimal = () => {
  const [animal, setAnimal] = useState<IAnimal>({
    id: 2,
    imageUrl: "",
    isFed: false,
    lastFed: "",
    longDescription: "",
    name: "",
    shortDescription: "",
    yearOfBirth: 3,
  });

  let params = useParams();
  let paramsAsNumber: number = Number(params.id);

  const feedAnimal = (temp: IAnimal) => {
    setAnimal(temp);

    let animalsFromStorage: string = localStorage.getItem("animals") || "";
    let animalsAsObjects: IAnimal[] = JSON.parse(animalsFromStorage);

    let FindAnimal = animalsAsObjects.findIndex(
      (element) => element.id === paramsAsNumber
    );

    animalsAsObjects[FindAnimal].isFed = true;
    animalsAsObjects[FindAnimal].lastFed = temp.lastFed;

    let animalsAsText = JSON.stringify(animalsAsObjects);

    let animalsToStorage = localStorage.setItem("animals", animalsAsText);
  };

  useEffect(() => {
    let animalsFromStorage: string = localStorage.getItem("animals") || "";
    let animalsAsObjects: IAnimal[] = JSON.parse(animalsFromStorage);

    let SpecificAnimal = animalsAsObjects.find((a) => a.id === paramsAsNumber);

    if (SpecificAnimal) setAnimal(SpecificAnimal);
  }, []);

  return (
    <>
      <SingleAnimalWrapper>
        <ImgWrapper width="100%" height="600px">
          <img src={animal?.imageUrl}></img>
        </ImgWrapper>
        <h2>{animal?.name}</h2>
        <p>{animal?.longDescription}</p>
        <p>Senast matad: {animal?.lastFed}</p>

        {animal.isFed === false ? (
          <FeedAnimal animal={animal} ChangeLastFed={feedAnimal}></FeedAnimal>
        ) : (
          <>
            <p>Mätt och Belåten! </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              className="bi bi-emoji-smile"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
            </svg>
          </>
        )}
      </SingleAnimalWrapper>
    </>
  );
};
