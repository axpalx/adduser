import axios from "axios";

export const postUser = async (userData) => {
  const response = await axios.post(
    `https://cors-anywhere.herokuapp.com/https://hackathon.tecnologiaunica.com.br/api/ConexaoTech`,
    userData,
    {
      headers: {
        TokenConexaoTech: "123456",
      },
    }
  );

  return response.data;
};
