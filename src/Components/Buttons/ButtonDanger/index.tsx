import styled from "styled-components";

const ButtonDanger = styled.button `
  background-color: #a33030;
  color: white;
  font-size: 16px;
  padding: 8px 16px;
  width: fit-content;
  height: 50px;
  border: none;
  border-radius: 4px;
  margin: 15px 0px;
  cursor: pointer;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 
              0px 2px 2px 0px rgba(0, 0, 0, 0.14), 
              0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  transition: background-color 0.3s, box-shadow 0.3s;

  &:hover {
    background-color: #812626;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 
                0px 4px 5px 0px rgba(0, 0, 0, 0.14), 
                0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px #721f1f;
  }

  &:active {
    background-color: #721f1f;
  }
`

export default ButtonDanger