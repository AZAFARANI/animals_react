import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Animals } from "./components/pages/Animals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Animal } from "./components/pages/Animal";
import { ViewSingleAnimal } from "./components/pages/ViewSingleAnimal";
import { Layout } from "./components/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Animals />}></Route>
            <Route
              path="/:id"
              element={<ViewSingleAnimal></ViewSingleAnimal>}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
