/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "blue",
        secondary: "#FE4236",
        border: "blue",
        text: "#333",
      },
    },
  },
  plugins: [],
};

/* theme: { extend: {} }: Aquí es donde puedes extender o personalizar el tema de Tailwind. Puedes agregar colores personalizados, fuentes, márgenes, etc. en la sección extend. Si no necesitas personalizar el tema, puedes dejarlo vacío. */
