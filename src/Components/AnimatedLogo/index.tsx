import styled from "styled-components";

import logo from "../../Images/logo.png";
import logoSmile from "../../Images/logo-smile.png";
import logoBlink from "../../Images/logo-blink.png";
import { useEffect, useState } from "react";

const LogoImg = styled.img`
  height: 60px;
  width: 60px;
  align-self: center;
  transition: 0.4s ease-in-out;
  cursor: pointer;
  animation: rotate 2s ease-in-out 2;

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const images = [logo, logoSmile, logoBlink, logoSmile, logo];

export default function AnimatedLogo() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 1000); // Troca de imagem a cada 1 segundo
    return () => clearInterval(interval);
  }, []);

  return <LogoImg src={images[currentImage]} alt="Robô" />;
}
