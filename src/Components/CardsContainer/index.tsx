import styled from "styled-components";

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 6 colunas de tamanhos iguais */
  gap: 16px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 830px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

export default CardsContainer;
