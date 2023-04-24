import React, { useEffect } from "react";

function Fondo({ children }) {
  useEffect(() => {
    document.body.classList.add("bg-custom-gris", "min-h-screen");

    // Retirar las clases al desmontar el componente
    return () => {
      document.body.classList.remove("bg-custom-gris", "min-h-screen");
    };
  }, []);

  return <div>{children}</div>;
}

export default Fondo;
