
import styled from "styled-components";

const HomeContainer = styled.div `
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`

export default function Home() {
  return (
    <HomeContainer>
      <h1>Face Recall</h1>
      <h2>Hello World!</h2>
      <p>I am the Face Recall, and I am here to help you!</p>
    </HomeContainer>
  );
}
