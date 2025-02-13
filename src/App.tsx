import styled from "styled-components";
import Header from "./Components/Header";
import { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home";
import FaceRegister from "./Pages/FaceRegister";
import FaceDetectUpload from "./Pages/FaceDetectUpload";
import FaceDetectLive from "./Pages/FaceDetectLive";

const AppContainer = styled.div`
  display: flex;
  height: 100%;
  margin: 0 auto;
  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #223237;
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
`;

function App() {
  const [sidebar, setSidebar] = useState(true);
  const [currentPage, setCurrentPage] = useState("home");

  /* Switchcase para controlar a página (ISSO SERÁ SUBSTITUIDO APÓS A AULA DE ROTAS) */
  const renderPage = (page: string) => {
    switch (page) {
      case "home":
        return <Home />;
      case "live":
        return <FaceDetectLive />;
      case "register":
        return <FaceRegister />;
      case "upload":
        return <FaceDetectUpload />;
      default:
        return <Home />;
    }
  };

  return (
    <AppContainer>
      <Sidebar active={sidebar} setCurrentPage={setCurrentPage} />
      <PageContainer>
        <Header sidebar={sidebar} setSidebar={setSidebar} />
        <Content>{renderPage(currentPage)}</Content>
      </PageContainer>
    </AppContainer>
  );
}

export default App;
