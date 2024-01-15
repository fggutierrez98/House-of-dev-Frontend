import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

const RegistrationForm: React.FC = () => {
  return (
    <div className="absolute box-border border-border p-4 border-4 rounded-lg max-w-[320px]">
      <form className="max-w-md mx-auto">
        <h2 className="text-center text-2xl font-semibold mb-4">Registro</h2>
        <div>
          <input
            type="text"
            placeholder="Nombre"
            name="first_name"
            className="w-full border border-border px-4 py-2 mb-4"
          />
        </div>
        <div className="w-full border border-border px-4 py-2 mb-4">
          <input type="text" placeholder="Apellido" name="last_name" />
        </div>
        <div className="w-full border px-4 py-2 mb-4 border-primary">
          <input type="email" name="email" placeholder="Email" />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            className="w-full border border-border px-4 py-2 mb-6"
          />
        </div>
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
