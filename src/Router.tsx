// React Router Dom을 이용하여 라우터 만들기
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path=":coinId" element={<Coin />} />
        <Route path="/" element={<Coins />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
