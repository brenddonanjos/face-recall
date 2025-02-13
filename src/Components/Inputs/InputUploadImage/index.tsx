import { useState } from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 5px 0px 15px 0px;
`;

const PreviewImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 5px;
  object-fit: cover;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  background-color: #0093bc;
  color: white;
  font-size: 14px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 200px;

  &:hover {
    background-color: #115293;
  }
`;
const Input = styled.input`
  padding: 15px 0px;
  font-size: 15px;
  cursor: pointer;
`;
export default function InputImageUpload(props: { name: string }) {
  const [image, setImage] = useState<string | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleTakePhoto = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      const video = document.createElement("video");
      video.srcObject = stream;
      await video.play();

      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const context = canvas.getContext("2d");
      context?.drawImage(video, 0, 0, canvas.width, canvas.height);

      setImage(canvas.toDataURL("image/png"));
      stream.getTracks().forEach((track) => track.stop()); // Para a Câmera instantaneamente após tirar a foto
    } catch (error) {
      console.error("Erro ao acessar a câmera:", error);
    }
  };

  return (
    <InputContainer>
      {image && <PreviewImage src={image} alt="Preview" />}
      <Input
        type="file"
        accept="image/*"
        onChange={handleFileUpload}
        name={props.name}
      />
      <Button type="button" onClick={handleTakePhoto}>
        Tirar uma Foto
      </Button>
    </InputContainer>
  );
}
