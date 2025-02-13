import CardsContainer from "../../CardsContainer";
import styled from "styled-components";

const Thumbnail = styled.img`
  width: 200px;
  border-radius: 6px;
`;

const Label = styled.label`
  display: flex;
  gap: 10px;
  padding: 15px;
`;
export default function FrameList({ frames }: { frames: string[] }) {
  return (
    <>
      <Label>
        <strong>Frames Capturados:</strong> {frames.length}
      </Label>
      <CardsContainer>
        {frames.map((frame, key) => (
          <Thumbnail key={key} src={frame} />
        ))}
      </CardsContainer>
    </>
  );
}
