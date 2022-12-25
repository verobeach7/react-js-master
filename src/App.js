import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

// .attrs를 이용하여 공통적인 속성을 부여할 수 있음
const Input = styled.input.attrs({ required: true, maxLength: 10 })`
  background-color: tomato;
`;

function App() {
  return (
    <Father as="header">
      <Btn>Submit</Btn>
      {/* Btn에 as를 이용하여 다른 태그로 바꾸어 이용할 수 있음 */}
      <Btn as="a" href="/">
        Log in
      </Btn>
      <hr />
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
    </Father>
  );
}

export default App;
