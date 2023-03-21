import DATA_BEBIDAS_COMPLETO from "../data/DATA_BEBIDAS_COMPLETO.json";

export const pedirDatos = () => {
  return new Promise((resolve, reject) => {
    resolve(DATA_BEBIDAS_COMPLETO);
  });
};
export const pedirProductoPorId = (id) => {
  return new Promise((resolve, reject) => {
    resolve(DATA_BEBIDAS_COMPLETO.find((prod) => prod.id === id));
  });
};
