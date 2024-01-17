import React, { useState, ChangeEvent, FormEvent } from "react";
import PasswordWarning from "../../common/password-warning";
import axios, { AxiosResponse } from "axios";
interface FormData {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  //const [formDataComplete, setFormDataComplete] = useState<boolean>(true);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };
  /*  AGREGAR UN MENSAJE DE ERROR EN CASO DE NO COMPLETAR DATOS
     for (const key in formData) {
      if (formData[key as keyof FormData] == "") {
        console.log(key);
        return setFormDataComplete(false);
      }
    } 
    setFormDataComplete(true);
    console.log("state formDataComplete: ", formDataComplete);*/

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response: AxiosResponse<ResponseType> = await axios.post(
        "http://localhost:8080/api/user/register",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Error de Axios: ", error.response?.data);
      } else {
        console.error("Error en la solicitud: ", error);
      }
    }
  };
  return (
    <div className="absolute box-border border-border p-4 border-4 rounded-lg max-w-[320px]">
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <h2 className="text-center text-2xl font-semibold mb-4">Registro</h2>
        <div>
          <input
            type="text"
            placeholder="Nombre"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            className="w-full border border-border px-4 py-2 mb-4"
          />
        </div>
        <div className="w-full border border-border px-4 py-2 mb-4">
          <input
            type="text"
            placeholder="Apellido"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
          />
        </div>
        <div className="w-full border px-4 py-2 mb-4 border-primary">
          <input
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="current-password"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            autoComplete="current-password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-border px-4 py-2 mb-6"
          />
        </div>
        <div>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirmar contraseña"
            autoComplete="current-password"
            value={confirmPassword}
            onChange={handleChangePassword}
            className="w-full border border-border px-4 py-2 mb-6"
          />
        </div>
        {confirmPassword === "" ? (
          <></>
        ) : (
          <PasswordWarning
            confirmPassword={confirmPassword}
            password={formData.password}
          />
        )}

        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Registrarse
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
