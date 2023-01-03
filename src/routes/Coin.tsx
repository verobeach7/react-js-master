import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

interface RouteState {
  state: { name: string; rank: number };
}

// Coin 컴포넌트
function Coin() {
  const [loading, setLoading] = useState(true);
  // const { coinId } = useParams();
  // Coins에서 Link의 state를 이용해서 보내온 데이터를 useLocation으로 받아서 사용
  const { state } = useLocation() as RouteState;
  console.log(state);
  return (
    <Container>
      <Header>
        {/** state가 존재하면 .name을 불러오고, 없으면 "Loading.."을 보여줌, 직접 coin 페이지로 이동할 때 발생하는 에러를 방지 */}
        <Title>{state?.name || "Loading.."}</Title>
      </Header>
      {loading ? <Loader>"Loading..."</Loader> : null}
    </Container>
  );
}

export default Coin;
