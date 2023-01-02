import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${(props) => props.borderColor};
`;

// ?를 이용해 required가 아닌 optional로 설정
interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

// borderColor는 optional이라 있을 수도 있고 없을 수도 있음
// text = "default text": 노말 자바스크립트 구문으로 default value를 준 것
function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
  // ??를 이용해 없을 때 default값을 설정해줌, borderColor가 없다면 bgColor로 설정해줌
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
}

/* function Circle(props: CircleProps) {
  return <Container bgColor={props.bgColor} />;
} */

export default Circle;
