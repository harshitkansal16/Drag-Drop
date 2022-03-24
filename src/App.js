import React from "react";
import "./App.scss";
import ContextWrapper from "./appContext";
import HeaderButtons from "./buttons";
import Curriculum from "./components";

function App() {
  return (
    <ContextWrapper>
      <Curriculum />
      <HeaderButtons />
    </ContextWrapper>
  );
}

export default App;