import React from "react";
import { BrowserRouter } from "react-router-dom";
import Greeting from "./Greeting";

const App = () => {
  return(
    <BrowserRouter>
        <Greeting />
    </BrowserRouter>
  )
}

export default App;