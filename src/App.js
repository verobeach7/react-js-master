import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const rotaionAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius:0px;
  }
  50% {
    border-radius: 100px;
  }
  100% {
    transform: rotate(360deg);
    border-radius:0px;
  }
`;

// 모든 Emoji에 적용됨
const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotaionAnimation} 1s linear infinite;
  // Box 내의 Emoji에만 영향을 미침
  ${Emoji} {
    &:hover {
      font-size: 96px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji as="p">🥳</Emoji>
      </Box>
      {/** Box 밖에 Emoji가 있기 때문에 pseudo selector에 의해서 선택되지 않음 */}
      <Emoji>🥳</Emoji>
    </Wrapper>
  );
}

export default App;
