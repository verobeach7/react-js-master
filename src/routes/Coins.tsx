import styled from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
`;

// Coins 컴포넌트
function Coins() {
  return <Title>Coins</Title>;
}

export default Coins;
