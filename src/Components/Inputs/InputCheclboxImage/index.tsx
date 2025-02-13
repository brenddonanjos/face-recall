import styled from "styled-components";


const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #364f57;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
`;

const Label = styled.label`
  color: #ffffff;
`;

export default function InputCheckboxImage(props: {
  name: string;
  $thumb: string;
  $label: string;
}) {
  return (
    <Container>
      <Checkbox
        type="checkbox"
        name={props.name}
      />
      <Image src={props.$thumb} />
      <Label>{props.$label}</Label>
    </Container>
  );
}
