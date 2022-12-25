import styled from "styled-components";

// styled.정식태그명!!!
const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  // props.attributes-name!!!
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Circle = styled(Box)`
  border-radius: 50px;
`;

function App() {
  return (
    <Father>
      <Box bgColor="teal" />
      <Circle bgColor="tomato" />
    </Father>
  );
}

export default App;
