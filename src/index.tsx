import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { theme } from "./theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <themeProvider>는 styled-components의 컴포넌트 중 하나
  // ThemeProvider 내에 App 컴포넌트가 존재하기 때문에 App에서 theme에 접근 가능
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
