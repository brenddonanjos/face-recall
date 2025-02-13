import { useEffect, useRef } from "react";
import styled from "styled-components";

const VideoContainer = styled.video`
  width: 100%;
  object-fit: cover;
  top: 0%;
  left: 0;
  border: 1px solid #314349;
  border-radius: 4px;
`;

const CanvasContainer = styled.canvas`
  visibility: hidden;
  width: 0;
  height: 0;
`;

interface CameraProps {
  onFrameCaptured: (frame: string) => void;
}

export default function Camera({ onFrameCaptured }: CameraProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: 1920,
          height: 1080,
        },
      });
      const video = videoRef.current;
      if (!video) {
        console.log("Vídeo não disponível");
        return;
      }
      video.srcObject = stream;
      video.onloadedmetadata = () => {
        video.play();
      };
    } catch (error) {
      console.error("Erro ao acessar a câmera:", error);
    }
  };

  const stopCamera = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (!video || !canvas) {
      console.log("Nenhum vídeo ou canvas disponível");
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      console.log("Não foi possível encontrar o contexto");
      return;
    }
    context.clearRect(0, 0, canvas?.width, canvas?.height);

    const stream = video.srcObject as MediaStream;
    if (!stream) {
      return;
    }
    stream.getTracks().forEach((track) => track.stop());
    video.srcObject = null;
  };

  const getFrame = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (!video || !canvas) {
      console.log("Nenhum vídeo ou canvas disponível");
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      console.log("Contexto 2D do canva indisponível");
      return;
    }

    context.drawImage(video, 0, 0, canvas?.width, canvas?.height);
    const frame = canvas.toDataURL();
    onFrameCaptured(frame);
  };

  useEffect(() => {
    startCamera();

    //FAZ A CAPTURA DOS FRAMES POR 3 SEGUNDOS
    const interval = setInterval(() => {
      getFrame();
    }, 500);

    setTimeout(() => {
      clearInterval(interval);
      stopCamera();
    }, 3000);
  }, [videoRef, canvasRef]);

  return (
    <>
      <VideoContainer
        ref={videoRef}
        autoPlay
        muted
      />
      <CanvasContainer ref={canvasRef} />
    </>
  );
}
