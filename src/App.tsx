import styled from "styled-components";
import Header from "./Components/Header";
import { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home";
import FaceRegister from "./Pages/FaceRegister";
import FaceDetectUpload from "./Pages/FaceDetectUpload";
import FaceDetectLive from "./Pages/FaceDetectLive";
import { Routes, Route } from "react-router-dom";

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
  return (
    <AppContainer>
      <Sidebar active={sidebar} />
      <PageContainer>
        <Header sidebar={sidebar} setSidebar={setSidebar} />
        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/live" element={<FaceDetectLive />} />
            <Route path="/register" element={<FaceRegister />} />
            <Route path="/upload" element={<FaceDetectUpload />} />
          </Routes>
        </Content>
      </PageContainer>
    </AppContainer>
  );
}

export default App;
