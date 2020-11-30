import { useForm } from "../../hooks/useForm";
import { postUser } from "../request/postUser";

import styled from "styled-components";

const BodyForm = styled.div`
  width: 400px;
  height: 35vh;
  margin: 20vh auto;
  background: #6c7a89;
  display: flex;
  flex-direction: column;
  padding-top: 15px;
  border-radius: 5%;
`;

const FieldInput = styled.div`
  align-items: right;
  margin: 10px auto;
  width: 80%;
  display: flex;
  flex-direction: column;
`;

const ButtonSave = styled.button`
  width: 80px;
  height: 35px;
  border-radius: 5px;
`;

const InputDate = styled.input`
  height: 25px;
  border-radius: 5px;
`;

const FormComponent = () => {
  const { form, onChange, resetForm } = useForm({
    name: "",
    age: "",
    email: "",
    city: "",
  });

  const onClickInsertUser = async () => {
    const userData = {
      nome: form.name,
      idade: form.age,
      email: form.email,
      cidade: form.city,
    };

    postUser(userData)
      .then((response) => {
        resetForm();
        console.log(response);
        alert("Cadastro executado", response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <div>
      <BodyForm onSubmit={handleSubmit}>
        <FieldInput>
          <label htmlFor="name">Nome: </label>
          <InputDate
            value={form.name}
            name="name"
            type="text"
            id="name"
            placeholder="Nome"
            onChange={handleInputChange}
            required
          />
        </FieldInput>
        <FieldInput>
          <label htmlFor="age">Idade: </label>
          <InputDate
            value={form.age}
            name="age"
            type="number"
            id="age"
            placeholder="Idade"
            onChange={handleInputChange}
            required
          />
        </FieldInput>
        <FieldInput>
          <label htmlFor="email">E-mail: </label>
          <InputDate
            value={form.email}
            name="email"
            type="email"
            id="email"
            placeholder="E-mail"
            onChange={handleInputChange}
            required
          />
        </FieldInput>
        <FieldInput>
          <label htmlFor="city">cidade: </label>
          <InputDate
            value={form.city}
            name="city"
            type="text"
            id="city"
            placeholder="Cidade"
            onChange={handleInputChange}
            required
          />
        </FieldInput>
        <FieldInput>
          <ButtonSave onClick={onClickInsertUser}>Salvar</ButtonSave>
        </FieldInput>
      </BodyForm>
    </div>
  );
};

export default FormComponent;
