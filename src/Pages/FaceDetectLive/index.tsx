import { useState } from "react";
import styled from "styled-components";
import Camera from "../../Components/LiveCam/Camera";
import FrameList from "../../Components/LiveCam/FrameList";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #314349;
  padding: 10px;
  border-radius: 4px;
`;

const CameraContainer = styled.div`
  width: 600px;
  border-radius: 4px;
`;

export default function FaceDetectLive() {
  const [frames, setFrames] = useState<string[]>([]);

  const handleFrameCaptured = (frame: string) => {
    setFrames((prevFrames) => [...prevFrames, frame]);
  };

  return (
    <PageContainer>
      <CameraContainer>
        <Camera onFrameCaptured={handleFrameCaptured} />
      </CameraContainer>
      <FrameList frames={frames} />

      <p>
        <i>
          (* Esses frames serão enviados para análise do servidor, via stream
          (websocket) ou via requisição HTTP)
        </i>
      </p>
    </PageContainer>
  );
}
