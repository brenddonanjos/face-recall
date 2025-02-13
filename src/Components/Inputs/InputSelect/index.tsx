import styled from "styled-components";

const SelectContainer = styled.select`
  border: 1px solid #fff;
  border-radius: 5px;
  height: 40px;
  background-color: transparent;
  color: white;
  padding: 0px 10px;
  option {
    background-color: #0a171a; /* Cor de fundo para as opções */
    color: white;
  }
`;

type SelectProps = {
  name: string;
  options: { label: string; value: string }[];
};

export default function InputSelect(props: SelectProps) {
  return (
    <SelectContainer name={props.name}>
      {props.options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </SelectContainer>
  );
}
