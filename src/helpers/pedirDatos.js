import DATA_BEBIDAS_RECOM from "../data/DATA_BEBIDAS_RECOM.json";
import DATA_BEBIDAS_COMPLETO from "../data/DATA_BEBIDAS_COMPLETO.json";

export const pedirDatos = (recom) => {
  return new Promise((resolve, reject) => {
    if (recom) {
      resolve(DATA_BEBIDAS_RECOM);
    } else {
      resolve(DATA_BEBIDAS_COMPLETO);
    }
    reject("Error al pedir los datos.");
  });
};
export const pedirProductoPorId = (id, data) => {
  return new Promise((resolve, reject) => {
    resolve(data.find((prod) => prod.id === id));
    reject("Error al pedir los datos.");
  });
};
