import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import Video from "./components/Video";
import Dialog from "./components/Dialog";
import FinalMessage from "./components/FinalMessage";

const theme = {
  base: "#2b2e43",
  paper: "#2f3247",
  contrast: "#956ee5",
  pattern: null,
  font: "white",
  fontContrast: "#4c4f61",
  modified: null
};

function App() {
  const [play, setPlay] = useState(false);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Background />
        <Video play={play} />
        {play && <FinalMessage />}
        {!play && <Dialog setPlay={setPlay} />}
      </ThemeProvider>
    </div>
  );
}

export default App;

const Background = styled.div`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: ${p => p.theme.base};
`;
