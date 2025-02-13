import ButtonPrimary from "../../Components/Buttons/ButtonPrimary";
import ButtonWhite from "../../Components/Buttons/ButtonWhite";
import Form from "../../Components/Form";
import ActionContainer from "../../Components/Form/ActionContainer";
import InputUploadImage from "../../Components/Inputs/InputUploadImage";
import InputLabel from "../../Components/Inputs/InputLabel";
import InputCheckboxImage from "../../Components/Inputs/InputCheclboxImage";
import usericon from "../../Images/male-user.png";
import CardsContainer from "../../Components/CardsContainer";
export default function FaceDetectUpload() {
  const testNames = [
    "John Doe",
    "Jane Doe",
    "Jack Smith",
    "Jill Brown",
    "James White",
    "Jenny Black",
    "Josh Green",
    "Julia Gray",
    "Jacob Blue",
    "Jasmine Red",
  ];

  return (
    <Form>
      <h3>DETECTAR FACES VIA UPLOAD DE ARQUIVO</h3>

      <InputLabel>Imagem para detecção </InputLabel>
      <InputUploadImage name="face-image" />

      <InputLabel>Selecione as faces que deseja encontrar</InputLabel>
      <p>
        <i>
          (*Caso nenhuma seja selecionada, o sistema fará a análise automatica
          de todas as faces cadastradas)
        </i>
      </p>
      <CardsContainer>
        {testNames.map((name) => (
          <InputCheckboxImage key={name} name="targets" $label={name} $thumb={usericon} />
        ))}
      </CardsContainer>

      <ActionContainer>
        <ButtonWhite $margin="15px 10px" type="button">
          Cancelar
        </ButtonWhite>
        <ButtonPrimary type="submit">Iniciar Análise</ButtonPrimary>
      </ActionContainer>
    </Form>
  );
}
