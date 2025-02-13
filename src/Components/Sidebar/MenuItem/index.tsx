import styled from "styled-components";

const MenuItem = styled.div<{ $isActive: boolean; }>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.$isActive ? "flex-start" : "center"};
  font-size: 15px;
  color: white;
  padding: ${(props) => props.$isActive ? "10px" : "10px 0" } ;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.4s;

  > span {
    display: ${(props) => props.$isActive ? "block" : "none"};
    margin-left: 10px;
  }

  &:hover {
    background-color: #41626d;
  }
`;

export default MenuItem;