import styled from "styled-components";

const InputContainer = styled.input`
  border: 1px solid #fff;
  border-radius: 5px;
  height: 40px;
  background-color: transparent;
  font-size: 14px;
  padding: 0px 10px;
`;

export default function InputText(props: {name: string}) {
  return <InputContainer type="text" name={props.name} />;
}
