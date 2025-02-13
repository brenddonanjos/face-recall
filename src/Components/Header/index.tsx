import styled from "styled-components";
import { Menu as MenuIcon, X } from "lucide-react";

const HeaderContainer = styled.header`
  height: 80px;
  padding: 0px 24px;
  display: flex;
  align-items: center;

  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;

const ButtonSideBar = styled.button`
  height: 40px;
  color: white;
  background-color: transparent;
  cursor: pointer;
  border: 1px solid #314349;
  border-radius: 4px;
`;

export default function Header(props: {
  sidebar: boolean;
  setSidebar: (s: boolean) => void;
}) {
  const showSidebar = () => {
    props.setSidebar(!props.sidebar);
  };
  return (
    <HeaderContainer>
      <ButtonSideBar onClick={showSidebar}>
        {props.sidebar ? <X /> : <MenuIcon />}
      </ButtonSideBar>
    </HeaderContainer>
  );
}
