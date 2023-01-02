import React from "react";
import ReactDOM from "react-dom/client";
// dark모드와 light모드를 구분해서 적용하도록 theme을 정함
import { ThemeProvider } from "styled-components";
import App from "./App";

// 반드시 theme 내부의 property 이름이 똑같게 해야함
const darkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111",
};

const lightTheme = {
  textColor: "#111",
  backgroundColor: "whitesmoke",
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={darkTheme}>
    <App />
  </ThemeProvider>
);
