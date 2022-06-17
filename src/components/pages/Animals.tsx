import axios from "axios";
import { useEffect, useState } from "react";
import IAnimal from "../../models/IAnimal";
import { Animal } from "./Animal";

export const Animals = () => {
  let animalsFromStorage: string = localStorage.getItem("animals") || "[]";
  let animalsAsObjects: IAnimal[] = JSON.parse(animalsFromStorage);

  const [animals, setAnimals] = useState<IAnimal[]>(animalsAsObjects);

  useEffect(() => {
    if (animalsAsObjects.length !== 0) return;

    axios
      .get<IAnimal[]>("https://animals.azurewebsites.net/api/animals")
      .then((response) => {
        console.log(response.data);
        response.data[0].imageUrl = "https://via.placeholder.com/1337";
        response.data[1].imageUrl = "https://via.placeholder.com/1337";
        setAnimals(response.data);
      });
  });

  let animalsAsHtml = animals.map((animal) => {
    return <Animal animal={animal} key={animal.id}></Animal>;
  });

  let animalsAsText = JSON.stringify(animals);
  let animalsToStorage = localStorage.setItem("animals", animalsAsText);

  console.log(animals.length);

  return <>{animalsAsHtml}</>;
};
