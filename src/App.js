import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

// keyframes를 이용하여 애니메이션을 만들어 사용할 수 있음
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

// ${}를 이용하여 만들어 놓은 애니메이션을 가져다 사용
const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotaionAnimation} 1s linear infinite;
  span {
    font-size: 36px;
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
        <span>🥳</span>
      </Box>
    </Wrapper>
  );
}

export default App;
