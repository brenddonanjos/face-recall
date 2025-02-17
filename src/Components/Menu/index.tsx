import { Link } from "react-router-dom";
import styled from "styled-components";

import { ScanFace, SmilePlus, Upload } from "lucide-react";
import React from "react";
//import { ScanFace, SmilePlus, Upload } from "lucide-react";

const items = [
  { title: "Live", url: "/live", icon: ScanFace },
  { title: "Register", url: "/register", icon: SmilePlus },
  { title: "Upload", url: "/upload", icon: Upload },
];

const MenuContainer = styled.div`
  > a {
    text-decoration: none;
  }
`;

const MenuItem = styled.div<{ $sidbar: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.$sidbar ? "flex-start" : "center")};
  font-size: 15px;
  color: white;
  padding: ${(props) => (props.$sidbar ? "10px" : "10px 0")};
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.4s;

  > span {
    display: ${(props) => (props.$sidbar ? "block" : "none")};
    margin-left: 10px;
  }

  &:hover {
    background-color: #41626d;
  }
`;
export default function Menu(props: { $sidebar: boolean }) {
  return (
    <MenuContainer>
      {items.map((item) => (
        <Link to={item.url}>
          <MenuItem key={item.title} $sidbar={props.$sidebar}>
            {React.createElement(item.icon, { size: props.$sidebar ? 25 : 30 })}
            <span>{item.title}</span>
          </MenuItem>
        </Link>
      ))}
    </MenuContainer>
  );
}

/*<MenuItem
    $sidbar={props.active}
  >
    <SmilePlus size={props.active ? 25 : 30} />
    <span>Registrar Faces</span>
  </MenuItem>
  <MenuItem
    $sidbar={props.active}
  >
    <Upload size={props.active ? 25 : 30} />
    <span>Detectar Upload</span>
  </MenuItem>
  <MenuItem
    $sidbar={props.active}
    onClick={() => props.setCurrentPage("live")}
  >
    <ScanFace size={props.active ? 25 : 30} />
    <span>Detectar Faces</span>
  </MenuItem>*/
