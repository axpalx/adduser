import { useForm } from "../../hooks/useForm";
import { postUser } from "../request/postUser";

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
    <div onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nome: </label>
        <input
          value={form.name}
          name="name"
          type="text"
          id="name"
          placeholder="Nome"
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="age">Idade: </label>
        <input
          value={form.age}
          name="age"
          type="number"
          id="age"
          placeholder="Idade"
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">E-mail: </label>
        <input
          value={form.email}
          name="email"
          type="email"
          id="email"
          placeholder="E-mail"
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="city">cidade: </label>
        <input
          value={form.city}
          name="city"
          type="text"
          id="city"
          placeholder="Cidade"
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <button onClick={onClickInsertUser}>Salvar</button>
      </div>
    </div>
  );
};

export default FormComponent;
