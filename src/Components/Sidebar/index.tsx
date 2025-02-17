import styled from "styled-components";
import Menu from "../Menu";
import Logo from "../Logo";
import { Link } from "react-router-dom";

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

  > a {
    cursor: pointer;
    text-decoration: none;
  }

  > a:visited {
    color: inherit;
  }
`;

export default function Sidebar(props: { active: boolean }) {
  /* TODO: Substituir setCurrentPage pelas rotas
   */
  return (
    <SidebarContainer width={props.active ? 300 : 87}>
      <LogoContainer $justifycontent={props.active ? "flex-start" : "center"}>
        <Link to="/">
          <Logo size={3} typography={props.active} />
        </Link>
      </LogoContainer>

      <SidebarContent>
        <Menu $sidebar={props.active} />
      </SidebarContent>
    </SidebarContainer>
  );
}
