import styled from "styled-components";
import logotype from "../../Images/logo.png";

const LogoContainer = styled.div`
  display: flex;
  align-items: self-end;

  > span {
    font-size: 24px;
    font-weight: 600;
    margin-left: 8px;
  }
`;

const LogoImage = styled.img<{ size: number }>`
  height: ${(props) => props.size}em;

  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  &:hover {
    filter: drop-shadow(0 0 2em #61dafbaa);
  }
`;

export default function Logo( props : { size: number; typography?: boolean }) {
  return (
    <LogoContainer>
      <LogoImage src={logotype} size={props.size} alt="Face Recall logo" />
      {props.typography && <span>FaceRecall</span>}
    </LogoContainer>
  );
}
