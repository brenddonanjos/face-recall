
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
      <h2>Olá mundo!</h2>
      <p>Eu sou o Face Recall e estou aqui pra ajudá-lo!</p>
    </HomeContainer>
  );
}
