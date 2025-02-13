import styled from "styled-components";
import { ScanFace, SmilePlus, Upload } from "lucide-react";
import Logo from "../Logo";
import MenuItem from "./MenuItem";

//Cria o componente com styled-components e define o tipo dos props (obrigatoriedade do typescript)
const SidebarContainer = styled.div<{ width: number }>`
  box-sizing: border-box;
  border-right: 1px #314349 solid;
  top: 0px;
  left: 0px;
  width: ${(props) => (props.width ? props.width.toString() + "px" : "300px")};
`;

const SidebarContent = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
`;

const LogoContainer = styled.div<{ $justifycontent?: string }>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.$justifycontent};
  height: 75px;
  padding-left: 24px;
  padding-right: 24px;
`;

export default function Sidebar(props: {
  active: boolean;
  setCurrentPage: (p: string) => void;
}) {
  /* TODO: Substituir setCurrentPage pelas rotas
   */
  return (
    <SidebarContainer width={props.active ? 300 : 87}>
      <LogoContainer $justifycontent={props.active ? "flex-start" : "center"}>
        <Logo size={3} typography={props.active} />
      </LogoContainer>

      <SidebarContent>
        <MenuItem
          $isActive={props.active}
          onClick={() => props.setCurrentPage("register")}
        >
          <SmilePlus size={props.active ? 25 : 30} />
          <span>Registrar Faces</span>
        </MenuItem>
        <MenuItem
          $isActive={props.active}
          onClick={() => props.setCurrentPage("upload")}
        >
          <Upload size={props.active ? 25 : 30} />
          <span>Detectar Upload</span>
        </MenuItem>
        <MenuItem
          $isActive={props.active}
          onClick={() => props.setCurrentPage("live")}
        >
          <ScanFace size={props.active ? 25 : 30} />
          <span>Detectar Faces</span>
        </MenuItem>
      </SidebarContent>
    </SidebarContainer>
  );
}
