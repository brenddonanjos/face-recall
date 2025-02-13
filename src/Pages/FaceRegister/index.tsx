import Form from "../../Components/Form";
import InputText from "../../Components/Inputs/InputText";
import InputLabel from "../../Components/Inputs/InputLabel";
import ButtonPrimary from "../../Components/Buttons/ButtonPrimary";
import ButtonWhite from "../../Components/Buttons/ButtonWhite";
import ActionContainer from "../../Components/Form/ActionContainer";
import InputUploadImage from "../../Components/Inputs/InputUploadImage";
import InputSelect from "../../Components/Inputs/InputSelect";
export default function FaceRegister() {
  const countries = [
    {
      label: "Brasil",
      value: "55"
    },
    {
      label: "Argentina",
      value: "54"
    }
  ]
  return (
    <Form>
      <h3>REGISTRAR NOVA FACE</h3>

      <InputLabel>Imagem da Face </InputLabel>
      <InputUploadImage name="image-upload" />

      <InputLabel>Nome Completo </InputLabel>
      <InputText name="nome" />

      <InputLabel>Email </InputLabel>
      <InputText name="email" />

      <InputLabel>Telefone </InputLabel>
      <InputText name="telefone" />

      <InputLabel>País de origem</InputLabel>
      <InputSelect name="pais" options={countries} />

      <ActionContainer>
        <ButtonWhite $margin="15px 10px" type="button">Cancelar</ButtonWhite>
        <ButtonPrimary type="submit">Registrar</ButtonPrimary>
      </ActionContainer>
    </Form>
  );
}
