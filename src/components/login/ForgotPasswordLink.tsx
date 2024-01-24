import React from "react";

const ForgotPasswordLink: React.FC = () => {
  const handleMouseOver = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget;
    target.style.color = "#0056b3";
  };

  const handleMouseOut = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget;
    target.style.color = "#007bff";
  };

  return (
    <a
      href="www.google.com"
      style={{
        color: "#007bff",
        textDecoration: "none",
        transition: "color 0.3s ease",
      }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      ¿Olvidaste tu contraseña?
    </a>
  );
};

export default ForgotPasswordLink;
