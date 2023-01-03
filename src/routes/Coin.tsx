import { useParams } from "react-router-dom";

// Coin 컴포넌트
function Coin() {
  const { coinId } = useParams();
  return <h1>Coin: {coinId}</h1>;
}

export default Coin;
